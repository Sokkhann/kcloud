
import { PackageData } from "@/type/dataTypes";

interface FetchArgs {
  service: string;
}

const pendingRequests = new Map<string, Promise<PackageData[] | null>>();

export async function getOverviewPackages() {
  try {
    // Fetching exactly what you requested in parallel for performance
    const [
      vmCloudStack,
      vmProxmox,
      k8s,
      lb,
      storageCloudStack,
      storageProxmox
    ] = await Promise.all([
      getPackageVM({ service: "Virtual Machine", provider: "cloudstack-01", category: "General Compute" }),
      getPackageVM({ service: "Virtual Machine", provider: "proxmox", category: "General Compute" }),
      getPackageK8s({ service: "Kubernetes", provider: "nimbo" }), // Nimbo based on your K8s fetcher
      getPackageLoadBalancer({ service: "Load Balancer", provider: "cloudstack-01" }),
      getPackageBlockStorage({ service: "Block Storage", provider: "nimbo" }),
      getPackageBlockStorage({ service: "Block Storage", provider: "proxmox" }),
    ]);

    const items = [
      {
        data: vmProxmox?.[0],
        name: "Standard Virtual Machine",
        path: "/pricing/virtual-machine",
        type: "vm",
        sectionId: "proxmox",
        provider: "Proxmox",
        desc: "High-performance virtualization optimized for general purpose workloads."
      },
      {
        data: vmCloudStack?.[0],
        name: "Enterprise Cloud VM",
        path: "/pricing/virtual-machine",
        sectionId: "cloudstack",
        type: "vm",
        provider: "CloudStack",
        desc: "Flexible enterprise cloud instances for scalable business applications."
      },
      {
        data: k8s?.[0],
        name: "Managed Kubernetes",
        path: "/pricing/kubernetes",
        type: "k8s",
        sectionId: "kubernetes", // Added for consistency
        provider: "Nimbo",
        desc: "Fully managed container orchestration for modern cloud-native apps."
      },
      {
        data: lb?.[0],
        name: "Global Load Balancer",
        path: "/pricing/networking",
        type: "lb",
        sectionId: "networking", // Added for consistency
        provider: "CloudStack",
        desc: "Managed traffic distribution ensuring high availability and uptime."
      },
      {
        data: storageCloudStack?.[0],
        name: "Enterprise Block Storage",
        path: "/pricing/storage",
        type: "storage",
        sectionId: "cloudstack-storage",
        provider: "CloudStack",
        desc: "Scalable, secure block storage designed for enterprise data integrity."
      },
      {
        data: storageProxmox?.[0],
        name: "High-Speed NVMe Storage",
        path: "/pricing/storage",
        type: "storage",
        sectionId: "proxmox-storage",
        provider: "Proxmox",
        desc: "Ultra-fast NVMe/SSD storage volumes for intensive I/O operations."
      },
    ];

    // Map and format for the UI
    // Map and format for the UI
    return items
      .filter(item => item.data)
      .map(item => {
        // 1. Remove $ and any commas
        const rawPrice = item.data.priceMonth ? item.data.priceMonth.replace(/[$,]/g, '') : "0";

        // 2. Convert to number and force 1 decimal place
        const formattedPrice = parseFloat(rawPrice).toFixed(1);

        return {
          name: item.name,
          price: formattedPrice, // Returns "49.0", "99.5", etc.
          path: item.path,
          description: item.data.description || item.data.categoryDescription || item.desc,
          type: item.type,
          provider: item.provider,
          sectionId: item.sectionId,
        };
      });

  } catch (error) {
    console.error("Error in getOverviewPackages:", error);
    return [];
  }
}

export async function getPackageVM({
  service = "Virtual Machine",
  provider = "proxmox",
  category = "General Compute"
}: FetchArgs & {
  provider?: "proxmox" | "cloudstack-01",
  category?: "General Compute" | "Compute Optimized"
}): Promise<any[] | null> {

  const requestKey = `${service}-${provider}-${category}`;
  if (pendingRequests.has(requestKey)) return pendingRequests.get(requestKey)!;

  const fetchTask = (async (): Promise<any[] | null> => {
    try {
      const baseUrl = process.env.STACK_API_BASE_URL?.replace(/\/$/, "");
      const token = process.env.STACK_API_TOKEN;

      if (!baseUrl || !token) return null;

      const url = `${baseUrl}/admin/plans/service/${encodeURIComponent(service)}?planable=default&planable_type=RateCard&include=cloud_provider,cloud_provider_setup,compute_category,plan_category&sort=-created_at&limit=50`;

      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        },
        next: { revalidate: 60 },
      });

      if (!res.ok) return null;

      const json = await res.json();
      const data = json.data ?? [];

      return data
        .filter((plan: any) => {
          const setupSlug = plan.cloud_provider_setup?.slug?.toLowerCase() || "";
          const planCategoryName = plan.plan_category?.name?.toLowerCase() || "";

          return (
            setupSlug.includes(provider.toLowerCase()) &&
            planCategoryName.includes(category.toLowerCase()) &&
            !!plan.name &&
            plan.attribute
          );
        })
        // --- ADDED SORT LOGIC HERE ---
        .sort((a: any, b: any) => {
          const priceA = parseFloat(a.monthly_price) || 0;
          const priceB = parseFloat(b.monthly_price) || 0;
          return priceA - priceB; // Ascending: Lower to Higher
        })
        // -----------------------------
        .map((plan: any) => ({
          id: plan.id,
          name: plan.name,
          cpu: plan.attribute?.cpu ? `${plan.attribute.cpu} vCPU` : "—",
          memory: plan.attribute?.memory ? `${(plan.attribute.memory / 1024).toFixed(0)} GB` : "—",
          priceMonth: plan.monthly_price !== undefined ? `$${plan.monthly_price}` : "$0",
          priceHour: plan.hourly_price !== undefined ? `$${plan.hourly_price}` : "$0",
          slug: plan.slug || plan.name?.toLowerCase().replace(/\s+/g, "-") || "vm-plan",
          categoryName: plan.plan_category?.name,
          cpuType: plan.compute_category?.name
        }));

    } catch (error: any) {
      console.error(`[getPackageVM] Error:`, error.message);
      return null;
    } finally {
      pendingRequests.delete(requestKey);
    }
  })();

  pendingRequests.set(requestKey, fetchTask);
  return fetchTask;
}

export async function getPackageBlockStorage({
  service = "Block Storage",
  provider = "proxmox"
}: FetchArgs & { provider?: "proxmox" | "nimbo" }): Promise<any[] | null> {

  // Create a unique cache key
  const requestKey = `storage-${service}-${provider}`;
  if (pendingRequests.has(requestKey)) return pendingRequests.get(requestKey)!;

  const fetchTask = (async (): Promise<any[] | null> => {
    try {
      const baseUrl = process.env.STACK_API_BASE_URL?.replace(/\/$/, "");
      const token = process.env.STACK_API_TOKEN;

      if (!baseUrl || !token) {
        console.error("❌ Missing STACK_API config");
        return null;
      }

      // Build the URL with the necessary includes for category and provider
      const url = `${baseUrl}/admin/plans/service/${encodeURIComponent(service)}?planable=default&planable_type=RateCard&include=storage_category,cloud_provider,cloud_provider_setup&sort=-created_at`;

      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        },
        next: { revalidate: 60 },
      });

      if (!res.ok) return null;

      const json = await res.json();
      const data = json.data ?? [];

      return data
        .filter((plan: any) => {
          // Filter by the provider name (proxmox or nimbo)
          const setupSlug = plan.cloud_provider_setup?.slug?.toLowerCase() || "";
          const providerSlug = plan.cloud_provider?.slug?.toLowerCase() || "";

          return (setupSlug.includes(provider) || providerSlug.includes(provider)) && !!plan.name;
        })
        .map((plan: any) => ({
          name: plan.name,
          // Extracting 'Storage Type' from the category relationship
          storageType: plan.storage_category?.name ?? "Standard",
          // Size is usually defined in attributes as min/max or step
          size: plan.attribute?.size ? `${plan.attribute.size} GB` : "Variable",
          // Pricing
          priceHour: plan.hourly_price !== undefined ? `$${plan.hourly_price}` : "$0",
          priceMonth: plan.monthly_price !== undefined ? `$${plan.monthly_price}` : "$0",
          // Extra meta for slugging
          slug: plan.name?.toLowerCase().replace(/\s+/g, "-") ?? "storage-plan",
        }));

    } catch (error: any) {
      console.error(`[getPackageBlockStorage] Error:`, error.message);
      return null;
    } finally {
      pendingRequests.delete(requestKey);
    }
  })();

  pendingRequests.set(requestKey, fetchTask);
  return fetchTask;
}

export async function getPackageK8s({
  service = "Kubernetes",
  provider = "nimbo",
  region = "kh-zone-1"
}: FetchArgs & { provider?: string; region?: string }): Promise<any[] | null> {

  const requestKey = `k8s-${service}-${provider}-${region}`;
  if (pendingRequests.has(requestKey)) return pendingRequests.get(requestKey)!;

  const fetchTask = (async (): Promise<any[] | null> => {
    try {
      const baseUrl = process.env.STACK_API_BASE_URL?.replace(/\/$/, "");
      const token = process.env.STACK_API_TOKEN;

      if (!baseUrl || !token) return null;

      // URL using your specific filters for Nimbo and KH-Zone-1
      const url = `${baseUrl}/admin/plans/service/${encodeURIComponent(service)}?sort=-created_at&page=1&limit=50&planable=default&planable_type=RateCard&include=cloud_provider,cloud_provider_setup,plan_region,plan_category`;

      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        },
        next: { revalidate: 60 },
      });

      if (!res.ok) return null;

      const json = await res.json();
      const data = json.data ?? [];

      return data.map((plan: any) => ({
        id: plan.id, // THE ROW ID: Use this for deep-linking to console
        name: plan.name,
        // K8s specific mapping
        cpu: plan.attribute?.cpu ? `${plan.attribute.cpu} vCPU` : "—",
        memory: plan.attribute?.memory ? `${(plan.attribute.memory / 1024).toFixed(0)} GB` : "—",
        storage: plan.attribute?.storage ? `${plan.attribute.storage} GB` : "—",
        // description
        categoryDescription: plan.compute_category?.description || "Shared resources for general workloads.",
        // Pricing
        priceMonth: plan.monthly_price !== undefined ? `$${plan.monthly_price}` : "$0",
        priceHour: plan.hourly_price !== undefined ? `$${plan.hourly_price}` : "$0",
        // Helper to identify the provider in the table
        provider: plan.cloud_provider?.name ?? "Nimbo",
      }));

    } catch (error: any) {
      console.error(`[getPackageK8s] Error:`, error.message);
      return null;
    } finally {
      pendingRequests.delete(requestKey);
    }
  })();

  pendingRequests.set(requestKey, fetchTask);
  return fetchTask;
}

export async function getPackageBlockStorageSnapshot({
  service = "Block Storage Snapshot",
  provider = "cloudstack-01" // Default changed as requested
}: FetchArgs & { provider?: string }): Promise<any[] | null> {

  const requestKey = `snapshot-${service}-${provider}`;
  if (pendingRequests.has(requestKey)) return pendingRequests.get(requestKey)!;

  const fetchTask = (async (): Promise<any[] | null> => {
    try {
      const baseUrl = process.env.STACK_API_BASE_URL?.replace(/\/$/, "");
      const token = process.env.STACK_API_TOKEN;

      if (!baseUrl || !token) return null;

      // URL using the specific parameters provided
      const url = `${baseUrl}/admin/plans/service/${encodeURIComponent(service)}?page=1&limit=10&planable_type=RateCard&planable=default&include=cloud_provider,cloud_provider_setup,plan_region,plan_category,storage_category`;

      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        },
        next: { revalidate: 60 },
      });

      if (!res.ok) return null;

      const json = await res.json();
      const data = json.data ?? [];

      return data
        .filter((plan: any) => {
          // Filter by cloudstack-01 or proxmox
          const setupSlug = plan.cloud_provider_setup?.slug?.toLowerCase() || "";
          return setupSlug.includes(provider.toLowerCase());
        })
        .map((plan: any) => ({
          id: plan.id, // For the "Deploy/Select" row ID
          name: plan.name,
          // For snapshots, we look at the storage type (NVMe, SSD, etc.)
          storageType: plan.storage_category?.name ?? "Standard",
          // Snapshots are often "Pay-as-you-go" per GB
          priceMonth: plan.monthly_price !== undefined ? `$${plan.monthly_price}` : "$0",
          priceHour: plan.hourly_price !== undefined ? `$${plan.hourly_price}` : "$0",
          provider: plan.cloud_provider_setup?.name ?? "CloudStack",
        }));

    } catch (error: any) {
      console.error(`[getPackageSnapshot] Error:`, error.message);
      return null;
    } finally {
      pendingRequests.delete(requestKey);
    }
  })();

  pendingRequests.set(requestKey, fetchTask);
  return fetchTask;
}

export async function getPackageVirtualRouter({
  service = "Virtual Router",
  provider = "cloudstack-01"
}: FetchArgs & { provider?: string }): Promise<any[] | null> {

  const requestKey = `router-${service}-${provider}`;
  if (pendingRequests.has(requestKey)) return pendingRequests.get(requestKey)!;

  const fetchTask = (async (): Promise<any[] | null> => {
    try {
      const baseUrl = process.env.STACK_API_BASE_URL?.replace(/\/$/, "");
      const token = process.env.STACK_API_TOKEN;

      if (!baseUrl || !token) return null;

      // URL using the Virtual Router endpoint and the includes you specified
      const url = `${baseUrl}/admin/plans/service/${encodeURIComponent(service)}?page=1&limit=10&planable_type=RateCard&planable=default&include=cloud_provider,cloud_provider_setup,plan_region,plan_category,storage_category`;

      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        },
        next: { revalidate: 60 },
      });

      if (!res.ok) return null;

      const json = await res.json();
      const data = json.data ?? [];

      return data
        .filter((plan: any) => {
          const setupSlug = plan.cloud_provider_setup?.slug?.toLowerCase() || "";
          return setupSlug.includes(provider.toLowerCase());
        })
        .map((plan: any) => ({
          id: plan.id, // Row ID for Deep Linking
          name: plan.name,
          // Routers often have different attributes; we'll check for throughput or standard specs
          throughput: plan.attribute?.throughput ?? "Standard",
          vCPU: plan.attribute?.cpu ? `${plan.attribute.cpu} Core` : "—",
          memory: plan.attribute?.memory ? `${(plan.attribute.memory / 1024).toFixed(0)} GB` : "—",
          // Pricing
          priceMonth: plan.monthly_price !== undefined ? `$${plan.monthly_price}` : "$0",
          priceHour: plan.hourly_price !== undefined ? `$${plan.hourly_price}` : "$0",
        }));

    } catch (error: any) {
      console.error(`[getPackageVirtualRouter] Error:`, error.message);
      return null;
    } finally {
      pendingRequests.delete(requestKey);
    }
  })();

  pendingRequests.set(requestKey, fetchTask);
  return fetchTask;
}

export async function getPackageMyTemplate({
  service = "My Template",
  provider = "cloudstack-01"
}: FetchArgs & { provider?: string }): Promise<any[] | null> {

  const requestKey = `template-${service}-${provider}`;
  if (pendingRequests.has(requestKey)) return pendingRequests.get(requestKey)!;

  const fetchTask = (async (): Promise<any[] | null> => {
    try {
      const baseUrl = process.env.STACK_API_BASE_URL?.replace(/\/$/, "");
      const token = process.env.STACK_API_TOKEN;

      if (!baseUrl || !token) return null;

      // URL using the "My Template" service name and your specified includes
      const url = `${baseUrl}/admin/plans/service/${encodeURIComponent(service)}?page=1&limit=10&planable_type=RateCard&planable=default&include=cloud_provider,cloud_provider_setup,plan_region,plan_category,storage_category`;

      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        },
        next: { revalidate: 60 },
      });

      if (!res.ok) return null;

      const json = await res.json();
      const data = json.data ?? [];

      return data
        .filter((plan: any) => {
          const setupSlug = plan.cloud_provider_setup?.slug?.toLowerCase() || "";
          return setupSlug.includes(provider.toLowerCase());
        })
        .map((plan: any) => ({
          id: plan.id, // For the "Deploy" button row ID
          name: plan.name,
          // Templates often define the minimum requirements for the VM
          vCPU: plan.attribute?.cpu ? `${plan.attribute.cpu} Core` : "—",
          memory: plan.attribute?.memory ? `${(plan.attribute.memory / 1024).toFixed(0)} GB` : "—",
          // Storage type (e.g., SSD, NVMe) for the template image
          storageType: plan.storage_category?.name ?? "Standard",
          // Pricing
          priceMonth: plan.monthly_price !== undefined ? `$${plan.monthly_price}` : "$0",
          priceHour: plan.hourly_price !== undefined ? `$${plan.hourly_price}` : "$0",
        }));

    } catch (error: any) {
      console.error(`[getPackageMyTemplate] Error:`, error.message);
      return null;
    } finally {
      pendingRequests.delete(requestKey);
    }
  })();

  pendingRequests.set(requestKey, fetchTask);
  return fetchTask;
}

export async function getPackageISO({
  service = "ISO",
  provider = "cloudstack-01"
}: FetchArgs & { provider?: string }): Promise<any[] | null> {

  const requestKey = `iso-${service}-${provider}`;
  if (pendingRequests.has(requestKey)) return pendingRequests.get(requestKey)!;

  const fetchTask = (async (): Promise<any[] | null> => {
    try {
      const baseUrl = process.env.STACK_API_BASE_URL?.replace(/\/$/, "");
      const token = process.env.STACK_API_TOKEN;

      if (!baseUrl || !token) return null;

      // URL for ISO service with the specific includes you requested
      const url = `${baseUrl}/admin/plans/service/${encodeURIComponent(service)}?page=1&limit=10&planable_type=RateCard&planable=default&include=cloud_provider,cloud_provider_setup,plan_region,plan_category,storage_category`;

      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        },
        next: { revalidate: 60 },
      });

      if (!res.ok) return null;

      const json = await res.json();
      const data = json.data ?? [];

      return data
        .filter((plan: any) => {
          const setupSlug = plan.cloud_provider_setup?.slug?.toLowerCase() || "";
          return setupSlug.includes(provider.toLowerCase());
        })
        .map((plan: any) => ({
          id: plan.id, // Row ID for deep-linking to console
          name: plan.name,
          // ISOs are static images, so we show storage-related attributes
          storageType: plan.storage_category?.name ?? "Standard",
          size: plan.attribute?.size ? `${plan.attribute.size} GB` : "—",
          category: plan.plan_category?.name ?? "OS Image",
          // Pricing
          priceMonth: plan.monthly_price !== undefined ? `$${plan.monthly_price}` : "$0",
          priceHour: plan.hourly_price !== undefined ? `$${plan.hourly_price}` : "$0",
        }));

    } catch (error: any) {
      console.error(`[getPackageISO] Error:`, error.message);
      return null;
    } finally {
      pendingRequests.delete(requestKey);
    }
  })();

  pendingRequests.set(requestKey, fetchTask);
  return fetchTask;
}

export async function getPackageBackups({
  service = "Backups",
  provider = "cloudstack-01"
}: FetchArgs & { provider?: string }): Promise<any[] | null> {

  const requestKey = `backups-${service}-${provider}`;
  if (pendingRequests.has(requestKey)) return pendingRequests.get(requestKey)!;

  const fetchTask = (async (): Promise<any[] | null> => {
    try {
      const baseUrl = process.env.STACK_API_BASE_URL?.replace(/\/$/, "");
      const token = process.env.STACK_API_TOKEN;

      if (!baseUrl || !token) return null;

      // URL for Backups service with your requested page/limit and includes
      const url = `${baseUrl}/admin/plans/service/${encodeURIComponent(service)}?page=1&limit=10&planable_type=RateCard&planable=default&include=cloud_provider,cloud_provider_setup,plan_region,plan_category,storage_category`;

      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        },
        next: { revalidate: 60 },
      });

      if (!res.ok) return null;

      const json = await res.json();
      const data = json.data ?? [];

      return data
        .filter((plan: any) => {
          const setupSlug = plan.cloud_provider_setup?.slug?.toLowerCase() || "";
          return setupSlug.includes(provider.toLowerCase());
        })
        .map((plan: any) => ({
          id: plan.id, // Unique Row ID for deep-linking
          name: plan.name,
          // Backup plans often describe the policy (e.g., "Daily", "Weekly")
          policy: plan.plan_category?.name ?? "Backup Policy",
          // Storage location or tier
          storageType: plan.storage_category?.name ?? "Standard Storage",
          // Pricing (often flat rate or per-instance fee)
          priceMonth: plan.monthly_price !== undefined ? `$${plan.monthly_price}` : "$0",
          priceHour: plan.hourly_price !== undefined ? `$${plan.hourly_price}` : "$0",
        }));

    } catch (error: any) {
      console.error(`[getPackageBackups] Error:`, error.message);
      return null;
    } finally {
      pendingRequests.delete(requestKey);
    }
  })();

  pendingRequests.set(requestKey, fetchTask);
  return fetchTask;
}

export async function getPackageBlockStorageBackup({
  service = "Block Storage Backup",
  provider = "cloudstack-01"
}: FetchArgs & { provider?: string }): Promise<any[] | null> {

  const requestKey = `block-backup-${service}-${provider}`;
  if (pendingRequests.has(requestKey)) return pendingRequests.get(requestKey)!;

  const fetchTask = (async (): Promise<any[] | null> => {
    try {
      const baseUrl = process.env.STACK_API_BASE_URL?.replace(/\/$/, "");
      const token = process.env.STACK_API_TOKEN;

      if (!baseUrl || !token) return null;

      // URL using the specific endpoint and query parameters you provided
      const url = `${baseUrl}/admin/plans/service/${encodeURIComponent(service)}?page=1&limit=10&planable_type=RateCard&planable=default&include=cloud_provider,cloud_provider_setup,plan_region,plan_category,storage_category`;

      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        },
        next: { revalidate: 60 },
      });

      if (!res.ok) return null;

      const json = await res.json();
      const data = json.data ?? [];

      return data
        .filter((plan: any) => {
          const setupSlug = plan.cloud_provider_setup?.slug?.toLowerCase() || "";
          return setupSlug.includes(provider.toLowerCase());
        })
        .map((plan: any) => ({
          id: plan.id, // The unique Row ID for deep-linking
          name: plan.name,
          // Backups are often categorized by Policy (e.g., Gold, Daily) or Storage Tier
          category: plan.plan_category?.name ?? "Backup Plan",
          storageType: plan.storage_category?.name ?? "Secondary Storage",
          // Pricing (typically a flat monthly fee or a per-GB rate)
          priceMonth: plan.monthly_price !== undefined ? `$${plan.monthly_price}` : "$0",
          priceHour: plan.hourly_price !== undefined ? `$${plan.hourly_price}` : "$0",
        }));

    } catch (error: any) {
      console.error(`[getPackageBlockStorageBackup] Error:`, error.message);
      return null;
    } finally {
      pendingRequests.delete(requestKey);
    }
  })();

  pendingRequests.set(requestKey, fetchTask);
  return fetchTask;
}

export async function getPackageLoadBalancer({
  service = "Load Balancer",
  provider = "cloudstack-01"
}: FetchArgs & { provider?: string }): Promise<any[] | null> {

  const requestKey = `lb-${service}-${provider}`;
  if (pendingRequests.has(requestKey)) return pendingRequests.get(requestKey)!;

  const fetchTask = (async (): Promise<any[] | null> => {
    try {
      const baseUrl = process.env.STACK_API_BASE_URL?.replace(/\/$/, "");
      const token = process.env.STACK_API_TOKEN;

      if (!baseUrl || !token) return null;

      const url = `${baseUrl}/admin/plans/service/${encodeURIComponent(service)}?page=1&limit=10&planable_type=RateCard&planable=default&include=cloud_provider,cloud_provider_setup,plan_region,plan_category,storage_category`;

      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        },
        next: { revalidate: 60 },
      });

      if (!res.ok) return null;

      const json = await res.json();
      const data = json.data ?? [];

      return data
        .filter((plan: any) => {
          const setupSlug = plan.cloud_provider_setup?.slug?.toLowerCase() || "";
          return setupSlug.includes(provider.toLowerCase());
        })
        .map((plan: any) => {
          // Find specific amounts from the prices array
          const hourly = plan.prices.find((p: any) => p.billing_cycle.slug === 'hourly')?.amount;
          const monthly = plan.prices.find((p: any) => p.billing_cycle.slug === 'monthly')?.amount;
          const yearly = plan.prices.find((p: any) => p.billing_cycle.slug === 'yearly')?.amount;

          return {
            id: plan.id,
            name: plan.name,
            slug: plan.slug,
            // From plan_region -> region -> name
            region: plan.plan_region?.region?.name ?? "KH-Zone-1",
            // From cloud_provider -> display_name
            cloudProvider: plan.cloud_provider?.display_name ?? "Cloud Stack",
            // Pricing
            priceHour: hourly ? `$${hourly}` : "N/A",
            priceMonth: monthly ? `$${monthly}` : "N/A",
            priceYear: yearly ? `$${yearly}` : "N/A",
            // From tag object
            badge: plan.tag?.tag, // "Recommended"
            badgeColor: plan.tag?.color, // "red"
            // Networking specific (hardcoded since attribute is empty)
            bandwidth: "High Speed",
            type: "Managed L4/L7"
          };
        })

    } catch (error: any) {
      console.error(`[getPackageLoadBalancer] Error:`, error.message);
      return null;
    } finally {
      pendingRequests.delete(requestKey);
    }
  })();

  pendingRequests.set(requestKey, fetchTask);
  return fetchTask;
}
// import { dataPlanVM, PackageData } from "@/type/dataTypes";

// interface FetchArgs {
//   service: string;
// }
// export async function getPackageVM({ service }: FetchArgs): Promise<PackageData[] | null> {
//   try {

//     const url = `${process.env.STACK_API_BASE_URL}/admin/plans/service/${encodeURIComponent(
//       service
//     )}?sort=-created_at&page=1&limit=50&planable=default&planable_type=RateCard&include=cloud_provider,cloud_provider_setup,plan_region,plan_category`;

//     const res = await fetch(url, {
//       headers: {
//         Authorization: `Bearer ${process.env.STACK_API_TOKEN}`,
//       },
//       next: { revalidate: 3600 },
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch VM package");
//     }

//     const json = await res.json();

//     const formattedPlans: PackageData[] = (json.data ?? [])
//       // 1. Filter out items that don't have a name or essential attributes
//       .filter((plan: dataPlanVM) => !!plan.name && plan.attribute)
//       .map((plan: dataPlanVM) => ({
//         name: plan.name,
//         slug: plan.name?.toLowerCase().replace(/\s+/g, "-") ?? "plan",

//         memory: plan.attribute?.memory !== undefined
//           ? `${(plan.attribute.memory / 1024).toFixed(1)} GB`
//           : undefined,

//         cpu: plan.attribute?.cpu !== undefined
//           ? `${plan.attribute.cpu}`
//           : undefined,

//         storage: plan.attribute?.storage !== undefined
//           ? `${plan.attribute.storage} GB`
//           : "—",

//         bandwidth: plan.attribute?.bandwidth_threshold !== undefined
//           ? `${plan.attribute.bandwidth_threshold} GB`
//           : "—",

//         gpu: plan.attribute?.gpu !== undefined
//           ? `${plan.attribute.gpu} GPU`
//           : "—",

//         priceHour: plan.hourly_price !== undefined
//           ? `$${plan.hourly_price}`
//           : "$0",

//         priceMonth: plan.monthly_price !== undefined
//           ? `$${plan.monthly_price}`
//           : "$0",

//         planCategory: plan.plan_category?.name ?? "N/A",
//         computeCategory: plan.compute_category?.name ?? "N/A",
//       }));

//     return formattedPlans;
//   } catch (error) {
//     console.error("getPackageVM error:", error);
//     return null;
//   }
// }
import { dataPlanVM, PackageData } from "@/type/dataTypes";

interface FetchArgs {
  service: string;
}

const pendingRequests = new Map<string, Promise<PackageData[] | null>>();

export async function getPackageVM({ service }: FetchArgs): Promise<PackageData[] | null> {
  if (pendingRequests.has(service)) return pendingRequests.get(service)!;

  const fetchTask = (async (): Promise<PackageData[] | null> => {
    try {
      // 1. Clean the Base URL (ensure no trailing slash)
      const baseUrl = process.env.STACK_API_BASE_URL?.replace(/\/$/, "");
      const token = process.env.STACK_API_TOKEN;

      if (!baseUrl || !token) {
        console.error("❌ Missing STACK_API config");
        return null;
      }

      // 2. Build the URL strictly
      const url = `${baseUrl}/admin/plans/service/${encodeURIComponent(service)}?sort=-created_at&page=1&limit=50&planable=default&planable_type=RateCard&include=cloud_provider,cloud_provider_setup,plan_region,plan_category`;

      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        },
        // 'follow' is default, but manual helps debug if redirects persist
        redirect: 'follow', 
        next: { revalidate: 60 },
      });

      if (!res.ok) {
        // If the API returns 401/403, your token is likely the issue
        console.error(`❌ API Error: ${res.status} for ${service}`);
        return null;
      }

      const json = await res.json();
      const data = json.data ?? [];

      return data
        .filter((plan: dataPlanVM) => !!plan.name && plan.attribute)
        .map((plan: dataPlanVM) => ({
          name: plan.name,
          slug: plan.name?.toLowerCase().replace(/\s+/g, "-") ?? "plan",
          memory: plan.attribute?.memory ? `${(plan.attribute.memory / 1024).toFixed(1)} GB` : undefined,
          cpu: plan.attribute?.cpu ? `${plan.attribute.cpu}` : undefined,
          storage: plan.attribute?.storage !== undefined ? `${plan.attribute.storage} GB` : "—",
          bandwidth: plan.attribute?.bandwidth_threshold !== undefined ? `${plan.attribute.bandwidth_threshold} GB` : "—",
          gpu: plan.attribute?.gpu !== undefined ? `${plan.attribute.gpu} GPU` : "—",
          priceHour: plan.hourly_price !== undefined ? `$${plan.hourly_price}` : "$0",
          priceMonth: plan.monthly_price !== undefined ? `$${plan.monthly_price}` : "$0",
          planCategory: plan.plan_category?.name ?? "N/A",
          computeCategory: plan.compute_category?.name ?? "N/A",
        }));

    } catch (error: any) {
      console.error(`[getPackageVM] Failed for ${service}:`, error.message);
      return null;
    } finally {
      pendingRequests.delete(service);
    }
  })();

  pendingRequests.set(service, fetchTask);
  return fetchTask;
}
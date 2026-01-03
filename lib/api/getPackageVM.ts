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

// 1. GLOBAL SHIELD: A Map to track ongoing/completed promises for each service
const vmFetchShield = new Map<string, Promise<PackageData[] | null>>();

export async function getPackageVM({ service }: FetchArgs): Promise<PackageData[] | null> {
  // Prevent client-side execution
  if (typeof window !== "undefined") return null;

  // 2. CHECK THE SHIELD: If we are already fetching this specific service, return that promise
  if (vmFetchShield.has(service)) {
    return vmFetchShield.get(service)!;
  }

  // 3. CREATE THE SHIELD PROMISE
  const fetchPromise = (async (): Promise<PackageData[] | null> => {
    const baseUrl = process.env.STACK_API_BASE_URL;
    const token = process.env.STACK_API_TOKEN;

    if (!baseUrl || !token) {
      console.error(`[Shield] Missing API config for service: ${service}`);
      return null;
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

      // Ensure URL doesn't have double slashes
      const cleanBase = baseUrl.replace(/\/$/, '');
      const url = `${cleanBase}/admin/plans/service/${encodeURIComponent(service)}?sort=-created_at&page=1&limit=50&planable=default&planable_type=RateCard&include=cloud_provider,cloud_provider_setup,plan_region,plan_category`;

      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json'
        },
        next: { revalidate: 3600 },
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
        console.error(`[Shield] API Error ${res.status} for service: ${service}`);
        return null;
      }

      const json = await res.json();
      const data = json.data ?? [];

      // 4. Transform data exactly as you had it
      return data
        .filter((plan: dataPlanVM) => !!plan.name && plan.attribute)
        .map((plan: dataPlanVM) => ({
          name: plan.name,
          slug: plan.name?.toLowerCase().replace(/\s+/g, "-") ?? "plan",
          memory: plan.attribute?.memory !== undefined
            ? `${(plan.attribute.memory / 1024).toFixed(1)} GB`
            : undefined,
          cpu: plan.attribute?.cpu !== undefined ? `${plan.attribute.cpu}` : undefined,
          storage: plan.attribute?.storage !== undefined ? `${plan.attribute.storage} GB` : "—",
          bandwidth: plan.attribute?.bandwidth_threshold !== undefined ? `${plan.attribute.bandwidth_threshold} GB` : "—",
          gpu: plan.attribute?.gpu !== undefined ? `${plan.attribute.gpu} GPU` : "—",
          priceHour: plan.hourly_price !== undefined ? `$${plan.hourly_price}` : "$0",
          priceMonth: plan.monthly_price !== undefined ? `$${plan.monthly_price}` : "$0",
          planCategory: plan.plan_category?.name ?? "N/A",
          computeCategory: plan.compute_category?.name ?? "N/A",
        }));

    } catch (error: any) {
      // LOG ONCE: Catch the redirect loop or timeout here
      console.error(`[Shield] Request for ${service} failed or timed out. Blocking further attempts.`);
      return null;
    }
  })();

  // Store the promise in the shield
  vmFetchShield.set(service, fetchPromise);
  return fetchPromise;
}

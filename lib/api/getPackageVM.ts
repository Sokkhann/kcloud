import { dataPlanVM, PackageData } from "@/type/dataTypes";

interface FetchArgs {
  service: string;
}
export async function getPackageVM({ service }: FetchArgs): Promise<PackageData[] | null> {
  try {

    const url = `${process.env.STACK_API_BASE_URL}/admin/plans/service/${encodeURIComponent(
      service
    )}?sort=-created_at&page=1&limit=50&planable=default&planable_type=RateCard&include=cloud_provider,cloud_provider_setup,plan_region,plan_category`;

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.STACK_API_TOKEN}`,
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch VM package");
    }

    const json = await res.json();

    const formattedPlans: PackageData[] = (json.data ?? [])
      // 1. Filter out items that don't have a name or essential attributes
      .filter((plan: dataPlanVM) => !!plan.name && plan.attribute)
      .map((plan: dataPlanVM) => ({
        name: plan.name,
        slug: plan.name?.toLowerCase().replace(/\s+/g, "-") ?? "plan",

        memory: plan.attribute?.memory !== undefined
          ? `${(plan.attribute.memory / 1024).toFixed(1)} GB`
          : undefined,

        cpu: plan.attribute?.cpu !== undefined
          ? `${plan.attribute.cpu}`
          : undefined,

        storage: plan.attribute?.storage !== undefined
          ? `${plan.attribute.storage} GB`
          : "—",

        bandwidth: plan.attribute?.bandwidth_threshold !== undefined
          ? `${plan.attribute.bandwidth_threshold} GB`
          : "—",

        gpu: plan.attribute?.gpu !== undefined
          ? `${plan.attribute.gpu} GPU`
          : "—",

        priceHour: plan.hourly_price !== undefined
          ? `$${plan.hourly_price}`
          : "$0",

        priceMonth: plan.monthly_price !== undefined
          ? `$${plan.monthly_price}`
          : "$0",

        planCategory: plan.plan_category?.name ?? "N/A",
        computeCategory: plan.compute_category?.name ?? "N/A",
      }));

    return formattedPlans;
  } catch (error) {
    console.error("getPackageVM error:", error);
    return null;
  }
}

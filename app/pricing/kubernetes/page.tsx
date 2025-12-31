import KubernetesPricingPage from "@/components/page/pricing/KubernetesPricingPage";
import { getPackageVM } from "@/lib/api/getPackageVM";

export default async function page() {

  const packages = await getPackageVM({service: "Kubernetes"})

  console.log("Responsed: ", packages)

  return (
    <div>
      <div>
        <KubernetesPricingPage plans={packages ?? []}/>
      </div>
    </div>
  );
}

import KubernetesPricingPage from "@/components/page/pricing/KubernetesPricingPage";
import { getPackageK8s, getPackageVM } from "@/lib/api/getPackage";

export default async function page() {

  const packages = await getPackageK8s({service: "Kubernetes"})

  return (
    <div>
      <div>
        <KubernetesPricingPage plans={packages ?? []}/>
      </div>
    </div>
  );
}

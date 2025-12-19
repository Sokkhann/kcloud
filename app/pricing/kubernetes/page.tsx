import KubernetesPricingPage from "@/components/page/pricing/KubernetesPricingPage";
import { getPackageVM } from "@/lib/api/getPackageVM";
import React from "react";

export default async function page() {

  const packages = await getPackageVM({service: "Kubernetes"})

  return (
    <div>
      <div>
        <KubernetesPricingPage plans={packages ?? []}/>
      </div>
    </div>
  );
}

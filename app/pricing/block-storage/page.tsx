import BlockStoragePricingPage from "@/components/page/pricing/BlockStoragePricingPage";
import { getPackageVM } from "@/lib/api/getPackageVM";
import React from "react";

export default async function page() {

  const packages = await getPackageVM({service: "Block Storage"})
  return (
    <div>
      <BlockStoragePricingPage plans={packages ?? []}/>
    </div>
  );
}

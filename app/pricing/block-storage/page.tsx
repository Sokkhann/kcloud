import BlockStoragePricingPage from "@/components/page/pricing/BlockStoragePricingPage";
import { getPackageBlockStorage, getPackageVM } from "@/lib/api/getPackage";
import React from "react";

export default async function page() {

  const packageProxmox = await getPackageBlockStorage({service: "Block Storage", provider: "proxmox"})
  const packageCloudStack = await getPackageBlockStorage({service: "Block Storage", provider: "nimbo"})

  return (
    <div>
      <BlockStoragePricingPage packageCloudStack={packageCloudStack ?? []} packageProxmox={packageProxmox ?? []}/>
    </div>
  );
}

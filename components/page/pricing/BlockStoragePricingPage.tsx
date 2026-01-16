"use client";

import HeroComponent from "@/components/HeroComponent";
import { blockStorageColumns, vmColumns } from "./price-table/VMColumn";
import { DataTable } from "./price-table/VMTable";
import { PackageData } from "@/type/dataTypes";
import BlockStoragePricingSection from "@/components/section/pricing/block-storage/BlockStoragePricingSection";

interface PackageProps {
  packageProxmox: PackageData[]
  packageCloudStack: PackageData[]
}

export default function BlockStoragePricingPage({ packageCloudStack, packageProxmox }: PackageProps) {

  return (
    <div>
      {/* Hero section */}
      <HeroComponent
        height="h-[600px]"
        image="/hero-bg.png"
        title="Block Storage"
        description="GCX Private Network allows your virtual machines and resources to communicate securely and efficiently within an isolated environment, without exposing traffic to the public internet. Perfect for multi-tier applications, internal services, and sensitive workloads."
      />

      <div className="w-screen mt-10">
        {/* Proxmox */}
        <div className="py-6 lg:py-12 md:py-12">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="lg:mx-8 md:mx-8 mx-4 pb-6 lg:pb-12 md:pb-12">
              <p className="lg:text-4xl md:text-4xl text-2xl mb-4 font-bold text-gray-700">
                Block Storage
              </p>
              <p className="text-base text-gray-600 max-w-5xl">
                An IP Address is a unique identifier that allows your server or
                device to communicate on a network. It enables public access to
                your applications and secure internal connectivity between cloud
                resources. Used for hosting websites, APIs, and managing remote
                access.
              </p>
            </div>

            {/* Proxmox */}
            <div className="px-4 lg:px-8 md:px-8 ">
              <p className="xl:text-2xl text-xl text-gray-700 font-bold mb-2">
                Proxmox Cloud Compute
              </p>
              <p className="text-gray-600 max-w-5xl">
                Take full control of your infrastructure with Proxmox. Whether you need full hardware virtualization with KVM or lightweight isolated containers, our Proxmox nodes offer high-speed I/O and low-latency networking to keep your development pipeline moving fast.
              </p>
            </div>

            <div className="px-4 lg:px-8 md:px-8 pb-6 lg:pb-12 md:pb-12">
              <DataTable
                columns={blockStorageColumns("block-storage")}
                data={packageProxmox}
              />
            </div>

            {/* CloudStack */}
            <div className="px-4 lg:px-8 md:px-8 ">
              <p className="xl:text-2xl text-xl text-gray-700 font-bold mb-2">
                CloudStack Compute
              </p>
              <p className="text-gray-600 max-w-5xl">
                Take full control of your infrastructure with Proxmox. Whether you need full hardware virtualization with KVM or lightweight isolated containers, our Proxmox nodes offer high-speed I/O and low-latency networking to keep your development pipeline moving fast.
              </p>
            </div>

            <div className="px-4 lg:px-8 md:px-8 pb-6 lg:pb-12 md:pb-12">
              <DataTable
                columns={blockStorageColumns("block-storage")}
                data={packageCloudStack}
              />
            </div>
          </div>
        </div>
      </div>

      <BlockStoragePricingSection />
    </div>
  );
}

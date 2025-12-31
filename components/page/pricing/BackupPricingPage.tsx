"use client";

import HeroComponent from "@/components/HeroComponent";
import { vmSnapshotColumns } from "./price-table/VMColumn";
import { DataTable } from "./price-table/VMTable";
import { PackageData } from "@/type/dataTypes";
import BackupPricingSection from "@/components/section/pricing/backup/BackupPricingSection";

interface PackageProps {
  plans: PackageData[]
}

export default function BackupPricingPage({plans} : PackageProps) {

  return (
    <div>
      {/* Hero section */}
      <HeroComponent
        height="h-[600px]"
        image="/hero-bg.png"
        title="Backups"
        description="GCX Private Network allows your virtual machines and resources to communicate securely and efficiently within an isolated environment, without exposing traffic to the public internet. Perfect for multi-tier applications, internal services, and sensitive workloads."
      />

      <div className="w-screen mt-10">
        <div className="py-16 lg:py-32 md:py-32">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="lg:mx-8 md:mx-8 mx-4">
              <p className="lg:text-4xl md:text-4xl text-2xl mb-4 font-bold text-gray-700">
                Backups
              </p>
              <p className="text-base text-gray-600">
                An IP Address is a unique identifier that allows your server or
                device to communicate on a network. It enables public access to
                your applications and secure internal connectivity between cloud
                resources. Used for hosting websites, APIs, and managing remote
                access.
              </p>
            </div>

            <div className="px-4 lg:px-8 md:px-8">
              <DataTable columns={vmSnapshotColumns("")} data={plans} />
            </div>
          </div>
        </div>
      </div>

      <BackupPricingSection/>
    </div>
  );
}

import BlockStoragePricingPage from "@/components/page/pricing/BlockStoragePricingPage";
import { getPackageBlockStorage } from "@/lib/api/getPackage";
import { Metadata } from "next";

const domain = process.env.NEXT_PUBLIC_DOMAIN;

// metadata
export const metadata: Metadata = {
  title: "Block Storage Backup Pricing | GCX K-Cloud",
  description:
    "Explore secure and scalable block storage backup pricing on GCX K-Cloud. Protect your cloud workloads with reliable backup solutions designed for enterprise use.",

  keywords: [
    "Block Storage Backup Pricing",
    "GCX K-Cloud",
    "Cloud Block Storage",
    "Cloud Backup Solutions",
    "Enterprise Storage Backup",
    "Disaster Recovery",
    "Secure Cloud Storage",
  ],

  openGraph: {
    title: "Block Storage Backup Pricing | GCX K-Cloud",
    description:
      "Secure and scalable block storage backup pricing on GCX K-Cloud. Reliable backup solutions for modern cloud infrastructure.",
    url: `${domain}/pricing/block-storage`,
    siteName: "GCX K-Cloud",
    images: [
      {
        url: `${domain}/about-us.png`,
        width: 1200,
        height: 630,
        alt: "GCX K-Cloud Block Storage Backup Pricing",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Block Storage Backup Pricing | GCX K-Cloud",
    description:
      "Secure and scalable block storage backup pricing on GCX K-Cloud. Reliable backup solutions for enterprise cloud workloads.",
    images: [
      `${domain}/about-us.png`,
    ],
  },
};

export default async function page() {

  const packageProxmox = await getPackageBlockStorage({service: "Block Storage", provider: "proxmox"})
  const packageCloudStack = await getPackageBlockStorage({service: "Block Storage", provider: "nimbo"})

  return (
    <div>
      <BlockStoragePricingPage packageCloudStack={packageCloudStack ?? []} packageProxmox={packageProxmox ?? []}/>
    </div>
  );
}

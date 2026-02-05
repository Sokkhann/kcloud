import BackupPricingPage from '@/components/page/pricing/BackupPricingPage'
import { getPackageBlockStorage } from '@/lib/api/getPackage'
import { Metadata } from 'next';

const domain = process.env.NEXT_PUBLIC_DOMAIN;

// metadata
export const metadata: Metadata = {
  title: "Backup Pricing | Kcloud",
  description:
    "Reliable and secure backup pricing for block storage and virtual machines. Protect your data with Kcloud backup solutions.",

  keywords: [
    "Backup Pricing",
    "Cloud Backup Cambodia",
    "Block Storage Backup",
    "Virtual Machine Backup",
    "Disaster Recovery Cambodia",
    "Kcloud Backup",
    "Secure Data Backup",
  ],

  openGraph: {
    title: "Backup Pricing | Kcloud",
    description:
      "Reliable and secure backup pricing for block storage and virtual machines. Protect your data with Kcloud backup solutions.",
    url: `${domain}/pricing/backup`,
    siteName: "Kcloud",
    images: [
      {
        url: `${domain}/about-us.png`,
        width: 1200,
        height: 630,
        alt: "Kcloud Backup Pricing",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Backup Pricing | Kcloud",
    description:
      "Reliable and secure backup pricing for block storage and virtual machines. Protect your data with Kcloud backup solutions.",
    images: [
      `${domain}/about-us.png`,
    ],
  },
};

export default async function page() {

  const packageBlockStorageBackup = await getPackageBlockStorage({ service: "Block Storage Backup" })
  const packageVMBackup = await getPackageBlockStorage({ service: "Virtual Machine Backup" })

  return (
    <div>
      <BackupPricingPage
        packageBlockStorageBackup={packageBlockStorageBackup ?? []}
        packageVMBackup={packageVMBackup ?? []}
      />
    </div>
  )
}

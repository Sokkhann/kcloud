import PricingPage from '@/components/page/pricing/PricingPage'
import { Metadata } from 'next';

const domain = process.env.NEXT_PUBLIC_DOMAIN;

export const metadata: Metadata = {
  title: "Cloud Pricing | GCX K-Cloud",
  description:
    "Explore transparent and scalable pricing for GCX K-Cloud services. Compare Virtual Machines, Kubernetes, Block Storage, Backup, and Load Balancer pricing for your cloud infrastructure needs.",

  keywords: [
    "GCX K-Cloud Pricing",
    "Cloud Pricing Cambodia",
    "Virtual Machine Pricing",
    "Kubernetes Pricing",
    "Block Storage Pricing",
    "Backup Pricing",
    "Load Balancer Pricing",
    "Enterprise Cloud Services",
    "Scalable Cloud Solutions",
  ],

  openGraph: {
    title: "Cloud Pricing | GCX K-Cloud",
    description:
      "Transparent and scalable pricing for GCX K-Cloud services. Compare Virtual Machines, Kubernetes, Block Storage, Backup, and Load Balancer pricing for your cloud needs.",
    url: `${domain}/pricing`,
    siteName: "GCX K-Cloud",
    images: [
      {
        url: `${domain}/about-us.png`, // public image for main pricing page
        width: 1200,
        height: 630,
        alt: "GCX K-Cloud Pricing Overview",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cloud Pricing | GCX K-Cloud",
    description:
      "Transparent and scalable pricing for GCX K-Cloud services. Compare Virtual Machines, Kubernetes, Block Storage, Backup, and Load Balancer pricing.",
    images: "/price-bg.png",
  },
};

export default function page() {
  return (
    <div className='bg-white'>
      <PricingPage />
    </div>
  )
}


import LoadBalancerPricingPage from '@/components/page/pricing/LoadBalancerPricingPage'
import { getPackageLoadBalancer } from '@/lib/api/getPackage'
import type { Metadata } from "next";

const domain = process.env.NEXT_PUBLIC_DOMAIN;

export const metadata: Metadata = {
  title: "Load Balancer Pricing | GCX K-Cloud",
  description:
    "Explore transparent and scalable Load Balancer pricing on GCX K-Cloud. Distribute traffic efficiently across your cloud applications with reliable load balancing solutions.",

  keywords: [
    "Load Balancer Pricing",
    "GCX K-Cloud",
    "Cloud Load Balancer Cambodia",
    "Scalable Load Balancing",
    "Enterprise Load Balancer",
    "Cloud Traffic Management",
    "Reliable Load Balancer GCX",
    "High Availability Load Balancer",
  ],

  openGraph: {
    title: "Load Balancer Pricing | GCX K-Cloud",
    description:
      "Transparent and scalable Load Balancer pricing on GCX K-Cloud. Efficiently distribute traffic across your cloud applications with our managed load balancing solutions.",
    url: `${domain}/pricing/load-balancer`,
    siteName: "GCX K-Cloud",
    images: [
      {
        url: `${domain}/about-us.png`,
        width: 1200,
        height: 630,
        alt: "GCX K-Cloud Load Balancer Pricing",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Load Balancer Pricing | GCX K-Cloud",
    description:
      "Transparent and scalable Load Balancer pricing on GCX K-Cloud. Manage cloud traffic efficiently with enterprise-grade load balancing.",
    images: [
      `${domain}/about-us.png`,
    ],
  },
};


export default async function page() {

  const packages = await getPackageLoadBalancer({service: "Load Balancer"})

  return (
    <div>
      <LoadBalancerPricingPage plans={packages ?? []}/>
    </div>
  )
}

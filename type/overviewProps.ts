export interface CarouselProps {
    id: number,
    title: string,
    desc: string,
    image: string
}

export const carouselCard : CarouselProps [] = [
  {
    id: 1,
    title: "Tailor-Made Cloud Solutions",
    desc: "KCloud delivers flexible and customized cloud environments designed to match your business requirements. From scalable compute resources to secure storage, solutions are built to grow with your organization.",
    image: "/gcx-security-img.png",
  },
  {
    id: 2,
    title: "Tier 3 Certified Infrastructure",
    desc: "Built on GCX’s Tier 3 designed data center, KCloud ensures high availability and operational reliability. Redundant systems and fault tolerance guarantee continuous performance for critical workloads.",
    image: "/cloud-img.png",
  },
  {
    id: 3,
    title: "Carrier Neutral Connectivity",
    desc: "As a carrier-neutral facility, KCloud provides direct access to multiple telecom providers. This ensures optimized connectivity, reduced latency, and improved network resilience.",
    image: "/support-img.png",
  },
  {
    id: 4,
    title: "Stable Power & Flood-Free Location",
    desc: "Located in a stable power zone and flood-free area, KCloud ensures operational continuity. This strategic positioning minimizes infrastructure risk and enhances long-term reliability.",
    image: "/support-img.png",
  },
];
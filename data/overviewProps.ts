export interface CarouselProps {
    id: number,
    title: string,
    desc: string,
    image: string
}

export const carouselCard : CarouselProps [] = [
  {
    id: 1,
    title: "Prioritize Your Security and Privacy",
    desc: "Data Protection & Encryption, Networking Security, Identity Access Managament, Mornitoring & Detectoin, Firewall protection, and Web Application Firewall (WAFF)",
    image: "/security.png",
  },
  {
    id: 2,
    title: "Cloud Infrastructure",
    desc: "A reliable cloud platform ensures up-time with redundancy, performance, and scalability to handle any workload. With strong security and continuous monitoring, it protects data and maintains system integrity.",
    image: "/cloud.png",
  },
  {
    id: 3,
    title: "24/7 Support Cloud Support in Khmer &English",
    desc: "24/7 availibility, Group chat, support step by step, and Guidance step by step guidance.",
    image: "/support.png",
  },
];
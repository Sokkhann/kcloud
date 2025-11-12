import { HeartPlus, LucideIcon, BarChart, Rocket, TrendingDown, Layers, Code } from "lucide-react";

export interface ImageTitleDescCardPorps  {
  image: string,
  title: string,
  description: string
}

export interface SimpleCardProps  {
  title: string,
  desc: string
}

export interface IconCardProps {
  icon: LucideIcon,
  title: string,
  desc: string,
  align?: string
}

export interface ProblemSolutionSwitchCardProps {
  proTitle: string;
  proDesc: string;
  solTitle: string;
  solDesc: string;
}


// vm detail
export const vmFeatureDetail: ImageTitleDescCardPorps [] = [
    {
      image: "/featured1.png",
      title: "Easily deploy and manage Virtual Machine",
      description:
        "Interact with your VM how you want. Our intuitive UI, CLI, API, and Terraform Provider make it simple to manage your virtual machines.",
    },
    {
      image: "/featured2.png",
      title: "Reliably Scale as Demands Shifts",
      description:
        "Resize a VM or scale horizontally with many of them. Deploy across globally distributed data centers each with our 99.99% uptime SLA.",
    },
    {
      image: "/featured3.png",
      title: "Build, monitor, and secure your apps for less",
      description:
        "Get exceptional bandwidth pricing and 500 GiB per month of outbound data transfer—plus monitoring and firewalls for free with every VM.",
    },
  ];

// k8 detail
// k8 feture detail
export const k8sFeatureDetail: ImageTitleDescCardPorps [] = [
    {
      image: "/featured1.png",
      title: "Automated Rollouts & Rollbacks",
      description:
        "Progressively rolls out changes to your application and configuration, monitoring health, and automatically rolling back if issues are detected.",
    },
    {
      image: "/featured2.png",
      title: "Service Discovery & Load Balancing",
      description:
        "Automatically assigns IP addresses to containers (Pods), gives a single DNS name for a set of Pods, and load-balances traffic across them.",
    },
    {
      image: "/featured3.png",
      title: "Self-Healing",
      description:
        "Automatically restarts containers that fail, replaces unhealthy Pods, and reschedules containers from failed nodes.",
    },
    {
      image: "/featured1.png",
      title: "Horizontal Scaling",
      description:
        "Scale your application up and down automatically based on demand (like CPU utilization) or with a simple command, adding or removing application instances (Pods).",
    },
    {
      image: "/featured2.png",
      title: "Secret & Configuration Management",
      description:
        "Securely stores and manages sensitive information (passwords, OAuth tokens, SSH keys) and application configuration without exposing them in your code or container images.",
    },
    {
      image: "/featured3.png",
      title: "Automatic Bin Packing",
      description:
        "Intelligently places containers on the available worker nodes in the cluster to optimize resource utilization while maintaining availability.",
    },
  ];

// k8 Bussiness benefits
export const businessCards : IconCardProps[] = [
    {
      icon: HeartPlus,
      title: "Increased Reliability & Uptime",
      desc: "Self-healing and automated failover ensure your applications are always available, minimizing costly downtime.",
    },
    {
      icon: BarChart,
      title: "Scalability for Growth",
      desc: "Seamlessly handle traffic surges and peak loads by automatically scaling applications and infrastructure, without manual intervention.",
    },
    {
      icon: Rocket,
      title: "Faster Time-to-Market",
      desc: "Automated rollouts and rollbacks streamline the CI/CD pipeline, allowing development teams to deploy new features and bug fixes rapidly and with confidence.",
    },
    {
      icon: TrendingDown,
      title: "Cost Efficiency (Resource Optimization)",
      desc: "Better utilization of computing resources through automatic bin packing and horizontal scaling means you only pay for the resources you truly need.",
    },
    {
      icon: Layers,
      title: "Portability & Avoid Vendor Lock-in",
      desc: "Run your applications consistently across any environment—on-premises, hybrid, or multiple public clouds (AWS, GCP, Azure)—giving you maximum flexibility.",
    },
    {
      icon: Code,
      title: "Enhanced Developer Productivity",
      desc: "Developers can focus on writing code, not on operational concerns like where or how their application will run.",
    },
  ];

// k8 use case
export const k8UseCaseCard : SimpleCardProps [] = [
    {
      title: "Microservices Architecture",
      desc:
        "Perfect for breaking down monolithic applications into smaller, manageable, independently deployable services.",
    },
    {
      title: "Continuous Integration/Continuous Deployment (CI/CD)",
      desc:
        "Provides a consistent environment for building, testing, and deploying pipelines.",
    },
    {
      title: "AI/ML Workloads",
      desc:
        "Efficiently manage the complex, resource-intensive workflows for training and deploying machine learning models at scale.",
    },
    {
      title: "High-Traffic Web Applications",
      desc:
        "Ensure stability and performance for e-commerce, streaming, and SaaS platforms with fluctuating, high-volume user traffic.",
    },
    {
      title: "Hybrid and Multi-Cloud",
      desc:
        "Deploy and manage applications consistently across different cloud providers and on-premises data centers.",
    },
  ];

// vnf detail
// problem and solution
export const problemSolutionCards : ProblemSolutionSwitchCardProps [] = [
  {
    proTitle:"Vendor Lock-in",
    proDesc:"Tied to proprietary, expensive hardware.",
    solTitle: "Cloud-Agnostic Portability",
    solDesc: "Runs on any Commercial Off-The-Shelf (COTS) server, hypervisor (VMware, KVM), or major public cloud.",
    },
  {
    proTitle:"Slow Deployment",
    proDesc:"Takes weeks or months to provision and rack new physical appliances.",
    solTitle: "Rapid, Automated Deployment",
    solDesc: "Spin up new instances instantly via orchestration (e.g., integration with NFV MANO, OpenStack, or Kubernetes).",
    },
  {
    proTitle:"Over-Provisioning",
    proDesc:"Buying hardware for peak capacity, leading to wasted resources and high CapEx.",
    solTitle: "Dynamic Scaling & Elasticity",
    solDesc: "Scale up (vertical) or scale out (horizontal) on-demand to match real-time traffic, then scale back down to save resources.",
    },
  ]

// vnf use case
export const vnfUseCaseCard : SimpleCardProps [] = [
    {
      title: "Virtual Firewall & Security",
      desc:
        "Protect network traffic dynamically without physical appliances. VNFs make it easy to deploy firewalls across multiple locations or tenants.",
    },
    {
      title: "Virtual Router / Switch",
      desc:
        "Replace physical routers with virtualized ones to reduce cost and simplify network management.",
    },
    {
      title: "Service Chaining",
      desc:
        "Combine multiple VNFs (e.g., Firewall → Load Balancer → DPI) to deliver complex network services quickly.",
    },
    {
      title: "5G Network Slicing",
      desc:
        "Enable flexible and programmable network slices for different applications (IoT, streaming, enterprise).",
    },
    {
      title: "Cloud & Edge Deployments",
      desc:
        "Deploy network functions close to users or at the edge to improve performance and reduce latency.",
    },
  ];

// App detail
// App feature detail
export const appFeatureDetail: ImageTitleDescCardPorps [] = [
    {
      image: "/featured1.png",
      title: "One-Click Deployment",
      description:
        "Push your code from Git and automatically build, deploy, and run your app in the cloud.",
    },
    {
      image: "/featured2.png",
      title: "Automated Scaling",
      description:
        "Adjust resources dynamically based on real-time traffic and performance needs.",
    },
    {
      image: "/featured3.png",
      title: "Integrated CI/CD Pipeline",
      description:
        "Streamline updates and ensure safe rollouts with version control integration.",
    },
    {
      image: "/featured1.png",
      title: "Built-In Monitoring & Logging",
      description:
        "Gain deep visibility into application performance, logs, and metrics.",
    },
    {
      image: "/featured2.png",
      title: "Multi-Language Support",
      description:
        "Supports popular runtimes such as Node.js, Python, Java, Go, and more.",
    },
    {
      image: "/featured3.png",
      title: "Secure by Design",
      description:
        "Enforces isolation, encryption, and continuous vulnerability scanning.",
    },
    {
      image: "/featured3.png",
      title: "Rollback Ready",
      description:
        "Revert to stable versions instantly in case of issues during deployment.",
    },
  ];

// vnf use case
export const appUseCaseCard : SimpleCardProps [] = [
    {
      title: "Modern Web Applications",
      desc:
        "Deploy scalable web frontends or APIs directly from your Git repository.",
    },
    {
      title: "Microservices Architecture",
      desc:
        "Run and connect independent services seamlessly under one platform.",
    },
    {
      title: "Staging & Production Environments",
      desc:
        "Quickly spin up isolated environments for testing and release cycles.",
    },
    {
      title: "DevOps Automation",
      desc:
        "Integrate CI/CD workflows, auto-rollouts, and observability in a single ecosystem.",
    },
  ];
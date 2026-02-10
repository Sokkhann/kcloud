import { CardProps } from "./customerOverview";

export interface PartnerDetailProps {
  slug?: string;
  title: string;
  desc: string;
  logo: string;
  link: string;
  contents?: ContentSection[]
}

export interface ContentSection {
  id: string;
  title: string;
  desc: string;
}

export const PartnerData: PartnerDetailProps[] = [
  {
    slug: "global-cloud",
    title: "Global Cloud Systems",
    logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg",
    link: "/partner/global-cloud",
    desc: "Global Cloud Systems provides enterprise-level infrastructure and seamless database migrations. They specialize in helping high-growth startups scale their backend architecture without downtime, offering 24/7 support and custom security protocols tailored to specific regional compliance standards. Their integration with our platform allows for one-click deployment of complex microservices, ensuring that your engineering team can focus on feature development rather than server maintenance.",
    contents: [
      {
        id: "gc-001",
        title: "Managed Database Clusters",
        desc: "High-performance, automated failover for SQL and NoSQL databases with daily encrypted backups. High-performance, automated failover for SQL and NoSQL databases with daily encrypted backups. High-performance, automated failover for SQL and NoSQL databases with daily encrypted backups. High-performance, automated failover for SQL and NoSQL databases with daily encrypted backups. High-performance, automated failover for SQL and NoSQL databases with daily encrypted backups. High-performance, automated failover for SQL and NoSQL databases with daily encrypted backups. High-performance, automated failover for SQL and NoSQL databases with daily encrypted backups."
      },
      {
        id: "gc-002",
        title: "Edge Computing & CDN",
        desc: "Deploy code closer to your users with 200+ global edge locations to reduce latency and improve load times. High-performance, automated failover for SQL and NoSQL databases with daily encrypted backups. High-performance, automated failover for SQL and NoSQL databases with daily encrypted backups. High-performance, automated failover for SQL and NoSQL databases with daily encrypted backups. High-performance, automated failover for SQL and NoSQL databases with daily encrypted backups. High-performance, automated failover for SQL and NoSQL databases with daily encrypted backups. High-performance, automated failover for SQL and NoSQL databases with daily encrypted backups."
      },
      {
        id: "gc-003",
        title: "Identity & Access Management (IAM)",
        desc: "Granular permission controls and multi-factor authentication integration for enterprise-grade security. High-performance, automated failover for SQL and NoSQL databases with daily encrypted backups. High-performance, automated failover for SQL and NoSQL databases with daily encrypted backups. High-performance, automated failover for SQL and NoSQL databases with daily encrypted backups. High-performance, automated failover for SQL and NoSQL databases with daily encrypted backups. High-performance, automated failover for SQL and NoSQL databases with daily encrypted backups. High-performance, automated failover for SQL and NoSQL databases with daily encrypted backups. High-performance, automated failover for SQL and NoSQL databases with daily encrypted backups. High-performance, automated failover for SQL and NoSQL databases with daily encrypted backups. High-performance, automated failover for SQL and NoSQL databases with daily encrypted backups. High-performance, automated failover for SQL and NoSQL databases with daily encrypted backups."
      }
    ],
  },
  {
    slug: "fintech-connect",
    title: "FinTech Connect",
    logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
    link: "/partner/fintech-connect",
    desc: "A leading provider of payment gateway solutions and financial orchestration. FinTech Connect simplifies the complexity of international transactions by offering localized payment methods in over 150 countries. Our partnership ensures that users can handle billing, tax automation, and revenue recognition directly within our dashboard, reducing the need for external accounting software."
  },
  {
    slug: "salesforce",
    title: "Salesforce Systems",
    logo: "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg",
    link: "/partner/salesforce",
    desc: "Salesforce Systems provides the world's leading CRM platform, integrated directly with our environmental tracking modules. By leveraging their Net Zero Cloud capabilities, we help enterprises visualize their carbon footprint alongside their sales pipeline. This partnership allows for seamless data flow between customer relationship management and global sustainability goals, empowering businesses to grow responsibly while maintaining a clear view of their ecological impact across all departments."
  },
  {
    slug: "okta",
    title: "Okta Identity Cloud",
    logo: "https://www.vectorlogo.zone/logos/okta/okta-icon.svg",
    link: "/partner/okta",
    desc: "Okta Identity Cloud is the gold standard for secure, scalable identity management and user authentication. Our partnership brings enterprise-grade Single Sign-On (SSO) and Multi-Factor Authentication (MFA) to your entire workflow, ensuring that sensitive data remains protected behind a zero-trust architecture. With Okta, we provide automated provisioning and de-provisioning, giving IT administrators total control over user access while maintaining strict adherence to global security compliance standards like SOC2 and HIPAA."
  },
  {
    slug: "aws",
    title: "Amazon Web Services",
    logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
    link: "/partner/aws",
    desc: "Amazon Web Services (AWS) provides a highly reliable, scalable, low-cost infrastructure platform in the cloud that powers hundreds of thousands of businesses in 190 countries around the world. Our deep integration with AWS allows our customers to leverage high-performance computing, storage, and database solutions with localized data residency. This partnership ensures that your applications remain highly available and performant, regardless of global traffic spikes or complex computational requirements."
  },
  {
    slug: "slack",
    title: "Slack Technologies",
    logo: "https://www.vectorlogo.zone/logos/slack/slack-icon.svg",
    link: "/partner/slack",
    desc: "Slack is the ultimate communications hub that brings people, messages, and tools together in one place. By integrating Slack directly into our platform, we enable real-time notifications and collaborative decision-making workflows that keep your team aligned. Our partnership allows users to receive automated updates, share detailed reports, and trigger critical actions directly from their Slack channels, significantly reducing the friction between data insight and team execution."
  },
  {
    slug: "secureauth",
    title: "SecureAuth Identity",
    logo: "https://cdn.worldvectorlogo.com/logos/auth0.svg",
    link: "/partner/secureauth",
    desc: "SecureAuth is a pioneer in zero-trust architecture and multi-factor authentication. They provide a robust identity layer that protects sensitive user data from sophisticated phishing attacks. By partnering with SecureAuth, we offer our clients enterprise-grade Single Sign-On (SSO) capabilities and advanced biometric verification methods that meet the highest global security standards including SOC2 and GDPR."
  },
  {
    slug: "logistics-pro",
    title: "Logistics Pro",
    logo: "https://cdn.worldvectorlogo.com/logos/fedex-express-6.svg",
    link: "/partner/logistics-pro",
    desc: "Specializing in last-mile delivery optimization and automated warehousing solutions. Logistics Pro uses proprietary AI algorithms to reduce shipping times by up to 30% while minimizing fuel consumption. Our integrated partnership allows merchants to track shipments in real-time and automate inventory restocking triggers based on predictive analytics and seasonal demand trends."
  },
  {
    slug: "insightflow",
    title: "InsightFlow Analytics",
    logo: "https://cdn.worldvectorlogo.com/logos/segment-1.svg",
    link: "/partner/insightflow",
    desc: "InsightFlow Analytics transforms raw data into actionable business intelligence through their proprietary neural processing engine. They specialize in behavioral mapping and predictive customer modeling, allowing brands to anticipate market shifts before they occur. Our joint integration enables users to sync live telemetry data directly into executive dashboards for real-time decision making and automated performance reporting across all departments."
  },
  {
    slug: "velocity",
    title: "Velocity Marketing Group",
    logo: "https://cdn.worldvectorlogo.com/logos/hubspot-1.svg",
    link: "/partner/velocity",
    desc: "A full-service digital growth agency that focuses on high-conversion funnel optimization and lifecycle marketing. Velocity Marketing Group leverages deep-learning algorithms to automate personalized content delivery at scale. By connecting their platform with ours, customers can trigger automated marketing workflows based on specific user actions, ensuring that the right message reaches the right person at the absolute peak of their buying intent."
  },
  {
    slug: "talentsync",
    title: "TalentSync HR",
    logo: "https://cdn.worldvectorlogo.com/logos/bamboo-1.svg",
    link: "/partner/talentsync",
    desc: "TalentSync is redefining the modern workplace through an integrated human capital management system that prioritizes employee wellness and productivity. Their software uses sentiment analysis to gauge team morale and provides managers with early warning signs of burnout or turnover risk. Through our collaboration, enterprise clients can bridge the gap between operational output and employee satisfaction, creating a more sustainable and high-performing corporate culture."
  }
];
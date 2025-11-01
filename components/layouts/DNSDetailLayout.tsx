import React from "react";
import FeatureCard from "@/components/page/iso/FeatureCard";
import {
  Globe,
  MousePointerClick,
  FileText,
  CheckCircle,
  Zap,
  Shield,
  Settings
} from "lucide-react";
import { productDetailLayout } from "@/data/productDetailLayout";
import GetStartedCard from "../card/GetStartedCard";

interface DNSDetailLayoutProps {
  product: productDetailLayout;
}

export default function DNSDetailLayout({}: DNSDetailLayoutProps) {
  const features = [
    {
      icon: <MousePointerClick className="w-20 h-20 text-green-800" />,
      title: "Easy Domain Creation",
      description:
        "Add a new domain in a few clicks—just choose your project and enter your domain name.",
      bgColor: "bg-green-200",
    },
    {
      icon: <FileText className="w-20 h-20 text-green-800" />,
      title: "All the Records You Need",
      description:
        "Support for A, AAAA, CNAME, MX, TXT, NS, SRV and SOA records for complete DNS management.",
      bgColor: "bg-green-600",
    },
    {
      icon: <CheckCircle className="w-20 h-20 text-green-800" />,
      title: "Clear Examples",
      description:
        "Each record type comes with example values and TTL defaults to help you get up and running quickly.",
      bgColor: "bg-green-300",
    },
  ];

  const whyChooseGCX = [
    {
      title: "Flexibility",
      description:
        "Manage multiple projects and zones with a single interface. Organize domains across different projects effortlessly.",
      icon: <Settings className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Reliability",
      description:
        "Robust infrastructure ensures your DNS responds quickly and consistently, keeping your services always accessible.",
      icon: <Shield className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Clarity",
      description:
        "Built-in examples and tooltips mean you don't need to be a DNS expert to make it work. Simple and intuitive.",
      icon: <Zap className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Root or Subdomain",
      description:
        "Use @ to set records for the root domain or specify any subdomain you want for flexible configuration.",
      icon: <Globe className="w-8 h-8 text-green-600" />,
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Add Your Domain",
      description: "Choose your project and enter your domain name",
    },
    {
      step: "2",
      title: "Configure Records",
      description: "Add A, AAAA, CNAME, MX, TXT or other record types",
    },
    {
      step: "3",
      title: "Set TTL Values",
      description: "Use default TTL or customize based on your needs",
    },
    {
      step: "4",
      title: "Let It Run",
      description: "Our platform handles DNS resolution automatically",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Features Section */}
        <div className="mb-20 mt-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-700">
            What Makes It Awesome?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Everything you need to manage DNS records with confidence and ease
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                bgColor={feature.bgColor}
              />
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-700">
            How It Works
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Get your domain up and running in four simple steps
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center"
              >
                <div className="w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
    
        {/* Why Choose GCX Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-700">
            Why Choose GCX Over Others?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Built for developers who want power without complexity
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseGCX.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 flex gap-4"
              >
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion Section */}
        <div className="mb-20 bg-white rounded-lg p-8 shadow-sm border border-gray-200">
          <div className="flex items-start gap-4">
            
            <div>
              <h2 className="text-2xl font-bold text-gray-700 mb-4">
                Focus on Building, Not DNS Management
              </h2>
              <p className="text-gray-600 leading-relaxed">
                GCX&apos;s DNS simplifies domain management so you can focus on
                building apps, services and websites without worrying about
                where they&apos;re pointing. Start by adding your domain, configuring
                the right records and let our platform handle the rest.
              </p>
            </div>
          </div>
        </div>

        {/* Get Started Card Section */}
        <GetStartedCard />
      </div>
    </div>
  );
}

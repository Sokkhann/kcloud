import React from "react";
import FeatureCard from "@/components/page/iso/FeatureCard";
import {
  Globe,
  Network,
  Router,
  Shield,
  Wifi,
  Lock,
  Cloud,
} from "lucide-react";
import { productDetailLayout } from "@/data/productDetailLayout";
import GetStartedCard from "../card/GetStartedCard";

interface NetworkDetailLayoutProps {
  product: productDetailLayout;
}

export default function NetworkDetailLayout({}: NetworkDetailLayoutProps) {
  const features = [
    {
      icon: <Globe className="w-20 h-20 text-green-800" />,
      title: "Public Networks",
      description:
        "Logically isolated environments with internet-facing IPs and clear traffic control.",
      bgColor: "bg-green-200",
    },
    {
      icon: <Network className="w-20 h-20 text-green-800" />,
      title: "Virtual Networks",
      description:
        "Fully isolated virtual networks for private cloud segments with custom CIDR and DNS.",
      bgColor: "bg-green-600",
    },
    {
      icon: <Router className="w-20 h-20 text-green-800" />,
      title: "Virtual Routers",
      description:
        "Software routers connecting multiple subnets with NAT, routing and firewall services.",
      bgColor: "bg-green-300",
    },
  ];

  const networkingFeatures = [
    {
      title: "Security Groups",
      description:
        "Virtual firewalls to control inbound and outbound traffic with protocol, port ranges and CIDR specifications.",
      icon: <Shield className="w-8 h-8 text-green-600" />,
    },
    {
      title: "IP Management",
      description:
        "Dynamic IP addressing and public IP pools. Acquire new IPs, add firewall rules and set up port forwarding.",
      icon: <Wifi className="w-8 h-8 text-green-600" />,
    },
    {
      title: "VPN & Hybrid Connectivity",
      description:
        "Connect remote users and on-premises environments with secure VPN access and customer gateways.",
      icon: <Lock className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Scalable Architecture",
      description:
        "Build resilient networks from simple public networks to complex multi-subnet architectures.",
      icon: <Cloud className="w-8 h-8 text-green-600" />,
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Choose Network Type",
      description: "Select public or virtual network based on your needs",
    },
    {
      step: "2",
      title: "Configure Settings",
      description: "Define CIDR, subnet mask, gateway and DNS",
    },
    {
      step: "3",
      title: "Add Security Rules",
      description: "Set up security groups and firewall policies",
    },
    {
      step: "4",
      title: "Connect & Deploy",
      description: "Attach instances and enable VPN connectivity",
    },
  ];

  return (
    <div className="bg- min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Features Section */}
        <div className="mb-20 mt-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-700">
            Core Network Features
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Control traffic types and routing with a clear UI that lets you see
            your gateway, netmask, CIDR and network type at a glance.
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
            Build your cloud network in four simple steps
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

        {/* Advanced Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-700">
            Advanced Networking Capabilities
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Everything you need for a resilient, secure and scalable cloud
            network
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {networkingFeatures.map((feature, index) => (
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

        {/* Network Types Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-700">
            Network Types
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose the right network configuration for your workload
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-10 h-10 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-700">
                  Public Networks
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Logically isolated environments that give your instances
                internet-facing IPs. Control traffic types and routing with a
                clear UI showing gateway, netmask, CIDR and network type.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">
                    Internet-facing IP addresses
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">
                    Clear traffic control and routing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">
                    Logical isolation for security
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Network className="w-10 h-10 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-700">
                  Virtual Networks
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Create fully isolated virtual networks to build private cloud
                segments. Choose CIDR, subnet mask, gateway and DNS, and define
                address pools for microservices or segregated workloads.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">
                    Fully isolated private networks
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">
                    Custom CIDR and DNS configuration
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">
                    Perfect for microservices architecture
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* get started card section */}
        <GetStartedCard />
      </div>
    </div>
  );
}

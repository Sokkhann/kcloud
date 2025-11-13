import React from "react";
import Image from "next/image";
import { Globe, Network } from "lucide-react";
import { productDetailLayout } from "@/type/productDetailLayout";
import GetStartedCard from "../card/GetStartedCard";
import data from "@/data/dataCards.json";

interface NetworkDetailLayoutProps {
  product: productDetailLayout;
}

export default function NetworkDetailLayout({}: NetworkDetailLayoutProps) {
  const features = data.networkFeatureDetailCards ?? [];
  const howItWorks = data.networkHowItWorkCards ?? [];
  const networkingFeatures = data.networkCapabilities ?? [];
  
  return (
    <div className="bg-gray-50">
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

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:px-0 md:px-16 px-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl h-[300px] sm:h-[320px] lg:h-[350px] cursor-pointer bg-white w-full"
              >
                {/* Background Image */}
                <div className="rounded-2xl w-full h-full relative overflow-hidden">
                  {feature.image && (
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover object-center"
                    />
                  )}
                  {!feature.image && (
                    <div
                      className={`w-full h-full ${
                        feature.bgColor || "bg-green-600"
                      }`}
                    />
                  )}
                </div>

                {/* Expanding White Panel */}
                <div
                  className="absolute bottom-0 left-0 w-full bg-white p-6 sm:p-8 transition-all duration-500 ease-in-out
                  h-[80px] sm:h-[90px] lg:h-[90px] group-hover:h-[160px] sm:group-hover:h-[170px]"
                  style={{ transformOrigin: "bottom" }}
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </section>
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

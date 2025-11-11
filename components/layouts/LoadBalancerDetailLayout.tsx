import React from "react";
import Image from "next/image";

import {
  Clock,
  Cookie,
  Gauge,
  Shield,
  Zap,
  Settings,
  TrendingUp,
} from "lucide-react";
import { productDetailLayout } from "@/data/productDetailLayout";
import GetStartedCard from "../card/GetStartedCard";

interface LoadBalancerDetailLayoutProps {
  product: productDetailLayout;
}

export default function LoadBalancerDetailLayout({}: LoadBalancerDetailLayoutProps) {
  const features = [
    {
      image: "/high-availability.jpg",
      title: "High Availability",
      description:
        "Spread incoming traffic across multiple servers, preventing overload and ensuring consistent uptime.",
      bgColor: "bg-green-200",
    },
    {
      image: "/flexible-billing.jpg",
      title: "Flexible Billing",
      description:
        "Pay hourly, monthly or quarterly—choose a cycle that matches your workload and budget.",
      bgColor: "bg-green-600",
    },
    {
      image: "/sticky-session.jpg",
      title: "Sticky Sessions",
      description:
        "Keep user sessions persistent with load balancer or application cookies, or disable for true round robin.",
      bgColor: "bg-green-300",
    },
  ];

  const whyChoose = [
    {
      title: "High Availability & Reliability",
      description:
        "Incoming traffic is spread across multiple servers, preventing overload and ensuring consistent uptime for your applications.",
      icon: <Shield className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Flexible Billing Options",
      description:
        "Pay hourly, monthly or even quarterly—choose a billing cycle that matches your workload and budget requirements.",
      icon: <Clock className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Built-in Sticky Sessions",
      description:
        "Keep user sessions persistent with load balancer or application cookies, or disable stickiness for true round robin distribution.",
      icon: <Cookie className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Smart Algorithms",
      description:
        "Pick from Source-based routing, Round Robin or Least Connections to optimize performance for your specific use case.",
      icon: <Gauge className="w-8 h-8 text-green-600" />,
    },
  ];

  const algorithms = [
    {
      step: "1",
      title: "Round Robin",
      description: "Distribute requests evenly across all servers",
    },
    {
      step: "2",
      title: "Least Connections",
      description: "Route to server with fewest active connections",
    },
    {
      step: "3",
      title: "Source-Based",
      description: "Route based on client IP for consistency",
    },
    {
      step: "4",
      title: "Sticky Sessions",
      description: "Maintain session persistence with cookies",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Features Section */}
        <div className="mb-20 mt-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-700">
            Next Level Traffic Distribution
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            GCX&apos;s Load Balancer is your go-to tool for keeping cloud
            applications fast and resilient with extra control and flexibility.
          </p>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:px-0 md:px-16 px-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl h-[300px] sm:h-[320px] lg:h-[350px] cursor-pointer bg-white w-full"
              >
                {/* Background Image */}
                <div className="rounded-2xl w-full h-full relative overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover object-center"
                  />
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

        {/* Why Choose Section */}
        <div className="mb-20 mt-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-700">
            Why Choose GCX Load Balancer?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Enterprise-grade features designed for modern cloud applications
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChoose.map((feature, index) => (
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

        {/* Algorithms Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-700">
            Smart Load Balancing Algorithms
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose the right algorithm to optimize performance for your workload
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {algorithms.map((item, index) => (
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

        {/* Admin Packaging Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-700">
            Admin-Friendly Packaging
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Define custom packages with flexible configuration options
          </p>

          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-start gap-4 mb-6">
              <Settings className="w-10 h-10 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">
                  Custom Load Balancer Packages
                </h3>
                <p className="text-gray-600 mb-4">
                  GCX lets admins define Load Balancer packages with custom
                  pricing and tags. Set a package name, cloud provider, zone and
                  choose the configuration that fits your needs.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Custom package naming and tagging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>
                      Flexible pricing models (hourly, monthly, quarterly)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Multi-zone and multi-provider support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Easy configuration management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-700">
            Perfect For Any Workload
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            From simple web apps to complex microservices architectures
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-10 h-10 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-700">
                  Web Applications
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Distribute HTTP/HTTPS traffic across multiple web servers to
                ensure high availability and fast response times for your users.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>SSL/TLS termination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Session persistence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Health monitoring</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-10 h-10 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-700">
                  Microservices
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Handle complex multi-tier architectures with intelligent routing
                and load distribution across your service mesh.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Service discovery integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Dynamic scaling support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Advanced routing rules</span>
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

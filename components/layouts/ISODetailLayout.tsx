"use client";

import React from "react";
import Image from "next/image";
import {
  BookOpen,
  PlayCircle,
  Scale,
  HardDrive,
  Zap,
  Shield,
  CheckCircle,
} from "lucide-react";
import { productDetailLayout } from "@/data/productDetailLayout";
import GetStartedCard from "../card/GetStartedCard";

interface ISODetailLayoutProps {
  product: productDetailLayout;
}

export default function ISODetailLayout({}: ISODetailLayoutProps) {
  const features = [
    {
      icon: <BookOpen className="w-20 h-20 text-green-800" />,
      title: "Custom OS",
      description: "Build VMs using any custom OS you want.",
      bgColor: "bg-green-200",
      image: "/custom-os.png",
    },
    {
      icon: <PlayCircle className="w-20 h-20 text-green-800" />,
      title: "Flexible sources",
      description: "Upload a local image file.",
      bgColor: "bg-green-600",
      image: "/upload-file.png",
    },
    {
      icon: <Scale className="w-20 h-20 text-green-800" />,
      title: "Simple Management",
      description:
        "Assign ISOs to project and choose where they are stored for organised resource tracking.",
      bgColor: "bg-green-300",
      image: "/simple-management.png",
    },
  ];

  const useCases = [
    {
      title: "Custom OS Installation",
      description:
        "Deploy specialized Linux distributions or custom-built operating systems tailored to your needs.",
      icon: <HardDrive className="w-8 h-8 text-green-600" />,
    },
    {
      title: "System Recovery",
      description:
        "Boot into recovery environments to diagnose issues, repair systems, or restore data.",
      icon: <Shield className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Testing & Development",
      description:
        "Test new OS versions, beta releases, or development builds in isolated environments.",
      icon: <Zap className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Specialized Appliances",
      description:
        "Run network appliances, security tools, or specialized software distributions.",
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Upload Your ISO",
      description: "Upload ISO files via web interface",
    },
    {
      step: "2",
      title: "Attach to VM",
      description: "Mount the ISO to any virtual machine",
    },
    {
      step: "3",
      title: "Boot & Install",
      description: "VM boots from ISO automatically",
    },
    {
      step: "4",
      title: "Detach When Done",
      description: "Remove ISO after installation completes",
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Features Section */}
        <section className="px-4 py-6">
          <div className="max-w-7xl mx-auto mb-24">
            {/* title and description */}
            <div className="my-12 text-center mx-24">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700">
                Attaching an ISO
              </p>
              <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
                From the Instance Overview page, select Attach ISO for VM to
                mount your image to a virtual machine. Your VM will boot from
                the ISO, letting you install the OS or run recovery tools
                immediately.
              </p>
            </div>

            {/* Features grid with hover animation */}
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
        </section>

        {/* How It Works Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-700">
            How It Works
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Get your custom OS running in four simple steps
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

        {/* Use Cases Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-700">
            Common Use Cases
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            ISOs are perfect for a variety of scenarios
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 flex gap-4"
              >
                <div className="flex-shrink-0">{useCase.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-gray-600">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular ISOs Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-700">
            Popular ISO Images
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Commonly used operating systems and tools
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Ubuntu Server",
              "CentOS Stream",
              "Debian",
              "Rocky Linux",
              "AlmaLinux",
              "Fedora Server",
              "openSUSE",
              "Arch Linux",
            ].map((os, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center hover:border-green-600 transition-colors cursor-pointer"
              >
                <p className="font-medium text-gray-700">{os}</p>
              </div>
            ))}
          </div>
        </div>

        {/* get started card section */}
        <GetStartedCard />
      </div>
    </div>
  );
}

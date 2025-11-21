import PricingCard from "@/components/card/PricingCard";
import HeroComponent from "@/components/HeroComponent";
import React from "react";

export default function BackupPricingPage() {
   const backupData = [
    {
      id: "1",
      title: "File Backup",
      price: "19",
      subTitle: "Protect your files",
      desc: [
        "Automated file backup with version history",
        "Supports all file types and folders",
        "Restore individual files instantly",
        "Cloud and local storage options",
      ],
    },
    {
      id: "2",
      title: "Database Backup",
      price: "49",
      subTitle: "Secure your databases",
      desc: [
        "Supports MySQL, PostgreSQL, MongoDB, and more",
        "Incremental and full backups",
        "Point-in-time recovery for minimal data loss",
        "Encrypted and compressed backups",
      ],
    },
    {
      id: "3",
      title: "Server Backup",
      price: "79",
      subTitle: "Complete system protection",
      desc: [
        "Full server image backup for easy restore",
        "Supports virtual and physical servers",
        "Automated scheduling and monitoring",
        "Disaster recovery ready",
      ],
    },
    {
      id: "4",
      title: "Cloud Backup",
      price: "59",
      subTitle: "Backup to the cloud",
      desc: [
        "Secure cloud storage with encryption",
        "Supports multiple cloud providers",
        "Flexible retention policies",
        "Access and restore anywhere, anytime",
      ],
    },
    {
      id: "5",
      title: "Enterprise Backup",
      price: "Custom",
      subTitle: "Tailored for large organizations",
      desc: [
        "Custom backup plans based on volume and needs",
        "High availability and redundancy",
        "Advanced compliance and reporting",
        "24/7 enterprise support with SLAs",
      ],
    },
  ];

  return (
    <div>
      <div>
        <div>
          {/* Hero section */}
          <HeroComponent
            height="h-[600px]"
            image="/hero-bg.png"
            title="Cloud Backup"
            description="Keep your data safe and always accessible with automated, secure backup solutions. Protect files, databases, and entire systems against accidental loss, corruption, or disasters. Restore quickly and confidently whenever you need it, with flexible cloud or on-premise options."
          />

          <div className="w-screen mt-10">
            <div className="py-16 lg:py-32 md:py-32">
              <div className="max-w-7xl mx-auto space-y-8">
                <div className="lg:mx-8 md:mx-8 mx-4">
                  <p className="lg:text-4xl md:text-4xl text-2xl mb-4 font-bold text-gray-700">
                    Cloud Backup Price
                  </p>
                  <p className="text-base text-gray-600">
                    Choose a backup plan that fits your needs. Our pricing is simple and transparent: pay per resource, storage, or user with options for small teams, growing businesses, or enterprise environments. All plans include encryption, automated scheduling, and easy restores — so you only pay for what you use while keeping your data secure.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-8 px-4 lg:px-8 md:px-8">
                  {backupData.map((item) => (
                    <PricingCard
                      key={item.id}
                      slug={item.id}
                      title={item.title}
                      price={item.price}
                      subTitle={item.subTitle}
                      desc={item.desc}
                      buttonLabel="Get Started"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

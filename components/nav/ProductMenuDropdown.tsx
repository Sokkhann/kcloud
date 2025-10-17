import React from "react";

export default function ProductDropDown() {
  const featuredProducts = [
    {
      title: "Snapshots",
      desc: "Point-in-time copy of a VM or volume.",
    },
    {
      title: "Backups",
      desc: "Data protection for recovery.",
    },
    {
      title: "Templates",
      desc: "Pre-built VM images to speed instance creation.",
    },
    {
      title: "ISOs",
      desc: "Bootable OS or tool images used to install or rescue a VM.",
    },
    {
      title: "Affinity Groups",
      desc: "Policies to keep VMs together or apart for performance/HA.",
    },
  ];

  const productCategories = [
    {
      title: "Compute",
      items: ["Virtual Machines", "VNF Appliances", "Kubernetes", "Apps"],
    },
    {
      title: "Storage & Data Protection",
      items: ["Block Storage", "Snapshots", "Backups", "Templates", "ISOs"],
    },
    {
      title: "Networking",
      items: ["Networks", "Load Balancers", "DNS"],
    },
    {
      title: "Security & Access",
      items: ["Firewall", "VPN", "Access Control"],
    },
  ];

  return (
    <div className="top-full left-0 w-screen bg-white h-fit z-50">
      <div className="max-w-[1400px] py-6 mx-auto flex justify-between text-[16px] gap-8">
        {/* Featured Section */}
        <section className="w-full sm:max-w-[400px] bg-green-700/10 p-8 rounded-lg">
          <p className="font-normal text-[12px] text-gray-500">
            Featured Products
          </p>

          <div className="mt-4 space-y-4 text-[14px]">
            {featuredProducts.map((item, index) => (
              <div key={index} className="flex flex-col">
                <p className="font-semibold">{item.title}</p>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Product Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 items-start flex-1 h-fit">
          {productCategories.map((category, index) => (
            <section key={index} className="max-w-[292px] px-4">
              <p className="font-bold pb-4 hover:underline cursor-pointer transition">
                {category.title}
              </p>
              <div className="space-y-1 text-gray-700">
                {category.items.map((item, i) => (
                  <p key={i} className="hover:text-green-600 cursor-pointer transition">
                    {item}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

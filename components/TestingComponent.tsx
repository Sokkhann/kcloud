"use client"

import React, { useState } from "react";

export default function TestingComponent() {
  const tabs = [
    { id: 1, label: "Cardiology", content: "Content for Cardiology: Heart health, procedures, and treatments." },
    { id: 2, label: "Neurology", content: "Content for Neurology: Brain, nerves, and neurological disorders." },
    { id: 3, label: "Oncology", content: "Content for Oncology: Cancer research, treatments, and patient care." },
    { id: 4, label: "Pediatrics", content: "Content for Pediatrics: Child health, growth, and development." },
  ];

  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Tab Buttons */}
      <div className="flex gap-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-6 py-2 rounded-full text-lg font-medium
              transition duration-300 ease-in-out
              ${activeTab === tab.id
                ? "bg-green-600 text-white shadow-lg"
                : "bg-green-500 text-gray-100 hover:bg-green-400"}
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6 bg-green-100 rounded-2xl shadow-inner">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {tabs.find((tab) => tab.id === activeTab)?.label}
        </h3>
        <p className="text-gray-700">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </p>
      </div>
    </div>
  );
}

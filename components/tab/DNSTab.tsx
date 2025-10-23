import React from "react";

interface DNSTabProps {
  tabs: string[];
  activeTab?: number;
  onTabClick?: (index: number) => void;
}

export default function DNSTab({ tabs, activeTab = 0, onTabClick }: DNSTabProps) {
  return (
    <div className="flex gap-2">
      {tabs.map((item, index) => (
        <div
          key={index}
          onClick={() => onTabClick?.(index)}
          className={`
            w-48 h-12 rounded-t-2xl text-center p-4 cursor-pointer tranasition-colors font-bold
            ${activeTab === index ? "bg-green-900/10 text-green-800" : "bg-green-900/30 text-green-800"}
          `}
        >
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}

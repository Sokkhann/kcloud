import DNSCard from "@/components/card/DNSCard";
import React from "react";

export default function DNSPage() {
  return (
    <div>
      <DNSCard
        titleL="Retional pricing starts at $12 per month"
        descL="Start with one node and add up to 100 of them, adding or removing nodes as you go."
        titleR="Each node increase Load Balancer capacity by:"
      />
    </div>
  );
}

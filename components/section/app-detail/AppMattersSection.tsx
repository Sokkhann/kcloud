"use client"

import { Lightbulb, Shield, Zap } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function AppMattersSection() {

  const [mounted, setMounted] = useState(false);
  const isMd = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isLg = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Default size for server (to avoid mismatch)
  let iconSize = 24;
  if (mounted) {
    if (isMd) iconSize = 32;
    if (isLg) iconSize = 32;
  }
  
  return (
    <div className="max-w-7xl mx-auto py-16 lg:py-32 md:py-32">
      <section className=" lg:mx-8 md:mx-8 mx-4 lg:py-24 md:py-24 py-12 bg-gradient-to-br bg-white text-center rounded-2xl px-4">
        <h2 className="lg:text-4xl md:text-4xl text-2xl font-bold mb-6 text-gray-600">
          Why It Matters
        </h2>
        <p className="max-w-3xl mx-auto text-base leading-relaxed opacity-90 text-gray-600">
          The App Platform empowers teams to deliver software faster, safer, and
          smarter — eliminating manual deployments and complexity so developers
          can focus on innovation.
        </p>

        <div className="mt-10 grid lg:flex md:flex lg:gap-8 md:gap-8 gap-4 mx-4 lg:mx-8 md:mx-8">
          <div className="p-4 rounded-xl bg-gcxprimary/10 backdrop-blur-sm text-gray-700">
            <span className="lg:text-2xl md:text-2xl text-lg font-semibold flex items-center justify-center gap-4">
              {" "}
              <Zap className="text-gcxprimary" size={iconSize} /> Speed
            </span>
            <p className="text-base opacity-80 mt-2 textgra6">
              Accelerate release cycles and time-to-market.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-gcxprimary/10 backdrop-blur-sm text-gray-700">
            <span className="lg:text-2xl md:text-2xl text-lg font-semibold flex items-center justify-center gap-4">
              {" "}
              <Shield className="text-gcxprimary" size={iconSize} /> Stability
            </span>
            <p className="text-base opacity-80 mt-2 text-gray-600">
              Reliable rollouts and instant recovery when needed.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-gcxprimary/10 backdrop-blur-sm text-gray-700">
            <span className="lg:text-2xl md:text-2xl text-lg font-semibold flex items-center justify-center gap-4">
              {" "}
              <Lightbulb className="text-gcxprimary" size={iconSize} /> Focus
            </span>
            <p className="text-base opacity-80 mt-2 text-gray-600">
              Let developers build features, not fight infrastructure.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

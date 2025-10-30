import { Lightbulb, Shield, Zap } from "lucide-react";
import React from "react";

export default function AppMattersSection() {
  return (
    <div className="max-w-7xl mx-auto py-24 ">
      <section className="relative w-full py-24 bg-gradient-to-br bg-white text-center rounded-2xl">
        <h2 className="text-4xl font-bold mb-6 text-gray-600">
          Why It Matters
        </h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed opacity-90 text-gray-600">
          The App Platform empowers teams to deliver software faster, safer, and
          smarter — eliminating manual deployments and complexity so developers
          can focus on innovation.
        </p>

        <div className="mt-10 flex justify-center gap-8">
          <div className="p-4 rounded-xl bg-green-800/10 backdrop-blur-sm text-gray-700">
            <span className=" text-2xl font-semibold flex items-center justify-center gap-4">
              {" "}
              <Zap className="text-green-800" size={32} /> Speed
            </span>
            <p className="text-sm opacity-80 mt-2 textgra6">
              Accelerate release cycles and time-to-market.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-green-800/10 backdrop-blur-sm text-gray-700">
            <span className=" text-2xl font-semibold flex items-center justify-center gap-4">
              {" "}
              <Shield className="text-green-800" size={32} /> Stability
            </span>
            <p className="text-sm opacity-80 mt-2 text-gray-600">
              Reliable rollouts and instant recovery when needed.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-green-800/10 backdrop-blur-sm text-gray-700">
            <span className=" text-2xl font-semibold flex items-center justify-center gap-4">
              {" "}
              <Lightbulb className="text-green-800" size={32} /> Focus
            </span>
            <p className="text-sm opacity-80 mt-2 text-gray-600">
              Let developers build features, not fight infrastructure.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

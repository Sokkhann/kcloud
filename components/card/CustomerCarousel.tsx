"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import CustomerCard from "./CustomerCard";
import { customerFeedback } from "@/data/customerFeedback";

export default function CustomerCarousel({ speed = 25 }) {
  const controls = useAnimation();

  // Duplicate multiple times for smooth infinite effect
  const duplicated = [...customerFeedback, ...customerFeedback];

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"], // move full width of first 2 sets (since we have 3 copies)
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      },
    });
  }, [controls, speed]);

  const handleMouseEnter = () => controls.stop();
  const handleMouseLeave = () => {
    controls.start({
      x: ["0%", "-66.66%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      },
    });
  };

  return (
    <section className="w-screen overflow-hidden bg-transparent">
      <div
        className="w-full flex items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          animate={controls}
          className="flex gap-6 whitespace-nowrap py-6"
          style={{ willChange: "transform" }}
        >
          {duplicated.map((c, i) => (
            <CustomerCard key={i} description={c.description} title={c.title} logo={c.logo}/>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

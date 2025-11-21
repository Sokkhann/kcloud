"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import CustomerCard from "./CustomerCard";
import customerOverview from "@/data/cusomterReviews.json";

export default function CustomerCarousel() {
  const controls = useAnimation();

  // Duplicate data for smooth infinite effect
  const duplicated = [...customerOverview, ...customerOverview];

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;

    if (!isMobile) {
      controls.start({
        x: ["0%", "-50%"], // move left across half (because duplicated twice)
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30, // speed (seconds)
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [controls]);

  return (
    <section className="px-4 md:px-8 lg:px-0 overflow-hidden">
      <div className="relative w-full">
        {/* Large screens (auto infinite animation) */}
        <motion.div
          className="hidden lg:flex w-max space-x-8 py-6"
          animate={controls}
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() =>
            controls.start({
              x: ["0%", "-50%"],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              },
            })
          }
        >
          {duplicated.map((item, index) => (
            <div
              key={index}
              className="w-[410px] flex-shrink-0"
            >
              <CustomerCard
                logo={item.logo}
                title={item.companyName}
                description={item.review}
              />
            </div>
          ))}
        </motion.div>

        {/* Mobile & Tablet: Scroll manually */}
        <div className="flex lg:hidden w-full overflow-x-auto space-x-4 md:space-x-8 py-6 scrollbar-hide">
          {customerOverview.map((item, index) => (
            <div
              key={index}
              className="w-[350px] md:w-[310px] flex-shrink-0"
            >
              <CustomerCard
                logo={item.logo}
                title={item.companyName}
                description={item.review}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

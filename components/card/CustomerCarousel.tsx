"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import CustomerCard from "./CustomerCard";
import { customerFeedback } from "@/data/customerFeedback";

export default function CustomerCarousel({ speed = 25 }) {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate cards multiple times for smooth infinite loop
  const cards = customerFeedback;

  // Infinite scroll animation for desktop
  useEffect(() => {
    if (!isMobile && !isHovered) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [controls, speed, isMobile, isHovered]);

  // Center carousel start for both desktop & mobile
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      container.scrollLeft = (scrollWidth - clientWidth) / 2;
    }
  }, [isMobile]);

  return (
    <section>
      {/* for large screen */}
      <section
        className="lg:w-full lg:flex hidden overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={containerRef}
          className="w-full flex items-center overflow-x-hidden"
        >
          <motion.div
            className="flex gap-6 whitespace-nowrap py-6 cursor-grab"
            style={{ willChange: "transform" }}
            animate={controls}
            drag={isMobile} // Enable drag only on mobile
            dragConstraints={{ left: 0, right: 0 }} // Allow free horizontal drag
            dragElastic={0.1} // Slight resistance for smooth feel
          >
            {cards.map((c, i) => (
              <CustomerCard
                key={i}
                description={c.description}
                title={c.title}
                logo={c.logo}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* for medium and small screen */}
      <section className="w-screen lg:hidden overflow-x-auto py-6 scrollbar-hide lg:ml-0 md:ml-8 ml-4">
        <div className="flex justify-start md:gap-6 gap-4 w-max">
          {cards.map((c, i) => (
            <div key={i} className="">
              <CustomerCard
                title={c.title}
                description={c.description}
                logo={c.logo}
              />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

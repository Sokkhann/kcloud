import { useState } from "react";
import { motion } from "framer-motion";
import { ImgTitleDescCardProps } from "@/type/dataTypes";

interface Props {
  card: ImgTitleDescCardProps
}

export default function WaveCard({card}: Props) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="w-full">
      <motion.div
        onClick={() => {
          setClicked(true);
          setTimeout(() => setClicked(false), 600); // Reset animation
        }}
        className="relative w-full p-6 rounded-2xl border-1 border-green-500 cursor-pointer overflow-hidden bg-white"
      >
        {/* Water wave animation */}
        {clicked && (
          <motion.div
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 6, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 w-40 h-40 bg-green-300 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          />
        )}

        <h2 className="lg:text-2xl md:text-2xl text-lg font-semibold text-gray-800 mb-2 text-start">{card.title}</h2>
        <p className="text-gray-600 text-start">{card.desc}</p>
      </motion.div>
    </div>
  );
}

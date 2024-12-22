"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface AppleStyleSectionProps {
  title: string;
  content: string;
  index: number;
}

export const AppleStyleSection: React.FC<AppleStyleSectionProps> = ({
  title,
  content,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="py-24 relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full mx-auto px-6">
        <motion.h2
          animate={{
            y: isHovered ? -10 : 0,
          }}
          className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900"
        >
          {title}
        </motion.h2>
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0.8,
          }}
          className="text-lg md:text-xl text-gray-600 leading-relaxed"
        >
          {content}
        </motion.div>
        <motion.div
          animate={{
            scaleX: isHovered ? 1 : 0,
          }}
          className="h-0.5 bg-gray-900 mt-4 origin-left"
        />
      </div>
    </motion.div>
  );
};

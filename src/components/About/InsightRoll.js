'use client'
import React from "react";
import { motion } from "framer-motion";

const InsightRoll = ({ insights }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 10,
          delay: 0.5
        }}
        className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
                    text-white shadow-2xl rounded-t-2xl py-1 px-4"
      >
        <div className="flex items-center justify-center space-x-4 overflow-hidden">
          {insights.map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 10,
                delay: index * 0.2
              }}
              className="flex items-center group"
            >
              <span className="text-sm sm:text-base font-medium tracking-wider 
                               transition-all duration-300 
                               group-hover:text-yellow-300 
                               group-hover:scale-110">
                {text}
              </span>
              {index < insights.length - 1 && (
                <span className="mx-4 opacity-50 text-white/50">|</span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default InsightRoll;

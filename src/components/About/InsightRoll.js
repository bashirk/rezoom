'use client'
import React from "react";
import { motion } from "framer-motion";

const InsightRoll = ({ insights }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 10,
          delay: 0.2
        }}
        className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
                    text-white shadow-2xl rounded-t-2xl py-2"
      >
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{
            duration: 20, // Adjust speed here
            repeat: Infinity,
            ease: "linear"
          }}
          className="flex items-center space-x-4 whitespace-nowrap"
        >
          {[...insights, ...insights].map((text, index) => (
            <div key={index} className="flex items-center group">
              <span className="text-sm sm:text-base font-medium tracking-wider 
                               transition-all duration-300 
                               group-hover:text-yellow-300 
                               group-hover:scale-110">
                {text}
              </span>
              <span className="mx-4 opacity-50 text-white/50">|</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InsightRoll;

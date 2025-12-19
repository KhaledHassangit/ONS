"use client";
import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <div className="relative w-24 h-24 mb-6">
        <motion.div
          className="absolute inset-0 border-t-4 border-(--main-orange-color) rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute inset-0 border-r-4 border-blue-300 rounded-full opacity-75"
          animate={{ rotate: 240 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Loading</h2>
        <p className="text-sm text-gray-500">Please wait a moment...</p>
      </motion.div>
    </div>
  );
};

export default Loading;

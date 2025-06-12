"use client";
import { motion } from "framer-motion";

export default function AnimatedBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
      className="min-h-screen bg-[length:400%_400%] bg-gradient-to-br from-purple-300 via-orange-300 to-mint-50 relative overflow-hidden"
    >
      {children}
    </motion.div>
  );
}

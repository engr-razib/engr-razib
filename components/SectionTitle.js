"use client";
import { motion } from "framer-motion";

export default function SectionTitle({kicker, title, subtitle}){
  return (
    <div className="text-center mb-10">
      {kicker && <span className="badge">{kicker}</span>}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-4xl font-bold mt-3"
      >
        {title}
      </motion.h2>
      {subtitle && <p className="text-slate-600 mt-2 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}

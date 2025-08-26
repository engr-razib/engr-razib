"use client";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { profile } from "./data";

export default function Services(){
  return (
    <section id="services" className="section">
      <SectionTitle kicker="What I Do" title="Services" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profile.services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="card hover:-translate-y-1 transition-transform"
          >
            <h3 className="font-semibold text-lg">{s.title}</h3>
            <p className="text-slate-600 mt-2">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

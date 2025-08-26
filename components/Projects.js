"use client";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { profile } from "./data";

export default function Projects(){
  return (
    <section id="projects" className="section">
      <SectionTitle kicker="Selected Work" title="Featured Projects" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profile.projects.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx*0.05 }}
            className="card"
          >
            <h3 className="font-semibold">{p.title}</h3>
            <ul className="mt-3 text-slate-700 list-disc ml-5 space-y-1">
              {p.points.map((pt,i)=>(<li key={i}>{pt}</li>))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

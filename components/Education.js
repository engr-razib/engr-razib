"use client";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { profile } from "./data";

export default function Education(){
  return (
    <section id="education" className="section">
      <SectionTitle kicker="Academics" title="Education" />
      <div className="grid md:grid-cols-3 gap-6">
        {profile.education.map((e,i)=>(
          <motion.div key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card">
            <h3 className="font-semibold">{e.degree}</h3>
            <p className="text-slate-600">{e.org}</p>
            <p className="text-slate-500 mt-1 text-sm">{e.meta}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

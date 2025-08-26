"use client";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { profile } from "./data";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionTitle kicker="Journey" title="Experience" />

      <div className="relative w-full">
        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 h-full border-l-2 border-slate-300 -translate-x-1/2"></div>

        {profile.experience.map((exp, idx) => {
          const isLeft = idx % 2 === 0; // Alternate left/right
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative w-full flex ${
                isLeft ? "justify-start pr-10" : "justify-end pl-10"
              } mb-12`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 top-4 w-6 h-6 bg-blue-500 rounded-full border-4 border-white -translate-x-1/2 z-10"></div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -4 }}
                className="relative card w-[45%] p-6 overflow-hidden group"
              >
                {/* Background Company Name */}
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.25 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 flex items-center justify-center text-5xl font-extrabold text-slate-400 pointer-events-none select-none group-hover:opacity-15 transition-opacity duration-500"
                >
                  {exp.company}
                </motion.span>

                {/* Foreground Content */}
                <div className="relative z-10">
                  <h3 className="font-semibold text-lg">{exp.company}, {exp.location}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {exp.roles.map((r, i) => (
                      <span key={i} className="badge">
                        {r.title} • {r.period}
                      </span>
                    ))}
                  </div>
                  <ul className="mt-4 list-disc ml-5 text-slate-700 space-y-1">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

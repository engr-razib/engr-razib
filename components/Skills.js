"use client";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { profile } from "./data";

function Pill({text}){
  return <span className="badge">{text}</span>;
}

export default function Skills(){
  const groups = [
    ["Front-End Development", profile.skills.frontend],
    ["DevOps & Cloud", profile.skills.devops],
    ["Back-End Development", profile.skills.backend],
    ["Leadership & Management", profile.skills.leadership],
    ["Other Technologies", profile.skills.other],
  ];
  return (
    <section id="skills" className="section">
      <SectionTitle kicker="Toolbox" title="Skills & Technologies" />
      <div className="space-y-10">
        {groups.map(([title, list], idx) => (
          <div key={idx} className="card">
            <h3 className="font-semibold">{title}</h3>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-4 flex flex-wrap gap-2"
            >
              {list.map((s, i) => <Pill key={i} text={s} />)}
            </motion.div>
          </div>
        ))}
      </div>
      <div className="mt-10 card">
        <h3 className="font-semibold">Badges Based on My Skills</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {profile.badges.map((b,i)=>(<span key={i} className="badge">{b}</span>))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { profile } from "./data";

export default function Contact(){
  return (
    <section id="contact" className="section">
      <SectionTitle kicker="Work With Me" title="Contact" subtitle="For hiring, consulting, or collaboration — reach out directly." />
      <div className="grid md:grid-cols-3 gap-6">
        <motion.a href={profile.contacts.website} target="_blank" rel="noreferrer" className="card hover:-translate-y-1 transition-transform">
          <div>
            <div className="font-semibold">Website</div>
            <div className="text-slate-600">{profile.contacts.website}</div>
          </div>
        </motion.a>
        <div className="card">
          <div className="font-semibold">Email</div>
          <a className="text-slate-600 link" href={`mailto:${profile.contacts.email}`}>{profile.contacts.email}</a>
        </div>
        <div className="card">
          <div className="font-semibold">Phone</div>
          <div className="text-slate-600">{profile.contacts.phone}</div>
        </div>
      </div>
      <p className="text-center text-slate-500 mt-6">{profile.contacts.address}</p>
    </section>
  );
}

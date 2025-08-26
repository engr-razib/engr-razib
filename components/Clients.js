"use client";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { profile } from "./data";

export default function Clients(){
  return (
    <section id="clients" className="section">
      <SectionTitle kicker="Trusted By" title="Key Clients" />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-semibold">International</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {profile.clients.international.map((c,i)=>(<span key={i} className="badge">{c}</span>))}
          </div>
        </div>
        <div className="card">
          <h3 className="font-semibold">Government & Local</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {profile.clients.local.map((c,i)=>(<span key={i} className="badge">{c}</span>))}
          </div>
        </div>
      </div>
    </section>
  );
}

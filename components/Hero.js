"use client";
import { motion } from "framer-motion";
import { profile } from "./data";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="section pt-24">
      <div className="grid md:grid-cols-12 gap-8 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7"
        >
          <span className="badge">Principal Engineer • Team Lead • Architect</span>
          <h1 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
            Hi, I'm {profile.name}
          </h1>
          <p className="text-slate-600 mt-4 max-w-2xl">{profile.objective}</p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="badge">
              View Projects
            </a>
            <a href="#contact" className="badge">
              Contact
            </a>
          </div>
        </motion.div>

        {/* Profile Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-5"
        >
          <div className="card aspect-square flex items-center justify-center bg-gray-800">
            <Image
              src="/profile.jpg" // আপনার public ফোল্ডারে profile.jpg রাখতে হবে
              alt={profile.name}
              width={600}
              height={600}
              className="rounded-full border-4 border-gray-600"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

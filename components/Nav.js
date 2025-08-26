"use client";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#clients", label: "Clients" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav(){
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200"
    >
      <nav className="container flex items-center justify-between py-3">
        <a href="#" className="font-semibold tracking-tight">Md. Razib Hossain</a>
        <ul className="hidden md:flex gap-6 text-sm">
          {links.map(l => (
            <li key={l.href}><a className="hover:opacity-70" href={l.href}>{l.label}</a></li>
          ))}
        </ul>
        <a href="#contact" className="badge">Hire Me</a>
      </nav>
    </motion.header>
  );
}

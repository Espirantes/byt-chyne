"use client";

import { motion } from "framer-motion";

export default function MonthlyCosts() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="border-t border-gray-100 py-8"
    >
      <h2 className="font-heading text-2xl font-bold md:text-3xl">
        Měsíční náklady
      </h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border border-gray-100 p-5 text-center">
          <p className="text-xs text-muted">Fond oprav + služby + stočné</p>
          <p className="mt-1 text-xl font-bold">3 300 Kč</p>
        </div>
        <div className="rounded-lg border border-gray-100 p-5 text-center">
          <p className="text-xs text-muted">Elektřina (vč. vytápění)</p>
          <p className="mt-1 text-xl font-bold">3 500 Kč</p>
        </div>
        <div className="rounded-lg border border-accent/30 bg-accent-light/30 p-5 text-center">
          <p className="text-xs font-medium text-primary">Celkem měsíčně</p>
          <p className="mt-1 text-xl font-bold text-accent">6 800 Kč</p>
          <p className="mt-0.5 text-[10px] text-muted">
            Vytápění a ohřev vody elektrokotlem
          </p>
        </div>
      </div>
    </motion.section>
  );
}

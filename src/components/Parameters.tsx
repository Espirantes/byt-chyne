"use client";

import { motion } from "framer-motion";
import { parameters } from "@/lib/data";

export default function Parameters() {
  return (
    <motion.section
      id="parametry"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="py-8"
    >
      <h2 className="font-heading text-2xl font-bold md:text-3xl">
        Parametry bytu
      </h2>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
        {parameters.map((param) => (
          <div
            key={param.label}
            className="rounded-lg border border-gray-100 px-4 py-3"
          >
            <p className="text-xs text-muted">{param.label}</p>
            <p className="mt-0.5 text-sm font-semibold">{param.value}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

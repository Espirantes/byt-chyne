"use client";

import { motion } from "framer-motion";
import { description } from "@/lib/data";

export default function Description() {
  return (
    <motion.section
      id="popis"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="border-t border-gray-100 py-8"
    >
      <h2 className="font-heading text-2xl font-bold md:text-3xl">O bytu</h2>
      <div className="mt-6">
        {description.split("\n\n").map((paragraph, i) => (
          <p
            key={i}
            className="mt-4 text-base leading-relaxed text-muted first:mt-0"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </motion.section>
  );
}

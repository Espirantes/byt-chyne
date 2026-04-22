"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";

export default function FloorPlan() {
  const [open, setOpen] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="border-t border-gray-100 py-8"
    >
      <h2 className="font-heading text-2xl font-bold md:text-3xl">
        Půdorys bytu
      </h2>
      <p className="mt-2 text-sm text-muted">
        Mezonet — 1. podlaží (obývací pokoj s KK, pokoj, koupelna) + 2. podlaží
        (dva pokoje)
      </p>
      <button
        onClick={() => setOpen(true)}
        className="group relative mt-6 block w-full overflow-hidden rounded-xl border border-gray-100 bg-white p-4 transition-shadow hover:shadow-md"
      >
        <Image
          src="/photos/floor-plan.jpeg"
          alt="Půdorys bytu 4+kk — oba podlaží"
          width={960}
          height={640}
          className="mx-auto h-auto w-full max-w-2xl"
        />
        <span className="absolute bottom-4 right-4 rounded-lg bg-black/60 px-3 py-1.5 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
          Zvětšit
        </span>
      </button>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: "/photos/floor-plan.jpeg", alt: "Půdorys bytu 4+kk" }]}
      />
    </motion.section>
  );
}

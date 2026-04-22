"use client";

import { motion } from "framer-motion";
import { penb } from "@/lib/data";

const grades = [
  { letter: "A", label: "Mimořádně úsporná", max: 58, color: "#00843D" },
  { letter: "B", label: "Velmi úsporná", max: 86, color: "#55A850" },
  { letter: "C", label: "Úsporná", max: 115, color: "#C8D400" },
  { letter: "D", label: "Méně úsporná", max: 166, color: "#FFCC02" },
  { letter: "E", label: "Nehospodárná", max: 216, color: "#F48F00" },
  { letter: "F", label: "Velmi nehospodárná", max: 266, color: "#ED6B06" },
  { letter: "G", label: "Mimořádně nehospodárná", max: Infinity, color: "#E2001A" },
];

const activeGrade = grades.find((g) => g.letter === penb.classification)!;

export default function EnergyRating() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="border-t border-gray-100 py-8"
    >
      <h2 className="font-heading text-2xl font-bold md:text-3xl">
        Energetická náročnost budovy
      </h2>
      <p className="mt-2 text-sm text-muted">
        Průkaz energetické náročnosti (PENB) — platnost do {penb.validUntil}
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {/* Energy scale */}
        <div className="rounded-xl border border-gray-100 p-5">
          <p className="mb-4 text-xs font-medium text-muted uppercase tracking-wide">
            Klasifikační třída — primární energie
          </p>
          <div className="space-y-1.5">
            {grades.map((g, i) => {
              const isActive = g.letter === penb.classification;
              const widthPercent = 40 + i * 10;
              return (
                <div key={g.letter} className="flex items-center gap-2">
                  <div
                    className="relative flex items-center rounded-r-md py-1 pl-3 pr-2 text-xs font-bold text-white transition-all"
                    style={{
                      backgroundColor: g.color,
                      width: `${widthPercent}%`,
                      opacity: isActive ? 1 : 0.5,
                    }}
                  >
                    <span>{g.letter}</span>
                    {isActive && (
                      <span className="ml-auto text-[11px] font-semibold">
                        {penb.primaryEnergy} kWh/m².rok
                      </span>
                    )}
                  </div>
                  {isActive && (
                    <svg
                      className="h-4 w-4 shrink-0"
                      viewBox="0 0 16 16"
                      fill={g.color}
                    >
                      <path d="M0 8l6-6v12z" />
                    </svg>
                  )}
                </div>
              );
            })}
          </div>
          <p className="mt-3 text-xs text-muted">
            Třída{" "}
            <span
              className="inline-flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold text-white"
              style={{ backgroundColor: activeGrade.color }}
            >
              {activeGrade.letter}
            </span>{" "}
            — {activeGrade.label}
          </p>
        </div>

        {/* Indicators */}
        <div className="rounded-xl border border-gray-100 p-5">
          <p className="mb-4 text-xs font-medium text-muted uppercase tracking-wide">
            Ukazatele energetické náročnosti
          </p>
          <div className="space-y-3">
            {penb.indicators.map((ind) => (
              <div
                key={ind.label}
                className="flex items-center justify-between border-b border-gray-50 pb-2 last:border-0"
              >
                <span className="text-sm text-muted">{ind.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">
                    {ind.value} {ind.unit}
                  </span>
                  {ind.grade && (
                    <span
                      className="inline-flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold text-white"
                      style={{
                        backgroundColor:
                          grades.find((g) => g.letter === ind.grade)?.color,
                      }}
                    >
                      {ind.grade}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-2 rounded-lg bg-gray-50 px-4 py-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted">Součinitel prostupu tepla</span>
              <span className="font-semibold">
                {penb.heatTransferCoefficient} W/(m².K)
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted">Měrná potřeba tepla</span>
              <span className="font-semibold">
                {penb.heatingDemand} kWh/(m².rok)
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

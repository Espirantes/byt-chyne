"use client";

import { useRef } from "react";

const services = [
  { icon: "🏫", name: "Základní škola", distance: "300 m", time: "4 min pěšky" },
  { icon: "👶", name: "Mateřská škola", distance: "400 m", time: "5 min pěšky" },
  { icon: "🛒", name: "Billa", distance: "700 m", time: "9 min pěšky" },
  { icon: "🚂", name: "Vlak. zastávka", distance: "500 m", time: "28 min → Smíchov" },
  { icon: "🚌", name: "Bus zastávka", distance: "300 m", time: "16 min → Zličín" },
  { icon: "📮", name: "Pošta", distance: "600 m", time: "8 min pěšky" },
  { icon: "🍽️", name: "Restaurace", distance: "200 m", time: "3 min pěšky" },
  { icon: "🏊", name: "Koupaliště", distance: "1,2 km", time: "15 min pěšky" },
  { icon: "🛍️", name: "OC Metropole", distance: "6 km", time: "9 min autem" },
  { icon: "✈️", name: "Letiště V. Havla", distance: "12 km", time: "15 min autem" },
];

export default function NearbyServices() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -280 : 280,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Co je v okolí</h3>
        <div className="flex gap-1">
          <button
            onClick={() => scroll("left")}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-muted transition-colors hover:border-gray-400 hover:text-primary"
            aria-label="Posunout vlevo"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-muted transition-colors hover:border-gray-400 hover:text-primary"
            aria-label="Posunout vpravo"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="mt-4 flex gap-3 overflow-x-auto pb-2 scrollbar-none"
        style={{ scrollbarWidth: "none" }}
      >
        {services.map((s) => (
          <div
            key={s.name}
            className="flex w-40 shrink-0 flex-col items-center rounded-xl border border-gray-100 bg-white px-4 py-5 text-center transition-shadow hover:shadow-sm"
          >
            <span className="text-2xl">{s.icon}</span>
            <p className="mt-2 text-sm font-semibold leading-tight">{s.name}</p>
            <p className="mt-1 text-lg font-bold text-accent">{s.distance}</p>
            <p className="mt-0.5 text-[11px] text-muted">{s.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

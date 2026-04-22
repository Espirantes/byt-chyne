"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#parametry", label: "Parametry" },
  { href: "#popis", label: "O bytu" },
  { href: "#galerie", label: "Fotogalerie" },
  { href: "#lokalita", label: "Lokalita" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-primary/95 backdrop-blur-sm transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="hidden shrink-0 items-center gap-2 sm:flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="h-7 w-7">
            <rect width="64" height="64" rx="14" fill="#c9a96e"/>
            <path d="M16 44V28l16-12 16 12v16H36V34h-8v10z" fill="#1a1a2e"/>
          </svg>
          <span className="text-sm font-semibold text-white">
            Byt 4+kk Chýně
          </span>
        </a>
        <div className="flex gap-1 overflow-x-auto sm:gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white sm:text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

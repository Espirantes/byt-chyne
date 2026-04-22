import Image from "next/image";
import { apartment } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[500px] w-full md:h-screen">
      <Image
        src="/photos/hero.webp"
        alt={apartment.title}
        fill
        preload
        sizes="100vw"
        className="object-cover"
        placeholder="empty"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 px-6 pb-12 md:px-16 md:pb-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent-light">
            {apartment.location}
          </p>
          <h1 className="font-heading text-4xl font-bold text-white md:text-6xl">
            {apartment.title}
          </h1>
          <p className="mt-3 text-lg text-white/80 md:text-xl">
            {apartment.subtitle}
          </p>
          <p className="mt-4 text-3xl font-bold text-accent md:text-4xl">
            {apartment.price}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-accent-light"
            >
              Kontaktovat
            </a>
            <a
              href="#galerie"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Fotogalerie
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

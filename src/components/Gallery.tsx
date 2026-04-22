"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { photos } from "@/lib/data";

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = photos.map((photo) => ({
    src: photo.src,
    alt: photo.alt,
  }));

  return (
    <section id="galerie" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-2xl font-bold md:text-3xl">
          Fotogalerie
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3 lg:grid-cols-4">
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
              <span className="absolute bottom-1.5 left-1.5 rounded bg-black/50 px-2 py-0.5 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100">
                {photo.alt}
              </span>
            </button>
          ))}
        </div>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
        />
      </div>
    </section>
  );
}

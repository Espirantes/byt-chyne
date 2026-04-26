"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { photos } from "@/lib/data";

export default function ImageCarousel() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const slides = photos.map((p) => ({ src: p.src, alt: p.alt, title: p.alt }));

  return (
    <section id="galerie" className="bg-gray-100">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop
        className="aspect-[16/9] w-full md:aspect-[21/9]"
      >
        {photos.map((photo, i) => (
          <SwiperSlide key={photo.src}>
            <button
              onClick={() => {
                setLightboxIndex(i);
                setLightboxOpen(true);
              }}
              className="relative block h-full w-full cursor-zoom-in"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="100vw"
                className="object-cover"
                preload={i === 0}
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center justify-center gap-4 bg-white py-3">
        <button
          onClick={() => {
            setLightboxIndex(0);
            setLightboxOpen(true);
          }}
          className="flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-primary"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
            />
          </svg>
          Zobrazit všechny fotky ({photos.length})
        </button>
      </div>
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
        plugins={[Captions]}
      />
    </section>
  );
}

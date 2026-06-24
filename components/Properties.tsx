"use client";

import { useState } from "react";
import { ImageViewer, type ImageViewerProperty } from "./ImageViewer";

type Property = ImageViewerProperty;

const properties: Property[] = [
  {
    id: "city-apartment",
    name: "Contemporary City Apartment",
    location: "Colombo 03",
    beds: "2 Bed / 2 Bath",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=85",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=85",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200&q=85",
      "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?w=1200&q=85",
    ],
  },
  {
    id: "beachfront-residence",
    name: "Beachfront Residence",
    location: "Negombo",
    beds: "3 Bed / 3 Bath",
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=85",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=85",
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=1200&q=85",
    ],
  },
];

export const Properties = () => {
  const [activeProperty, setActiveProperty] = useState<Property | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (property: Property) => {
    setActiveProperty(property);
    setActiveIndex(0);
  };

  const closeLightbox = () => setActiveProperty(null);

  const showPrev = () => {
    if (!activeProperty) return;
    setActiveIndex((i) => (i === 0 ? activeProperty.images.length - 1 : i - 1));
  };

  const showNext = () => {
    if (!activeProperty) return;
    setActiveIndex((i) => (i === activeProperty.images.length - 1 ? 0 : i + 1));
  };

  return (
    <section id="properties" className="w-full bg-[#f4ecdf] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-5">
          <span className="text-xs font-bold tracking-[0.14em] uppercase text-[#cca752]">
            Our Properties
          </span>
          <span className="block w-7 h-px bg-[#cca752]" />
        </div>

        {/* Heading row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1c1c1c] leading-[1.15]">
            Spaces curated
            <br />
            <em className="not-italic text-[#cca752]">for real living.</em>
          </h2>
          <p className="text-sm text-[#1c1c1c]/60 leading-relaxed max-w-xs">
            Every apartment listed here has been personally inspected and
            verified by the Apartment 22 team.
          </p>
        </div>

        {/* Property grid — two columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {properties.map((property) => (
            <button
              key={property.id}
              type="button"
              onClick={() => openLightbox(property)}
              className="group relative text-left rounded-sm overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cca752]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#1c1c1c]">
                <img
                  src={property.images[0]}
                  alt={property.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Image count */}
                {property.images.length > 1 && (
                  <span className="absolute top-4 right-4 bg-[#1c1c1c]/70 text-[#f4ecdf] text-[10px] font-semibold tracking-wide px-2.5 py-1 rounded-sm">
                    {property.images.length} photos
                  </span>
                )}

                {/* Gradient overlay + label */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <div className="font-serif text-lg font-semibold text-[#f4ecdf] leading-tight">
                      {property.name}
                    </div>
                    <div className="text-xs text-[#f4ecdf]/70 mt-1">
                      {property.location} — {property.beds}
                    </div>
                  </div>
                </div>
              </div>

              {/* Static caption (visible without hover, for mobile/touch) */}
              <div className="mt-3 flex items-baseline justify-between gap-3">
                <span className="font-serif text-base font-semibold text-[#1c1c1c]">
                  {property.name}
                </span>
                <span className="text-xs text-[#1c1c1c]/50 whitespace-nowrap">
                  {property.location}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {activeProperty && (
        <ImageViewer
          property={activeProperty}
          activeIndex={activeIndex}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
          onSelect={setActiveIndex}
        />
      )}
    </section>
  );
};
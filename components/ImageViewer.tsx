"use client";

import { useEffect } from "react";

export type ImageViewerProperty = {
  id: string;
  name: string;
  location: string;
  beds: string;
  images: string[];
};

type ImageViewerProps = {
  property: ImageViewerProperty;
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
};

export const ImageViewer = ({
  property,
  activeIndex,
  onClose,
  onPrev,
  onNext,
  onSelect,
}: ImageViewerProps) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    document.body.style.overflow = "hidden";
    document.body.classList.add("image-viewer-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("image-viewer-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  const hasMultiple = property.images.length > 1;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#2c2c2c]/95 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 sm:top-7 sm:right-8 text-[#fdfaf5]/60 hover:text-[#ffdf4f] text-3xl leading-none transition-colors"
      >
        &times;
      </button>

      {/* Content wrapper — stop click propagation so it doesn't close on image/control click */}
      <div
        className="relative w-full max-w-3xl flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full">
          <img
            src={property.images[activeIndex]}
            alt={`${property.name} — image ${activeIndex + 1}`}
            className="w-full max-h-[70vh] object-contain rounded-sm mx-auto"
          />

          {/* Prev / Next controls */}
          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={onPrev}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#2c2c2c]/60 hover:bg-[#ffdf4f] text-[#fdfaf5] hover:text-[#2c2c2c] flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                  <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={onNext}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#2c2c2c]/60 hover:bg-[#ffdf4f] text-[#fdfaf5] hover:text-[#2c2c2c] flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Caption + counter */}
        <div className="mt-5 text-center">
          <div className="font-serif text-lg font-semibold text-[#fdfaf5]">
            {property.name}
          </div>
          <div className="text-xs text-[#fdfaf5]/50 mt-1">
            {property.location} — {property.beds}
            {hasMultiple && (
              <span>
                {" "}
                · {activeIndex + 1} / {property.images.length}
              </span>
            )}
          </div>
        </div>

        {/* Thumbnail strip */}
        {hasMultiple && (
          <div className="mt-5 flex gap-2 justify-center flex-wrap">
            {property.images.map((img, i) => (
              <button
                key={img}
                type="button"
                onClick={() => onSelect(i)}
                aria-label={`Show image ${i + 1}`}
                className={`w-12 h-12 rounded-sm overflow-hidden border transition-colors ${
                  i === activeIndex
                    ? "border-[#ffdf4f]"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
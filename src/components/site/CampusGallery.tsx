import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CampusImage {
  src: string;
  alt: string;
  caption: string;
}

const campusImages: CampusImage[] = [
  {
    src: "/school_building.jpg",
    alt: "GES Tibba Pir Tannun - Main School Building",
    caption: "Main Campus Building",
  },
  {
    src: "/second_school_img.jpg",
    alt: "GES Tibba Pir Tannun - School Grounds & Facility",
    caption: "School Grounds & Campus View",
  },
];

export function CampusGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % campusImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + campusImages.length) % campusImages.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % campusImages.length);
  };

  return (
    <div
      className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Campus photo gallery"
    >
      {/* Slides */}
      {campusImages.map((img, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={img.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover object-center"
            />
            {/* Caption badge */}
            <div className="absolute bottom-3 left-3 z-10 rounded-full bg-background/85 backdrop-blur-sm px-3.5 py-1 text-xs font-semibold text-primary shadow">
              {img.caption} ({idx + 1}/{campusImages.length})
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous image"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 grid h-8 w-8 place-items-center rounded-full bg-background/80 text-primary shadow hover:bg-background transition-colors"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next image"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 grid h-8 w-8 place-items-center rounded-full bg-background/80 text-primary shadow hover:bg-background transition-colors"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 right-3 z-10 flex gap-1.5">
        {campusImages.map((img, idx) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-6 bg-gold" : "w-2 bg-white/70 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";

export default function GallerySection() {
  return (
    <section className="w-full px-4 md:px-12 lg:px-32 py-16">
      <h2 className="text-3xl md:text-5xl font-bebas text-center mb-12">
        Our Gallery
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div
            key={num}
            className="relative w-full aspect-[4/3] overflow-hidden rounded-lg group"
          >
            {/* Image */}
            <Image
              src={`/images/gallery/${num}.png`}
              alt={`Gallery ${num}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <button
                onClick={() =>
                  window.open(`/images/gallery/${num}.png`, "_blank")
                }
                className="bg-primary text-white px-6 py-3 rounded-full uppercase font-semibold hover:bg-opacity-90 transition"
              >
                View Image
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="bg-primary text-white px-8 py-4 rounded-full uppercase font-semibold hover:bg-opacity-90 transition">
          See Gallery
        </button>
      </div>
    </section>
  );
}

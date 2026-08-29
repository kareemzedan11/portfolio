"use client";

import Image from "next/image";

type ProjectCoverProps = {
  images: string[];
  title: string;
  gradient?: string;
};

export const ProjectCover = ({ images, title, gradient = "from-amber-400 to-amber-600" }: ProjectCoverProps) => {
  const displayImages = images.slice(0, 3);
  
  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center gap-3 p-4`}>
      {displayImages.map((img, index) => (
        <div
          key={index}
          className={`relative bg-gray-900 rounded-2xl p-1 shadow-2xl ${
            index === 1 ? "scale-110 z-10" : "opacity-90"
          }`}
        >
          {/* Phone frame */}
          <div className="w-16 h-32 sm:w-20 sm:h-40 rounded-xl overflow-hidden bg-black relative">
            <Image
              src={img}
              alt={`${title} screen ${index + 1}`}
              fill
              className="object-cover object-top"
            />
          </div>
          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-1 bg-gray-800 rounded-full" />
        </div>
      ))}
    </div>
  );
};

"use client";

import Link from "next/link";

import { AnimatedProjectShowcase } from "@/components/sub/animated-project-showcase";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  slug: string;
  images?: readonly string[];
  gradient?: string;
};

export const ProjectCard = ({
  title,
  description,
  slug,
  images = [],
  gradient,
}: ProjectCardProps) => {
  return (
    <Link
      href={`/projects/${slug}`}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:border-purple-500/50 transition group flex flex-col"
    >
      <div className="overflow-hidden aspect-[16/12] sm:aspect-[16/11] relative bg-[#0d0d1a] w-full min-h-[280px] sm:min-h-[320px]">
        <AnimatedProjectShowcase
          images={images}
          title={title}
          gradient={gradient}
          variant="card"
          className="absolute inset-0 h-full"
          intervalMs={3400}
        />
      </div>

      <div className="relative p-4 flex-1 flex flex-col">
        <h1 className="text-xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 text-sm line-clamp-2 flex-1">{description}</p>
        <span className="mt-3 inline-block text-purple-400 text-sm font-medium">
          View Details →
        </span>
      </div>
    </Link>
  );
};

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";
import {
  FaGooglePlay,
  FaApple,
  FaGithub,
  FaArrowLeft,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import { AnimatedProjectShowcase } from "@/components/sub/animated-project-showcase";
import { PROJECTS } from "@/constants";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

const PROJECT_GRADIENTS: Record<string, string> = {
  "capital-taxi": "from-zinc-900 via-amber-950 to-yellow-900",
  moqawlak: "from-slate-900 via-blue-950 to-indigo-900",
  awfar: "from-rose-950 via-red-900 to-orange-900",
  "talabat-clone": "from-orange-950 via-orange-900 to-amber-800",
  muthamin: "from-emerald-950 via-teal-900 to-slate-900",
  istibdal: "from-sky-950 via-cyan-900 to-slate-900",
  sarfak: "from-slate-950 via-zinc-900 to-cyan-950",
  "mawj-lance": "from-violet-950 via-purple-900 to-indigo-950",
  hisnak: "from-emerald-950 via-green-900 to-teal-950",
};

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = PROJECTS.find((p) => p.slug === slug);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!project) {
    notFound();
  }

  const gradient =
    PROJECT_GRADIENTS[project.slug] ??
    "from-[#1a1035] via-[#12082a] to-[#0a0618]";

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      lightboxIndex === 0 ? project.images.length - 1 : lightboxIndex - 1
    );
  };

  const nextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      lightboxIndex === project.images.length - 1 ? 0 : lightboxIndex + 1
    );
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Animated product demo hero */}
      <div className="relative w-full border-b border-purple-500/20">
        <div className="relative w-full aspect-[16/10] md:aspect-[21/9] max-h-[520px]">
          <AnimatedProjectShowcase
            images={project.images}
            title={project.title}
            gradient={gradient}
            variant="hero"
            className="absolute inset-0 h-full"
            intervalMs={3000}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/40 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-16 pb-8 z-20">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-purple-400 transition mb-4 text-sm"
          >
            <FaArrowLeft />
            <span>Back to Projects</span>
          </Link>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(0.2)}
            className="text-3xl md:text-5xl font-bold text-white mb-3"
          >
            {project.title}
          </motion.h1>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(0.3)}
            className="flex flex-wrap gap-2"
          >
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs md:text-sm bg-white/10 backdrop-blur border border-white/20 rounded-full text-white"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="w-full px-4 md:px-8 lg:px-12 mt-10 max-w-[1500px] mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(0.35)}
          className="mb-14"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-6">
            App Screenshots
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5">
            {project.images.map((img, index) => (
              <button
                key={img}
                onClick={() => openLightbox(index)}
                className="group relative w-full aspect-[9/19] rounded-[1.25rem] overflow-hidden border border-white/10 bg-black shadow-xl shadow-purple-900/10 hover:border-purple-500/60 hover:shadow-purple-500/20 hover:-translate-y-1 transition duration-300"
              >
                <Image
                  src={img}
                  alt={`${project.title} screen ${index + 1}`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                />
                <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-white/20" />
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(0.4)}
            className="md:col-span-3"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              About this project
            </h2>
            <p className="text-gray-300 whitespace-pre-line leading-relaxed text-base md:text-lg">
              {project.fullDescription}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromRight(0.4)}
            className="md:col-span-2"
          >
            {(project.playStoreLink ||
              project.appStoreLink ||
              project.githubLink) && (
              <div className="sticky top-28 space-y-4 p-6 rounded-2xl border border-purple-500/25 bg-[#0d0618]/80 backdrop-blur">
                <h2 className="text-xl font-semibold text-white">Get the App</h2>

                {project.playStoreLink && (
                  <Link
                    href={project.playStoreLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-3 w-full px-5 py-3 bg-[#1a0a2e] border border-purple-500/30 rounded-xl hover:bg-purple-900/30 transition"
                  >
                    <FaGooglePlay className="text-2xl text-green-400" />
                    <div>
                      <div className="text-xs text-gray-400">GET IT ON</div>
                      <div className="text-white font-medium">Google Play</div>
                    </div>
                  </Link>
                )}

                {project.appStoreLink && (
                  <Link
                    href={project.appStoreLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-3 w-full px-5 py-3 bg-[#1a0a2e] border border-purple-500/30 rounded-xl hover:bg-purple-900/30 transition"
                  >
                    <FaApple className="text-2xl text-white" />
                    <div>
                      <div className="text-xs text-gray-400">Download on the</div>
                      <div className="text-white font-medium">App Store</div>
                    </div>
                  </Link>
                )}

                {project.githubLink && (
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-3 w-full px-5 py-3 bg-[#1a0a2e] border border-purple-500/30 rounded-xl hover:bg-purple-900/30 transition"
                  >
                    <FaGithub className="text-2xl text-white" />
                    <span className="text-white font-medium">View Source Code</span>
                  </Link>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-purple-600 transition"
            aria-label="Close"
          >
            <FaTimes />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevLightbox();
            }}
            className="absolute left-4 md:left-8 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-purple-600 transition"
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>
          <div
            className="relative w-full max-w-sm aspect-[9/19] max-h-[85vh] rounded-[2rem] overflow-hidden border-4 border-gray-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={project.images[lightboxIndex]}
              alt={`${project.title} screenshot ${lightboxIndex + 1}`}
              fill
              className="object-cover object-top"
              sizes="400px"
              priority
            />
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextLightbox();
            }}
            className="absolute right-4 md:right-8 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-purple-600 transition"
            aria-label="Next"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}

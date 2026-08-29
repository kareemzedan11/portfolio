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

import { PROJECTS } from "@/constants";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = PROJECTS.find((p) => p.slug === slug);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!project) {
    notFound();
    return null;
  }

  const cover = project.showcase || project.image;

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
      {/* AI cover hero */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] max-h-[480px] overflow-hidden border-b border-purple-500/20">
        <Image
          src={cover}
          alt={`${project.title} cover`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/50 to-transparent" />
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

"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type AnimatedProjectShowcaseProps = {
  images: readonly string[];
  title: string;
  gradient?: string;
  /** Compact for project cards; hero for detail pages */
  variant?: "card" | "hero";
  className?: string;
  intervalMs?: number;
};

const PHONE_COUNT = 3;

export const AnimatedProjectShowcase = ({
  images,
  title,
  gradient = "from-[#1a1035] via-[#12082a] to-[#0a0618]",
  variant = "card",
  className = "",
  intervalMs = 3200,
}: AnimatedProjectShowcaseProps) => {
  const screens = images.length > 0 ? [...images] : [];
  const reduceMotion = useReducedMotion();
  const { ref, inView } = useInView({
    threshold: 0.25,
    rootMargin: "40px",
    triggerOnce: false,
  });

  const [active, setActive] = useState(0);
  const shouldAnimate = inView && !reduceMotion && screens.length > 1;

  useEffect(() => {
    if (!shouldAnimate) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % screens.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [shouldAnimate, screens.length, intervalMs]);

  if (screens.length === 0) {
    return (
      <div
        className={`relative w-full overflow-hidden bg-gradient-to-br ${gradient} ${className}`}
      />
    );
  }

  const phoneSlots =
    screens.length === 1
      ? [0]
      : screens.length === 2
        ? [0, 1]
        : Array.from({ length: PHONE_COUNT }, (_, i) => i);

  const isHero = variant === "hero";

  return (
    <div
      ref={ref}
      className={`relative w-full overflow-hidden bg-gradient-to-br ${gradient} ${className}`}
      aria-label={`${title} animated showcase`}
    >
      {/* Soft depth layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-1/4 left-1/2 h-[70%] w-[70%] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      <div
        className={`relative z-10 flex h-full items-end justify-center ${
          isHero
            ? "gap-3 sm:gap-5 md:gap-8 px-4 pb-4 pt-8 md:pb-6 md:pt-10"
            : "gap-3 sm:gap-4 px-4 pb-5 pt-6"
        }`}
      >
        {phoneSlots.map((slot) => {
          const centerSlot = Math.floor(phoneSlots.length / 2);
          const offset = slot - centerSlot;
          const imageIndex =
            (active + offset + screens.length * 10) % screens.length;

          const isCenter = slot === centerSlot;
          const depth = offset;

          return (
            <PhoneFrame
              key={slot}
              src={screens[imageIndex]}
              alt={`${title} screen ${imageIndex + 1}`}
              isCenter={isCenter}
              depth={depth}
              isHero={isHero}
              animate={shouldAnimate}
              reduceMotion={!!reduceMotion}
              cycleKey={`${slot}-${imageIndex}`}
            />
          );
        })}
      </div>

      {/* Progress dots */}
      {screens.length > 1 && screens.length <= 10 && (
        <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
          {screens.map((_, i) => (
            <span
              key={i}
              className={`h-1 rounded-full transition-all duration-500 ${
                active === i ? "w-4 bg-white/80" : "w-1 bg-white/30"
              }`}
            />
          ))}
        </div>
      )}
      {screens.length > 10 && (
        <div className="absolute bottom-2.5 left-1/2 z-20 h-0.5 w-16 -translate-x-1/2 overflow-hidden rounded-full bg-white/20">
          <motion.div
            className="h-full rounded-full bg-white/80"
            animate={{
              width: `${((active + 1) / screens.length) * 100}%`,
            }}
            transition={{ duration: 0.4 }}
          />
        </div>
      )}
    </div>
  );
};

type PhoneFrameProps = {
  src: string;
  alt: string;
  isCenter: boolean;
  depth: number;
  isHero: boolean;
  animate: boolean;
  reduceMotion: boolean;
  cycleKey: string;
};

const PhoneFrame = ({
  src,
  alt,
  isCenter,
  depth,
  isHero,
  animate,
  reduceMotion,
  cycleKey,
}: PhoneFrameProps) => {
  const floatY = reduceMotion || !animate ? 0 : isCenter ? 6 : 10;
  const floatDuration = isCenter ? 4.2 : 5.2;
  const baseY = isHero && !isCenter ? (depth < 0 ? 18 : 22) : isCenter ? 0 : 10;

  const sizeClass = isHero
    ? isCenter
      ? "w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px]"
      : "w-[90px] sm:w-[115px] md:w-[140px] lg:w-[155px]"
    : isCenter
      ? "w-[118px] sm:w-[136px]"
      : "w-[92px] sm:w-[108px]";

  return (
    <motion.div
      className={`relative ${sizeClass} ${isCenter ? "z-20" : "z-10"}`}
      initial={false}
      style={{
        rotate: depth * (isHero ? 6 : 5),
        scale: isCenter ? 1 : 0.88,
        opacity: isCenter ? 1 : 0.85,
      }}
      animate={
        reduceMotion || !animate
          ? {
              y: baseY,
            }
          : {
              y: [baseY, baseY - floatY, baseY],
            }
      }
      transition={{
        duration: floatDuration,
        repeat: reduceMotion || !animate ? 0 : Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Device shell */}
      <div
        className={`relative aspect-[9/19] overflow-hidden rounded-[1.35rem] border border-white/15 bg-black shadow-2xl ${
          isCenter ? "shadow-black/50 ring-1 ring-white/10" : "shadow-black/40"
        }`}
      >
        {/* Bezel */}
        <div className="absolute inset-[3px] overflow-hidden rounded-[1.15rem] bg-[#0a0a0a]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={cycleKey}
              initial={
                reduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, y: 12, scale: 1.02 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -10, scale: 0.98 }
              }
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover object-top"
                sizes={
                  isHero
                    ? "(max-width: 768px) 40vw, 220px"
                    : "(max-width: 768px) 30vw, 120px"
                }
                priority={isCenter && isHero}
              />
            </motion.div>
          </AnimatePresence>

          {/* Screen gloss */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
        </div>

        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-30 h-1.5 w-8 -translate-x-1/2 rounded-full bg-black/80 sm:w-10" />
      </div>
    </motion.div>
  );
};

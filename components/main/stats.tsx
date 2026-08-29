"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  PROJECTS,
  SKILL_DATA,
} from "@/constants";
import { slideInFromTop } from "@/lib/motion";

const techCount = new Set(
  [
    ...SKILL_DATA,
    ...FRONTEND_SKILL,
    ...BACKEND_SKILL,
    ...FULLSTACK_SKILL,
    ...OTHER_SKILL,
  ].map((s) => s.skill_name)
).size;

const STATS = [
  { label: "Years Experience", value: 3, suffix: "+", decimals: 0 },
  {
    label: "Projects Featured",
    value: PROJECTS.length,
    suffix: "",
    decimals: 0,
  },
  {
    label: "Mobile Apps Built",
    value: PROJECTS.length,
    suffix: "",
    decimals: 0,
  },
  {
    label: "Technologies Used",
    value: techCount,
    suffix: "+",
    decimals: 0,
  },
  {
    label: "Happy Clients",
    value: 10,
    suffix: "+",
    decimals: 0,
  },
] as const;

function AnimatedStat({
  value,
  suffix,
  label,
  active,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
  delay: number;
}) {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, (latest) =>
    `${Math.round(latest)}${suffix}`
  );

  useEffect(() => {
    if (!active) return;
    const timeout = window.setTimeout(() => motionValue.set(value), delay);
    return () => window.clearTimeout(timeout);
  }, [active, delay, motionValue, value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: delay / 1000, duration: 0.45 }}
      className="flex flex-col items-center text-center rounded-2xl border border-purple-500/20 bg-[#0d0618]/50 backdrop-blur px-4 py-8"
    >
      <motion.span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
        {display}
      </motion.span>
      <span className="mt-3 text-sm text-gray-400 tracking-wide">{label}</span>
    </motion.div>
  );
}

export const Stats = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });

  return (
    <section
      id="stats"
      ref={ref}
      className="relative w-full px-6 md:px-10 py-16 flex flex-col items-center"
    >
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={slideInFromTop}
        className="text-center mb-12"
      >
        <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          At a Glance
        </h2>
        <p className="mt-3 text-gray-400 max-w-xl mx-auto text-base">
          Numbers from this portfolio — experience stated by me, projects and
          technologies counted from work shown here.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-6xl">
        {STATS.map((stat, index) => (
          <AnimatedStat
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            active={inView}
            delay={120 * index}
          />
        ))}
      </div>
    </section>
  );
};

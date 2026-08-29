"use client";

import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaPaintBrush,
  FaServer,
  FaFire,
  FaStore,
  FaTachometerAlt,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

import { SERVICES } from "@/constants";
import { slideInFromTop } from "@/lib/motion";

const ICONS = {
  mobile: FaMobileAlt,
  ui: FaPaintBrush,
  api: FaServer,
  firebase: FaFire,
  store: FaStore,
  maintenance: FaTachometerAlt,
} as const;

export const Services = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 });

  return (
    <section
      id="services"
      ref={ref}
      className="relative w-full px-6 md:px-10 py-20 flex flex-col items-center"
    >
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={slideInFromTop}
        className="text-center mb-14"
      >
        <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Services
        </h2>
        <p className="mt-3 text-gray-400 max-w-xl mx-auto text-base">
          Practical Flutter delivery — from UI and integrations to store release
          and ongoing care.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-6xl">
        {SERVICES.map((service, index) => {
          const Icon = ICONS[service.icon as keyof typeof ICONS];
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ delay: 0.08 * index, duration: 0.45 }}
              className="group rounded-2xl border border-purple-500/20 bg-[#0d0618]/60 backdrop-blur p-6 hover:border-cyan-400/40 hover:bg-purple-500/5 transition"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 text-cyan-300 group-hover:border-cyan-400/50 transition">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

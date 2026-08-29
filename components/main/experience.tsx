"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { EXPERIENCE } from "@/constants";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";

export const Experience = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section
      id="experience"
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
          Experience
        </h2>
        <p className="mt-3 text-gray-400 max-w-xl mx-auto text-base">
          3+ years building Flutter apps for Android and iOS — from UI and APIs
          to store release.
        </p>
      </motion.div>

      <div className="relative w-full max-w-3xl">
        <div className="absolute left-[11px] md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-purple-500/60 via-cyan-500/40 to-transparent md:-translate-x-1/2" />

        <div className="flex flex-col gap-10">
          {EXPERIENCE.map((item, index) => (
            <motion.article
              key={item.role + item.period}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromLeft(0.15 + index * 0.15)}
              className={`relative pl-10 md:pl-0 md:w-[calc(50%-1.5rem)] ${
                index % 2 === 0 ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"
              }`}
            >
              <span className="absolute left-0 md:left-auto md:right-[-1.85rem] top-2 h-6 w-6 rounded-full border-2 border-purple-400 bg-[#030014] shadow-[0_0_12px_rgba(168,85,247,0.45)] md:hidden" />
              <span
                className={`hidden md:block absolute top-2 h-6 w-6 rounded-full border-2 border-cyan-400 bg-[#030014] shadow-[0_0_12px_rgba(34,211,238,0.4)] ${
                  index % 2 === 0 ? "-right-[2.1rem]" : "-left-[2.1rem]"
                }`}
              />

              <div className="rounded-2xl border border-purple-500/25 bg-[#0d0618]/70 backdrop-blur px-5 py-5 hover:border-purple-400/50 transition">
                <p className="text-xs tracking-widest uppercase text-cyan-300/90 mb-2">
                  {item.period}
                </p>
                <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                <p className="text-sm text-purple-300 mt-1">{item.place}</p>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  {item.summary}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.achievements.map((point) => (
                    <li
                      key={point}
                      className="text-sm text-gray-300 leading-relaxed flex gap-2"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

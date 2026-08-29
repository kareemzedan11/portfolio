"use client";

import { motion } from "framer-motion";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

import { TESTIMONIALS } from "@/constants";
import { slideInFromTop } from "@/lib/motion";

export const Testimonials = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 });

  return (
    <section
      id="testimonials"
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
          Testimonials
        </h2>
        <p className="mt-3 text-gray-400 max-w-xl mx-auto text-base">
          Client feedback from Flutter projects delivered for Android and iOS.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-6xl">
        {TESTIMONIALS.map((item, index) => (
          <motion.article
            key={item.name + item.project}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ delay: 0.1 * index, duration: 0.45 }}
            className="relative flex flex-col rounded-2xl border border-purple-500/20 bg-[#0d0618]/60 backdrop-blur p-6 hover:border-cyan-400/35 transition"
            dir="rtl"
          >
            <div className="flex items-start justify-between mb-4">
              <FaQuoteRight className="h-5 w-5 text-purple-400/70" />
              <div className="flex gap-1 text-amber-400/90" dir="ltr">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="h-3.5 w-3.5" />
                ))}
              </div>
            </div>

            <p className="text-gray-300 text-[15px] leading-8 flex-1 text-right">
              {item.quote}
            </p>

            <div className="mt-6 pt-4 border-t border-purple-500/15 text-right">
              <p className="text-white font-semibold text-sm">{item.name}</p>
              <p className="text-xs text-gray-500 mt-1" dir="ltr">
                {item.role} · {item.project}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

import { FOOTER_CONTACTS, SOCIALS } from "@/constants";
import { slideInFromTop } from "@/lib/motion";

export const ContactCta = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full px-6 md:px-10 py-20 flex flex-col items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
        transition={{ duration: 0.55 }}
        className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-br from-[#14082a] via-[#0d0618] to-[#061018] px-6 py-12 md:px-12 md:py-14 text-center"
      >
        <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 right-10 h-40 w-40 rounded-full bg-cyan-500/15 blur-3xl" />

        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={slideInFromTop}
          className="relative text-3xl md:text-4xl font-semibold text-white"
        >
          Let&apos;s build your next{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            mobile app
          </span>
        </motion.h2>

        <p className="relative mt-4 text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Need a Flutter developer for Android and iOS? I can help with UI,
          API/Firebase integration, store deployment, and ongoing maintenance —
          from first screen to release.
        </p>

        <div className="relative mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="https://wa.me/201501301718"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 px-7 py-3 text-white font-medium hover:opacity-90 transition min-w-[180px]"
          >
            <FaWhatsapp className="h-5 w-5" />
            WhatsApp Me
          </Link>
        </div>

        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              key={name}
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-purple-500/30 text-gray-300 hover:text-white hover:border-cyan-400/50 transition"
              aria-label={name}
            >
              <Icon className="h-5 w-5" />
            </Link>
          ))}
          {FOOTER_CONTACTS.map(({ link, name, icon: Icon }) => (
            <Link
              key={name}
              href={link}
              target={link.startsWith("tel:") ? undefined : "_blank"}
              rel="noreferrer noopener"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-purple-500/30 text-gray-300 hover:text-white hover:border-cyan-400/50 transition"
              aria-label={name}
            >
              <Icon className="h-5 w-5" />
            </Link>
          ))}
        </div>

        <p className="relative mt-6 text-sm text-gray-500" dir="ltr">
          Phone: 01044764595 · WhatsApp / Telegram: 01501301718
        </p>
      </motion.div>
    </section>
  );
};

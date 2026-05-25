"use client";

import { motion } from "framer-motion";
import { asset } from "@/lib/asset";

export function Hero() {
  return (
    <section id="hero" className="snap-section bg-navy">
      {/* Full-bleed Tkuma sunset image — fills the viewport edge to edge */}
      <img
        src={asset("/media/tkuma-sunset.jpg")}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "center center" }}
      />

      {/* subtle dark wash for legibility — top + bottom only */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[28%] bg-gradient-to-b from-navy/55 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-navy via-navy/65 to-transparent" />

      {/* ENAV logo + tagline — vertically centered */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6">
        <motion.img
          src={asset("/media/logo.png")}
          alt="ENAV"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-28 w-auto"
          style={{ filter: "brightness(0) invert(1)" }}
        />
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-center text-[15px] font-light tracking-[0.24em] text-white"
        >
          יוצרים מציאות חדשה
        </motion.p>
      </div>

      {/* bottom headline */}
      <div className="absolute inset-x-0 bottom-0 px-6 pb-6 sm:pb-10">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[520px] text-center text-[19px] font-light leading-[1.55] text-white text-balance"
        >
          מלאו פרטים ושוחחו עם יועץ מכירות על הפרויקט שמעניין אתכם
        </motion.p>

        {/* scroll-down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.9 }}
          className="mt-7 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 5, 0], opacity: [0.5, 0.95, 0.5] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-1"
          >
            <span className="text-[10px] font-light uppercase tracking-[0.32em] text-white/70">
              גלילה
            </span>
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              aria-hidden
            >
              <path
                d="M2 2 L10 9 L18 2"
                stroke="white"
                strokeOpacity="0.85"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

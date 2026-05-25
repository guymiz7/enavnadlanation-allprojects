"use client";

import { motion } from "framer-motion";
import { asset } from "@/lib/asset";

export function Hero() {
  return (
    <section id="hero" className="snap-section bg-navy">
      {/* Background fill: blurred zoom of the same image, so the
          section fills edge-to-edge with no navy letterbox. */}
      <img
        src={asset("/media/tkuma-sunset.jpg")}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl"
      />
      {/* Foreground: the full Tkuma sunset image, uncropped,
          positioned so the towers sit roughly between the top
          logo and the bottom headline */}
      <img
        src={asset("/media/tkuma-sunset.jpg")}
        alt=""
        className="absolute inset-0 h-full w-full object-contain"
        style={{ objectPosition: "center 45%" }}
      />

      {/* soft wash at the top so the logo reads cleanly */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[36%] bg-gradient-to-b from-navy via-navy/65 to-transparent" />

      {/* large ENAV logo + tagline — top center */}
      <div className="absolute inset-x-0 top-12 z-10 flex flex-col items-center">
        <motion.img
          src={asset("/media/logo.png")}
          alt="ENAV"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-24 w-auto"
          style={{ filter: "brightness(0) invert(1)" }}
        />
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 text-center text-[13px] font-light tracking-[0.22em] text-white/85"
        >
          יוצרים מציאות חדשה
        </motion.p>
      </div>

      {/* dark wash at the bottom for the headlines */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[68%] bg-gradient-to-t from-navy via-navy/82 to-transparent" />

      {/* headline pinned to the bottom */}
      <div className="absolute inset-x-0 bottom-0 px-6 pb-6 sm:pb-10">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
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

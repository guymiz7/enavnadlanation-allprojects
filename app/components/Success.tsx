"use client";

import { motion } from "framer-motion";
import { asset } from "@/lib/asset";
import { PROJECT_OPTIONS } from "./Form";

export function Success({
  name,
  project,
  onRestart,
}: {
  name: string;
  project: string;
  onRestart?: () => void;
}) {
  const first = name.trim().split(/\s+/)[0] || "";
  const projectLabel =
    PROJECT_OPTIONS.find((p) => p.value === project)?.label || "—";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.55 }}
      className="fixed inset-0 z-[60] overflow-y-auto bg-navy"
    >
      <img
        src={asset("/media/AVIR_0123_-scaled.jpg")}
        alt=""
        className="pointer-events-none fixed inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-navy/75 via-navy/65 to-navy/95" />

      <div className="relative mx-auto flex min-h-full max-w-[480px] flex-col px-6 pb-16 pt-14">
        <motion.img
          src={asset("/media/logo.png")}
          alt="ENAV"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto h-24 w-auto"
          style={{ filter: "brightness(0) invert(1)" }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-12 text-center text-[11.5px] font-light uppercase tracking-[0.34em] text-white/65"
        >
          הפרטים שלך התקבלו
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-center font-display text-[clamp(2.1rem,8vw,2.7rem)] font-extralight leading-tight tracking-[-0.018em]"
        >
          {first ? `${first}, ` : ""}תודה.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mx-auto mt-5 max-w-[36ch] text-center text-[15px] font-light leading-[1.65] text-white/85 text-balance"
        >
          מיד תכנס/י לפגישה עם יועץ מכירות מטעם{" "}
          <span className="text-white">ENAV</span> לגבי הפרויקט שהתעניינת בו.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mx-auto mt-10 w-full max-w-[360px]"
        >
          <div className="mb-3 text-center text-[11.5px] font-light uppercase tracking-[0.32em] text-white/45">
            הפרויקט שבחרת
          </div>
          <div className="flex items-baseline justify-center border-t border-white/10 pt-4 text-center">
            <span className="text-[15.5px] font-light text-white">
              {projectLabel}
            </span>
          </div>
        </motion.div>

        {onRestart && (
          <motion.button
            type="button"
            onClick={onRestart}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.25 }}
            className="mx-auto mt-7 text-[14px] font-light text-white/85 underline decoration-white/40 underline-offset-[6px] transition hover:text-white hover:decoration-white"
          >
            להרשמה נוספת
          </motion.button>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.4 }}
          className="mx-auto mt-10 flex items-center justify-center gap-2 border-t border-white/12 pt-6 text-[14.5px] font-light text-white/70"
        >
          <span>לפרטים נוספים חייגו</span>
          <a
            href="tel:*3989"
            className="font-display text-[16px] font-medium tracking-[0.04em] tabular text-white hover:text-white/85"
          >
            *3989
          </a>
        </motion.p>
      </div>
    </motion.div>
  );
}

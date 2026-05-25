"use client";

import { motion } from "framer-motion";
import { asset } from "@/lib/asset";
import { PROJECT_OPTIONS } from "./Form";

export function Success({ name, project }: { name: string; project: string }) {
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

      <div className="relative mx-auto flex min-h-full max-w-[460px] flex-col px-6 pb-16 pt-14">
        <motion.img
          src={asset("/media/logo.png")}
          alt="ENAV"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto h-20 w-auto"
          style={{ filter: "brightness(0) invert(1)" }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-12 text-center text-[10px] font-light uppercase tracking-[0.34em] text-white/65"
        >
          הפרטים שלך התקבלו
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-center font-display text-[clamp(1.9rem,7.5vw,2.4rem)] font-extralight leading-tight tracking-[-0.018em]"
        >
          {first ? `${first}, ` : ""}תודה.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mx-auto mt-5 max-w-[34ch] text-center text-[13.5px] font-light leading-[1.65] text-white/85 text-balance"
        >
          יועץ מטעם <span className="text-white">ENAV</span> יחזור אליך בהקדם
          <br />
          לתיאום ייעוץ אישי על הפרויקט שבחרת.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mx-auto mt-10 w-full max-w-[340px]"
        >
          <div className="mb-3 text-center text-[10px] font-light uppercase tracking-[0.32em] text-white/45">
            הפרויקט שבחרת
          </div>
          <div className="flex items-baseline justify-center border-t border-white/10 pt-4 text-center">
            <span className="text-[14px] font-light text-white">
              {projectLabel}
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.35 }}
          className="mx-auto mt-10 flex items-center justify-center gap-2 border-t border-white/12 pt-6 text-[13.5px] font-light text-white/70"
        >
          <span>לפרטים נוספים חייגו</span>
          <a
            href="tel:*3989"
            className="font-display text-[15px] font-medium tracking-[0.04em] tabular text-white hover:text-white/85"
          >
            *3989
          </a>
        </motion.p>
      </div>
    </motion.div>
  );
}

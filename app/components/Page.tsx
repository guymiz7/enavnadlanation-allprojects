"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Hero } from "./Hero";
import { Form, type LeadData } from "./Form";
import { Success } from "./Success";

const WEBHOOK_URL =
  "https://hook.eu1.make.com/i8amfccxigy78mdr0oth51fmcp1q8i32";

export function Page() {
  const [success, setSuccess] = useState<{ name: string; project: string } | null>(
    null
  );
  // Bumped on restart so the Form remounts with fresh internal state.
  const [formKey, setFormKey] = useState(0);

  const onSubmit = (d: LeadData) => {
    setSuccess({ name: d.name, project: d.project });

    const payload = {
      name: d.name,
      phone: d.phone,
      project: d.project,
      consent: d.consent,
      submittedAt: new Date().toISOString(),
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
      referrer: typeof document !== "undefined" ? document.referrer : "",
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
    };

    if (!WEBHOOK_URL) return;

    fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {
      /* swallow — success screen already shown, retry handled out-of-band */
    });
  };

  const onRestart = () => {
    setSuccess(null);
    setFormKey((k) => k + 1);
    // Scroll the (newly mounted) form into view on the next tick so the user
    // lands on it instead of back at the Hero.
    setTimeout(() => {
      document
        .getElementById("form")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  return (
    <>
      <main className="snap-scroll">
        <Hero />
        <AnimatePresence>
          <Form key={`form-${formKey}`} onSubmit={onSubmit} />
        </AnimatePresence>
      </main>
      {success && (
        <Success
          name={success.name}
          project={success.project}
          onRestart={onRestart}
        />
      )}
    </>
  );
}

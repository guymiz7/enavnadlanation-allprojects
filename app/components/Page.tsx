"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Hero } from "./Hero";
import { Form, type LeadData } from "./Form";
import { Success } from "./Success";

// TODO: replace with the new Make webhook for the all-projects funnel.
const WEBHOOK_URL = "";

export function Page() {
  const [success, setSuccess] = useState<{ name: string; project: string } | null>(
    null
  );

  const onSubmit = (d: LeadData) => {
    setSuccess({ name: d.name, project: d.project });

    const payload = {
      name: d.name,
      phone: d.phone,
      email: d.email,
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

  return (
    <>
      <main className="snap-scroll">
        <Hero />
        <AnimatePresence>
          <Form key="form" onSubmit={onSubmit} />
        </AnimatePresence>
      </main>
      {success && <Success name={success.name} project={success.project} />}
    </>
  );
}

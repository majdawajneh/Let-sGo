"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/site";
import { mailHref, safeHref } from "@/lib/links";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") || "").trim(),
      email: String(form.get("email") || "").trim(),
      project: String(form.get("project") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.project) {
      setStatus("error");
      setMessage("Please complete all fields.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(payload.email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Request failed");

      event.currentTarget.reset();
      setStatus("success");
      setMessage("Thanks — your message was received.");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again or email me directly.");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-muted">Contact / 05</p>
          <h2 className="font-display text-6xl tracking-[-0.06em] sm:text-7xl lg:text-8xl">Let’s talk.</h2>
          <p className="mt-6 max-w-md text-base leading-7 text-muted">If you’re building a product, modernizing a system, or need engineering support, send a short note about the problem.</p>

          <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3 text-sm">
            {site.socials.map((social) => (
              <a key={social.label} href={safeHref(social.href)} target="_blank" rel="noreferrer" className="text-muted transition hover:text-ink">
                {social.label} ↗
              </a>
            ))}
            <a href={mailHref(site.email)} className="text-muted transition hover:text-ink">Email ↗</a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-[2rem] border border-line bg-surface p-5 sm:p-8" noValidate>
          <label className="block border-b border-line py-5">
            <span className="mb-2 block text-xs uppercase tracking-[0.12em] text-muted">Name</span>
            <input name="name" autoComplete="name" required className="w-full bg-transparent text-xl outline-none placeholder:text-muted/50" placeholder="Your name" />
          </label>
          <label className="block border-b border-line py-5">
            <span className="mb-2 block text-xs uppercase tracking-[0.12em] text-muted">Email</span>
            <input name="email" type="email" autoComplete="email" required className="w-full bg-transparent text-xl outline-none placeholder:text-muted/50" placeholder="you@example.com" />
          </label>
          <label className="block py-5">
            <span className="mb-2 block text-xs uppercase tracking-[0.12em] text-muted">Project</span>
            <textarea name="project" required rows={5} className="w-full resize-none bg-transparent text-xl outline-none placeholder:text-muted/50" placeholder="What are you building?" />
          </label>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button disabled={status === "sending"} className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-page transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60">
              {status === "sending" ? "Sending…" : "Submit"}
            </button>
            <p className={`text-sm ${status === "error" ? "text-red-500" : "text-muted"}`} aria-live="polite">{message}</p>
          </div>
        </form>
      </div>
    </section>
  );
}

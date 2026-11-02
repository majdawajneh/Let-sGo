import Link from "next/link";
import { site } from "@/data/site";
import { mailHref, safeHref } from "@/lib/links";

export function Footer() {
  return (
    <footer className="border-t border-line px-4 pb-8 pt-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-8 border-b border-line pb-10 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-muted">Quick links</p>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <Link href="/">Home</Link>
              <Link href="/work">Work</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-muted">Contact</p>
            <a href={mailHref(site.email)} className="mt-4 inline-block text-sm">{site.email}</a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-muted">Social</p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              {site.socials.map((social) => (
                <a key={social.label} href={safeHref(social.href)} target="_blank" rel="noreferrer">{social.label}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-hidden py-6">
          <p className="font-display text-[18vw] font-semibold uppercase leading-none tracking-[-0.08em] sm:text-[15vw] lg:text-[11vw]">{site.name}</p>
        </div>

        <div className="flex flex-col gap-2 border-t border-line pt-5 text-xs uppercase tracking-[0.12em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>©2026 {site.name}</span>
          <span>{site.location}</span>
        </div>
      </div>
    </footer>
  );
}

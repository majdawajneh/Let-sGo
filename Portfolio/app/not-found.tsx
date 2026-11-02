import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center px-4 py-20 text-center">
      <div>
        <p className="text-xs uppercase tracking-[0.16em] text-muted">404</p>
        <h1 className="mt-4 font-display text-6xl tracking-[-0.06em] sm:text-8xl">Page not found.</h1>
        <p className="mx-auto mt-5 max-w-lg text-muted">The page you requested does not exist or has moved.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full border border-line px-5 py-3 text-sm">Back home</Link>
      </div>
    </section>
  );
}

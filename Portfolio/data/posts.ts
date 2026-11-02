export type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  readingTime: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "shipping-with-less-complexity",
    title: "Shipping with less complexity",
    date: "2026-10-18",
    summary: "A practical approach to keeping product architecture understandable while a codebase grows.",
    readingTime: "6 min read",
    content: [
      "Complexity often enters a product quietly: one extra abstraction, one exception, one shortcut that becomes permanent. The goal is not to eliminate complexity, but to make it visible and intentional.",
      "I prefer small boundaries with clear responsibilities. Components should describe interface behavior, services should own domain operations, and data access should remain predictable. The fewer surprising paths through a system, the easier it is to change safely.",
      "Good architecture is not the maximum number of layers. It is the minimum structure required to protect the product from accidental coupling while keeping the team fast.",
    ],
  },
  {
    slug: "performance-is-a-product-feature",
    title: "Performance is a product feature",
    date: "2026-09-26",
    summary: "Why perceived speed, loading behavior, and backend latency should be treated as UX decisions.",
    readingTime: "5 min read",
    content: [
      "Performance is usually discussed as an engineering metric, but users experience it as product quality. A slow interaction feels uncertain even when the interface looks polished.",
      "The best improvements often come from reducing work rather than optimizing work: smaller payloads, fewer dependencies, predictable cache boundaries, and UI states that communicate progress immediately.",
      "Treating performance as part of design creates better tradeoffs. The question becomes not only whether a feature works, but whether it feels dependable in real-world conditions.",
    ],
  },
  {
    slug: "designing-apis-for-change",
    title: "Designing APIs for change",
    date: "2026-08-12",
    summary: "Notes on contracts, naming, validation, and building APIs that remain pleasant to work with.",
    readingTime: "7 min read",
    content: [
      "An API is a contract between parts of a system. The best contracts reduce the amount of hidden knowledge required to use them correctly.",
      "Consistent naming, explicit validation, stable response shapes, and useful errors matter more than clever abstractions. They make frontend work faster and reduce the number of assumptions spread across the codebase.",
      "I design endpoints around product behavior first, then use implementation details to support that model. That keeps the API aligned with the way the product actually evolves.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function safeHref(
  href?: string | null
): string {
  if (!href) {
    return "#";
  }

  const value = href.trim();

  if (!value) {
    return "#";
  }

  if (
    value.startsWith("/") ||
    value.startsWith("#") ||
    value.startsWith("mailto:") ||
    value.startsWith("tel:")
  ) {
    return value;
  }

  try {
    const url = new URL(value);

    if (
      url.protocol === "http:" ||
      url.protocol === "https:"
    ) {
      return url.toString();
    }

    return "#";
  } catch {
    return "#";
  }
}

export function mailHref(
  email?: string | null,
  subject?: string,
  body?: string
): string {
  if (!email) {
    return "#";
  }

  const cleanEmail = email.trim();

  if (!cleanEmail) {
    return "#";
  }

  const params = new URLSearchParams();

  if (subject) {
    params.set("subject", subject);
  }

  if (body) {
    params.set("body", body);
  }

  const query = params.toString();

  return `mailto:${cleanEmail}${query ? `?${query}` : ""}`;
}
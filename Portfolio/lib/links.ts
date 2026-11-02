export function safeHref(value: string) {
  return value.startsWith("[") ? "#" : value;
}

export function mailHref(email: string) {
  return email.startsWith("[") ? "#contact" : `mailto:${email}`;
}

export interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const CONTACT_EMAIL = "zzizzou5@yahoo.com";

export function buildContactMailto({
  name,
  email,
  phone,
  message,
}: ContactMessage): string {
  const params = new URLSearchParams({
    subject: `Înscriere fotbal — ${name}`,
    body: [
      `Nume: ${name}`,
      `Email: ${email}`,
      `Telefon: ${phone || "nespecificat"}`,
      "",
      "Mesaj:",
      message,
    ].join("\n"),
  });

  return `mailto:${CONTACT_EMAIL}?${params.toString()}`;
}

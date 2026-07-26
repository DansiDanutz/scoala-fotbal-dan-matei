import { describe, expect, it } from "vitest";

import { buildContactMailto } from "./contactMailto";

describe("buildContactMailto", () => {
  it("preserves and encodes every submitted contact field", () => {
    const mailto = buildContactMailto({
      name: "Ana & Ștefan",
      email: "ana+fotbal@example.com",
      phone: "0744 123 456",
      message: "Bună ziua!\nAș dori detalii despre grupa 2015–2017.",
    });

    const url = new URL(mailto);

    expect(url.protocol).toBe("mailto:");
    expect(url.pathname).toBe("zzizzou5@yahoo.com");
    expect(url.searchParams.get("subject")).toBe(
      "Înscriere fotbal — Ana & Ștefan"
    );
    expect(url.searchParams.get("body")).toBe(
      [
        "Nume: Ana & Ștefan",
        "Email: ana+fotbal@example.com",
        "Telefon: 0744 123 456",
        "",
        "Mesaj:",
        "Bună ziua!",
        "Aș dori detalii despre grupa 2015–2017.",
      ].join("\n")
    );
  });

  it("labels an omitted optional phone number", () => {
    const mailto = buildContactMailto({
      name: "Ana",
      email: "ana@example.com",
      phone: "",
      message: "Detalii, vă rog.",
    });

    expect(new URL(mailto).searchParams.get("body")).toContain(
      "Telefon: nespecificat"
    );
  });
});

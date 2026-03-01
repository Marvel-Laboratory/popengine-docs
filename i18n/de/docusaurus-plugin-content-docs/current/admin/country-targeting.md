---
sidebar_position: 6
title: "Länder-Targeting"
description: "Popups basierend auf dem Land des Besuchers anzeigen oder ausblenden"
---

# Länder-Targeting

Mit dem Länder-Targeting steuern Sie, welche Länder Ihre Gutschein-Popups sehen. Dies ist nützlich für länderspezifische Aktionen oder die Einhaltung regionaler Vorschriften.

## Funktionsweise

Wenn ein Kunde Ihre Storefront besucht, erkennt das System sein Land anhand der IP-Adresse. Das Popup wird dann basierend auf Ihren Targeting-Regeln angezeigt oder ausgeblendet.

Die Ländererkennung verwendet die folgenden Methoden (in der Reihenfolge der Priorität):

1. **Cloudflare** — Wenn Ihre Seite Cloudflare verwendet, wird das Land des Besuchers automatisch erkannt
2. **Vercel** — Bei Hosting auf Vercel liefert die Plattform Länderinformationen
3. **IP-Header** — Standard-IP-basierte Ländererkennungs-Header
4. **Browsersprache** — Als Fallback schätzt das System das Land basierend auf den Spracheinstellungen des Browsers

:::info
Für die genaueste Ländererkennung empfehlen wir die Nutzung eines CDN wie Cloudflare vor Ihrer Shopware-Installation. Ohne CDN ist der Fallback auf die Browsersprache weniger zuverlässig.
:::

## Targeting-Modi

Jedes Popup hat drei Länder-Targeting-Modi:

### Alle Länder (Standard)

Das Popup wird Besuchern aus allen Ländern angezeigt. Dies ist die Standardeinstellung.

### Länder einschließen

Das Popup wird **nur** Besuchern aus den von Ihnen angegebenen Ländern angezeigt. Besucher aus allen anderen Ländern sehen dieses Popup nicht.

**Beispiel:** Setzen Sie auf „DE, AT, CH", um das Popup nur Besuchern aus Deutschland, Österreich und der Schweiz anzuzeigen.

### Länder ausschließen

Das Popup wird Besuchern aus **allen** Ländern angezeigt, **außer** den von Ihnen angegebenen.

**Beispiel:** Setzen Sie auf „US, GB", um das Popup für Besucher aus den USA und dem Vereinigten Königreich auszublenden, während es allen anderen angezeigt wird.

## Konfiguration

1. Öffnen Sie Ihr Popup im **Popup-Editor**
2. Gehen Sie zum Abschnitt **Länder-Targeting**
3. Wählen Sie einen Modus: **Alle**, **Einschließen** oder **Ausschließen**
4. Bei Einschließen oder Ausschließen geben Sie die Ländercodes durch Kommas getrennt ein

Ländercodes verwenden das 2-stellige ISO-Format (z. B. DE für Deutschland, FR für Frankreich, US für die Vereinigten Staaten).

| Gängige Codes | Land |
|---|---|
| DE | Deutschland |
| AT | Österreich |
| CH | Schweiz |
| FR | Frankreich |
| NL | Niederlande |
| GB | Vereinigtes Königreich |
| US | Vereinigte Staaten |

![Länder-Targeting Einstellungen](/img/admin/country-targeting.png)

:::tip
Sie können Länder-Targeting mit [Anzeigebedingungen](/docs/admin/display-conditions) kombinieren, um sehr spezifisches Targeting zu erreichen. Beispiel: Ein Popup nur auf Produktseiten für Besucher aus Deutschland anzeigen.
:::

## Unbekannte Länder

Wenn das System das Land eines Besuchers nicht bestimmen kann (z. B. bei Nutzung eines VPN oder Datenschutz-Tools), wird das Popup **standardmäßig angezeigt**. Dieser „Fail-Open"-Ansatz stellt sicher, dass Sie keine potenziellen Kunden versäumen.

## Verwandte Funktionen

- [Anzeigebedingungen](/docs/admin/display-conditions) — Popups nach Seitentyp ausrichten
- [Gutscheineinstellungen](/docs/admin/coupon-settings) — Kundensegment-Targeting
- [Impressions-Limits](/docs/admin/impression-caps) — Begrenzung der Popup-Anzeigen

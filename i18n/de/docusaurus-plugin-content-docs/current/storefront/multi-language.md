---
sidebar_position: 8
title: "Mehrsprachigkeit"
description: "Wie sich das Popup automatisch an die Sprache Ihres Kunden anpasst"
---

# Mehrsprachigkeit

Last Second Coupon unterstützt englische und deutsche Popup-Inhalte. Das System erkennt automatisch die Sprache des Kunden und zeigt die passende Version Ihres Popups an.

## Unterstützte Sprachen

| Sprache | Code |
|---|---|
| Englisch | en |
| Deutsch | de |

## Wie die Spracherkennung funktioniert

Das Storefront-Widget erkennt die Sprache des Kunden in dieser Reihenfolge:

1. **Shopware-Verkaufskanal-Sprache** — Wenn der Kunde einen deutschsprachigen Verkaufskanal besucht, wird das deutsche Popup angezeigt
2. **HTML-Seitensprache** — Das `lang`-Attribut auf der Seite (z. B. `<html lang="de">`)
3. **Fallback** — Wenn nichts erkannt wird, wird die englische Version angezeigt

:::info
Sie müssen die Spracherkennung nicht konfigurieren. Sie funktioniert automatisch basierend auf Ihren Shopware-Verkaufskanal-Einstellungen und dem Browsing-Kontext des Kunden.
:::

## Übersetzte Inhalte erstellen

Im [Popup-Editor](/docs/admin/popup-editor):

1. Gestalten Sie Ihr Popup auf Englisch (Standardsprache)
2. Klicken Sie auf den **DE**-Button oben im Editor
3. Übersetzen Sie alle Textinhalte ins Deutsche
4. Die deutsche Version kann bei Bedarf komplett anderes HTML und CSS haben
5. Speichern Sie beide Versionen

### Was übersetzt werden kann

- Popup-Überschrift und Fließtext
- CTA-Button-Text
- Alle benutzerdefinierten Textelemente
- Recovery-Tab-Text
- E-Mail-Erfassungs-Platzhaltertext

### Was NICHT übersetzt wird

- Gutscheincode (er ist in allen Sprachen gleich)
- Countdown-Timer (Zahlen sind universell)
- Rabattwerte

## Tipps für deutsche Inhalte

Beim Übersetzen Ihres Popups ins Deutsche:

- Verwenden Sie die förmliche „Sie"-Form für professionelle Shops
- Halten Sie Texte knapp — deutsche Wörter sind tendenziell länger als englische
- Testen Sie das Layout, um sicherzustellen, dass längere deutsche Texte Ihr Design nicht sprengen
- Übersetzen Sie den Recovery-Tab-Text separat in den Recovery-Tab-Einstellungen

:::tip
Wenn Sie nur eine Sprache bedienen, müssen Sie keine zweite Übersetzung erstellen. Gestalten Sie Ihr Popup einfach in Ihrer Hauptsprache — derselbe Inhalt wird unabhängig von der erkannten Sprache angezeigt.
:::

## Verwandte Funktionen

- [Popup-Editor](/docs/admin/popup-editor) — Popup gestalten und übersetzen
- [Recovery-Tab](/docs/storefront/recovery-tab) — Recovery-Tab-Text kann ebenfalls übersetzt werden

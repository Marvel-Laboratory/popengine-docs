---
sidebar_position: 7
title: "Impressions-Limits"
description: "Begrenzen Sie, wie oft ein Popup pro Monat angezeigt wird"
---

# Impressions-Limits

Mit Impressions-Limits können Sie begrenzen, wie oft ein Popup pro Monat angezeigt wird. Dies hilft Ihnen, Kosten zu kontrollieren und sicherzustellen, dass Ihre Rabattangebote exklusiv bleiben.

## Funktionsweise

Jedes Mal, wenn ein Popup einem Kunden angezeigt wird, zählt dies als eine „Impression". Sie können eine maximale Anzahl von Impressions pro Popup pro Kalendermonat festlegen. Sobald das Limit erreicht ist, wird das Popup bis zum nächsten Monat nicht mehr angezeigt.

## Impressions-Limit festlegen

1. Öffnen Sie Ihr Popup im **Popup-Editor**
2. Suchen Sie die Einstellung **Impressions-Limit**
3. Geben Sie die maximale Anzahl der Impressions pro Monat ein
4. Lassen Sie das Feld leer für **unbegrenzte** Impressions (Standard)

| Einstellung | Beschreibung | Standard |
|---|---|---|
| **Monatliches Impressions-Limit** | Maximale Anzeigen dieses Popups in einem Kalendermonat | Unbegrenzt |

## Wie das Limit zurückgesetzt wird

Der Impressions-Zähler wird automatisch am **ersten Tag jedes Kalendermonats** (UTC-Zeitzone) zurückgesetzt. Beispiel:

- 1. Januar: Zähler wird auf 0 zurückgesetzt
- Im Laufe des Januars: Zähler steigt mit jeder Popup-Anzeige
- 31. Januar: Wenn das Limit erreicht ist, wird das Popup nicht mehr angezeigt
- 1. Februar: Zähler wird zurückgesetzt, Popup wird wieder angezeigt

## Impressions-Anzahl einsehen

So sehen Sie, wie viele Impressions ein Popup verbraucht hat:

1. Gehen Sie zu **Last Second Coupon > Popups**
2. Die Impressions-Anzahl wird neben jedem Popup in der Liste angezeigt

![Impressions-Anzahl](/img/admin/impression-caps.png)

## Anwendungsfälle

### Budgetkontrolle

Wenn jeder Gutschein Sie Geld in Form von Rabatten kostet, setzen Sie ein Impressions-Limit, um Ihre monatlichen Kosten zu begrenzen. Beispiel: Ein Limit von 1.000 Impressions stellt sicher, dass Sie nicht mehr als 1.000 potenzielle Rabattcodes pro Monat generieren.

### Exklusivität

Ein niedriges Impressions-Limit (z. B. 100 pro Monat) lässt das Angebot exklusiver wirken. Nicht jeder Besucher wird das Popup sehen, was ein Gefühl von Knappheit erzeugt.

### Saisonale Kampagnen

In Zeiten mit hohem Traffic (Black Friday, Feiertagsverkäufe) möchten Sie das Limit möglicherweise vorübergehend erhöhen oder entfernen, um die Konversionen zu maximieren.

:::tip
Überwachen Sie Ihre Impressions-Nutzung in der Popup-Liste und passen Sie das Limit bei Bedarf an. Es ist besser, mit einem höheren Limit zu beginnen und es zu reduzieren, als es zu niedrig zu setzen und potenzielle Kunden zu verpassen.
:::

## Verwandte Funktionen

- [Analysen](/docs/admin/analytics) — Gutschein-Generierung und Einlösungsraten verfolgen
- [Anzeigebedingungen](/docs/admin/display-conditions) — Steuern, welche Seiten das Popup anzeigen
- [Gutscheineinstellungen](/docs/admin/coupon-settings) — Rabattregeln und Limits konfigurieren

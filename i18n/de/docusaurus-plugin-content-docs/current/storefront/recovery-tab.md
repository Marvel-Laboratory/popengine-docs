---
sidebar_position: 6
title: "Recovery-Tab"
description: "Der dauerhafte Tab, der Kunden das Popup erneut öffnen lässt"
---

# Recovery-Tab

Der Recovery-Tab ist ein kleiner, dauerhaft sichtbarer Button am Bildschirmrand, der erscheint, nachdem ein Kunde das Popup geschlossen hat. Er gibt dem Kunden eine zweite Chance, das Angebot wahrzunehmen.

## Funktionsweise

1. Ein Kunde sieht das Popup und schließt es (klickt auf den X-Button oder das Overlay)
2. Das Popup verschwindet
3. Ein kleiner Tab erscheint am Bildschirmrand mit Ihrem benutzerdefinierten Text (z. B. „Ihr Angebot")
4. Wenn der Kunde auf den Tab klickt, wird das Popup mit demselben Gutscheincode und Timer erneut geöffnet

Der Recovery-Tab bleibt sichtbar, solange der Kunde auf Ihrer Seite ist und der Gutschein nicht abgelaufen ist.

## Recovery-Tab aktivieren

1. Öffnen Sie Ihr Popup im **Popup-Editor**
2. Finden Sie den Abschnitt **Recovery-Tab** in den Einstellungen
3. Schalten Sie **Recovery-Tab aktivieren** ein
4. Passen Sie das Erscheinungsbild an

| Einstellung | Beschreibung | Standard |
|---|---|---|
| **Recovery-Tab aktivieren** | Tab nach Schließen des Popups anzeigen | Deaktiviert |
| **Tab-Text** | Beschriftung auf dem Tab | „Ihr Angebot" |
| **Tab-Position** | Position des Tabs auf dem Bildschirm | Unten rechts |
| **Hintergrundfarbe** | Hintergrundfarbe des Tabs | #000000 (Schwarz) |
| **Textfarbe** | Textfarbe des Tabs | #ffffff (Weiß) |

## Tab-Positionen

Wählen Sie, wo der Tab auf dem Bildschirm des Kunden erscheint:

| Position | Beschreibung |
|---|---|
| **Unten rechts** | Fixiert an der unteren rechten Ecke (am häufigsten) |
| **Unten links** | Fixiert an der unteren linken Ecke |
| **Rechts mittig** | Fixiert am rechten Rand, vertikal zentriert |
| **Links mittig** | Fixiert am linken Rand, vertikal zentriert |

:::tip
**Unten rechts** ist die gängigste Position, dort erwarten Kunden typischerweise dauerhafte Elemente wie Chat-Widgets. Wenn Sie bereits ein Chat-Widget unten rechts haben, nutzen Sie stattdessen **unten links**.
:::

## Text anpassen

Der Tab-Text kann kurz und überzeugend sein:

- „Ihr Angebot"
- „Ihr Rabatt"
- „Nicht verpassen"
- „Letzte Chance"

Halten Sie ihn kurz — der Tab ist ein kleines Element und langer Text kann gedrängt aussehen.

## Theme-Kompatibilität

Der Recovery-Tab verwendet spezielle CSS-Isolation, um sicherzustellen, dass er auf jedem Shopware-Theme gleich aussieht. Die Styles Ihres Themes beeinflussen das Erscheinungsbild des Tabs nicht, und der Tab beeinflusst Ihr Theme nicht.

![Recovery-Tab Beispiel](/img/storefront/recovery-tab-example.png)

## Mehrsprachigkeit

Der Recovery-Tab-Text kann für jede Sprache übersetzt werden. Im Popup-Editor wechseln Sie zum **DE** (Deutsch) Sprachwechsel, um eine deutsche Version des Tab-Texts festzulegen.

## Verwandte Funktionen

- [Popup-Editor](/docs/admin/popup-editor) — Recovery-Tab-Erscheinungsbild konfigurieren
- [Exit-Intent-Erkennung](/docs/storefront/exit-intent) — Wie das Popup zunächst ausgelöst wird

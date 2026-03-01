---
sidebar_position: 3
title: "Popup-Editor"
description: "Gestalten Sie Ihre Gutschein-Popups mit dem visuellen Drag-and-Drop-Editor"
---

# Popup-Editor

Der Popup-Editor ermöglicht es Ihnen, Ihr Gutschein-Popup mit einer visuellen Drag-and-Drop-Oberfläche zu gestalten. Keine Programmierkenntnisse erforderlich — ziehen Sie einfach Elemente auf die Leinwand, gestalten Sie diese und sehen Sie sich das Ergebnis in der Vorschau an.

## Funktionsweise

Der Editor basiert auf GrapesJS, einem professionellen Seitenbuilder. Sie gestalten Ihr Popup visuell, und das System generiert automatisch das HTML und CSS, das Ihren Kunden angezeigt wird.

## Editor-Layout

Der Editor hat drei Hauptbereiche:

- **Linke Seitenleiste** — Drag-and-Drop-Blöcke (Elemente, die Sie hinzufügen können)
- **Mittlere Leinwand** — Vorschau Ihres Popup-Designs
- **Rechte Seitenleiste** — Stileinstellungen für das ausgewählte Element

![Popup-Editor-Oberfläche](/img/admin/popup-editor-interface.png)

## Verfügbare Blöcke

Ziehen Sie einen dieser Blöcke aus der linken Seitenleiste auf Ihre Popup-Leinwand:

### Inhaltsblöcke

| Block | Beschreibung |
|---|---|
| **Überschrift** | Großer Text für Ihren Popup-Titel (z. B. „Warten Sie! Gehen Sie noch nicht!") |
| **Fließtext** | Normaler Absatztext für Beschreibungen |
| **Gutscheincode** | Zeigt den generierten Gutscheincode an. Verwendet den Platzhalter `{code}` |
| **CTA-Button** | Ein Call-to-Action-Button (z. B. „Rabatt anwenden", „Jetzt shoppen") |
| **Countdown-Timer** | Zeigt die verbleibende Zeit des Angebots. Verwendet den Platzhalter `{minutes_left}` |
| **Bild** | Laden Sie ein Bild hoch oder verwenden Sie eine URL |

### Layout-Blöcke

| Block | Beschreibung |
|---|---|
| **1 Spalte** | Einzelne Spalte über die volle Breite |
| **2 Spalten** | Zwei nebeneinander liegende Spalten |
| **3 Spalten** | Drei nebeneinander liegende Spalten |

## Platzhalter

Der Editor unterstützt spezielle Platzhalter, die automatisch durch echte Daten ersetzt werden, wenn das Popup Kunden angezeigt wird:

| Platzhalter | Wird ersetzt durch |
|---|---|
| `{code}` | Der generierte Gutscheincode (z. B. „LSC-A7K2M9") |
| `{minutes_left}` | Verbleibende Zeit im Countdown-Timer |

:::info
Stellen Sie sicher, dass Sie den Platzhalter `{code}` in Ihrem Design verwenden — so sehen Kunden ihren Gutscheincode. Ohne ihn wird der Gutscheincode nicht sichtbar sein.
:::

## Elemente stylen

Klicken Sie auf ein Element auf der Leinwand, um es auszuwählen. Die rechte Seitenleiste zeigt Stiloptionen:

- **Typografie** — Schriftgröße, -stärke, -farbe, Ausrichtung
- **Abstände** — Innenabstand und Außenabstand
- **Hintergrund** — Farbe, Verlauf oder Bild
- **Rahmen** — Breite, Farbe und Radius (abgerundete Ecken)
- **Größe** — Breite und Höhe

## Overlay-Einstellungen

Unterhalb der Editor-Leinwand finden Sie die **Overlay-Einstellungen**, die steuern, wie das Popup auf der Seite erscheint:

### Position

Wählen Sie, wo das Popup auf dem Bildschirm erscheint:

| Position | Beschreibung |
|---|---|
| **Zentriert** | Zentriertes Overlay auf der Seite (am häufigsten) |
| **Unterer Balken** | Fester Balken am unteren Bildschirmrand |
| **Einschub-Ecke** | Schiebt sich von der unteren Ecke herein |

### Overlay-Erscheinungsbild

| Einstellung | Beschreibung | Standard |
|---|---|---|
| **Countdown-Timer anzeigen** | Countdown im Popup anzeigen | Aktiviert |
| **Overlay-Farbe** | Hintergrundfarbe hinter dem Popup | #000000 (Schwarz) |
| **Overlay-Deckkraft** | Wie transparent das Hintergrund-Overlay ist (0 = unsichtbar, 1 = deckend) | 0,50 |

![Overlay-Einstellungen](/img/admin/popup-editor-overlay.png)

## Recovery-Tab

Der Recovery-Tab ist ein kleiner, dauerhaft sichtbarer Button, der erscheint, nachdem ein Kunde das Popup geschlossen hat. Er ermöglicht es dem Kunden, das Angebot erneut zu öffnen, falls er seine Meinung ändert.

| Einstellung | Beschreibung | Standard |
|---|---|---|
| **Recovery-Tab aktivieren** | Tab nach Schließen des Popups anzeigen | Deaktiviert |
| **Tab-Text** | Beschriftung auf dem Tab | „Ihr Angebot" |
| **Tab-Position** | Position des Tabs auf dem Bildschirm | Unten rechts |
| **Hintergrundfarbe** | Hintergrundfarbe des Tabs | #000000 |
| **Textfarbe** | Textfarbe des Tabs | #ffffff |

**Verfügbare Tab-Positionen:**
- Unten rechts
- Unten links
- Rechts mittig
- Links mittig

![Recovery-Tab Beispiel](/img/storefront/recovery-tab-example.png)

## Anzeigebedingungen

Steuern Sie, auf welchen Seiten Ihr Popup angezeigt wird:

### Seiten zum Anzeigen

Wählen Sie einen oder mehrere Seitentypen, auf denen das Popup angezeigt werden soll:

- **Alle Seiten** (Standard)
- **Startseite**
- **Warenkorbseite**
- **Checkout-Seite**
- **Kategorieseiten** — Optional mit bestimmten Kategorie-IDs
- **Produktseiten** — Optional mit bestimmten Produkt-IDs

### Seiten ausschließen

Wählen Sie Seitentypen, auf denen das Popup **niemals** erscheinen soll, auch wenn es den obigen „Anzeigen auf"-Regeln entspricht.

:::tip
Eine häufige Einstellung ist, das Popup auf **allen Seiten** anzuzeigen, aber die **Checkout-Seite** auszuschließen, damit Kunden nicht gestört werden, die bereits ihren Einkauf abschließen.
:::

## Sprachwechsel

Wechseln Sie oben im Editor zwischen **EN** (Englisch) und **DE** (Deutsch), um übersetzte Versionen Ihres Popups zu erstellen. Jede Sprache hat eigenes HTML und CSS, sodass Sie das Design für jede Sprache vollständig anpassen können.

## Vorschau

Klicken Sie auf den **Vorschau**-Button in der Editor-Symbolleiste, um genau zu sehen, wie Ihr Popup für Kunden aussehen wird. Die Vorschau zeigt das Popup mit Ihren Overlay-Einstellungen, Position und Recovery-Tab.

## Code-Editor

Für fortgeschrittene Benutzer: Klicken Sie auf den **Code**-Button, um das HTML und CSS des Popups direkt zu bearbeiten. Dies ist nützlich für Feinabstimmungen, die über den visuellen Editor nicht möglich sind.

:::caution
Seien Sie vorsichtig beim direkten Bearbeiten von Code. Ungültiges HTML oder CSS kann die Popup-Anzeige beschädigen. Nutzen Sie immer die Vorschau nach Code-Änderungen.
:::

## Speichern

Ihr Popup-Design wird gespeichert, wenn Sie in der Symbolleiste auf **Speichern** klicken. Stellen Sie sicher, dass Sie vor dem Verlassen des Editors speichern.

## Verwandte Funktionen

- [Gutscheineinstellungen](/docs/admin/coupon-settings) — Konfigurieren Sie die Rabattregeln für dieses Popup
- [Popup Manager](/docs/admin/popup-manager) — Verwalten Sie alle Ihre Popups
- [Anzeigebedingungen](/docs/admin/display-conditions) — Detaillierte Anleitung zur Seitenausrichtung

---
sidebar_position: 5
title: "Anzeigebedingungen"
description: "Steuern Sie, welche Seiten und Kundensegmente Ihre Gutschein-Popups sehen"
---

# Anzeigebedingungen

Mit Anzeigebedingungen können Sie bestimmte Seiten, Kategorien und Produkte ansprechen, damit Ihre Popups nur dort erscheinen, wo sie die größte Wirkung erzielen.

## Funktionsweise

Jedes Popup hat seine eigenen Anzeigebedingungen. Wenn ein Kunde eine Seite besucht, prüft das System alle aktiven Popups und zeigt dasjenige mit der höchsten Priorität an, das zu den aktuellen Seitenbedingungen passt.

## Seitenausrichtung

### Seiten zum Anzeigen

Wählen Sie einen oder mehrere Seitentypen, auf denen das Popup erscheinen soll:

| Seitentyp | Was abgedeckt wird |
|---|---|
| **Alle Seiten** | Jede Seite Ihrer Storefront (Standard) |
| **Startseite** | Die Hauptseite Ihres Shops |
| **Warenkorbseite** | Die Warenkorb-Seite |
| **Checkout-Seite** | Der Checkout-/Bezahlvorgang |
| **Kategorieseiten** | Kategorie-Übersichtsseiten |
| **Produktseiten** | Einzelne Produktdetailseiten |

### Spezifische Kategorie- oder Produkt-Ausrichtung

Wenn Sie **Kategorieseiten** oder **Produktseiten** auswählen, können Sie optional bestimmte IDs eingeben, um die Ausrichtung einzugrenzen:

1. Wählen Sie **Kategorieseiten** in der „Anzeigen auf"-Liste
2. Ein Textfeld für **Kategorie-IDs** erscheint
3. Geben Sie eine oder mehrere Shopware-Kategorie-UUIDs ein, durch Kommas getrennt

Das gleiche gilt für Produktseiten mit Produkt-UUIDs.

:::tip
**Kategorie- oder Produkt-IDs finden:** Öffnen Sie in Ihrer Shopware-Administration die Kategorie oder das Produkt und schauen Sie sich die URL in der Adressleiste Ihres Browsers an. Die UUID ist die lange Zeichenkette am Ende der URL.
:::

### Seiten ausschließen

Auch wenn ein Popup den „Anzeigen auf"-Regeln entspricht, können Sie bestimmte Seitentypen ausschließen:

| Ausschluss-Option | Wirkung |
|---|---|
| **Startseite** | Niemals auf der Startseite anzeigen |
| **Warenkorbseite** | Niemals auf der Warenkorbseite anzeigen |
| **Checkout-Seite** | Niemals während des Checkouts anzeigen |
| **Kategorieseiten** | Niemals auf Kategorieseiten anzeigen |
| **Produktseiten** | Niemals auf Produktseiten anzeigen |

Ausschlüsse haben immer Vorrang vor den „Anzeigen auf"-Regeln.

## Häufige Einstellungen

### Überall außer Checkout anzeigen

Die häufigste Einstellung — Kunden auf jeder Seite ansprechen, aber den Checkout-Prozess nicht unterbrechen:

- **Anzeigen auf:** Alle Seiten
- **Ausschließen:** Checkout-Seite

### Nur Warenkorbseite

Kunden ansprechen, die bereits Artikel im Warenkorb haben:

- **Anzeigen auf:** Warenkorbseite

### Bestimmte Produktkategorien

Einen speziellen Rabatt nur für bestimmte Produktkategorien anzeigen:

- **Anzeigen auf:** Kategorieseiten
- **Kategorie-IDs:** UUIDs der Zielkategorien eingeben

### Verschiedene Popups für verschiedene Seiten

Verwenden Sie mehrere Popups mit unterschiedlichen Prioritäten:

1. **Popup A** (Priorität 10) — „Kostenloser Versand!" nur auf der Warenkorbseite
2. **Popup B** (Priorität 5) — „10 % Rabatt!" auf allen anderen Seiten

Da Popup A eine höhere Priorität hat, hat es auf der Warenkorbseite Vorrang. Popup B deckt alles andere ab.

![Anzeigebedingungen-Einstellungen](/img/admin/display-conditions.png)

## Verwandte Funktionen

- [Popup Manager](/docs/admin/popup-manager) — Erstellen und verwalten Sie mehrere Popups mit verschiedenen Bedingungen
- [Länder-Targeting](/docs/admin/country-targeting) — Popups nach Besucherland ausrichten
- [Gutscheineinstellungen](/docs/admin/coupon-settings) — Kundensegment-Targeting

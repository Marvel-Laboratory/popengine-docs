---
sidebar_position: 8
title: "Analysen"
description: "Verfolgen Sie Popup-Leistung, Gutscheinnutzung und Einlösungsraten"
---

# Analysen

Der Analysen-Bereich gibt Ihnen einen klaren Überblick über die Leistung Ihrer Popups. Verfolgen Sie Gutschein-Generierung, Einlösungsraten und einzelne Gutscheindetails.

## Funktionsweise

Jedes Mal, wenn ein Gutschein über ein Popup generiert wird, wird er mit Details zum Kunden, Warenkorbwert, Rabatt und mehr protokolliert. Das Analysen-Dashboard fasst diese Daten zusammen, damit Sie die Effektivität Ihres Popups messen können.

## Übersichts-Dashboard

Am oberen Rand der Analysenseite sehen Sie fünf Schlüsselkennzahlen:

| Kennzahl | Beschreibung |
|---|---|
| **Ausgestellte Gutscheine gesamt** | Gesamtanzahl der generierten Gutscheincodes über alle Popups |
| **Aktive Gutscheine** | Gutscheine, die generiert, aber noch nicht eingelöst oder abgelaufen sind |
| **Eingelöste Gutscheine** | Gutscheine, die Kunden erfolgreich für einen Einkauf verwendet haben |
| **Einlösungsrate** | Prozentsatz der ausgestellten Gutscheine, die eingelöst wurden |
| **Abgelaufene Gutscheine** | Gutscheine, die ihr Zeitlimit ohne Nutzung erreicht haben |

![Analysen-Übersicht](/img/admin/analytics-summary.png)

:::tip
Eine gesunde Einlösungsrate variiert je nach Branche, aber alles über 15–20 % gilt allgemein als gut für Exit-Intent-Gutscheine.
:::

## Gutschein-Protokoll

Unterhalb der Übersicht finden Sie eine detaillierte Tabelle aller generierten Gutscheine.

### Tabellenspalten

| Spalte | Beschreibung |
|---|---|
| **Code** | Der einzigartige Gutscheincode (z. B. „LSC-A7K2M9") |
| **Popup** | Welches Popup diesen Gutschein generiert hat |
| **Status** | Aktiv, Eingelöst, Abgelaufen oder Gelöscht |
| **Rabatt** | Rabattwert und -typ (z. B. „10 %" oder „5,00 EUR") |
| **Erstellt** | Wann der Gutschein generiert wurde |
| **Eingelöst am** | Wann der Gutschein verwendet wurde (falls eingelöst) |

### Filtern und Suchen

Nutzen Sie die Filter oberhalb der Tabelle, um die Ergebnisse einzugrenzen:

- **Suche** — Geben Sie einen Gutscheincode ein, um ihn sofort zu finden
- **Statusfilter** — Nur aktive, eingelöste, abgelaufene oder gelöschte Gutscheine anzeigen
- **Zeitraum** — Nach Erstellungsdatum filtern (Von / Bis)

### Paginierung

Die Tabelle zeigt 25 Gutscheine pro Seite. Nutzen Sie die Buttons **Zurück** und **Weiter** am unteren Rand, um durch die Ergebnisse zu navigieren.

## Gutschein-Detailansicht

Klicken Sie auf einen Gutschein in der Tabelle, um alle Details zu sehen:

### Grundinformationen

- Gutscheincode
- Status (mit farbigem Badge)
- Erstellungs- und Ablaufzeitpunkt
- Rabattbetrag und -typ

### Kundeninformationen

- Warenkorbwert zum Zeitpunkt der Gutschein-Generierung
- Kunden-ID (Shopware Kunden-ID)
- Besucherland (2-stelliger Code, z. B. „DE")
- Kundensegment (neuer Besucher, wiederkehrender Kunde oder eingeloggter Kunde)

### Popup-Informationen

- Welches Popup den Gutschein generiert hat
- Aktive Anzeigebedingungen zum Zeitpunkt der Generierung
- Geltende Auslöser-Einstellungen

### Gutscheinregeln-Snapshot

Ein Snapshot der Gutscheinkonfiguration zum Zeitpunkt der Code-Generierung, einschließlich:

- Mindestbestellwert
- Maximaler Rabattbetrag
- Ablaufzeit
- Max. Nutzungen pro Kunde
- Abklingzeit

:::info
Der Regeln-Snapshot zeigt die Einstellungen, die **zum Zeitpunkt der Gutschein-Generierung** aktiv waren. Wenn Sie Einstellungen ändern, nachdem ein Gutschein generiert wurde, behält der bestehende Gutschein die ursprünglichen Regeln.
:::

![Gutschein-Detailansicht](/img/admin/analytics-coupon-detail.png)

## Gutscheine löschen

### Einzelnen Gutschein löschen

1. Klicken Sie auf einen Gutschein, um die Detailansicht zu öffnen
2. Klicken Sie auf den Button **Löschen**
3. Bestätigen Sie die Löschung

### Massenweise löschen

1. Wählen Sie mehrere Gutscheine über die Checkboxen in der Tabelle aus
2. Klicken Sie auf den erscheinenden Button **Ausgewählte löschen**
3. Bestätigen Sie die Massenlöschung

:::caution
Das Löschen eines Gutschein-Protokolleintrags entfernt ihn aus Ihren Analysen. Die entsprechende Shopware-Promotion wird nicht beeinflusst — wenn der Gutscheincode bereits einem Warenkorb hinzugefügt wurde, funktioniert er weiterhin bis zum Ablauf.
:::

## Verwandte Funktionen

- [Gutscheineinstellungen](/docs/admin/coupon-settings) — Rabattregeln und Limits anpassen
- [Popup Manager](/docs/admin/popup-manager) — Aktive Popups verwalten
- [Impressions-Limits](/docs/admin/impression-caps) — Popup-Anzeigehäufigkeit begrenzen

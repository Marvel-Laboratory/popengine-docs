---
sidebar_position: 2
title: "Popup Manager"
description: "Erstellen und verwalten Sie mehrere Popup-Designs mit dem Popup Manager"
---

# Popup Manager

Der Popup Manager ist Ihre zentrale Anlaufstelle zum Erstellen und Organisieren aller Gutschein-Popups. Sie können mehrere Popups gleichzeitig betreiben, die jeweils auf verschiedene Seiten, Kundengruppen oder Länder ausgerichtet sind.

## Funktionsweise

Jedes Popup ist eine unabhängige Einheit mit eigenem Design, eigenen Rabattregeln, Anzeigebedingungen und Targeting. Wenn ein Kunde ein Popup auslöst (z. B. durch Bewegen der Maus zum Verlassen der Seite), wählt das System das aktive Popup mit der höchsten Priorität aus, das zur aktuellen Seite und zum Kunden passt.

## Neues Popup erstellen

1. Öffnen Sie **Last Second Coupon > Popups** in Ihrer Administration
2. Klicken Sie auf den Button **Popup erstellen**
3. Wählen Sie eine Startvorlage:
   - **Leere Leinwand** — Beginnen Sie mit einem leeren Editor
   - **Exit-Intent Minimal** — Sauberes einspaltiges Popup mit Überschrift, Gutscheincode und Countdown
   - **Feiertagsverkauf** — Dunkles festliches Design mit farbigem Akzent-Badge
   - **Muttertag** — Pastelldesign mit floralen Akzenten
   - **Minimal Schwarz & Weiß** — Sauberes monochromes Design
   - **Announcement Bar** — Balken über die volle Breite oben oder unten auf der Seite
4. Geben Sie Ihrem Popup einen Namen (Sie können ihn später ändern)
5. Sie werden zum [Popup-Editor](/docs/admin/popup-editor) weitergeleitet, um das Design anzupassen

![Popup-Erstellungsdialog](/img/admin/popup-create-dialog.png)

:::tip
Beginnen Sie mit einer Vorlage und passen Sie diese an. Das ist schneller als von Grund auf zu beginnen und stellt sicher, dass Ihr Popup alle wesentlichen Elemente enthält (Gutscheincode, Timer, Schließen-Button).
:::

## Popups verwalten

### Popup-Status

Jedes Popup hat einen von drei Status:

| Status | Bedeutung |
|---|---|
| **Entwurf** | Das Popup wird gestaltet und ist für Kunden nicht sichtbar |
| **Aktiv** | Das Popup ist live in Ihrer Storefront |
| **Inaktiv** | Das Popup ist pausiert und wird Kunden nicht angezeigt |

Um den Status eines Popups zu ändern, klicken Sie auf das **Status-Badge** neben dem Popup-Namen in der Liste.

### Priorität

Wenn mehrere Popups aktiv sind, wird dasjenige mit der **höchsten Prioritätsnummer** zuerst angezeigt (sofern es zur aktuellen Seite und den Bedingungen des Kunden passt). Legen Sie die Priorität in den Popup-Einstellungen fest.

Beispiel:
- Popup A (Priorität 10) — Wird auf Produktseiten angezeigt
- Popup B (Priorität 5) — Wird auf allen Seiten angezeigt

Wenn ein Kunde auf einer Produktseite ist, wird Popup A angezeigt, weil es eine höhere Priorität hat. Auf der Startseite würde stattdessen Popup B angezeigt.

### Popup duplizieren

So erstellen Sie eine Kopie eines bestehenden Popups:

1. Klicken Sie auf das **Drei-Punkte-Menü** neben dem Popup
2. Wählen Sie **Duplizieren**
3. Eine Kopie wird mit „(Kopie)" im Namen erstellt
4. Das Duplikat startet im Status **Entwurf**

Dies ist nützlich, wenn Sie Varianten eines erfolgreichen Popups für A/B-Tests oder saisonale Kampagnen erstellen möchten.

### Popup löschen

1. Klicken Sie auf das **Drei-Punkte-Menü** neben dem Popup
2. Wählen Sie **Löschen**
3. Bestätigen Sie die Löschung

:::caution
Das Löschen eines Popups ist dauerhaft. Bereits generierte Gutscheine bleiben in Ihren Analysen erhalten, aber das Popup-Design selbst kann nicht wiederhergestellt werden.
:::

## Mehrsprachigkeit

Jedes Popup unterstützt **englische** und **deutsche** Inhalte. Im Popup-Editor können Sie mit den **EN / DE** Buttons zwischen den Sprachen wechseln, um übersetzte Popup-Inhalte bereitzustellen.

Das Storefront-Widget erkennt automatisch, welche Sprache der Browser des Kunden oder der Shopware-Verkaufskanal verwendet, und zeigt die passende Version an.

![Popup Manager Liste](/img/admin/popup-manager-list.png)

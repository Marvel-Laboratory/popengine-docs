---
sidebar_position: 4
title: "Gutscheincodes"
description: "Wie Gutscheincodes generiert und in der Storefront angewendet werden"
---

# Gutscheincodes

Jedes Mal, wenn ein Popup angezeigt wird, wird ein einzigartiger Gutscheincode für den jeweiligen Kunden generiert. Der Code ist mit einer echten Shopware-Promotion verknüpft und kann während des Checkouts verwendet werden.

## Funktionsweise

1. Das Popup wird ausgelöst und das System prüft die Berechtigung des Kunden
2. Bei Berechtigung wird ein einzigartiger Gutscheincode generiert (z. B. `LSC-A7K2M9B3`)
3. Je nach [Code-Generierungsmodus](/docs/admin/coupon-settings#code-generierungsmodus): Eine neue Shopware-Promotion wird automatisch erstellt oder der Code wird einer bestehenden Promotion hinzugefügt
4. Der Code wird im Popup angezeigt und der Countdown beginnt
5. Der Kunde kann diesen Code vor Ablauf an der Kasse verwenden

## Code-Anzeige

In Ihrem Popup-Design erscheint der Gutscheincode dort, wo Sie den **Gutscheincode**-Block platziert haben. Dieser Block verwendet den Platzhalter `{code}`, der durch den tatsächlichen Code ersetzt wird.

:::info
Verwenden Sie immer einen `{code}`-Platzhalter in Ihrem Popup-Design. Ohne ihn können Kunden ihren Gutscheincode nicht sehen.
:::

## Code kopieren

Wenn Kunden auf den Gutscheincode im Popup klicken, wird er automatisch **in die Zwischenablage kopiert**. Eine kurze „Kopiert!"-Bestätigung erscheint, damit sie wissen, dass der Code gespeichert wurde.

Kunden können den Code dann im Shopware-Checkout-Rabattfeld einfügen.

## Automatische Anwendung

Wenn Ihr Popup einen Call-to-Action-Button mit Link zum Warenkorb enthält, kann der Gutschein automatisch auf den Warenkorb des Kunden angewendet werden. Dies bietet ein nahtloses Ein-Klick-Erlebnis.

## Code-Format

Gutscheincodes folgen diesem Format:
- **Präfix:** Konfigurierbar in den Gutscheineinstellungen (Standard: „LSC"). Max. 10 Zeichen, Großbuchstaben
- **Trennzeichen:** Ein Bindestrich (`-`)
- **Zufällige Zeichen:** 8 alphanumerische Zeichen

Beispielcodes: `LSC-A7K2M9B3`, `SAVE-X9P2H5N8`, `SHOP-W4B3K2M9`

:::tip
Sie können das Code-Präfix in den [Gutscheineinstellungen](/docs/admin/coupon-settings) unter **Code-Generierungsmodus** anpassen. Bei Verwendung des **angehängten Modus** wird das Präfix nicht verwendet — Codes werden direkt der bestehenden Shopware-Promotion hinzugefügt.
:::

## Code-Gültigkeit

Jeder Gutscheincode hat bestimmte Gültigkeitsregeln:

| Regel | Beschreibung |
|---|---|
| **Zeitlimit** | Läuft nach der konfigurierten Anzahl von Minuten ab (Standard: 15) |
| **Einmalige Nutzung** | Jeder Code kann nur einmal verwendet werden |
| **Kundenspezifisch** | An den Kunden gebunden, der ihn erhalten hat |
| **Mindestbestellwert** | Funktioniert nur, wenn der Warenkorb den Mindestbetrag erreicht |
| **Kategorie-Ausschlüsse** | Wird nicht auf Produkte in ausgeschlossenen Kategorien angewendet |

## Was Kunden an der Kasse sehen

Wenn ein Kunde den Gutscheincode im Shopware-Checkout eingibt:

- **Gültiger Code:** Der Rabatt wird angewendet und in der Bestellübersicht angezeigt
- **Abgelaufener Code:** Eine Fehlermeldung informiert den Kunden, dass der Code abgelaufen ist
- **Ungültiger/verwendeter Code:** Eine Fehlermeldung zeigt an, dass der Code nicht gültig ist

![Gutscheincode im Popup](/img/storefront/coupon-code-display.png)

## Verwandte Funktionen

- [Countdown-Timer](/docs/storefront/countdown-timer) — Visueller Timer für die Code-Gültigkeit
- [Gutscheineinstellungen](/docs/admin/coupon-settings) — Rabattregeln konfigurieren
- [Analysen](/docs/admin/analytics) — Gutscheinnutzung und Einlösung verfolgen

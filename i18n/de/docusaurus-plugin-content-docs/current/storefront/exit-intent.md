---
sidebar_position: 2
title: "Exit-Intent-Erkennung"
description: "Wie die Exit-Intent-Erkennung Kunden abfängt, bevor sie die Seite verlassen"
---

# Exit-Intent-Erkennung

Die Exit-Intent-Erkennung ist der Kernauslöser von Last Second Coupon. Sie erkennt den Moment, in dem ein Kunde Ihren Shop verlassen will, und zeigt ihm ein Rabatt-Popup, um ihn zum Bleiben und Abschluss seines Einkaufs zu ermutigen.

## Funktionsweise

### Auf dem Desktop

Das System überwacht die Mausbewegung des Kunden. Wenn sich die Maus nach oben zur Adressleiste, zum Zurück-Button oder zum Schließen-Button des Browsers bewegt, interpretiert das System dies als Absicht des Kunden, die Seite zu verlassen.

Genauer gesagt wird das Popup ausgelöst, wenn:
- Der Mauszeiger den **oberen Rand** der Seite verlässt
- Die Maus das Browserfenster vom **oberen oder seitlichen Rand** verlässt

Dies ist eine bewährte Technik, die von großen E-Commerce-Seiten eingesetzt wird und nachweislich die Warenkorbrettungsrate deutlich verbessert.

### Auf Mobilgeräten

Mobilgeräte haben keinen Mauszeiger, daher verwendet das System andere Signale:

- **Schnelles Aufwärts-Wischen** — Wenn ein Kunde schnell nach oben wischt (eine Geste, die häufig vor dem App-Wechsel oder dem Schließen des Browsers verwendet wird)
- **Scroll-Tiefenverfolgung** — In Kombination mit Scrollmustern werden Exit-Verhaltensweisen erkannt

:::info
Exit-Intent funktioniert am besten auf Desktop-Browsern, wo Maus-Tracking verfügbar ist. Auf Mobilgeräten ist die Erkennung weniger präzise, fängt aber dennoch einen bedeutenden Anteil abwandernder Besucher ab.
:::

## Konfiguration

Exit-Intent ist standardmäßig aktiviert. Sie können es in den [Gutscheineinstellungen](/docs/admin/coupon-settings) konfigurieren:

1. Gehen Sie zu **Last Second Coupon > Einstellungen > Auslöser-Einstellungen**
2. Stellen Sie sicher, dass **Exit-Intent** als Auslösertyp ausgewählt ist
3. Optional können Sie **Verweildauer** als sekundären Auslöser hinzufügen

## Kombination mit Verweildauer

Sie können sowohl **Exit-Intent** als auch **Verweildauer** als Auslöser für dasselbe Popup aktivieren. Das bedeutet:

- Wenn der Kunde versucht zu gehen → Popup erscheint sofort (Exit-Intent)
- Wenn der Kunde bleibt, aber nicht handelt → Popup erscheint nach der eingestellten Verzögerung (Verweildauer)

Diese Kombination fängt beide Arten von Abbruchverhalten ab.

## Wann das Popup NICHT erscheint

Das Popup wird nicht ausgelöst, wenn:

- Der Kunde in dieser Sitzung bereits ein Popup gesehen hat
- Der Kunde die [maximalen Nutzungen pro Kunde](/docs/admin/coupon-settings) überschritten hat
- Der Kunde sich innerhalb der [Abklingzeit](/docs/admin/coupon-settings) befindet
- Der Warenkorbwert unter dem Mindestbetrag liegt
- Der Kunde nicht dem [Kundensegment](/docs/admin/coupon-settings) entspricht
- Die aktuelle Seite nicht den [Anzeigebedingungen](/docs/admin/display-conditions) entspricht
- Das Popup sein [Impressions-Limit](/docs/admin/impression-caps) erreicht hat

![Exit-Intent auf dem Desktop](/img/storefront/exit-intent-desktop.png)

## Verwandte Funktionen

- [Countdown-Timer](/docs/storefront/countdown-timer) — Erzeugt Dringlichkeit nach Popup-Anzeige
- [Recovery-Tab](/docs/storefront/recovery-tab) — Lässt Kunden das Popup erneut öffnen
- [Mobile Unterstützung](/docs/storefront/mobile-support) — Wie Exit-Intent auf Touch-Geräten funktioniert

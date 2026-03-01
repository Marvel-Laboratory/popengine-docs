---
sidebar_position: 7
title: "Mobile Unterstützung"
description: "Wie das Popup auf Mobilgeräten und Touchscreens funktioniert"
---

# Mobile Unterstützung

Last Second Coupon ist vollständig für Mobilgeräte optimiert. Popups sind responsiv und die Exit-Intent-Erkennung ist für Touchscreens angepasst.

## Mobile Popup-Anzeige

Auf Mobilgeräten passt sich das Popup automatisch an den Bildschirm an:

- **Zentrierte Position** — Wird als Overlay über die volle Breite mit angemessenem Abstand angezeigt
- **Unterer Balken** — Gleitet vom unteren Bildschirmrand nach oben
- **Einschub-Ecke** — Gleitet von der unteren Kante herein

Das Popup-Design, das Sie im Editor erstellen, ist responsiv und passt sich an kleinere Bildschirme an. Elemente werden vertikal gestapelt, wenn nicht genug horizontaler Platz vorhanden ist.

## Mobile Exit-Intent

Da Mobilgeräte keinen Mauszeiger haben, verwendet das System andere Signale zur Exit-Intent-Erkennung:

### Wisch-Erkennung

Das System erkennt **schnelle Aufwärts-Wischgesten** — eine Geste, die häufig verwendet wird vor:
- Wechsel zu einer anderen App
- Schließen des Browsers
- Scrollen zur Adressleiste zum Wegnavigieren

### Scroll-Verhalten

In Kombination mit Scroll-Tiefenverfolgung erkennt das System Muster, die darauf hindeuten, dass der Kunde die Seite verlassen will, wie z. B. schnelles Zurückscrollen zum Seitenanfang.

:::info
Die mobile Exit-Intent-Erkennung ist effektiv, aber weniger präzise als das Desktop-Maus-Tracking. Für beste Ergebnisse auf Mobilgeräten sollten Sie auch den **Verweildauer**-Auslöser als Backup aktivieren, um Kunden abzufangen, die Exit-Intent nicht auslösen.
:::

## Touch-freundliche Interaktionen

Alle Popup-Interaktionen sind für Touch optimiert:

- **Schließen-Button** — Groß genug zum einfachen Antippen
- **Gutscheincode kopieren** — Antippen zum Kopieren mit visueller Bestätigung
- **E-Mail-Eingabe** — Eingabefeld über die volle Breite mit passendem Tastaturtyp
- **Recovery-Tab** — Für komfortables Antippen dimensioniert
- **CTA-Buttons** — Touch-freundliche Tippziele

## Mobile Tests

So testen Sie, wie Ihr Popup auf Mobilgeräten aussieht:

1. Öffnen Sie Ihre Storefront in einem mobilen Browser
2. Oder nutzen Sie den Geräteemulationsmodus Ihres Desktop-Browsers (drücken Sie F12, dann klicken Sie auf das Mobile-Symbol)
3. Lösen Sie das Popup aus, indem Sie auf die Verweildauer-Verzögerung warten

:::tip
Testen Sie Ihr Popup-Design immer auf einem echten Mobilgerät, bevor Sie es live schalten. Die Geräteemulation des Browsers gibt eine gute Annäherung, kann aber Touch-Verhalten und Bildschirmdarstellung nicht perfekt replizieren.
:::

![Mobiles Popup Beispiel](/img/storefront/mobile-popup-example.png)

## Verwandte Funktionen

- [Exit-Intent-Erkennung](/docs/storefront/exit-intent) — Vollständige Details zu Auslösemechanismen
- [Popup-Editor](/docs/admin/popup-editor) — Popup für alle Bildschirmgrößen gestalten

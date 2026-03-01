---
sidebar_position: 1
title: "Storefront-Übersicht"
description: "Wie Last Second Coupon auf Ihrer Storefront für Kunden funktioniert"
---

# Storefront-Übersicht

Last Second Coupon funktioniert automatisch auf Ihrer Storefront, sobald Sie die App aktiviert und ein aktives Popup erstellt haben. Hier erfahren Sie, was Ihre Kunden erleben und wie die verschiedenen Funktionen zusammenwirken.

## Wie das Popup erscheint

Das Popup wird ausgelöst, wenn ein Kunde Anzeichen zeigt, Ihren Shop verlassen zu wollen. Der häufigste Auslöser ist **Exit-Intent** — das System erkennt, wenn sich die Maus des Kunden zum Schließen-Button oder zur Adressleiste des Browsers bewegt.

Nach dem Auslösen erscheint das Popup als Overlay auf der Seite und zeigt:

1. Ihr individuelles Popup-Design (Überschrift, Bilder usw.)
2. Einen einzigartigen Gutscheincode, der für diesen Kunden generiert wurde
3. Einen Countdown-Timer, der die Gültigkeit des Angebots anzeigt
4. Einen Schließen-Button zum Ausblenden des Popups

![Popup auf der Storefront](/img/storefront/popup-storefront-example.png)

## Funktionsübersicht

| Funktion | Beschreibung |
|---|---|
| [Exit-Intent-Erkennung](/docs/storefront/exit-intent) | Fängt Kunden ab, die den Shop verlassen wollen |
| [Countdown-Timer](/docs/storefront/countdown-timer) | Erzeugt Dringlichkeit mit sichtbarem Timer |
| [Gutscheincodes](/docs/storefront/coupon-codes) | Einzigartige, zeitlich begrenzte Rabattcodes |
| [E-Mail-Erfassung](/docs/storefront/email-capture) | Optional E-Mails vor Anzeige des Codes erfassen |
| [Recovery-Tab](/docs/storefront/recovery-tab) | Dauerhafter Button zum Wiederöffnen des Popups |
| [Mobile Unterstützung](/docs/storefront/mobile-support) | Touch-optimiertes Popup-Erlebnis |
| [Mehrsprachigkeit](/docs/storefront/multi-language) | Automatische Spracherkennung (EN/DE) |

## Kundenreise

So sieht ein typisches Kundenerlebnis aus:

1. Kunde durchstöbert Ihren Shop und legt Artikel in den Warenkorb
2. Kunde macht Anstalten, die Seite zu verlassen (Exit-Intent erkannt)
3. Popup erscheint mit einem personalisierten Rabattangebot
4. Kunde gibt seine E-Mail ein (wenn E-Mail-Erfassung aktiviert ist)
5. Einzigartiger Gutscheincode wird mit Countdown-Timer angezeigt
6. Kunde klickt, um den Code zu kopieren, oder er wird automatisch dem Warenkorb hinzugefügt
7. Kunde schließt den Einkauf mit dem Rabatt ab

Wenn der Kunde das Popup schließt, aber die Seite nicht verlässt, erscheint der [Recovery-Tab](/docs/storefront/recovery-tab), damit er das Angebot später wieder öffnen kann.

## Technische Hinweise für Händler

- Das Popup-Widget ist **vollständig isoliert** von Ihrem Theme mittels Shadow-DOM-Technologie. Das bedeutet, Ihr Theme-CSS beeinflusst niemals das Popup-Aussehen und das Popup wird nie Ihr Theme beschädigen
- Das Widget ist sehr leichtgewichtig (weniger als 10 KB) und lädt asynchron, sodass es Ihre Storefront nicht verlangsamt
- Popup-Designs werden für schnelles Laden bei wiederholten Besuchen gecacht
- Alle Popup-Daten werden über unsere Cloud-Infrastruktur bereitgestellt, sodass Ihr Shopware-Server keine zusätzliche Last hat

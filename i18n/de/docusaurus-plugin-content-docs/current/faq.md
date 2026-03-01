---
sidebar_position: 5
title: "FAQ"
description: "Häufig gestellte Fragen zu Last Second Coupon"
---

# Häufig gestellte Fragen

## Allgemein

### Was ist Last Second Coupon?

Last Second Coupon ist eine Shopware 6 App, die Ihnen hilft, abgebrochene Warenkörbe zurückzugewinnen, indem sie Kunden, die Ihren Shop verlassen wollen, zeitlich begrenzte Rabatt-Popups anzeigt. Wenn ein Kunde die Maus Richtung Schließen-Button bewegt, erscheint ein Popup mit einem einzigartigen Gutscheincode und Countdown-Timer.

### Verlangsamt es meine Storefront?

Nein. Das Widget ist sehr klein (unter 10 KB) und lädt asynchron nach Ihrem Seiteninhalt. Es beeinflusst weder Ihre Ladegeschwindigkeit noch die Core Web Vitals.

### Funktioniert das Popup auf Mobilgeräten?

Ja. Das Popup ist vollständig responsiv und die Exit-Intent-Erkennung ist für Touchscreens angepasst. Auf Mobilgeräten erkennt das System schnelle Aufwärts-Wischgesten und Scroll-Muster, um festzustellen, wann ein Kunde die Seite verlassen könnte. Siehe [Mobile Unterstützung](/docs/storefront/mobile-support) für Details.

### Welche Shopware 6 Versionen werden unterstützt?

Last Second Coupon unterstützt Shopware 6.5 und höher. Siehe [Systemanforderungen](/docs/installation/requirements) für vollständige Details.

## Popups & Design

### Kann ich mehrere Popups gleichzeitig aktiv haben?

Ja. Sie können mehrere Popups erstellen und aktivieren, jedes mit eigenem Design, eigenen Rabattregeln und Targeting-Bedingungen. Das System zeigt dem Kunden das passende Popup mit der höchsten Priorität. Siehe [Popup Manager](/docs/admin/popup-manager).

### Kann ich bestimmte Seiten oder Produkte ansprechen?

Ja. Jedes Popup hat Anzeigebedingungen, mit denen Sie festlegen können, auf welchen Seiten es erscheint. Sie können bestimmte Seitentypen (Startseite, Warenkorb, Checkout, Kategorie, Produkt), bestimmte Kategorie- oder Produkt-IDs ansprechen und Seiten ausschließen. Siehe [Anzeigebedingungen](/docs/admin/display-conditions).

### Welche Vorlagen sind verfügbar?

Sechs Vorlagen sind integriert: Leere Leinwand, Exit-Intent Minimal, Feiertagsverkauf, Muttertag, Minimal Schwarz & Weiß und Announcement Bar. Sie können jede Vorlage anpassen oder von Grund auf beginnen. Siehe [Popup Manager](/docs/admin/popup-manager).

### Beeinflusst das Popup das Styling meines Themes?

Nein. Das Popup verwendet Shadow-DOM-Technologie, die eine vollständige Isolationsgrenze schafft. Ihr Theme-CSS kann das Popup nicht beeinflussen, und das Popup-CSS kann Ihr Theme nicht beeinflussen.

## Gutscheine & Rabatte

### Wie werden Gutscheincodes generiert?

Jeder Code ist einzigartig und wird automatisch generiert, wenn ein Kunde das Popup auslöst. Das System erstellt im Hintergrund eine entsprechende Shopware-Promotion, sodass der Code in Ihrem Standard-Shopware-Checkout funktioniert.

### Kann ich einen Mindestbestellwert festlegen?

Ja. Sie können einen Mindestbestellwert festlegen, ab dem ein Gutschein generiert wird. Wenn der Warenkorb des Kunden unter dem Schwellenwert liegt, erscheint das Popup nicht. Siehe [Gutscheineinstellungen](/docs/admin/coupon-settings).

### Was passiert, wenn der Countdown null erreicht?

Der Gutscheincode verfällt und kann nicht mehr an der Kasse verwendet werden. Der Kunde müsste ein neues Popup auslösen, um einen neuen Code zu erhalten (unter Berücksichtigung von Abklingzeit und Nutzungslimits).

### Kann derselbe Kunde mehrere Gutscheine erhalten?

Sie können dies mit den Einstellungen **Max. Nutzungen pro Kunde** und **Abklingzeit** steuern. Standardmäßig kann ein Kunde bis zu 3 Gutscheine mit einer 7-tägigen Abklingzeit erhalten. Siehe [Gutscheineinstellungen](/docs/admin/coupon-settings).

## E-Mail-Erfassung

### Wohin gehen die erfassten E-Mails?

Erfasste E-Mails werden im Last Second Coupon System gespeichert. Wenn der Kunde dem Newsletter zustimmt, wird seine E-Mail auch mit Ihrer Shopware-**Newsletter-Empfänger**-Liste synchronisiert.

### Ist das E-Mail-Formular DSGVO-konform?

Das E-Mail-Formular enthält eine optionale Newsletter-Opt-in-Checkbox, die eine ausdrückliche Einwilligung erfordert. Sie sollten außerdem sicherstellen, dass Ihre Datenschutzerklärung die E-Mail-Erfassung über das Popup erwähnt. Konsultieren Sie Ihren Rechtsberater für vollständige DSGVO-Konformität.

### Was, wenn ein Kunde keine E-Mail eingeben möchte?

Wenn Sie die E-Mail-Erfassung auf **optional** setzen (Standard), können Kunden auf „Überspringen" klicken, um den Gutscheincode ohne E-Mail-Eingabe zu sehen. Wenn auf **verpflichtend** gesetzt, müssen sie eine E-Mail eingeben, um fortzufahren.

## Analysen & Tracking

### Wie sehe ich, ob meine Popups funktionieren?

Gehen Sie zu **Last Second Coupon > Analysen**, um eine Übersicht aller ausgestellten, eingelösten und abgelaufenen Gutscheine sowie die Einlösungsrate zu sehen. Sie können auch nach einzelnen Gutscheincodes suchen. Siehe [Analysen](/docs/admin/analytics).

### Was ist eine gute Einlösungsrate?

Sie variiert je nach Branche und Rabatthöhe, aber eine Einlösungsrate über 15–20 % gilt allgemein als gut für Exit-Intent-Gutscheine.

### Kann ich Gutscheindaten exportieren?

<!-- TODO: Exportfunktion Details hinzufügen, wenn verfügbar -->

Derzeit sind Gutscheindaten im Analysen-Dashboard einsehbar. Eine Exportfunktion könnte in einem zukünftigen Update hinzugefügt werden.

## Technisches

### Funktioniert die App mit headless/PWA-Storefronts?

Last Second Coupon ist für die Standard-Shopware 6 Storefront konzipiert. Headless oder PWA-Storefronts erfordern eine individuelle Integration mit der Last Second Coupon API.

### Kann ich es mit mehreren Verkaufskanälen verwenden?

Ja. Sie können das Popup für bestimmte Verkaufskanäle in den [Gutscheineinstellungen](/docs/admin/coupon-settings) aktivieren oder deaktivieren. Jeder Verkaufskanal kann seine eigene Popup-Konfiguration haben.

### Wie funktioniert die Ländererkennung?

Das System erkennt das Land des Besuchers über IP-basierte Header (Cloudflare, Vercel) oder fällt auf die Browsersprache zurück. Für genaue Erkennung empfehlen wir die Verwendung eines CDN wie Cloudflare. Siehe [Länder-Targeting](/docs/admin/country-targeting).

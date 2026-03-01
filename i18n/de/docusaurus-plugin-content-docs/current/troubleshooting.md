---
sidebar_position: 6
title: "Fehlerbehebung"
description: "Lösungen für häufige Probleme mit Last Second Coupon"
---

# Fehlerbehebung

Wenn Sie Probleme mit Last Second Coupon haben, prüfen Sie die häufigen Probleme und Lösungen unten.

## Popup wird nicht angezeigt

### Das Popup erscheint nicht auf meiner Storefront

**Prüfen Sie folgendes zuerst:**

1. **Ist das Popup aktiv?** Gehen Sie zu **Last Second Coupon > Popups** und stellen Sie sicher, dass der Popup-Status **Aktiv** ist (nicht Entwurf oder Inaktiv)
2. **Ist der Master-Schalter an?** Prüfen Sie in den **Einstellungen**, dass **Popup aktivieren** eingeschaltet ist
3. **Anzeigebedingungen:** Prüfen Sie, ob die Anzeigebedingungen des Popups zur getesteten Seite passen. Wenn Sie es nur für die Warenkorbseite eingestellt haben, erscheint es nicht auf der Startseite
4. **Impressions-Limit:** Wenn Sie ein Impressions-Limit festgelegt haben, ist es möglicherweise für diesen Monat erreicht. Prüfen Sie die Impressions-Anzahl in der Popup-Liste
5. **Browser-Cache:** Leeren Sie Ihren Browser-Cache und versuchen Sie es in einem Inkognito-/Privatfenster
6. **JavaScript:** Stellen Sie sicher, dass JavaScript in Ihrem Browser aktiviert ist

### Das Popup erscheint nur einmal und dann nie wieder

Dies liegt wahrscheinlich an den Nutzungslimits:

- **Max. Nutzungen pro Kunde:** Der Standard ist 3 Nutzungen. Danach sieht der Kunde das Popup nicht mehr
- **Abklingzeit:** Der Standard ist 7 Tage. Der Kunde muss so lange warten, bevor er das Popup wieder sieht
- **Sitzungsspeicher:** Das Widget verfolgt, ob ein Popup in der aktuellen Sitzung bereits angezeigt wurde. Versuchen Sie, ein neues Browserfenster oder Inkognito-Fenster zu öffnen

Zum Testen öffnen Sie jedes Mal ein Inkognito-/Privatfenster.

### Das Popup erscheint nicht auf Mobilgeräten

Die mobile Exit-Intent-Erkennung funktioniert anders als auf dem Desktop. Versuchen Sie:

1. Aktivieren Sie den **Verweildauer**-Auslöser zusätzlich zu Exit-Intent
2. Warten Sie auf die konfigurierte Verzögerung (Standard: 30 Sekunden) für den Zeitauslöser
3. Versuchen Sie eine schnelle Aufwärts-Wischgeste, um Exit-Intent auf Mobilgeräten auszulösen

## Gutscheincodes

### Gutscheincode wird an der Kasse als ungültig angezeigt

Mögliche Ursachen:

- **Abgelaufen:** Der Gutschein ist möglicherweise abgelaufen. Prüfen Sie den Countdown-Timer — wenn er null erreicht hat, ist der Code nicht mehr gültig
- **Bereits verwendet:** Jeder Gutscheincode kann nur einmal verwendet werden
- **Warenkorb zu niedrig:** Der Warenkorbwert liegt möglicherweise unter dem Mindestschwellenwert. Prüfen Sie Ihre Gutscheineinstellungen für den Mindestbestellwert
- **Ausgeschlossene Kategorie:** Produkte in ausgeschlossenen Kategorien können die Anwendung des Gutscheins verhindern

### Kein Gutscheincode erscheint im Popup

Stellen Sie sicher, dass Ihr Popup-Design den `{code}`-Platzhalter enthält. Öffnen Sie den **Popup-Editor** und prüfen Sie, ob ein **Gutscheincode**-Block in Ihrem Design vorhanden ist.

### Kunde sieht einen anderen Rabatt als erwartet

Jedes Popup kann seine eigene Gutscheinkonfiguration haben. Prüfen Sie:
1. Welches Popup der Kunde sieht (prüfen Sie den Popup-Namen in den Analysen)
2. Die Gutscheineinstellungen für dieses spezifische Popup
3. Ob die Obergrenze für den **maximalen Rabattbetrag** den Rabatt begrenzt

## Popup-Design

### Popup sieht anders aus als die Editor-Vorschau

- **Browser-Unterschiede:** Das Popup kann in verschiedenen Browsern leicht unterschiedlich dargestellt werden. Testen Sie in Chrome, Firefox und Safari
- **Shadow-DOM-Isolation:** Das CSS des Popups ist von Ihrem Theme isoliert. Wenn Text anders aussieht, liegt es daran, dass das Popup seinen eigenen Font-Stack verwendet statt der Schriften Ihres Themes
- **Bildschirmgröße:** Das Popup ist responsiv. Prüfen Sie, wie es bei verschiedenen Bildschirmbreiten aussieht

### Der Editor lädt nicht

1. Leeren Sie Ihren Browser-Cache
2. Versuchen Sie einen anderen Browser (Chrome funktioniert am besten)
3. Stellen Sie sicher, dass Sie eine unterstützte Browser-Version verwenden (siehe [Anforderungen](/docs/installation/requirements))
4. Deaktivieren Sie Browser-Erweiterungen, die stören könnten (Werbeblocker, Datenschutz-Tools)

### Recovery-Tab ist nicht sichtbar

1. Stellen Sie sicher, dass **Recovery-Tab aktivieren** im Popup-Editor eingeschaltet ist
2. Der Recovery-Tab erscheint erst **nachdem** ein Kunde das Popup geschlossen hat. Sie müssen zuerst das Popup auslösen und dann schließen
3. Prüfen Sie, ob die Tab-Farben sich von Ihrem Seitenhintergrund abheben. Ein schwarzer Tab auf dunklem Hintergrund kann schwer zu sehen sein

## Analysen

### Analysen zeigen keine Daten

- Gutscheine werden erst protokolliert, wenn Kunden tatsächlich das Popup auslösen und ein Code generiert wird
- Wenn das Popup neu ist und noch nicht ausgelöst wurde, gibt es noch keine Daten
- Stellen Sie sicher, dass das Popup **aktiv** ist und die Einstellungen eine Gutschein-Generierung erlauben

### Einlösungsdaten sind verzögert

Die Einlösungsverfolgung hängt von Shopware-Webhook-Benachrichtigungen ab. Es kann eine kurze Verzögerung (bis zu einigen Minuten) zwischen der Nutzung eines Gutscheins durch einen Kunden und der Anzeige als „Eingelöst" in den Analysen geben.

## E-Mail-Erfassung

### Erfasste E-Mails erscheinen nicht in der Shopware-Newsletter-Liste

1. Stellen Sie sicher, dass die **Newsletter-Opt-in**-Checkbox in den Gutscheineinstellungen aktiviert ist
2. Der Kunde muss die Newsletter-Checkbox im Popup angekreuzt haben
3. Prüfen Sie **Kunden > Newsletter-Empfänger** in Ihrer Shopware-Administration
4. Es kann eine kurze Verzögerung geben, bevor die E-Mail erscheint

### E-Mail-Formular sendet nicht ab

Das E-Mail-Formular verwendet einen „Fire-and-Forget"-Ansatz — es wird im Hintergrund übermittelt, ohne das Popup zu blockieren. Bei einem Netzwerkproblem wird die E-Mail möglicherweise nicht gespeichert, aber der Gutscheincode wird trotzdem angezeigt. Prüfen Sie Ihre Netzwerkverbindung und versuchen Sie es erneut.

## Weitere Hilfe benötigt?

Wenn keine der oben genannten Lösungen Ihr Problem löst:

1. Notieren Sie die genauen Schritte zur Reproduktion des Problems
2. Machen Sie einen Screenshot von etwaigen Fehlermeldungen
3. [Kontaktieren Sie unser Support-Team](https://lastsecondcoupon.com/support) mit diesen Informationen

Wir antworten in der Regel innerhalb eines Werktages.

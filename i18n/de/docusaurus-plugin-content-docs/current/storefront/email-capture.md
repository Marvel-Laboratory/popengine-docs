---
sidebar_position: 5
title: "E-Mail-Erfassung"
description: "Kunden-E-Mails über das Popup erfassen, bevor der Gutscheincode angezeigt wird"
---

# E-Mail-Erfassung

Die E-Mail-Erfassung ermöglicht es Ihnen, Kunden-E-Mail-Adressen über das Popup-Formular zu sammeln, bevor der Gutscheincode angezeigt wird. So können Sie Ihre Marketing-Liste aufbauen und gleichzeitig Rabatte anbieten.

## Funktionsweise

Wenn die E-Mail-Erfassung aktiviert ist:

1. Das Popup erscheint mit einem **E-Mail-Formular-Overlay** über dem Gutscheincode
2. Der Kunde gibt seine E-Mail-Adresse ein
3. Optional kreuzt der Kunde eine Newsletter-Opt-in-Checkbox an
4. Die E-Mail wird übermittelt und der Gutscheincode darunter wird sichtbar
5. Die E-Mail wird gespeichert und optional mit dem Shopware-Newsletter synchronisiert

## E-Mail-Erfassung aktivieren

1. Gehen Sie zu **Last Second Coupon > Einstellungen**
2. Scrollen Sie zum Abschnitt **E-Mail-Erfassung**
3. Schalten Sie **E-Mail-Erfassung aktivieren** ein
4. Konfigurieren Sie die zusätzlichen Optionen unten

| Einstellung | Beschreibung | Standard |
|---|---|---|
| **E-Mail-Erfassung aktivieren** | E-Mail-Formular im Popup anzeigen | Deaktiviert |
| **E-Mail verpflichtend** | E-Mail-Eingabe vor Anzeige des Codes erforderlich. Wenn deaktiviert, erscheint ein „Überspringen"-Link | Optional |
| **Newsletter-Opt-in** | Checkbox anzeigen, um den Kunden für Ihren Newsletter anzumelden | Deaktiviert |
| **Platzhaltertext** | Benutzerdefinierter Text im E-Mail-Eingabefeld | „Geben Sie Ihre E-Mail für Ihren Rabatt ein" |

![E-Mail-Erfassungseinstellungen](/img/admin/email-capture-settings.png)

## Kundenerlebnis

### Verpflichtende E-Mail

Wenn die E-Mail verpflichtend ist, muss der Kunde eine gültige E-Mail-Adresse eingeben, um den Gutscheincode zu sehen. Es gibt keine Möglichkeit, dies zu überspringen.

### Optionale E-Mail (mit Überspringen)

Wenn die E-Mail optional ist, sehen Kunden:
- Ein E-Mail-Eingabefeld
- Einen **„Überspringen"**-Link unter dem Formular

Wenn sie auf „Überspringen" klicken, verschwindet das E-Mail-Formular und der Gutscheincode wird sofort angezeigt.

:::tip
Die **optionale** E-Mail-Erfassung führt in der Regel zu höherem Popup-Engagement, da sich Kunden nicht gezwungen fühlen. Viele Kunden geben ihre E-Mail trotzdem freiwillig an, wenn sie wissen, dass es nicht verpflichtend ist.
:::

## E-Mail-Validierung

Das Formular validiert E-Mail-Adressen vor dem Absenden:
- Muss ein `@`-Zeichen enthalten
- Muss ein gültiges Domain-Format haben
- Ungültige Adressen zeigen eine Fehlermeldung

## Newsletter-Synchronisierung

Wenn der Newsletter-Opt-in aktiviert ist und ein Kunde die Checkbox ankreuzt:

- Die E-Mail wird zu Ihrer Shopware-**Newsletter-Empfänger**-Liste hinzugefügt
- Der Kunde wird für den Newsletter des relevanten Verkaufskanals und der Sprache angemeldet
- Sie finden den Abonnenten unter **Kunden > Newsletter-Empfänger** in Ihrer Shopware-Administration

## Wo E-Mails gespeichert werden

Erfasste E-Mails werden im Last Second Coupon System gespeichert und verknüpft mit:
- Dem generierten Gutscheincode
- Der Shopware-Kunden-ID des Kunden (wenn eingeloggt)
- Ob der Kunde dem Newsletter zugestimmt hat

:::info
Die E-Mail-Übermittlung blockiert niemals die Popup-Funktionalität. Bei einem Netzwerkproblem während der E-Mail-Übermittlung wird der Gutscheincode trotzdem dem Kunden angezeigt.
:::

![E-Mail-Erfassung auf der Storefront](/img/storefront/email-capture-form.png)

## Verwandte Funktionen

- [Gutscheincodes](/docs/storefront/coupon-codes) — Was nach der E-Mail-Übermittlung passiert
- [Gutscheineinstellungen](/docs/admin/coupon-settings) — Vollständige E-Mail-Erfassungskonfiguration

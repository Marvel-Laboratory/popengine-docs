---
sidebar_position: 3
title: "Countdown-Timer"
description: "Wie der Countdown-Timer Dringlichkeit für Kunden erzeugt"
---

# Countdown-Timer

Der Countdown-Timer verleiht Ihrem Popup Dringlichkeit, indem er Kunden genau zeigt, wie viel Zeit ihnen noch bleibt, ihren Gutschein einzulösen. Wenn der Timer null erreicht, verfällt der Gutschein.

## Funktionsweise

Wenn ein Gutschein generiert wird, erhält er eine Ablaufzeit basierend auf Ihren [Gutscheineinstellungen](/docs/admin/coupon-settings). Der Countdown-Timer zeigt die verbleibende Zeit visuell in Minuten und Sekunden an und aktualisiert sich jede Sekunde.

Zum Beispiel, bei 15 Minuten Ablaufzeit:
- **14:59** → **14:58** → ... → **00:01** → **Abgelaufen**

## Timer aktivieren

Der Countdown-Timer wird pro Popup gesteuert:

1. Öffnen Sie Ihr Popup im **Popup-Editor**
2. Gehen Sie zu **Overlay-Einstellungen**
3. Schalten Sie **Countdown-Timer anzeigen** ein

Der Timer ist **standardmäßig aktiviert**, wenn Sie ein neues Popup erstellen.

## Timer in Ihrem Design

Um den Timer in Ihrem Popup-Design anzuzeigen, verwenden Sie den **Countdown-Timer**-Block im Editor. Dieser Block verwendet den Platzhalter `{minutes_left}`, der durch die tatsächlich verbleibende Zeit ersetzt wird, wenn das Popup angezeigt wird.

Sie können den Timer wie jedes andere Element gestalten:
- Schriftgröße und -farbe
- Hintergrund
- Innenabstand und Außenabstand
- Position innerhalb Ihres Layouts

## Was passiert, wenn die Zeit abläuft

Wenn der Countdown null erreicht:

1. Der Gutscheincode wird ungültig
2. Der Kunde kann ihn nicht mehr an der Kasse verwenden
3. Das Popup bleibt sichtbar, aber der Code wird als abgelaufen markiert

:::tip
Eine **15-minütige Ablaufzeit** ist der Standard und funktioniert für die meisten Shops gut. Sie gibt Kunden genug Zeit zum Entscheiden, ist aber kurz genug, um echte Dringlichkeit zu erzeugen. Experimentieren Sie mit kürzeren Zeiten (5–10 Minuten) für höhere Dringlichkeit oder längeren Zeiten (30–60 Minuten) für hochwertige Einkäufe.
:::

## Ablaufzeit einstellen

Die Countdown-Dauer wird in den [Gutscheineinstellungen](/docs/admin/coupon-settings) festgelegt:

1. Gehen Sie zu **Rabattkonfiguration**
2. Passen Sie das Feld **Gutschein-Ablaufzeit** an (in Minuten)
3. Der Bereich liegt zwischen 1 und 1.440 Minuten (24 Stunden)

![Countdown-Timer Beispiel](/img/storefront/countdown-timer.png)

## Verwandte Funktionen

- [Gutscheincodes](/docs/storefront/coupon-codes) — Wie Gutscheincodes generiert und verwendet werden
- [Gutscheineinstellungen](/docs/admin/coupon-settings) — Ablaufzeit konfigurieren

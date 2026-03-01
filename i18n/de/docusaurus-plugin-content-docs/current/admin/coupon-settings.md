---
sidebar_position: 4
title: "Gutscheineinstellungen"
description: "Konfigurieren Sie Rabattregeln, Auslöser, Nutzungslimits und E-Mail-Erfassung für Ihre Popups"
---

# Gutscheineinstellungen

Die Gutscheineinstellungen steuern, wie Rabatte erstellt werden, wann Popups ausgelöst werden und welche Limits gelten. Jedes Popup kann seine eigene Gutscheinkonfiguration haben.

## Funktionsweise

Wenn ein Kunde ein Popup auslöst und alle Berechtigungskriterien erfüllt, generiert das System einen einzigartigen Gutscheincode, der mit einer Shopware-Promotion verknüpft ist. Der Gutschein hat eine begrenzte Gültigkeitsdauer und kann nur gemäß den von Ihnen festgelegten Regeln verwendet werden.

## Code-Generierungsmodus

Wählen Sie, wie Gutscheincodes erstellt und mit Shopware-Promotions verknüpft werden.

### Automatisch (Standard)

Im automatischen Modus erstellt Last Second Coupon bei jeder Gutscheincode-Generierung eine **neue Shopware-Promotion**. Dies ist die einfachste Option — alles wird automatisch für Sie erledigt.

| Einstellung | Beschreibung | Standard |
|---|---|---|
| **Code-Präfix** | Ein Präfix, das jedem generierten Code vorangestellt wird (max. 10 Zeichen, Großbuchstaben). Beispiel: Ein Präfix „SAVE" erzeugt Codes wie `SAVE-A7K2M9` | LSC |

### Bestehende Promotion verwenden

Im angehängten Modus werden Gutscheincodes einer **bestehenden Shopware-Promotion** hinzugefügt, die Sie bereits konfiguriert haben. Dies gibt Ihnen volle Kontrolle über die Promotion-Regeln in Shopware (z. B. kostenloser Versand, Kaufe-eins-bekomme-eins, spezifische Produktrabatte), während Last Second Coupon das Popup und die Code-Verteilung übernimmt.

| Einstellung | Beschreibung |
|---|---|
| **Shopware Promotion-ID** | Die UUID der bestehenden Promotion, an die Codes angehängt werden |
| **Überprüfen** | Klicken Sie hier, um zu überprüfen, ob die Promotion existiert, aktiv ist und individuelle Codes aktiviert hat |

#### Einrichtung des angehängten Modus

1. Erstellen Sie eine Promotion in Ihrer Shopware-Administration (**Marketing > Promotions**)
2. Aktivieren Sie **Individuelle Promotionscodes verwenden** in den Promotion-Einstellungen
3. Kopieren Sie die UUID der Promotion aus der URL (z. B. `https://ihr-shop.com/admin#/sw/promotion/v2/detail/{UUID}`)
4. Wählen Sie in Last Second Coupon **Bestehende Shopware-Promotion verwenden** und fügen Sie die UUID ein
5. Klicken Sie auf **Überprüfen**, um die Verbindung zu bestätigen

:::warning
Die angehängte Promotion **muss** **Individuelle Promotionscodes verwenden** aktiviert haben. Andernfalls zeigt die Überprüfung eine Warnung an und die generierten Codes funktionieren nicht an der Kasse.
:::

:::tip
Verwenden Sie den **angehängten Modus**, wenn Sie Promotion-Funktionen benötigen, die Last Second Coupon nicht direkt konfiguriert, wie z. B. Kostenloser-Versand-Promotions, spezifische Produktrabatte oder komplexe Rabattregeln, die bereits in Shopware eingerichtet sind.
:::

## Rabattkonfiguration

### Rabatttyp

| Option | Beschreibung |
|---|---|
| **Prozentual** | Ein prozentualer Rabatt auf den Warenkorbwert (z. B. 10 % Rabatt) |
| **Fester Betrag** | Ein fester Euro-Betrag als Rabatt auf den Warenkorbwert (z. B. 5 EUR Rabatt) |

### Rabatteinstellungen

| Einstellung | Beschreibung | Standard |
|---|---|---|
| **Rabattwert** | Der Rabattbetrag (prozentual oder fest) | 10 |
| **Mindestbestellwert** | Der Warenkorb des Kunden muss mindestens diesen Wert erreichen | 50,00 EUR |
| **Maximaler Rabattbetrag** | Obergrenze für prozentuale Rabatte (optional). Verhindert sehr hohe Rabatte bei hochwertigen Warenkörben | Keiner |
| **Gutschein-Ablaufzeit** | Wie lange der Gutscheincode nach Generierung gültig ist (in Minuten) | 15 Minuten |

![Rabattkonfiguration](/img/admin/coupon-settings-discount.png)

:::tip
Das Festlegen eines **maximalen Rabattbetrags** wird für prozentuale Rabatte empfohlen. Beispiel: „10 % Rabatt, maximal 20 EUR" verhindert, dass ein Kunde mit einem 500 EUR Warenkorb 50 EUR Rabatt erhält.
:::

## Auslöser-Einstellungen

Auslöser bestimmen, **wann** das Popup Kunden angezeigt wird.

### Auslöser-Typen

Sie können einen oder beide Auslöser aktivieren:

| Auslöser | Funktionsweise |
|---|---|
| **Exit-Intent** | Erkennt, wenn sich die Maus des Kunden zum Schließen-Button oder zur Adressleiste des Browsers bewegt. Auf Mobilgeräten werden schnelle Aufwärts-Wischgesten erkannt (üblich beim Verlassen einer Seite) |
| **Verweildauer** | Zeigt das Popup, nachdem der Kunde eine bestimmte Anzahl von Sekunden auf der Seite war |

### Auslöser-Einstellungen

| Einstellung | Beschreibung | Standard |
|---|---|---|
| **Auslöser-Verzögerung** | Für Verweildauer: Sekunden vor Anzeige des Popups (5–300 Sekunden) | 30 Sekunden |
| **Nur eingeloggte Kunden** | Popups nur Kunden anzeigen, die in ihrem Konto angemeldet sind | Deaktiviert |

:::info
**Exit-Intent** ist der beliebteste Auslöser. Er fängt Kunden genau in dem Moment ab, in dem sie die Seite verlassen wollen, was die stärkste Dringlichkeit erzeugt. **Verweildauer** ist nützlich als sekundärer Auslöser für Kunden, die langsam browsen.
:::

## Nutzungslimits

Verhindern Sie Gutscheinmissbrauch und kontrollieren Sie, wie oft Kunden Popups sehen.

| Einstellung | Beschreibung | Standard |
|---|---|---|
| **Max. Nutzungen pro Kunde** | Wie oft derselbe Kunde einen Gutschein erhalten kann (1–100) | 3 |
| **Abklingzeit** | Mindesttage zwischen Gutschein-Generierungen für denselben Kunden (0–365 Tage) | 7 Tage |
| **Ausgeschlossene Kategorien** | Kategorie-IDs, für die Gutscheine nicht gelten sollen. Eine ID pro Zeile oder kommagetrennt | Keine |

:::tip
Eine **7-tägige Abklingzeit** funktioniert für die meisten Shops gut. Sie verhindert, dass Kunden bei jedem Besuch das Popup sehen, und engagiert sie trotzdem erneut, wenn sie später zurückkehren.
:::

## Kundensegmente

Richten Sie Ihre Popups auf bestimmte Besuchertypen aus:

| Segment | Beschreibung |
|---|---|
| **Neue Besucher** | Erstbesucher, die noch nie in Ihrem Shop waren |
| **Wiederkehrende Kunden** | Besucher, die schon einmal in Ihrem Shop waren, aber nicht eingeloggt sind |
| **Eingeloggte Kunden** | Kunden, die in ihrem Konto angemeldet sind |

Sie können ein oder mehrere Segmente auswählen. Wenn keine Segmente ausgewählt sind, wird das Popup allen Besuchern angezeigt.

![Kundensegmente](/img/admin/coupon-settings-segments.png)

## Verkaufskanal-Auswahl

Wählen Sie, welche Shopware-Verkaufskanäle das Popup anzeigen sollen. Standardmäßig werden Popups auf allen Verkaufskanälen angezeigt.

1. Gehen Sie zum Abschnitt **Verkaufskanäle** in den Gutscheineinstellungen
2. Aktivieren oder deaktivieren Sie die Verkaufskanäle, auf denen dieses Popup erscheinen soll
3. Speichern Sie Ihre Änderungen

Dies ist nützlich, wenn Sie mehrere Storefronts betreiben und für jede unterschiedliche Popups verwenden möchten.

## E-Mail-Erfassung

Erfassen Sie optional Kunden-E-Mails, bevor der Gutscheincode angezeigt wird.

| Einstellung | Beschreibung | Standard |
|---|---|---|
| **E-Mail-Erfassung aktivieren** | E-Mail-Formular vor dem Gutscheincode anzeigen | Deaktiviert |
| **E-Mail verpflichtend** | Wenn deaktiviert, können Kunden über einen „Überspringen"-Link den Gutschein ohne E-Mail-Eingabe erhalten | Optional (Überspringen möglich) |
| **Newsletter-Opt-in** | Checkbox anzeigen, um den Kunden für Ihren Shopware-Newsletter anzumelden | Deaktiviert |
| **E-Mail-Platzhaltertext** | Der Platzhaltertext im E-Mail-Eingabefeld | „Geben Sie Ihre E-Mail für Ihren Rabatt ein" |

### So funktioniert die E-Mail-Erfassung

1. Das Popup erscheint mit einem E-Mail-Formular-Overlay
2. Der Kunde gibt seine E-Mail ein (oder klickt auf „Überspringen", wenn erlaubt)
3. Die E-Mail wird gespeichert und optional für den Newsletter angemeldet
4. Der Gutscheincode wird angezeigt

:::info
Erfasste E-Mails werden mit Ihrem Shopware-Kunden- und Newsletter-System synchronisiert. Sie finden sie unter **Kunden > Newsletter-Empfänger** in Ihrer Shopware-Administration.
:::

![E-Mail-Erfassungsformular](/img/storefront/email-capture-form.png)

## Master-Schalter

Der **Popup aktivieren**-Schalter oben auf der Einstellungsseite ist ein Hauptschalter für die gesamte Popup-Funktionalität. Wenn deaktiviert, werden keine Popups auf irgendeiner Seite angezeigt, unabhängig von den individuellen Popup-Einstellungen.

## Verwandte Funktionen

- [Popup-Editor](/docs/admin/popup-editor) — Gestalten Sie das Erscheinungsbild Ihres Popups
- [Anzeigebedingungen](/docs/admin/display-conditions) — Steuern Sie, welche Seiten das Popup anzeigen
- [Länder-Targeting](/docs/admin/country-targeting) — Popups nach Besucherland einschränken
- [Analysen](/docs/admin/analytics) — Gutschein-Leistung verfolgen

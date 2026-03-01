---
sidebar_position: 8
title: "Multi-Language Support"
description: "How the popup automatically adapts to your customer's language"
---

# Multi-Language Support

Last Second Coupon supports English and German popup content. The system automatically detects the customer's language and shows the matching version of your popup.

## Supported Languages

| Language | Code |
|---|---|
| English | en |
| German | de |

## How Language Detection Works

The storefront widget detects the customer's language in this order:

1. **Shopware sales channel language** — If the customer is browsing a German-language sales channel, the German popup is shown
2. **HTML page language** — The `lang` attribute on the page (e.g., `<html lang="de">`)
3. **Fallback** — If neither is detected, the English version is shown

:::info
You don't need to configure language detection. It works automatically based on your Shopware sales channel settings and the customer's browsing context.
:::

## Creating Translated Content

In the [Popup Editor](/docs/admin/popup-editor):

1. Design your popup in English (the default language)
2. Click the **DE** button at the top of the editor
3. Translate all text content to German
4. The German version can have completely different HTML and CSS if needed
5. Save both versions

### What Can Be Translated

- Popup headline and body text
- CTA button text
- Any custom text elements
- Recovery tab text
- Email capture placeholder text

### What Is NOT Translated

- Coupon code (it's the same in all languages)
- Countdown timer (numbers are universal)
- Discount values

## Tips for German Content

When translating your popup to German:

- Use formal "Sie" form for professional shops
- Keep text concise — German words tend to be longer than English
- Test the layout to make sure longer German text doesn't break your design
- Translate the recovery tab text separately in the recovery tab settings

:::tip
If you only serve one language, you don't need to create a second translation. Simply design your popup in your primary language and the same content will be shown regardless of the detected language.
:::

## Related Features

- [Popup Editor](/docs/admin/popup-editor) — Design and translate your popup
- [Recovery Tab](/docs/storefront/recovery-tab) — Recovery tab text can also be translated

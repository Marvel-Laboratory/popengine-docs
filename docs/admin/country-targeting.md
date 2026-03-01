---
sidebar_position: 6
title: "Country Targeting"
description: "Show or hide popups based on the visitor's country"
---

# Country Targeting

Country targeting lets you control which countries see your coupon popups. This is useful for running country-specific promotions or complying with regional regulations.

## How It Works

When a customer visits your storefront, the system detects their country based on their IP address. The popup is then shown or hidden based on your targeting rules.

Country detection uses the following methods (in order of priority):

1. **Cloudflare** — If your site uses Cloudflare, the visitor's country is detected automatically
2. **Vercel** — If hosted on Vercel, the platform provides country information
3. **IP headers** — Standard IP-based country detection headers
4. **Browser language** — As a fallback, the system makes a best guess based on the browser's language settings

:::info
For the most accurate country detection, we recommend using a CDN like Cloudflare in front of your Shopware installation. Without a CDN, the fallback to browser language is less reliable.
:::

## Targeting Modes

Each popup has three country targeting modes:

### All Countries (Default)

The popup is shown to visitors from any country. This is the default setting.

### Include Countries

The popup is **only** shown to visitors from the countries you specify. Visitors from all other countries will not see this popup.

**Example:** Set to include "DE, AT, CH" to show the popup only to visitors from Germany, Austria, and Switzerland.

### Exclude Countries

The popup is shown to visitors from **all** countries **except** the ones you specify.

**Example:** Set to exclude "US, GB" to hide the popup from visitors in the United States and United Kingdom, while showing it to everyone else.

## Configuration

1. Open your popup in the **Popup Editor**
2. Go to the **Country Targeting** section
3. Select a mode: **All**, **Include**, or **Exclude**
4. If using Include or Exclude, enter the country codes separated by commas

Country codes use the 2-letter ISO format (e.g., DE for Germany, FR for France, US for United States).

| Common Codes | Country |
|---|---|
| DE | Germany |
| AT | Austria |
| CH | Switzerland |
| FR | France |
| NL | Netherlands |
| GB | United Kingdom |
| US | United States |

![Country Targeting Settings](/img/admin/country-targeting.png)

:::tip
You can combine country targeting with [display conditions](/docs/admin/display-conditions) for very specific targeting. For example, show a popup only on product pages for visitors from Germany.
:::

## Unknown Countries

If the system cannot determine a visitor's country (for example, if they are using a VPN or privacy tool), the popup is **shown by default**. This "fail-open" approach ensures you don't accidentally miss potential customers.

## Related Features

- [Display Conditions](/docs/admin/display-conditions) — Target popups by page type
- [Coupon Settings](/docs/admin/coupon-settings) — Customer segment targeting
- [Impression Caps](/docs/admin/impression-caps) — Limit how often popups are shown

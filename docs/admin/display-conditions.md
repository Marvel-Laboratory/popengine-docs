---
sidebar_position: 5
title: "Display Conditions"
description: "Control which pages and customer segments see your coupon popups"
---

# Display Conditions

Display conditions let you target specific pages, categories, and products so your popups only appear where they make the most impact.

## How It Works

Each popup has its own set of display conditions. When a customer visits a page, the system checks all active popups and shows the highest-priority one that matches the current page conditions.

## Page Targeting

### Pages to Show On

Select one or more page types where the popup should appear:

| Page Type | What It Matches |
|---|---|
| **All pages** | Every page on your storefront (default) |
| **Home page** | Your shop's main landing page |
| **Cart page** | The shopping cart page |
| **Checkout page** | The checkout/payment flow |
| **Category pages** | Category listing pages |
| **Product pages** | Individual product detail pages |

### Specific Category or Product Targeting

When you select **Category pages** or **Product pages**, you can optionally enter specific IDs to narrow the targeting:

1. Select **Category pages** in the "Show on" list
2. A text field appears for **Category IDs**
3. Enter one or more Shopware category UUIDs, separated by commas

The same applies to product pages with product UUIDs.

:::tip
**Finding category or product IDs:** In your Shopware Administration, open the category or product and look at the URL in your browser's address bar. The UUID is the long string of characters at the end of the URL.
:::

### Pages to Exclude

Even if a popup matches the "show on" rules, you can exclude specific page types:

| Exclude Option | Effect |
|---|---|
| **Home page** | Never show on the home page |
| **Cart page** | Never show on the cart page |
| **Checkout page** | Never show during checkout |
| **Category pages** | Never show on category listings |
| **Product pages** | Never show on product pages |

Exclusions always take priority over "show on" rules.

## Common Setups

### Show Everywhere Except Checkout

The most common setup — catch customers on any page but don't interrupt the checkout flow:

- **Show on:** All pages
- **Exclude:** Checkout page

### Cart Page Only

Target customers who already have items in their cart:

- **Show on:** Cart page

### Specific Product Categories

Show a special discount only on certain product categories:

- **Show on:** Category pages
- **Category IDs:** Enter the UUIDs of the target categories

### Different Popups for Different Pages

Use multiple popups with different priorities:

1. **Popup A** (priority 10) — "Free shipping!" on cart page only
2. **Popup B** (priority 5) — "10% off!" on all other pages

Since Popup A has higher priority, it takes precedence on the cart page. Popup B covers everything else.

![Display Conditions Settings](/img/admin/display-conditions.png)

## Related Features

- [Popup Manager](/docs/admin/popup-manager) — Create and manage multiple popups with different conditions
- [Country Targeting](/docs/admin/country-targeting) — Target popups by visitor country
- [Coupon Settings](/docs/admin/coupon-settings) — Customer segment targeting

---
sidebar_position: 7
title: "Impression Caps"
description: "Limit how many times a popup is shown per month"
---

# Impression Caps

Impression caps let you limit how many times a popup is displayed per month. This helps you control costs and ensure your discount offers remain exclusive.

## How It Works

Each time a popup is shown to a customer, it counts as one "impression." You can set a maximum number of impressions per popup per calendar month. Once the cap is reached, the popup stops appearing until the next month.

## Setting an Impression Cap

1. Open your popup in the **Popup Editor**
2. Find the **Impression Cap** setting
3. Enter the maximum number of impressions per month
4. Leave empty for **unlimited** impressions (default)

| Setting | Description | Default |
|---|---|---|
| **Monthly impression cap** | Maximum times this popup can be shown in a calendar month | Unlimited |

## How the Cap Resets

The impression counter resets automatically on the **first day of each calendar month** (UTC timezone). For example:

- January 1: Counter resets to 0
- Throughout January: Counter increases with each popup display
- January 31: If cap is reached, popup stops showing
- February 1: Counter resets, popup starts showing again

## Viewing Impression Counts

To see how many impressions a popup has used:

1. Go to **Last Second Coupon > Popups**
2. The impression count is displayed next to each popup in the list

![Impression Count](/img/admin/impression-caps.png)

## Use Cases

### Budget Control

If each coupon costs you money in discounts, set an impression cap to limit your monthly exposure. For example, a cap of 1,000 impressions ensures you won't generate more than 1,000 potential discount codes per month.

### Exclusivity

A low impression cap (e.g., 100 per month) makes the offer feel more exclusive. Not every visitor will see the popup, creating a sense of scarcity.

### Seasonal Campaigns

During high-traffic periods (Black Friday, holiday sales), you might want to increase or remove the cap temporarily to maximize conversions.

:::tip
Monitor your impression usage in the popup list and adjust the cap as needed. It's better to start with a higher cap and reduce it than to set it too low and miss potential customers.
:::

## Related Features

- [Analytics](/docs/admin/analytics) — Track coupon generation and redemption rates
- [Display Conditions](/docs/admin/display-conditions) — Control which pages show the popup
- [Coupon Settings](/docs/admin/coupon-settings) — Configure discount rules and limits

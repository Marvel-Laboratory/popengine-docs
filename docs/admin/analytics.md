---
sidebar_position: 8
title: "Analytics"
description: "Track popup performance, coupon usage, and redemption rates"
---

# Analytics

The Analytics section gives you a clear view of how your popups are performing. Track coupon generation, redemption rates, and individual coupon details.

## How It Works

Every time a coupon is generated through a popup, it is logged with details about the customer, cart value, discount, and more. The analytics dashboard summarizes this data so you can measure your popup's effectiveness.

## Summary Dashboard

At the top of the analytics page, you'll see five key metrics:

| Metric | Description |
|---|---|
| **Total coupons issued** | Total number of coupon codes generated across all popups |
| **Active coupons** | Coupons that have been generated but not yet used or expired |
| **Redeemed coupons** | Coupons that customers have successfully used to complete a purchase |
| **Redemption rate** | Percentage of issued coupons that were redeemed |
| **Expired coupons** | Coupons that reached their time limit without being used |

![Analytics Summary](/img/admin/analytics-summary.png)

:::tip
A healthy redemption rate varies by industry, but anything above 15-20% is generally considered good for exit-intent coupons.
:::

## Coupon Log

Below the summary, you'll find a detailed table of all generated coupons.

### Table Columns

| Column | Description |
|---|---|
| **Code** | The unique coupon code (e.g., "LSC-A7K2M9") |
| **Popup** | Which popup generated this coupon |
| **Status** | Active, Redeemed, Expired, or Deleted |
| **Discount** | The discount value and type (e.g., "10%" or "5.00 EUR") |
| **Created** | When the coupon was generated |
| **Redeemed At** | When the coupon was used (if redeemed) |

### Filtering and Search

Use the filters above the table to narrow down results:

- **Search** — Type a coupon code to find it instantly
- **Status filter** — Show only Active, Redeemed, Expired, or Deleted coupons
- **Date range** — Filter by creation date (From / To)

### Pagination

The table shows 25 coupons per page. Use the **Previous** and **Next** buttons at the bottom to navigate through results.

## Coupon Detail View

Click on any coupon in the table to see its full details:

### Basic Information

- Coupon code
- Status (with colored badge)
- Generated and expiration timestamps
- Discount amount and type

### Customer Information

- Cart value at the time the coupon was generated
- Customer ID (Shopware customer ID)
- Visitor country (2-letter code, e.g., "DE")
- Customer segment (new visitor, returning customer, or logged-in)

### Popup Information

- Which popup generated the coupon
- Display conditions that were active at the time
- Trigger settings that were in effect

### Coupon Rules Snapshot

A snapshot of the coupon configuration at the time the code was generated, including:

- Minimum cart value
- Maximum discount amount
- Expiration time
- Max uses per customer
- Cooldown period

:::info
The rules snapshot shows the settings that were active **when the coupon was generated**. If you change settings after a coupon is generated, the existing coupon keeps the original rules.
:::

![Coupon Detail View](/img/admin/analytics-coupon-detail.png)

## Deleting Coupons

### Delete a Single Coupon

1. Click on a coupon to open its detail view
2. Click the **Delete** button
3. Confirm the deletion

### Bulk Delete

1. Select multiple coupons using the checkboxes in the table
2. Click the **Delete selected** button that appears
3. Confirm the bulk deletion

:::caution
Deleting a coupon log entry removes it from your analytics. The corresponding Shopware promotion is not affected — if the coupon code was already applied to a cart, it will still work until it expires.
:::

## Related Features

- [Coupon Settings](/docs/admin/coupon-settings) — Adjust discount rules and limits
- [Popup Manager](/docs/admin/popup-manager) — Manage your active popups
- [Impression Caps](/docs/admin/impression-caps) — Limit popup display frequency

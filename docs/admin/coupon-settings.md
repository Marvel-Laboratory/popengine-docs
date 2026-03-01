---
sidebar_position: 4
title: "Coupon Settings"
description: "Configure discount rules, triggers, usage limits, and email capture for your popups"
---

# Coupon Settings

Coupon settings control how discounts are created, when popups are triggered, and what limits apply. Each popup can have its own coupon configuration.

## How It Works

When a customer triggers a popup and meets all eligibility criteria, the system generates a unique coupon code linked to a Shopware promotion. The coupon has a limited validity period and can only be used according to the rules you set.

## Code Generation Mode

Choose how coupon codes are created and linked to Shopware promotions.

### Automatic (default)

In automatic mode, Last Second Coupon creates a **new Shopware promotion** each time a coupon code is generated. This is the simplest option — everything is handled for you.

| Setting | Description | Default |
|---|---|---|
| **Code prefix** | A prefix added to every generated code (max 10 characters, uppercase). For example, a prefix of "SAVE" produces codes like `SAVE-A7K2M9` | LSC |

### Attached Promotion

In attached mode, coupon codes are added to an **existing Shopware promotion** that you have already configured. This gives you full control over the promotion rules in Shopware (e.g., free shipping, buy-one-get-one, specific product discounts) while Last Second Coupon handles the popup and code distribution.

| Setting | Description |
|---|---|
| **Shopware Promotion ID** | The UUID of the existing promotion to attach codes to |
| **Verify** | Click to verify the promotion exists, is active, and has individual codes enabled |

#### Setting Up Attached Mode

1. Create a promotion in your Shopware Administration (**Marketing > Promotions**)
2. Enable **Use individual promotion codes** in the promotion settings
3. Copy the promotion's UUID from the URL (e.g., `https://your-shop.com/admin#/sw/promotion/v2/detail/{UUID}`)
4. In Last Second Coupon, select **Use existing Shopware promotion** and paste the UUID
5. Click **Verify** to confirm the connection

:::warning
The attached promotion **must** have **Use individual promotion codes** enabled. If it doesn't, the verification will show a warning and generated codes will not work at checkout.
:::

:::tip
Use **Attached mode** when you need promotion features that Last Second Coupon doesn't configure directly, such as free shipping promotions, specific product discounts, or complex discount rules already set up in Shopware.
:::

## Discount Configuration

### Discount Type

| Option | Description |
|---|---|
| **Percentage** | A percentage discount off the cart total (e.g., 10% off) |
| **Fixed Amount** | A fixed euro amount off the cart total (e.g., 5 EUR off) |

### Discount Settings

| Setting | Description | Default |
|---|---|---|
| **Discount value** | The discount amount (percentage or fixed) | 10 |
| **Minimum cart value** | Customer's cart must be at least this amount to qualify | 50.00 EUR |
| **Max discount amount** | Cap for percentage discounts (optional). Prevents very large discounts on high-value carts | None |
| **Coupon expiration** | How long the coupon code is valid after being generated (in minutes) | 15 minutes |

![Discount Configuration](/img/admin/coupon-settings-discount.png)

:::tip
Setting a **max discount amount** is recommended for percentage discounts. For example, "10% off, up to 20 EUR max" prevents a customer with a 500 EUR cart from getting 50 EUR off.
:::

## Trigger Settings

Triggers determine **when** the popup appears to customers.

### Trigger Types

You can enable one or both triggers:

| Trigger | How It Works |
|---|---|
| **Exit-intent** | Detects when the customer's mouse moves toward the browser's close button or address bar. On mobile, it detects fast upward swipes (common when trying to leave a page) |
| **Time-on-page** | Shows the popup after the customer has been on the page for a set number of seconds |

### Trigger Settings

| Setting | Description | Default |
|---|---|---|
| **Trigger delay** | For time-on-page: seconds before showing the popup (5–300 seconds) | 30 seconds |
| **Logged-in only** | Only show popups to customers who are signed in to their account | Disabled |

:::info
**Exit-intent** is the most popular trigger. It catches customers at the moment they are about to leave, which creates the strongest urgency. **Time-on-page** is useful as a secondary trigger for customers who browse slowly.
:::

## Usage Limits

Prevent coupon abuse and control how often customers see popups.

| Setting | Description | Default |
|---|---|---|
| **Max uses per customer** | How many times the same customer can receive a coupon (1–100) | 3 |
| **Cooldown period** | Minimum days between coupon generations for the same customer (0–365 days) | 7 days |
| **Excluded categories** | Category IDs where coupons should not apply. Enter one ID per line or comma-separated | None |

:::tip
A **7-day cooldown** works well for most shops. It prevents customers from seeing the popup on every visit while still re-engaging them if they return later.
:::

## Customer Segments

Target your popups to specific types of visitors:

| Segment | Description |
|---|---|
| **New visitors** | First-time visitors who have never been to your shop before |
| **Returning customers** | Visitors who have been to your shop before but are not logged in |
| **Logged-in customers** | Customers who are signed in to their account |

You can select one or more segments. If no segments are selected, the popup is shown to all visitors.

![Customer Segments](/img/admin/coupon-settings-segments.png)

## Sales Channel Selection

Choose which Shopware sales channels should show the popup. By default, popups are shown on all sales channels.

1. Go to the **Sales Channels** section in coupon settings
2. Check or uncheck the sales channels where this popup should appear
3. Save your changes

This is useful if you run multiple storefronts and want different popups for each one.

## Email Capture

Optionally collect customer emails before revealing the coupon code.

| Setting | Description | Default |
|---|---|---|
| **Enable email capture** | Show an email form before the coupon code | Disabled |
| **Make email required** | If disabled, a "Skip" link allows customers to get the coupon without entering their email | Optional (skip allowed) |
| **Newsletter opt-in** | Show a checkbox to subscribe the customer to your Shopware newsletter | Disabled |
| **Email placeholder text** | The placeholder text shown in the email input field | "Enter your email for your discount" |

### How Email Capture Works

1. The popup appears with an email form overlay
2. The customer enters their email (or clicks "Skip" if allowed)
3. The email is saved and optionally subscribed to your newsletter
4. The coupon code is revealed

:::info
Captured emails are synced with your Shopware customer and newsletter system. You can find them in **Customers > Newsletter recipients** in your Shopware Administration.
:::

![Email Capture Form](/img/storefront/email-capture-form.png)

## Master Toggle

The **Enable popup** toggle at the top of the settings page is a master switch for all popup functionality. When disabled, no popups will be shown on any page regardless of individual popup settings.

## Related Features

- [Popup Editor](/docs/admin/popup-editor) — Design your popup's appearance
- [Display Conditions](/docs/admin/display-conditions) — Control which pages show the popup
- [Country Targeting](/docs/admin/country-targeting) — Restrict popups by visitor country
- [Analytics](/docs/admin/analytics) — Track coupon performance

---
sidebar_position: 4
title: "Coupon Codes"
description: "How coupon codes are generated and applied in the storefront"
---

# Coupon Codes

Each time a popup is shown, a unique coupon code is generated for that specific customer. The code is linked to a real Shopware promotion and can be used during checkout.

## How It Works

1. The popup triggers and the system checks the customer's eligibility
2. If eligible, a unique coupon code is generated (e.g., `LSC-A7K2M9B3`)
3. Depending on the [code generation mode](/docs/admin/coupon-settings#code-generation-mode): a new Shopware promotion is created automatically, or the code is added to an existing promotion
4. The code is displayed in the popup and starts counting down
5. The customer can use this code at checkout before it expires

## Displaying the Code

In your popup design, the coupon code appears wherever you place the **Coupon Code** block. This block uses the `{code}` placeholder, which is replaced with the actual code.

:::info
Always include a `{code}` placeholder in your popup design. Without it, customers won't be able to see their coupon code.
:::

## Copying the Code

When customers click on the coupon code in the popup, it is automatically **copied to their clipboard**. A brief "Copied!" confirmation appears so they know the code was saved.

Customers can then paste the code in the Shopware checkout discount field.

## Auto-Apply

If your popup includes a call-to-action button linked to the cart, the coupon can be automatically applied to the customer's cart. This provides a seamless one-click experience.

## Code Format

Coupon codes follow this format:
- **Prefix:** Configurable in coupon settings (default: "LSC"). Max 10 characters, uppercase
- **Separator:** A dash (`-`)
- **Random characters:** 8 alphanumeric characters

Example codes: `LSC-A7K2M9B3`, `SAVE-X9P2H5N8`, `SHOP-W4B3K2M9`

:::tip
You can customize the code prefix in [Coupon Settings](/docs/admin/coupon-settings) under **Code Generation Mode**. When using **Attached mode**, the prefix is not used — codes are added directly to the existing Shopware promotion.
:::

## Code Validity

Each coupon code has specific validity rules:

| Rule | Description |
|---|---|
| **Time limit** | Expires after the configured number of minutes (default: 15) |
| **Single use** | Each code can only be used once |
| **Customer-specific** | Tied to the customer who received it |
| **Minimum cart value** | Only works if the cart meets the minimum amount |
| **Category exclusions** | Won't apply to products in excluded categories |

## What Customers See at Checkout

When a customer enters the coupon code at Shopware checkout:

- **Valid code:** The discount is applied and shown in the order summary
- **Expired code:** An error message tells the customer the code has expired
- **Invalid/used code:** An error message indicates the code is not valid

![Coupon Code in Popup](/img/storefront/coupon-code-display.png)

## Related Features

- [Countdown Timer](/docs/storefront/countdown-timer) — Visual timer showing code validity
- [Coupon Settings](/docs/admin/coupon-settings) — Configure discount rules
- [Analytics](/docs/admin/analytics) — Track coupon usage and redemption

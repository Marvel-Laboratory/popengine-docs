---
sidebar_position: 5
title: "Email Capture"
description: "Collect customer emails through the popup before revealing the coupon code"
---

# Email Capture

Email capture lets you collect customer email addresses through the popup form before revealing the coupon code. This helps you build your marketing list while offering discounts.

## How It Works

When email capture is enabled:

1. The popup appears with an **email form overlay** covering the coupon code
2. The customer enters their email address
3. Optionally, the customer checks a newsletter opt-in checkbox
4. The email is submitted and the coupon code is revealed underneath
5. The email is saved to your system and optionally synced with Shopware's newsletter

## Enabling Email Capture

1. Go to **Last Second Coupon > Settings**
2. Scroll to the **Email Capture** section
3. Toggle **Enable email capture** on
4. Configure the additional options below

| Setting | Description | Default |
|---|---|---|
| **Enable email capture** | Show the email form on the popup | Disabled |
| **Make email required** | Require email before showing the code. If disabled, a "Skip" link appears | Optional |
| **Newsletter opt-in** | Show a checkbox to subscribe the customer to your newsletter | Disabled |
| **Placeholder text** | Custom text shown in the email input field | "Enter your email for your discount" |

![Email Capture Settings](/img/admin/email-capture-settings.png)

## Customer Experience

### Required Email

When email is required, the customer must enter a valid email address to see the coupon code. There is no way to skip.

### Optional Email (with Skip)

When email is optional, customers see:
- An email input field
- A **"Skip"** link below the form

If they click "Skip", the email form disappears and the coupon code is revealed immediately.

:::tip
Making email **optional** generally results in higher popup engagement because customers don't feel forced. Many customers will still provide their email voluntarily when they know it's not required.
:::

## Email Validation

The form validates email addresses before submission:
- Must contain an `@` symbol
- Must have a valid domain format
- Invalid addresses show an error message

## Newsletter Sync

When newsletter opt-in is enabled and a customer checks the checkbox:

- The email is added to your Shopware **Newsletter recipients** list
- The customer is subscribed to the newsletter for the relevant sales channel and language
- You can find the subscriber in **Customers > Newsletter recipients** in your Shopware Administration

## Where Emails Are Stored

Captured emails are stored in the Last Second Coupon system and linked to:
- The coupon code that was generated
- The customer's Shopware customer ID (if they were logged in)
- Whether they opted in to the newsletter

:::info
The email submission never blocks the popup from working. If there's a network issue when submitting the email, the coupon code is still revealed to the customer.
:::

![Email Capture on Storefront](/img/storefront/email-capture-form.png)

## Related Features

- [Coupon Codes](/docs/storefront/coupon-codes) — What happens after the email is submitted
- [Coupon Settings](/docs/admin/coupon-settings) — Full email capture configuration

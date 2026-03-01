---
sidebar_position: 1
title: "Storefront Overview"
description: "How Last Second Coupon works on your storefront for customers"
---

# Storefront Overview

Last Second Coupon works automatically on your storefront once you've activated the app and created an active popup. Here's what your customers experience and how the different features work together.

## How the Popup Appears

The popup is triggered when a customer shows intent to leave your store. The most common trigger is **exit-intent** — the system detects when the customer's mouse moves toward the browser's close button or address bar.

Once triggered, the popup appears as an overlay on the page, showing:

1. Your custom popup design (headline, images, etc.)
2. A unique coupon code generated for that customer
3. A countdown timer showing how long the offer is valid
4. A close button to dismiss the popup

![Popup on Storefront](/img/storefront/popup-storefront-example.png)

## Feature Summary

| Feature | Description |
|---|---|
| [Exit-Intent Detection](/docs/storefront/exit-intent) | Catches customers as they try to leave |
| [Countdown Timer](/docs/storefront/countdown-timer) | Creates urgency with a visible timer |
| [Coupon Codes](/docs/storefront/coupon-codes) | Unique, time-limited discount codes |
| [Email Capture](/docs/storefront/email-capture) | Optionally collect emails before showing the code |
| [Recovery Tab](/docs/storefront/recovery-tab) | Persistent button to reopen the popup |
| [Mobile Support](/docs/storefront/mobile-support) | Touch-optimized popup experience |
| [Multi-Language](/docs/storefront/multi-language) | Automatic language detection (EN/DE) |

## Customer Journey

Here's a typical customer experience:

1. Customer browses your shop and adds items to their cart
2. Customer moves to leave the page (exit-intent detected)
3. Popup appears with a personalized discount offer
4. Customer enters their email (if email capture is enabled)
5. Unique coupon code is revealed with a countdown timer
6. Customer clicks to copy the code or it's auto-applied to their cart
7. Customer completes the purchase with the discount

If the customer closes the popup but doesn't leave, the [recovery tab](/docs/storefront/recovery-tab) appears so they can reopen the offer later.

## Technical Notes for Merchants

- The popup widget is **completely isolated** from your theme using shadow DOM technology. This means your theme's CSS will never affect the popup's appearance, and the popup will never break your theme
- The widget is very lightweight (less than 10 KB) and loads asynchronously, so it won't slow down your storefront
- Popup designs are cached for fast loading on repeat visits
- All popup data is served from our cloud infrastructure, so your Shopware server handles no additional load

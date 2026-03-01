---
sidebar_position: 5
title: "FAQ"
description: "Frequently asked questions about Last Second Coupon"
---

# Frequently Asked Questions

## General

### What is Last Second Coupon?

Last Second Coupon is a Shopware 6 app that helps you recover abandoned carts by showing time-limited discount popups to customers who are about to leave your store. When a customer moves their mouse toward the close button, a popup appears offering a unique coupon code with a countdown timer.

### Does it slow down my storefront?

No. The widget is very small (under 10 KB) and loads asynchronously after your page content. It does not affect your page load speed or Core Web Vitals.

### Does the popup work on mobile devices?

Yes. The popup is fully responsive and the exit-intent detection is adapted for touch screens. On mobile, the system detects fast upward swipes and scroll patterns to determine when a customer might be leaving. See [Mobile Support](/docs/storefront/mobile-support) for details.

### Which Shopware 6 versions are supported?

Last Second Coupon supports Shopware 6.5 and higher. See [System Requirements](/docs/installation/requirements) for full details.

## Popups & Design

### Can I have multiple popups active at the same time?

Yes. You can create and activate multiple popups, each with its own design, discount rules, and targeting conditions. The system shows the highest-priority matching popup to each customer. See [Popup Manager](/docs/admin/popup-manager).

### Can I target specific pages or products?

Yes. Each popup has display conditions that let you choose which pages it appears on. You can target specific page types (home, cart, checkout, category, product), specific category or product IDs, and exclude pages. See [Display Conditions](/docs/admin/display-conditions).

### What templates are available?

Six templates come built-in: Blank Canvas, Exit-Intent Minimal, Holiday Sale, Mother's Day, Minimal Black & White, and Announcement Bar. You can customize any template or start from scratch. See [Popup Manager](/docs/admin/popup-manager).

### Will the popup affect my theme's styling?

No. The popup uses shadow DOM technology, which creates a complete isolation boundary. Your theme's CSS cannot affect the popup, and the popup's CSS cannot affect your theme.

## Coupons & Discounts

### How are coupon codes generated?

Each code is unique and automatically generated when a customer triggers the popup. The system creates a corresponding Shopware promotion behind the scenes, so the code works in your standard Shopware checkout.

### Can I set a minimum cart value?

Yes. You can require a minimum cart value before a coupon is generated. If the customer's cart is below the threshold, the popup won't appear. See [Coupon Settings](/docs/admin/coupon-settings).

### What happens when the countdown reaches zero?

The coupon code expires and can no longer be used at checkout. The customer would need to trigger a new popup to get a fresh code (subject to cooldown and usage limits).

### Can the same customer get multiple coupons?

You can control this with the **max uses per customer** and **cooldown period** settings. By default, a customer can receive up to 3 coupons with a 7-day cooldown between each. See [Coupon Settings](/docs/admin/coupon-settings).

## Email Capture

### Where do captured emails go?

Captured emails are stored in the Last Second Coupon system. If the customer opts in to the newsletter, their email is also synced to your Shopware **Newsletter recipients** list.

### Is the email form GDPR compliant?

The email form includes an optional newsletter opt-in checkbox that requires explicit consent. You should also ensure your privacy policy mentions email collection through the popup. Consult with your legal advisor for full GDPR compliance.

### What if a customer doesn't want to enter their email?

If you set email capture to **optional** (the default), customers can click "Skip" to see the coupon code without providing their email. If set to **required**, they must enter an email to proceed.

## Analytics & Tracking

### How do I see if my popups are working?

Go to **Last Second Coupon > Analytics** to see a summary of all coupons issued, redeemed, expired, and the redemption rate. You can also search for individual coupon codes. See [Analytics](/docs/admin/analytics).

### What is a good redemption rate?

It varies by industry and discount amount, but a redemption rate above 15-20% is generally considered good for exit-intent coupons.

### Can I export coupon data?

<!-- TODO: Add export feature details if/when available -->

Currently, coupon data is viewable in the analytics dashboard. Export functionality may be added in a future update.

## Technical

### Does the app work with headless/PWA storefronts?

Last Second Coupon is designed for the standard Shopware 6 storefront. Headless or PWA storefronts would require custom integration with the Last Second Coupon API.

### Can I use it with multiple sales channels?

Yes. You can enable or disable the popup for specific sales channels in the [Coupon Settings](/docs/admin/coupon-settings). Each sales channel can have its own popup configuration.

### How does country detection work?

The system detects the visitor's country from IP-based headers (Cloudflare, Vercel) or falls back to browser language. For accurate detection, we recommend using a CDN like Cloudflare. See [Country Targeting](/docs/admin/country-targeting).

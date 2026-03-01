---
sidebar_position: 2
title: "Exit-Intent Detection"
description: "How exit-intent detection works to catch customers before they leave"
---

# Exit-Intent Detection

Exit-intent detection is the core trigger for Last Second Coupon. It identifies the moment a customer is about to leave your store and shows them a discount popup to encourage them to stay and complete their purchase.

## How It Works

### On Desktop

The system monitors the customer's mouse movement. When the mouse moves upward toward the browser's address bar, back button, or close button, the system interprets this as the customer intending to leave.

Specifically, the popup triggers when:
- The mouse cursor leaves the **top edge** of the page
- The mouse exits the browser window from the **top or sides**

This is a well-established technique used by major e-commerce sites and has been shown to significantly improve cart recovery rates.

### On Mobile

Mobile devices don't have a mouse cursor, so the system uses different signals:

- **Fast upward swipe** — When a customer quickly swipes upward (a gesture commonly used before switching apps or closing the browser)
- **Scroll depth tracking** — Combined with scroll patterns to identify exit behavior

:::info
Exit-intent works best on desktop browsers where mouse tracking is available. On mobile, the detection is less precise but still catches a meaningful portion of leaving visitors.
:::

## Configuration

Exit-intent is enabled by default. You can configure it in the [Coupon Settings](/docs/admin/coupon-settings):

1. Go to **Last Second Coupon > Settings > Trigger Settings**
2. Make sure **Exit-intent** is selected as a trigger type
3. Optionally add **Time-on-page** as a secondary trigger

## Combining with Time-on-Page

You can enable both **exit-intent** and **time-on-page** triggers for the same popup. This means:

- If the customer tries to leave → popup appears immediately (exit-intent)
- If the customer stays but doesn't act → popup appears after the set delay (time-on-page)

This combination catches both types of abandonment behavior.

## When the Popup Does NOT Appear

The popup will not trigger if:

- The customer has already seen a popup in this session
- The customer has exceeded the [max uses per customer](/docs/admin/coupon-settings) limit
- The customer is within the [cooldown period](/docs/admin/coupon-settings)
- The customer's cart value is below the minimum threshold
- The customer doesn't match the [customer segment](/docs/admin/coupon-settings) requirements
- The current page doesn't match the [display conditions](/docs/admin/display-conditions)
- The popup has reached its [impression cap](/docs/admin/impression-caps)

![Exit Intent on Desktop](/img/storefront/exit-intent-desktop.png)

## Related Features

- [Countdown Timer](/docs/storefront/countdown-timer) — Creates urgency once the popup is shown
- [Recovery Tab](/docs/storefront/recovery-tab) — Lets customers reopen the popup if they close it
- [Mobile Support](/docs/storefront/mobile-support) — How exit-intent works on touch devices

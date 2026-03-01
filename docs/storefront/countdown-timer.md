---
sidebar_position: 3
title: "Countdown Timer"
description: "How the countdown timer creates urgency for customers"
---

# Countdown Timer

The countdown timer adds urgency to your popup by showing customers exactly how much time they have left to use their coupon. When the timer reaches zero, the coupon expires.

## How It Works

When a coupon is generated, it receives an expiration time based on your [coupon settings](/docs/admin/coupon-settings). The countdown timer visually displays the remaining time in minutes and seconds, updating every second.

For example, with a 15-minute expiration:
- **14:59** → **14:58** → ... → **00:01** → **Expired**

## Enabling the Timer

The countdown timer is controlled per popup:

1. Open your popup in the **Popup Editor**
2. Go to **Overlay Settings**
3. Toggle **Show countdown timer** on

The timer is **enabled by default** when you create a new popup.

## Timer in Your Design

To display the timer in your popup design, use the **Countdown Timer** block in the editor. This block uses the `{minutes_left}` placeholder, which is replaced with the actual time remaining when the popup is shown.

You can style the timer just like any other element:
- Font size and color
- Background
- Padding and margins
- Position within your layout

## What Happens When Time Runs Out

When the countdown reaches zero:

1. The coupon code becomes invalid
2. The customer can no longer use it at checkout
3. The popup remains visible but the code is marked as expired

:::tip
A **15-minute expiration** is the default and works well for most shops. It's long enough to give customers time to decide but short enough to create genuine urgency. Experiment with shorter times (5-10 minutes) for higher urgency or longer times (30-60 minutes) for high-value purchases.
:::

## Setting Expiration Time

The countdown duration is set in [Coupon Settings](/docs/admin/coupon-settings):

1. Go to **Discount Configuration**
2. Adjust the **Coupon expiration** field (in minutes)
3. The range is 1 to 1,440 minutes (24 hours)

![Countdown Timer Example](/img/storefront/countdown-timer.png)

## Related Features

- [Coupon Codes](/docs/storefront/coupon-codes) — How coupon codes are generated and used
- [Coupon Settings](/docs/admin/coupon-settings) — Configure the expiration time

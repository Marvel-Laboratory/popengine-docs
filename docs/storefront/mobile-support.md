---
sidebar_position: 7
title: "Mobile Support"
description: "How the popup works on mobile devices and touch screens"
---

# Mobile Support

Last Second Coupon is fully optimized for mobile devices. Popups are responsive and the exit-intent detection is adapted for touch screens.

## Mobile Popup Display

On mobile devices, the popup automatically adjusts to fit the screen:

- **Center position** — Displays as a full-width overlay with appropriate padding
- **Bottom bar position** — Slides up from the bottom of the screen
- **Slide-in corner** — Slides in from the bottom edge

The popup design you create in the editor is responsive and adapts to smaller screens. Elements stack vertically when there isn't enough horizontal space.

## Mobile Exit-Intent

Since mobile devices don't have a mouse cursor, the system uses different signals to detect exit intent:

### Swipe Detection

The system detects **fast upward swipes** — a gesture commonly used before:
- Switching to another app
- Closing the browser
- Scrolling to the address bar to navigate away

### Scroll Behavior

Combined with scroll depth tracking, the system identifies patterns that suggest the customer is about to leave, such as quickly scrolling back to the top of the page.

:::info
Mobile exit-intent detection is effective but less precise than desktop mouse tracking. For the best results on mobile, consider also enabling the **time-on-page** trigger as a backup to catch customers who browse without triggering exit-intent.
:::

## Touch-Friendly Interactions

All popup interactions are optimized for touch:

- **Close button** — Large enough to tap easily
- **Copy coupon code** — Tap to copy with visual confirmation
- **Email input** — Full-width input field with appropriate keyboard type
- **Recovery tab** — Sized for comfortable tapping
- **CTA buttons** — Touch-friendly tap targets

## Mobile Testing

To test how your popup looks on mobile:

1. Open your storefront in a mobile browser
2. Or use your desktop browser's device emulation mode (press F12, then click the mobile icon)
3. Trigger the popup by waiting for the time-on-page delay

:::tip
Always test your popup design on a real mobile device before going live. The browser's device emulation gives a good approximation but may not perfectly replicate touch behavior and screen rendering.
:::

![Mobile Popup Example](/img/storefront/mobile-popup-example.png)

## Related Features

- [Exit-Intent Detection](/docs/storefront/exit-intent) — Full details on trigger mechanisms
- [Popup Editor](/docs/admin/popup-editor) — Design your popup for all screen sizes

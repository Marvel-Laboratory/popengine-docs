---
sidebar_position: 6
title: "Recovery Tab"
description: "The persistent tab that lets customers reopen the popup after closing it"
---

# Recovery Tab

The recovery tab is a small, persistent button that appears on the edge of the screen after a customer closes the popup. It gives them a second chance to take advantage of the offer.

## How It Works

1. A customer sees the popup and closes it (clicks the X button or overlay)
2. The popup disappears
3. A small tab appears on the edge of the screen with your custom text (e.g., "Your Offer")
4. If the customer clicks the tab, the popup reopens with the same coupon code and timer

The recovery tab stays visible as long as the customer remains on your site and the coupon hasn't expired.

## Enabling the Recovery Tab

1. Open your popup in the **Popup Editor**
2. Find the **Recovery Tab** section in the settings
3. Toggle **Enable recovery tab** on
4. Customize the appearance

| Setting | Description | Default |
|---|---|---|
| **Enable recovery tab** | Show the tab after popup is closed | Disabled |
| **Tab text** | Label displayed on the tab | "Your Offer" |
| **Tab position** | Where the tab appears on screen | Bottom-right |
| **Background color** | Tab background color | #000000 (black) |
| **Text color** | Tab text color | #ffffff (white) |

## Tab Positions

Choose where the tab appears on the customer's screen:

| Position | Description |
|---|---|
| **Bottom-right** | Fixed to the bottom-right corner (most common) |
| **Bottom-left** | Fixed to the bottom-left corner |
| **Right-center** | Fixed to the right edge, vertically centered |
| **Left-center** | Fixed to the left edge, vertically centered |

:::tip
**Bottom-right** is the most common position and where customers typically expect to find persistent elements like chat widgets. If you already have a chat widget in the bottom-right, consider using **bottom-left** instead.
:::

## Customizing the Text

The tab text can be anything short and compelling:

- "Your Offer"
- "Your Discount"
- "Don't Miss Out"
- "Last Chance"

Keep it short — the tab is a small element and long text may look crowded.

## Theme Compatibility

The recovery tab uses special CSS isolation to ensure it looks the same on every Shopware theme. Your theme's styles will not affect the tab's appearance, and the tab will not affect your theme.

![Recovery Tab Example](/img/storefront/recovery-tab-example.png)

## Multi-Language Support

The recovery tab text can be translated for each language. In the Popup Editor, switch to the **DE** (German) language toggle to set a German version of the tab text.

## Related Features

- [Popup Editor](/docs/admin/popup-editor) — Configure the recovery tab appearance
- [Exit-Intent Detection](/docs/storefront/exit-intent) — How the popup is triggered initially

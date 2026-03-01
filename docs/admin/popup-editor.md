---
sidebar_position: 3
title: "Popup Editor"
description: "Design your coupon popups with the drag-and-drop visual editor"
---

# Popup Editor

The Popup Editor lets you design your coupon popup using a visual drag-and-drop interface. No coding knowledge is required — simply drag elements onto the canvas, style them, and preview the result.

## How It Works

The editor is built on GrapesJS, a professional page builder. You design your popup visually, and the system automatically generates the HTML and CSS that will be displayed to your customers.

## Editor Layout

The editor has three main areas:

- **Left sidebar** — Drag-and-drop blocks (elements you can add)
- **Center canvas** — Your popup design preview
- **Right sidebar** — Style settings for the selected element

![Popup Editor Interface](/img/admin/popup-editor-interface.png)

## Available Blocks

Drag any of these blocks from the left sidebar onto your popup canvas:

### Content Blocks

| Block | Description |
|---|---|
| **Heading** | Large text for your popup title (e.g., "Wait! Don't leave yet!") |
| **Body Text** | Regular paragraph text for descriptions |
| **Coupon Code** | Displays the generated coupon code. Uses the `{code}` placeholder |
| **CTA Button** | A call-to-action button (e.g., "Apply Discount", "Shop Now") |
| **Countdown Timer** | Shows time remaining on the offer. Uses the `{minutes_left}` placeholder |
| **Image** | Upload an image or use a URL |

### Layout Blocks

| Block | Description |
|---|---|
| **1 Column** | Single full-width column |
| **2 Columns** | Two side-by-side columns |
| **3 Columns** | Three side-by-side columns |

## Placeholders

The editor supports special placeholders that are automatically replaced with real data when the popup is shown to customers:

| Placeholder | Replaced With |
|---|---|
| `{code}` | The generated coupon code (e.g., "LSC-A7K2M9") |
| `{minutes_left}` | Time remaining on the countdown timer |

:::info
Make sure to include the `{code}` placeholder in your design — this is how customers see their coupon code. Without it, the coupon code won't be visible.
:::

## Styling Elements

Click any element on the canvas to select it. The right sidebar will show styling options:

- **Typography** — Font size, weight, color, alignment
- **Spacing** — Padding and margins
- **Background** — Color, gradient, or image
- **Border** — Width, color, and radius (rounded corners)
- **Size** — Width and height

## Overlay Settings

Below the editor canvas, you'll find **Overlay Settings** that control how the popup appears on the page:

### Position

Choose where the popup appears on screen:

| Position | Description |
|---|---|
| **Center** | Centered overlay on the page (most common) |
| **Bottom Bar** | Fixed bar at the bottom of the screen |
| **Slide-in Corner** | Slides in from the bottom corner |

### Overlay Appearance

| Setting | Description | Default |
|---|---|---|
| **Show countdown timer** | Display the countdown in the popup | Enabled |
| **Overlay color** | Background color behind the popup | #000000 (black) |
| **Overlay opacity** | How transparent the background overlay is (0 = invisible, 1 = solid) | 0.50 |

![Overlay Settings](/img/admin/popup-editor-overlay.png)

## Recovery Tab

The recovery tab is a small persistent button that appears after a customer closes the popup. It lets them reopen the offer if they change their mind.

| Setting | Description | Default |
|---|---|---|
| **Enable recovery tab** | Show the tab after popup is closed | Disabled |
| **Tab text** | Label shown on the tab | "Your Offer" |
| **Tab position** | Where the tab appears on screen | Bottom-right |
| **Background color** | Tab background color | #000000 |
| **Text color** | Tab text color | #ffffff |

**Tab positions available:**
- Bottom-right
- Bottom-left
- Right-center
- Left-center

![Recovery Tab Example](/img/storefront/recovery-tab-example.png)

## Display Conditions

Control which pages your popup appears on:

### Pages to Show On

Select one or more page types where the popup should be displayed:

- **All pages** (default)
- **Home page**
- **Cart page**
- **Checkout page**
- **Category pages** — Optionally specify specific category IDs
- **Product pages** — Optionally specify specific product IDs

### Pages to Exclude

Select page types where the popup should **never** appear, even if it matches the "show on" rules above.

:::tip
A common setup is to show the popup on **All pages** but exclude the **Checkout page**, so you don't interrupt customers who are already completing their purchase.
:::

## Language Switching

Toggle between **EN** (English) and **DE** (German) at the top of the editor to create translated versions of your popup. Each language has its own HTML and CSS, so you can fully customize the design for each language.

## Preview

Click the **Preview** button in the editor toolbar to see exactly how your popup will look to customers. The preview shows the popup with your overlay settings, position, and recovery tab.

## Code Editor

For advanced users, click the **Code** button to directly edit the popup's HTML and CSS. This is useful for fine-tuning that can't be done through the visual editor.

:::caution
Be careful when editing code directly. Invalid HTML or CSS may break your popup display. Always preview after making code changes.
:::

## Saving

Your popup design is saved automatically when you click **Save** in the toolbar. Make sure to save before leaving the editor.

## Related Features

- [Coupon Settings](/docs/admin/coupon-settings) — Configure the discount rules for this popup
- [Popup Manager](/docs/admin/popup-manager) — Manage all your popups
- [Display Conditions](/docs/admin/display-conditions) — Detailed page targeting guide

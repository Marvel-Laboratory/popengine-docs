---
sidebar_position: 6
title: "Troubleshooting"
description: "Solutions to common issues with Last Second Coupon"
---

# Troubleshooting

If you're experiencing issues with Last Second Coupon, check the common problems and solutions below.

## Popup Not Appearing

### The popup doesn't show on my storefront

**Check these first:**

1. **Is the popup active?** Go to **Last Second Coupon > Popups** and make sure the popup status is **Active** (not Draft or Inactive)
2. **Is the master toggle on?** In **Settings**, check that **Enable popup** is turned on
3. **Display conditions:** Check that the popup's display conditions match the page you're testing on. If you set it to show only on the cart page, it won't appear on the home page
4. **Impression cap:** If you've set an impression cap, it may have been reached for the month. Check the impression count in the popup list
5. **Browser cache:** Clear your browser cache and try in an incognito/private window
6. **JavaScript:** Make sure JavaScript is enabled in your browser

### The popup only shows once, then never again

This is likely due to usage limits:

- **Max uses per customer:** The default is 3 uses. After that, the customer won't see the popup again
- **Cooldown period:** The default is 7 days. The customer needs to wait this long before seeing the popup again
- **Session storage:** The widget tracks if a popup was already shown in the current session. Try opening a new browser session or incognito window

To test, open an incognito/private browser window each time.

### The popup doesn't appear on mobile

Mobile exit-intent detection works differently than desktop. Try:

1. Enable the **time-on-page** trigger in addition to exit-intent
2. Wait for the configured delay (default: 30 seconds) for the time trigger to fire
3. Try a fast upward swipe gesture to trigger exit-intent on mobile

## Coupon Codes

### Coupon code shows as invalid at checkout

Possible causes:

- **Expired:** The coupon may have timed out. Check the countdown timer — if it reached zero, the code is no longer valid
- **Already used:** Each coupon code can only be used once
- **Cart too low:** The cart value may be below the minimum threshold. Check your coupon settings for the minimum cart value
- **Excluded category:** Products in excluded categories may prevent the coupon from applying

### No coupon code appears in the popup

Make sure your popup design includes the `{code}` placeholder. Open the **Popup Editor** and check that a **Coupon Code** block is present in your design.

### Customer sees a different discount than expected

Each popup can have its own coupon configuration. Check:
1. Which popup the customer is seeing (check the popup name in Analytics)
2. The coupon settings for that specific popup
3. Whether the **max discount amount** cap is limiting the discount

## Popup Design

### Popup looks different than the editor preview

- **Browser differences:** The popup may render slightly differently across browsers. Test in Chrome, Firefox, and Safari
- **Shadow DOM isolation:** The popup's CSS is isolated from your theme. If text looks different, it's because the popup uses its own font stack rather than your theme's fonts
- **Screen size:** The popup is responsive. Check how it looks at different screen widths

### The editor is not loading

1. Clear your browser cache
2. Try a different browser (Chrome works best)
3. Make sure you're using a supported browser version (see [Requirements](/docs/installation/requirements))
4. Disable browser extensions that might interfere (ad blockers, privacy tools)

### Recovery tab is not visible

1. Make sure **Enable recovery tab** is turned on in the popup editor
2. The recovery tab only appears **after** a customer closes the popup. You need to trigger the popup first, then close it
3. Check that the tab colors contrast with your page background. A black tab on a dark background may be hard to see

## Analytics

### Analytics show zero data

- Coupons are only logged when customers actually trigger the popup and a code is generated
- If the popup is new and hasn't been triggered yet, there won't be any data
- Make sure the popup is **Active** and the settings allow coupon generation

### Redemption data is delayed

Redemption tracking depends on Shopware webhook notifications. There may be a short delay (up to a few minutes) between when a customer uses a coupon and when it appears as "Redeemed" in analytics.

## Email Capture

### Captured emails don't appear in Shopware newsletter list

1. Make sure the **newsletter opt-in** checkbox is enabled in coupon settings
2. The customer must check the newsletter checkbox in the popup
3. Check **Customers > Newsletter recipients** in your Shopware Administration
4. There may be a short delay before the email appears

### Email form doesn't submit

The email form uses a "fire-and-forget" approach — it submits in the background without blocking the popup. If there's a network issue, the email may not be saved but the coupon code will still be revealed. Check your network connection and try again.

## Still Need Help?

If none of the above solutions fix your issue:

1. Note the exact steps to reproduce the problem
2. Take a screenshot of any error messages
3. [Contact our support team](https://lastsecondcoupon.com/support) with this information

We typically respond within one business day.

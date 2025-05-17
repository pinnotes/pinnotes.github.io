---
title: integrate google adsence in hugo with ads customization
linkTitle: Add Google Adsence
tags:
- chart.js
svg: true
icon: 🌟
excludeSearch: false
width: wide
series: ["HUGO-DEV"]
series_order: 1
excludeSearch: false
chapter: 3
---
<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# integrate google adsence in hugo with ads customization

To integrate Google AdSense into your Hugo website with ad customization, follow these clear steps. This process works for most Hugo themes (including PaperMod, Blowfish, Academic, and others) and allows you to control where and how ads appear.

---

## 1. **Prerequisites**

- **Google AdSense account** (sign up at [Google AdSense](https://adsense.google.com/))
- **Hugo-based website** (already set up and deployed)

---

## 2. **Add Your Website to Google AdSense**

1. Sign in to Google AdSense.
2. Go to **Sites** > **Add Site**.
3. Enter your website URL and save.
4. Copy the AdSense code snippet provided (it looks like a `<script>` tag).

---

## 3. **Insert AdSense Code into Hugo**

### **A. For Site-Wide (Auto Ads) Integration**

1. **Create a Partial for AdSense Script:**
    - Create a file named `adsense.html` in `layouts/partials/google/` (create folders if they don’t exist).
2. **Paste the AdSense Script:**
    - Add the code snippet provided by AdSense:

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=YOUR-ADSENSE-CLIENT-ID"
 crossorigin="anonymous"></script>
```

    - Replace `YOUR-ADSENSE-CLIENT-ID` with your actual AdSense client ID.
3. **Include the Partial in Your Site’s `<head>`:**
    - For many themes (like PaperMod, Blowfish, Academic), create or edit `layouts/partials/extend_head.html` or your theme’s equivalent head partial.
    - Add:

```go-html-template
{{ partial "google/adsense.html" . }}
```

    - This ensures the AdSense script loads on every page.

---

### **B. For Custom Ad Placement (Manual Ads)**

1. **Create Ad Units in AdSense:**
    - In AdSense, go to **Ads** > **By ad unit**.
    - Create and configure a new ad unit (e.g., Display ad, In-article ad).
    - Copy the HTML code provided for the ad unit.
2. **Insert Ad Code Where You Want Ads to Appear:**
    - For example, to show an ad in your post content, create a partial such as `layouts/partials/ads-in-article.html` and paste the ad unit code there.
    - In your content template (e.g., `layouts/_default/single.html`), add:

```go-html-template
{{ partial "ads-in-article.html" . }}
```

    - Place this line where you want the ad to appear (top, middle, bottom, etc.).

---

## 4. **Upload `ads.txt` for AdSense Verification**

- Download the `ads.txt` file from AdSense (after approval).
- Place it in your Hugo site’s `/static` directory.
- When deployed, it will be available at `https://yourdomain.com/ads.txt`[^1][^3][^5].

---

## 5. **Customize Ad Display and Types**

- In your AdSense dashboard, use the **Ads** tab to:
    - Enable/disable Auto ads.
    - Control ad formats (e.g., in-page, anchor, vignette).
    - Preview and adjust ad placements with the visual editor.
- For **manual ads**, you can add different ad units to different partials or templates for fine-grained control.

---

## 6. **Deploy and Request Review**

- Deploy your Hugo site as usual.
- In AdSense, request a review if prompted.
- Once approved, ads will begin to appear.

---

## 7. **Summary Table**

| Step | Action |
| :-- | :-- |
| 1. AdSense Account | Sign up and add your site |
| 2. Get Script | Copy AdSense script or ad unit code |
| 3. Hugo Integration | Place script in partial (`adsense.html`), include in head or content templates |
| 4. ads.txt | Place in `/static` directory |
| 5. Customize Ads | Use AdSense dashboard for settings, or place manual units as desired |
| 6. Deploy \& Review | Deploy site, request review, and monitor ad performance |


---

## 8. **Tips for Best Results**

- **Test locally and in production** to ensure ads display correctly.
- **Use partials** for modular, reusable ad placement.
- **Avoid too many ads** to maintain a good user experience.
- **Comply with AdSense policies** to avoid account issues.

---

**References:**

[^1]: How to add Ads to Hugo

[^3]: How To Add Google AdSense To Hugo + PaperMod Website

[^5]: How To Add Ads To Hugo Website Using Blowfish Theme


---

With this approach, you can flexibly integrate and customize Google AdSense ads anywhere on your Hugo site.

<div style="text-align: center">⁂</div>

[^1]: https://jh123x.com/blog/2022/how-to-add-ads-to-hugo/

[^2]: https://www.siddbanerjee.com/post/adsense/

[^3]: https://glucn.com/posts/2023-04-03-add-adsense-to-hugo-papermod-theme

[^4]: https://hugomods.com/docs/google-adsense/

[^5]: https://www.zaney.org/posts/how-to-add-ads-to-blowfish-hugo-website/

[^6]: https://liuhouliang.com/en/post/hugo_adsense/

[^7]: https://discourse.gohugo.io/t/integration-of-google-adsense-with-hugo-theme-zen-theme/44468

[^8]: https://www.rudderstack.com/integration/google-ads/integrate-your-hugo-site-with-google-ads/

[^9]: https://discourse.gohugo.io/t/adsense-lazy-load-with-auto-ads-on/39180

[^10]: https://support.google.com/adsense/answer/7584263


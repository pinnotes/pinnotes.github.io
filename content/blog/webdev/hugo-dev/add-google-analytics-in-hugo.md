---
title: Add Google Analytics in HUGO 🌟
linkTitle: Add Google analytics
tags:
- HUGO
keywords:
- google analytics
- HUGO
- webdev
- web development
- tracking
svg: true
icon: 🌟
series: ["HUGO"]
series_order: 1
---

## how to add google analytics in hugo

To add Google Analytics to your Hugo site, follow these clear steps:

---

## 1. **Create a Google Analytics Account and Get Your Measurement ID**

- Go to [Google Analytics](https://analytics.google.com/) and sign in or create an account.
- Set up a new property for your website and note your **Measurement ID** (e.g., `G-XXXXXXXXXX` for GA4 or `UA-XXXXXXXX-X` for Universal Analytics)[^2][^4].

---

## 2. **Configure Your Hugo Site**

### **A. Add Your Measurement ID to config.toml**

Open your site's `config.toml` file and add this line at the top level (replace with your actual ID):

```toml
googleAnalytics = "G-XXXXXXXXXX"
```


---

### **B. Ensure the Analytics Template is Included in Your Theme**

Hugo has a built-in template for Google Analytics. You need to include it in your site's `<head>` section.

#### **If Your Theme Already Supports Analytics:**

- Most modern Hugo themes automatically include the Google Analytics template if the `googleAnalytics` value is set in `config.toml`.
- **No further action needed.**


#### **If Your Theme Does NOT Include It:**

1. Copy your theme’s `header.html` (often at `themes/yourtheme/layouts/partials/header.html`) to your site’s own `layouts/partials/header.html` to avoid editing theme files directly[^3][^4].
2. Add the following line inside the `<head>` section:
```go-html-template
{{ template "_internal/google_analytics.html" . }}
```

- For GA4, you may also add:

```go-html-template
{{ template "_internal/google_analytics_async.html" . }}
```


---

## 3. **Build and Deploy Your Site**

- Run `hugo` to build your site.
- Deploy as usual.

---

## 4. **Verify Tracking**

- Visit your site and check the Real-Time section in Google Analytics to confirm data is being received.
- If you use browser privacy plugins, try in an incognito window to ensure scripts aren’t blocked[^3].

---

## **Optional: Custom GA4 Integration**

If you want more control or your theme doesn’t support Hugo’s built-in templates, you can create a custom partial (e.g., `analytics-gtag.html`) and include the GA4 script manually[^5]:

**In `config.toml`:**

```toml
[params]
googleAnalyticsID = "G-XXXXXXXXXX"
```

**In `/layouts/partials/analytics-gtag.html`:**

```html
<script async src="https://www.googletagmanager.com/gtag/js?id={{ .Site.Params.googleAnalyticsID }}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '{{ .Site.Params.googleAnalyticsID }}');
</script>
```

**Then call this partial in your base template (`baseof.html`):**

```go-html-template
{{ if .Site.Params.googleAnalyticsID }}
  {{ partial "analytics-gtag.html" . }}
{{ end }}
```


---

## **Summary Table**

| Step | Action |
| :-- | :-- |
| 1. Get Measurement ID | From Google Analytics account |
| 2. Edit config.toml | Add `googleAnalytics = "G-XXXXXXXXXX"` |
| 3. Check theme header | Ensure `{{ template "_internal/google_analytics.html" . }}` is included |
| 4. Build \& Deploy | Run `hugo` and deploy your site |
| 5. Verify | Check Google Analytics dashboard |


---

**That’s it!** Your Hugo site will now track visitors using Google Analytics[^2][^3][^4][^5].

<div style="text-align: center">⁂</div>

[^1]: https://discourse.gohugo.io/t/add-google-analytics/44211

[^2]: https://digitaldrummerj.me/hugo-google-analytics/

[^3]: https://gideonwolfe.com/posts/sysadmin/hugo/hugogoogleanalytics/

[^4]: https://staticmania.com/blog/google-analytics-on-hugo

[^5]: https://gist.github.com/zjeaton/42246742cdaf2fb46400d04c2eba9a8a

[^6]: https://www.opulentsoftware.co.uk/blog/how-to-adding-google-analytics-4-to-your-hugo-site/

[^7]: https://github.com/adityatelange/hugo-PaperMod/discussions/248

[^8]: https://discourse.gohugo.io/t/how-to-make-site-updates-to-support-google-analytics-4/38271

[^9]: https://github.com/CaiJimmy/hugo-theme-stack/discussions/899

[^10]: https://bossagyu.com/en/blog/003-google-analytics/


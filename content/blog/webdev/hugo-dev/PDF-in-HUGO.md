---
title: Embed PDF in HUGO 📄
linkTitle: Embed PDF 📄
tags:
- HUGO                            
svg: true
icon: 🌟
width: wide
series: ["HUGO"]
series_order: 1
---


### create a Shortcode in HUGO to embed PDF

To create a shortcode in Hugo to embed a PDF, you can define a custom shortcode that uses HTML's `<embed>` or `<iframe>` tag to render the PDF within your Hugo site.

Here's how to create a simple shortcode named `pdfembed.html`:

1. Create a file named `pdfembed.html` inside the `layouts/shortcodes/` directory of your Hugo site.
2. Add the following code to `pdfembed.html`:

````html
{{ $url := .Get "src" }}
{{ if not $url }}
  <p><strong>Error:</strong> PDF URL is required. Usage: </p>
{{ else }}
  <embed src="{{ $url }}" type="application/pdf" width="{{ .Get "width" | default "100%" }}" height="{{ .Get "height" | default "600px" }}" />
{{ end }}
````


This shortcode takes three parameters:

- `src` (required): the URL/path to the PDF file.
- `width` (optional): width of the embed element (default is 100%).
- `height` (optional): height of the embed element (default is 600px).

This will render an embedded PDF within your Hugo page using the browser's PDF viewer.

If you want to use `<iframe>` instead, you can modify the shortcode accordingly. Let me know if you'd like that version.


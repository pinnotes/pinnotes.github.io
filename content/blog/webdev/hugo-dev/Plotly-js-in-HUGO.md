---
title: Add Diagram in HUGO 🖼️ with Plotly.js
linkTitle: Add Diagram in HUGO 🖼️
tags:
- HUGO
svg: true
icon: 🌟
width: wide
series: ["HUGO"]
series_order: 1
---


## create a Shortcode in HUGO to add Diagrams with Plotly.js

To create a Hugo shortcode to embed Plotly.js diagrams, you can define a shortcode that includes the Plotly.js library and renders a Plotly chart based on JSON data or JavaScript code provided within the shortcode.

Here’s a simple example to create a shortcode named `plotly.html`:

1. Create a file named `plotly.html` inside the `layouts/shortcodes/` directory of your Hugo site.
2. Add the following code to `plotly.html`:
```html
{{ $id := printf "plotly-%d" (add (now.Unix) (len .Inner)) }}

<!-- Plotly chart container -->
<div id="{{ $id }}" style="width: {{ .Get "width" | default "100%" }}; height: {{ .Get "height" | default "600px" }};"></div>

<!-- Load Plotly.js from CDN -->
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

<script>
  (function() {
    var data = {{ .Inner | safeJS }};
    var layout = {{ .Get "layout" | default "{}" | safeJS }};
    Plotly.newPlot('{{ $id }}', data, layout);
  })();
</script>
```

Usage in your Markdown:

```markdown

```


### Explanation:

- `width` and `height` attributes control the size of the plot container.
- The `layout` parameter allows passing a JSON object for Plotly layout settings.
- The actual plot data is passed inside the shortcode as JSON and is safely embedded in the script.

This lets you embed interactive Plotly charts easily within your Hugo content. Let me know if you want further customization or examples.


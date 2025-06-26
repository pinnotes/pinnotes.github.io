---
title: Add Chart.js in HUGO 📈
linkTitle: Add Chart.js in HUGO 📈
description: Add Charts in HUGO with chart.js 🧑‍💻
tags:
- HUGO
keywords:
- chart.js
- HUGO
- Shortcodes
- webdev
- web development
- charts
svg: true
icon: 🌟
width: wide
series: ["HUGO"]
series_order: 1
---

## How to Add Chart.js as a Shortcode in Hugo 🎨📊

Want to make your Hugo blog or study notes pop with beautiful charts? With Chart.js and a simple Hugo shortcode, you can add interactive graphs to any page—no coding headaches! Let’s walk through the process step by step, with easy examples and emojis to help you remember. 🚀

## **What is Chart.js?**

Chart.js is a popular JavaScript library that lets you create stunning charts (like bar, line, pie, and even Venn diagrams!) using just a little bit of code. It works perfectly with Hugo, a fast static site generator.

## **Step 1: Add Chart.js and Plugins to Your Site**

First, include Chart.js and any plugins you want in your site’s HTML. You can do this by adding these lines to your `layouts/partials/head.html` or directly in your page:

```html {filename="layouts/partials/head.html"}
<!-- Chart.js core -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<!-- Data labels plugin -->
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2"></script>
<!-- Annotation plugin -->
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-annotation@1"></script>
<!-- Venn diagram plugin -->
<script src="https://cdn.jsdelivr.net/npm/chartjs-chart-venn"></script>
```

These scripts let you use all the cool features Chart.js offers, including datalabels, annotations, and Venn diagrams! ✨

## **Step 2: Create a Hugo Shortcode for Charts**

Let’s make a shortcode called `chart.html` in your `layouts/shortcodes/` folder. This shortcode will handle rendering any Chart.js chart you want!

Here’s a simple version:

```html
{{ $id := delimit (slice "chart" (now.UnixNano)) "-" }}
<div class="chart">
  <canvas id="{{ $id }}"></canvas>
  <script type="text/javascript">
    window.addEventListener("DOMContentLoaded", function() {
      const ctx = document.getElementById("{{ $id }}");
      new Chart(ctx, {
        {{ .Inner | safeJS }}
      });
    });
  </script>
</div>
```

**What does this do?**

- Generates a unique ID for each chart so you can have many on one page.
- Sets up the HTML `<canvas>` where the chart will appear.
- Runs JavaScript to create the chart using the config you provide inside the shortcode.


## **Step 3: Use the Shortcode in Your Content**

Now, you can easily add charts in your Markdown files like this:

## 📈 Line Chart Example

{{< chart >}}
type: 'line',
data: {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(192, 75, 143)',
    tension: 0.1
  }]
}
{{< /chart >}}

---

## 📊 Bar Chart Example

{{< chart >}}
type: 'bar',
data: {
  labels: ['Tomato', 'Blueberry', 'Banana', 'Lime', 'Orange'],
  datasets: [{
    label: '# of votes',
    data: [12, 19, 3, 5, 3]
  }]
}
{{< /chart >}}

That’s it! Hugo will render these as interactive charts. 🧑‍💻

## **Step 4: Add More Chart Types (Even Venn Diagrams!)**

Want to show set intersections? Just use the Venn plugin:

## 🟢 Venn Diagram Example

{{< chart >}}
type: 'venn',
data: {
  labels: ['A', 'B'],
  datasets: [{
    data: [
      { sets: ['A'], size: 12 },
      { sets: ['B'], size: 12 },
      { sets: ['A', 'B'], size: 2 }
    ]
  }]
}
{{< /chart >}}


## **Tips \& Tricks for Students 📝**

- **Line charts**: Great for trends (like marks over months).
- **Bar charts**: Perfect for comparing categories (like favorite fruits).
- **Venn diagrams**: Awesome for set theory in math!
- **Annotations**: Highlight important points in your data.
- **Datalabels**: Show exact values on your charts for clarity.


## **Summary Table**

| Chart Type | Use Case Example | How to Add with Shortcode |
| :-- | :-- | :-- |
| Line | Trends over time | `type: 'line', ...` |
| Bar | Category comparison | `type: 'bar', ...` |
| Venn | Set relationships | `type: 'venn', ...` |

## **Conclusion**

With just a few steps, you can turn your Hugo site into a data-visualization powerhouse! Whether you’re explaining math concepts, showing survey results, or just making your blog more fun, Chart.js shortcodes make it easy. Give it a try and make your study notes come alive! 🚀📚

If you want more advanced examples or run into any trouble, just ask! Happy charting! 😊



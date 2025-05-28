---
title: Integrate GeoGebra into a Hugo website as a shortcode
description: To integrate GeoGebra into a Hugo website as a shortcode, you can create a custom shortcode that embeds the GeoGebra applet using either the JavaScript method or an iframe. Here’s a step-by-step guide for both options:-
date: 2025-05-17
authors:
  - name: Aryan
    link: https://github.com/simplearyan
    image: https://github.com/simplearyan.png
tags:
  - Math
excludeSearch: true
width: nomral
image: "/images/svg/github-wallpaper.svg"
---

To integrate GeoGebra into a Hugo website as a shortcode, you can create a custom shortcode that embeds the GeoGebra applet using either the JavaScript method or an iframe. Here’s a step-by-step guide for both options:

<!-- more  -->

---

## 1. Create a Custom GeoGebra Shortcode

**A. Using iframe Embed (Simplest Method)**

1. **Create the shortcode file:**
    - In your Hugo project, go to `layouts/shortcodes/geogebra.html` (or `layouts/shortcodes/geogebra-iframe.html` if you want to distinguish methods).
2. **Add the following code:**

```html
{{ $materialID := .Get "id" | default "" }}
{{ $width := .Get "width" | default "800" }}
{{ $height := .Get "height" | default "600" }}
<iframe
  src="https://www.geogebra.org/material/iframe/id/{{ $materialID }}/width/{{ $width }}/height/{{ $height }}/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/sdz/false/sfbl/false"
  width="{{ $width }}"
  height="{{ $height }}"
  style="border:0;"
  allowfullscreen>
</iframe>
```

3. **Use the shortcode in your content:**

````html
{{< geogebra id="YOUR_MATERIAL_ID" width="800" height="600" >}}
````


**B. Using the JavaScript Method (More Flexible, Requires Script)**

1. **Create the shortcode file:**
    - Go to `layouts/shortcodes/geogebra-js.html`.
2. **Add the following code:**

```html
{{ $materialID := .Get "id" | default "" }}
{{ $width := .Get "width" | default "800" }}
{{ $height := .Get "height" | default "600" }}
<div id="ggb-element-{{ $materialID }}"></div>
<script src="https://www.geogebra.org/apps/deployggb.js"></script>
<script>
  var params = {
    "appName": "graphing",
    "width": {{ $width }},
    "height": {{ $height }},
    "showToolBar": true,
    "showAlgebraInput": true,
    "showMenuBar": true,
    "material_id": "{{ $materialID }}"
  };
  var applet = new GGBApplet(params, true);
  window.addEventListener("load", function() {
    applet.inject('ggb-element-{{ $materialID }}');
  });
</script>
```

3. **Use the shortcode in your content:**

````markdown
<!-- {{< geogebra-js id="YOUR_MATERIAL_ID" width="800" height="600" >}} -->
````


---

## GeoGebra-JS Graph

{{< geogebra-js id="fe9vckwu" width="800" height="600" >}}

{{< geogebra-js id="qhqxxhp9" width="800" height="600" >}}



## Math/GeoGebra

{{< math/geogebra id="azbxfs9y" width="600" height="600" >}}

{{< math/geogebra id="fe9vckwu" width="600" height="600" >}}

{{< math/geogebra id="u7mzkqt2" width="600" height="600" sri="true" >}}

## i-frame

<iframe src="https://www.geogebra.org/classic/azbxfs9y?embed" width="800" height="600" allowfullscreen style="border: 1px solid #e4e4e4;border-radius: 4px;" frameborder="0"></iframe>


## 2. How Hugo Shortcodes Work

- **Shortcodes** are templates that allow you to insert dynamic content into your Markdown files[^1][^2][^4].
- **Custom shortcodes** are placed in the `layouts/shortcodes` directory and can accept both named and positional arguments[^2][^4].
- **Usage** is straightforward: just call the shortcode name in your content, optionally passing parameters[^1][^2].

---

## 3. Additional Notes

- **Security:** If you use inline shortcodes, ensure you trust your content authors and enable `enableInlineShortcodes` in your Hugo config if needed[^1].
- **Naming:** You can name your shortcode anything you like (e.g., `geogebra`, `geogebra-iframe`, `geogebra-js`)[^2][^4].
- **Parameters:** Use named parameters (like `id`, `width`, `height`) for clarity and flexibility[^2].

---

This approach allows you to easily embed GeoGebra applets in your Hugo site using shortcodes, making your content more interactive and visually engaging.

<div style="text-align: center">⁂</div>

[^1]: https://gohugo.io/content-management/shortcodes/

[^2]: https://gohugo.io/templates/shortcode/

[^3]: https://github.com/mfg92/hugo-shortcode-gallery/blob/master/README.md

[^4]: https://www.angela1c.com/posts/2021/03/shortcodes-in-hugo/

[^5]: https://jimfrenette.com/hugo/shortcodes/

[^6]: https://roneo.org/en/hugo-install-shortcode-collection/

[^7]: https://stackoverflow.com/questions/71736142/changing-hugos-built-in-figure-shortcode-to-add-lazy-loading-to-images

[^8]: https://www.siyavula.com/book-downloads/maths/Gr10_Mathematics_Learner_Eng_v11.pdf

[^9]: https://dynamicland.org/archived-media/2016/02/DL2016-02-17-3eaae2.pdf


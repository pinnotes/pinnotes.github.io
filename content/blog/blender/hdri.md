---
title: Free HDRi Assets Download🌲
description: Night HDRI
date: 2025-05-17
image: "https://cdn.polyhaven.com/asset_img/primary/hansaplatz.png?height=760&quality=95"
width: full
authors:
  - name: Aryan
    link: https://github.com/simplearyan
    image: https://github.com/simplearyan.png
tags:
  - Blender
---


## Download HDRI for Blender Tutorial

[Night HDRI](https://cdn.polyhaven.com/asset_img/primary/hansaplatz.png?height=760&quality=95)

<div style="text-align:center">
<h4>Click and wait for 20 seconds 👇
</div>

{{< timer/timer title="Download Tutorial Assets" link="https://polyhaven.com/a/hansaplatz" >}}


{{< youtube 4Xj5iQKZ2VQ >}}


## How to Set Up HDRI Lighting in Blender (Beginner Friendly) 🌄✨

Want to give your Blender renders a professional, realistic vibe using HDRI lighting? Let’s walk through the easy process featured in [this tutorial](https://youtu.be/4Xj5iQKZ2VQ?si=0VX87-b7VKpJ0MhU) so your scenes truly shine—perfect for cars, products, or moody environments! 🚗🔆

***

### 🛠️ Step 1: Prepare Your Scene

1. **Open Blender.**
2. **Delete the default cube**
    - Press `A` to select all, then `Delete`.
3. **Add a UV Sphere for the Dome:**
    - Press `Shift + A` → Mesh → UV Sphere.

***

### 🏗️ Step 2: Make the Dome

1. Enter **Edit Mode** (`Tab`).
2. **Switch to wireframe view** (`Z` or via the viewport icon).
3. **Select the top half of the sphere** (box select or manually).
4. **Flatten the top:**
    - Press `S`, then `Z`, then type `0`.
5. **Set Z location to 0** in side panel (press `N` to open).
6. **Select all faces (`A`) and flip normals:**
    - Press `Alt + N` → Flip Normals.
7. **Go back to Object Mode**, scale up the dome (`S`), and **apply scale** (`Ctrl + A` → Scale).

***

### 🌄 Step 3: Add \& Set Up HDRI Texture

1. **Open the Shader Editor**
    - Split your window, select Shader Editor.
2. **Delete the default Principled BSDF node** (select it, hit `Delete`).
3. **Add the following nodes:**
    - Environment Texture
    - Mix Shader
    - Diffuse Shader
    - Emission Shader
4. **Connect nodes:**
    - Plug Diffuse and Emission into Mix Shader, and Mix Shader to Material Output.
    - Connect Environment Texture to both Diffuse and Emission Shader inputs.

***

### 🖼️ Step 4: Load Your HDRI

1. **Switch render engine to Cycles:**
    - Go to Render Properties → Set to Cycles.
2. **Open your HDRI texture file:**
    - In the Environment Texture node, click “Open,” and browse to your HDRI image.
    - Need one? Try [this free HDRI](https://pinnotes.github.io/blog/blender/hdri/) 🌅
3. **Press Ctrl + T** to add Mapping nodes (Enable Node Wrangler add-on if needed!).
4. **Connect the Object output to the Vector input.**
5. **Adjust Z rotation** to tweak the light direction for your scene.

***

### 🔍 Step 5: Test Shadows \& Finalise

1. **Add a Cube** and check if your scene has proper shadows.
2. If not, **edit the dome’s bottom faces**:
    - Go into Edit Mode, select just the bottom faces.
    - Add a new material slot (+ icon in Material Properties).
    - Assign the same material, then separate it so you can edit.
    - In the new material, **remove Emission and Mix Shader**—leave just the Diffuse node.
    - This lets shadows work properly without the “glowing floor” effect.

***

### 💡 Pro Tips

- **Apply scale** when resizing objects for correct material effects.
- **Enable Node Wrangler** add-on: makes mapping/skipping nodes much quicker!
- HDRI lighting adds *ultra-realism*, but a subtle area light can boost your results.
Experiment with locations, power, and color.

***

### 🚗 Render \& Share!

1. Add your hero object (try a cool car model!).
2. Adjust camera and lighting until it’s perfect.
3. Render and let the realistic HDRI lighting make your scene pop! 🎉

***

> *Happy Blending and bright scenes!* 🌟
> If this helped, hit like or share with friends new to Blender!

***

Make your next project glow with beautiful, natural lighting in Blender! 🖥️🌈

<div style="text-align: center">⁂</div>

[^1]: https://www.youtube.com/watch?v=4Xj5iQKZ2VQ


---
title: Create a HTML5 Game and Earn Money With Adsense fot HTML5 Games
description: Here is a simple example of a basic HTML5 game that you can monetize with Google AdSense by embedding ad units around the game area on your webpage.
date: 2025-08-17
image: "https://cdn.devdojo.com/images/April2016/html5-game.png"
authors:
  - name: Aryan
    link: https://github.com/simplearyan
    image: https://github.com/simplearyan.png
tags:
  - Money Making
width: wide
---



## Create a HTML5 game to moetize with google adsense for HTML5 Games

Here is a simple example of a basic HTML5 game that you can monetize with Google AdSense by embedding ad units around the game area on your webpage. The game is a simple "Click the Moving Box" game for demonstration purposes.

### Steps:

- You host this game on your website
- Add Google AdSense ad code around the game container
- The ads will show alongside the game and generate revenue as users play and visit the page

***

### Example HTML5 Game with AdSense Ad Slots

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Simple Click Game - Monetize with Google AdSense</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 20px;
    }
    #game-container {
      margin: 20px auto;
      width: 300px;
      height: 300px;
      position: relative;
      border: 2px solid #333;
      background-color: #eee;
    }
    #box {
      width: 50px;
      height: 50px;
      background-color: #007bff;
      position: absolute;
      cursor: pointer;
      border-radius: 8px;
    }
    #score {
      font-size: 1.2rem;
      margin-top: 15px;
    }
    .ad-slot {
      margin: 20px auto;
      width: 320px;
      height: 100px;
      /* AdSense responsive ad styles usually override this */
      background: #f2f2f2;
      border: 1px solid #ccc;
    }
  </style>
</head>
<body>

  <h1>Click the Moving Box Game</h1>

  <!-- Google AdSense top banner ad -->
  <div class="ad-slot">
    <!-- Example AdSense ad code, replace with your own -->
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-xxxxxxxxxxxxxx"
         data-ad-slot="1234567890"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>
      (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
  </div>

  <div id="game-container">
    <div id="box"></div>
  </div>

  <div id="score">Score: 0</div>

  <!-- Google AdSense bottom banner ad -->
  <div class="ad-slot">
    <!-- Example AdSense ad code, replace with your own -->
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-xxxxxxxxxxxxxx"
         data-ad-slot="1234567891"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>
      (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
  </div>

  <script>
    const box = document.getElementById('box');
    const gameContainer = document.getElementById('game-container');
    const scoreDisplay = document.getElementById('score');
    let score = 0;

    function moveBox() {
      const maxX = gameContainer.clientWidth - box.clientWidth;
      const maxY = gameContainer.clientHeight - box.clientHeight;
      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);
      box.style.left = randomX + 'px';
      box.style.top = randomY + 'px';
    }

    box.addEventListener('click', () => {
      score++;
      scoreDisplay.textContent = 'Score: ' + score;
      moveBox();
    });

    // Start game by moving the box every 1.5 seconds automatically
    moveBox();
    setInterval(moveBox, 1500);
  </script>

  <!-- Load Google AdSense Script -->
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
</body>
</html>
```


***

### How to Use This:

- Replace `"ca-pub-xxxxxxxxxxxxxx"` with your Google AdSense publisher ID.
- Replace `data-ad-slot` with your actual ad slot IDs from your AdSense account.
- Host this HTML file on your website.
- When visitors play the game, they will also see ads above and below the game.
- The game's simple design keeps users engaged and ads clearly visible for impressions and clicks.
- Make sure your site complies with AdSense policies.

***

This basic clickable game is just a starting point. You can expand it with more complex gameplay while keeping AdSense ads in strategic non-intrusive positions to maximize revenue and user experience.

Let me know if you want me to help create a more complex game or advanced monetization methods!


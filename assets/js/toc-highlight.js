const express = require('express');
const path = require('path');
const app = express();

app.use('/assets/js', express.static(path.join(__dirname, 'assets/js'), {
    setHeaders: function (res, path, stat) {
      if (path.endsWith('.js')) { // Set only for .js files
        res.setHeader('Content-Type', 'application/javascript');
      }
    }
  }));

// filepath: d:\Code\hextra-notes\assets\js\toc-highlight.js
document.addEventListener("DOMContentLoaded", () => {
    const tocLinks = document.querySelectorAll(".hextra-toc a");
    const sections = Array.from(tocLinks).map(link => document.querySelector(link.getAttribute("href")));

    const highlightTOC = () => {
        let activeIndex = sections.findIndex(section => {
            const rect = section.getBoundingClientRect();
            return rect.top <= 150 && rect.bottom >= 150; // Adjust threshold as needed
        });

        tocLinks.forEach((link, index) => {
            if (index === activeIndex) {
                link.classList.add("toc-active");
                console.log('hello');
            } else {
                link.classList.remove("toc-active");
            }
        });
    };

    window.addEventListener("scroll", highlightTOC);
    highlightTOC(); // Run on page load
});
# Egg Toggle

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/egg-toggle-project/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable reconstruction of the uploaded 9.9-second screen recording titled **Egg Toggle**.

## Video analysis

The screen recording shows a dark charcoal (#141414) tutorial layout. The demo has a large two-line “Egg Toggle” title and a wide rounded purple switch. A fried egg illustration moves from one side of the pill to the other when the switch is toggled, rotating as it travels. The video repeatedly demonstrates both states.

The source panel visibly includes:
- A button with class `switch`.
- A `switch__background` element.
- An inline SVG with `egg__mainGroup`, `egg__yolkShadow`, and `egg__white`.
- Purple switch background `#3b3364`.
- A rounded `100rem` shape.
- Egg dimensions and transform-based positioning.

The original source is too small to reproduce every SVG path and declaration with certainty. This project recreates the observed interaction and visual treatment with a custom SVG egg; it is not represented as a verbatim copy of the creator's full CodePen.

## Features

- Animated purple pill toggle.
- Fried egg SVG thumb with yolk and shadow.
- Smooth travel and rotation between OFF and ON.
- Accessible button switch with `aria-checked`.
- Keyboard operation using Space/Enter.
- Responsive layout.
- Reduced-motion support.
- No external libraries or build tools.

## Run locally

```bash
python -m http.server 8000
```

Open http://localhost:8000

## Project structure

```text
egg-toggle-project/
├── index.html
├── style.css
├── script.js
└── README.md
```

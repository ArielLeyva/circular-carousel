# Circular Carousel (CSS & JavaScript)

A circular-style carousel built with **HTML + Tailwind CSS**, available in two implementations:

* **CSS-only version** (using `:has()` and radio inputs)
* **JavaScript-enhanced version** (dynamic, scalable, maintainable)

---

## Preview



https://github.com/user-attachments/assets/01fb2b73-ff89-438e-9ef1-6b82b9ff222c



---

## Features

### CSS Version

* Pure CSS (no JavaScript)
* Uses `:has()` and `input[type="radio"]`
* Smooth circular rotation
* Custom timing function

### JavaScript Version

* Dynamic data-driven slides
* Centralized state management
* No duplicated HTML
* Scalable and maintainable
* Button controls with disabled states

---

## CSS-Only Version

This version uses:

* `input[type="radio"]` for state
* `:has()` selector to control UI
* CSS variables (`--current`) to drive animations

### Pros

* No JavaScript required
* Declarative approach

### Cons

* Hard to scale
* Requires duplicated markup
* State logic tied to HTML

---

## JavaScript Version

This version removes all CSS hacks and introduces:

* Data-driven rendering
* Centralized state (`current`)
* Dynamic DOM injection

---

## Key Concept

Both versions rely on the same core idea:

```css
transform: rotate(calc(var(--current) * 90deg));
```

> The difference is **who controls `--current`**:
> 
> * CSS version → `:checked`
> * JS version → JavaScript state

---

## Why Use the JS Version?

* Easier to maintain
* No duplicated HTML
* Easily extendable (autoplay, swipe, API data)
* Cleaner architecture (separation of concerns)

---

## Getting Started

1. Clone the repo:

```bash
git clone https://github.com/ArielLeyva/circular-carousel.git
```

2. Open in browser:

```
index.html          → CSS version
index-with-js.html  → JS version
```

---

## License

MIT — feel free to use and modify.

---

## If you like it

Give it a star ⭐!

# Loopstudios Landing Page 🎮

A responsive landing page for a VR company built with **Vanilla JavaScript** and **CSS Grid**. This project focuses on complex layout shifts and responsive art direction without relying on external libraries.

## 🚀 Overview

The goal was to build an immersive, multimedia-heavy landing page. The project handles significant layout changes between mobile and desktop views, particularly within the image grid and navigation, while maintaining a clean and accessible DOM structure.

## 🔗 Links

- **Live Site:** [View Live Demo](https://altindaselif.github.io/23-loopstudios-landing-page-main/)
- **Code:** [View GitHub Repository](https://github.com/altindaselif/23-loopstudios-landing-page-main)

## 💡 Key Features

- **📱 Adaptive Images:** Uses the `<picture>` element to serve different image crops for mobile and desktop screens.
- **📐 Advanced Layouts:** Utilizes **CSS Grid** for the desktop creations gallery and **Flexbox** for the mobile stack.
- **🍔 Mobile Navigation:** A fully accessible hamburger menu with a body scroll lock to prevent background scrolling when open.
- **👆 Interactive States:** Hover effects on all interactive elements using pseudo-elements for a polished look.
- **♿ Accessibility:** Full semantic HTML structure (`main`, `article`, `nav`) and ARIA labels for screen readers.

## 🛠️ Technical Implementation

### 1. Smart Positioning (DRY Principle)

A common challenge was the "See All" button, which sits at the top-right on desktop but at the bottom on mobile. Instead of duplicating the button in the HTML:

- **Solution:** A single button element was utilized within the DOM. On **Desktop**, it is positioned using specific CSS Grid columns (`grid-column: 2`). On **Mobile**, the layout switches to Flexbox, employing the `order` property to visually relocate the button to the end of the container without markup duplication.

### 2. Image Aspect Ratio & Focal Points

The design required images to resize responsively without losing their subject matter (e.g., the soccer player's face).

- **Solution:** The `object-fit: cover` property was applied to maintain aspect ratios and prevent distortion. Crucially, `object-position: top` was implemented to ensure the focal point of the images remains visible even when the container dimensions shift.

## 📸 Screenshots

- [View Desktop Version](./desktop-screenshot.png)
- [View Tablet Version](./tablet-screenshot.png)
- [View Mobile Version](./mobile-screenshot.png)

## 🧰 Built With

- **Semantic HTML5**
- **CSS3 (Custom Properties)**
- **CSS Grid & Flexbox**
- **Vanilla JavaScript**
- **Desktop-First Workflow**

## ✍️ Author

- **LinkedIn:** [Elif Altındaş](https://www.linkedin.com/in/elifaltindas/)
- **Frontend Mentor:** [@altindaselif](https://www.frontendmentor.io/profile/altindaselif)
- **GitHub:** [@altindaselif](https://github.com/altindaselif)

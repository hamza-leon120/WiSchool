# WiSchool — Online Learning Platform

A fully responsive, multi-section educational platform landing page built with **React** and **SCSS** from scratch, designed for an online learning brand called "WiSchool."

---

## 🚀 Live Demo

[https://hamza-leon120.github.io/WiSchool/](https://hamza-leon120.github.io/WiSchool/)

---

## 📸 Screenshots

### 🖥️ Desktop Preview
![Desktop Preview](/src/img/Screenshot.png)

### 📱 Mobile View  
![Mobile Preview](/src/img/mobail-Screenshot.png)

---

## 📸 Features

- **Scroll Animations** — all sections fade and slide in using the `IntersectionObserver` API with a shared ref array
- **Sticky Header** — fades out between 200–500px scroll, reappears as a fixed navbar after 500px, with a responsive hamburger menu and smooth scroll navigation to sections by ID
- **Scroll Progress Bar** — a dynamic width bar at the bottom of the header showing reading progress as a percentage
- **Hero Section** — headline with key platform stats and feature highlights using FontAwesome icons
- **Favourite Courses Carousel** — infinite-loop category slider with clone-based seamless looping, active card highlighting, and transition reset logic
- **Popular Courses Grid** — static responsive grid showcasing 6 top courses with rating, duration, student count, and price
- **New Skill Carousel** — infinite-loop course card slider with the same clone-based logic, featuring rich course data
- **Life Section** — feature highlights section with icons and an image
- **Reviews Slider** — manual testimonial slider calculating translate from card width and CSS gap
- **Instructors Section** — instructor cards with image, name, job title, and quote
- **Contact Us Section** — CTA section with image and action buttons
- **Footer** — navigation links, social media icons, contact info, and a validated email subscribe form
- **Back to Top Button** — smooth scroll to top, visible after scrolling 500px

---

## 🗂️ Project Structure

```
src/
├── component/
│   ├── Header.js              # Sticky nav, scroll progress bar, hamburger menu
│   ├── Hero.js                # Hero section with stats and feature icons
│   ├── FavouriteCourse.js     # Infinite-loop category carousel
│   ├── PopularCourses.js      # Static popular courses grid
│   ├── NewSkill.js            # Infinite-loop course card carousel
│   ├── Life.js                # Education benefits section
│   ├── Reviews.js             # Manual testimonial slider
│   ├── Teacher.js             # Reusable testimonial card component
│   ├── InstructorsSection.js  # Instructors showcase section
│   ├── Instructors.js         # Reusable instructor card component
│   ├── ContactUs.js           # CTA contact section
│   ├── Footer.js              # Footer with links and subscribe form
│   ├── Courses.js             # Reusable course card component
│   ├── Button.js              # Reusable button component
│   ├── ComSection.js          # Renders all page sections
│   └── Up.js                  # Back to top button
└── App.js                     # Root component with IntersectionObserver
```

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| React | Component-based UI |
| SCSS | Styling and responsive layout |
| FontAwesome | Icons (brands + solid) |
| IntersectionObserver API | Scroll-triggered fade-in animations |
| CSS transforms | Carousels and sliders |

---

## ⚙️ Getting Started

### Prerequisites

- Node.js >= 14
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/hamza-leon120/your-repo-name.git

# Navigate into the project
cd your-repo-name

# Install dependencies
npm install

# Start the development server
npm start
```

The app will run at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

---

## 📋 Component Overview

### `App.js`
Sets up a shared `sections` ref array and an `IntersectionObserver` that triggers fade-in animations (opacity + translateY) when sections enter the viewport at a 30% threshold.

### `Header.js`
- Fades out between 200–500px scroll and reappears as a fixed header after 500px
- Progress bar width calculated from `(scrollY + windowHeight + 250) / bodyHeight * 100`
- `replaceAll(" ", "-")` maps nav link text to section IDs for smooth scroll
- Event listener properly cleaned up via `useEffect` return function

### `FavouriteCourse.js` & `NewSkill.js`
Both use the same infinite carousel pattern:
- Cloned first and last slides added to the array for seamless looping
- Position resets silently using `transition: none` + `setTimeout(10ms)` after the slide animation completes
- Card width and `marginRight` calculated from computed styles

### `Reviews.js`
Manual testimonial slider where `translateX` is calculated from card `offsetWidth` plus the container's CSS `gap` property.

### `Courses.js` & `Teacher.js` & `Instructors.js`
Fully reusable prop-based components for course cards, review cards, and instructor cards respectively.

---

## 🤝 Author

**Aymen** — Junior Frontend Developer
[LinkedIn](https://www.linkedin.com/in/your-profile) · [Portfolio](https://hamza-leon120.github.io/my-profail/) · [Upwork](https://www.upwork.com/freelancers/your-profile)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

# 🌱 Jack and the Beanstalk — Interactive Fairy Tale Website

This project is an immersive, scroll-based fairy tale website based on the classic story *Jack and the Beanstalk*. It was created for a school assignment as part of a larger portal showcasing the interactive stories of multiple students. The page delivers an engaging, animated narrative using modern web development techniques and a highly visual design.

> **🔗 Live Demo:** [Coming Soon — Link Here]

---

## 📖 Concept & Inspiration

The goal was to transform a traditional fairy tale into an interactive web experience. The story unfolds as the user scrolls **upward**, representing Jack’s journey up the beanstalk. The entire experience is one continuous scroll, without page transitions — inspired heavily by the design and structure of [NASA Prospect](https://nasaprospect.com/), a vertically-scrolling digital story with fixed elements and layered backgrounds.

---

## 🎨 Design & Structure

- The background is a **vertical gradient** going from light blue to dark blue, representing the transition from Earth to sky.
- **Jack** (the main character) is a fixed PNG in the center of the screen at all times. His pose changes depending on the scene (arms up, down, side view).
- The story is broken into **five interactive scenes**:
  1. **The Trade** — Jack trades the cow for magical beans.
  2. **Going Home** — He faces his mother’s reaction.
  3. **The Beanstalk** — The beans grow into the sky.
  4. **The Castle** — Jack finds a castle above the clouds.
  5. **The Giant** — He meets the giant, the hen, and the golden harp.

Each scene includes layered PNGs with parallax movement (trees, clouds, background), animated props, and interactive elements.

---

## 🧠 Features & Interactivity

- **Scroll-Triggered Events**: Scenes appear as the user scrolls, activating animations and transitions.
- **Character Changes**: Jack’s pose changes according to the scroll position.
- **Magic Bean Trade**: Clicking on a bean triggers a cow trade animation — the bean flies to Jack, the cow moves to the market.
- **Golden Egg Hunt**: Hidden golden eggs throughout the story. When clicked, they increase a counter.
- **Easter Egg Scene**: Upon finding all 5 golden eggs, a special golden heaven scene appears at the top of the page.
- **Text Clouds**: Small text bubbles appear above Jack based on the current scene, telling the story with character thoughts.
- **Background Music**: A calm background track plays on loop, with a mute/unmute button.

---

## ⚙️ Technology Stack

- **React** (with Vite for fast dev/build)
- **React Router** for page navigation
- **React Hooks** used:
  - `useState`: manage scroll, music, interactions
  - `useEffect`: detect scrolling, start audio, trigger animations
  - `useRef`: control audio player reference
  - `useContext`: (optional, structure-ready)
- **CSS**: custom styling, transitions, animations, and parallax layers
- **Modular Components**: Each scene (and element) is organized into separate reusable React components

---

## 🛠 Project Structure

📁 /src
├── components/ → Portal page components (header, slideshow, list, etc.)
├── jack-components/ → All components related to Jack’s fairy tale
├── api/slides.json → List of all student fairy tale projects
├── App.jsx → Main router setup
└── App.css → Global styling


---

## 🖼 Visual Assets

- Most assets were custom-made in **Adobe Illustrator**, including:
  - Jack character in multiple poses
  - Scene props (market, cow, house, clouds, beanstalk, castle, harp, hen, etc.)
- Some images were **downloaded from free resources** (Unsplash, Pixabay), vectorized and adapted to fit the project’s visual language.
- Design style is heavily influenced by **NASA Prospect** in terms of layout, parallax layering, and scroll storytelling.

---

## 💡 Challenges & Successes

### ✅ Successes
- Achieved smooth and performant scroll-based storytelling using simple tools (no external animation libs needed).
- Created custom interactive scenes (like the bean trade and egg counter) from scratch.
- Delivered a story with both **visual impact and interactive depth**, all while keeping the code clean and modular.

### ❌ Challenges
- Ensuring everything aligns perfectly on scroll (especially Jack staying fixed while scenes move).
- Managing scroll-triggered states without third-party animation libraries.
- Avoiding full page reloads while linking to the fairy tale inside a larger portal page.
- Integrating both the portal page and fairy tale page within one repo without breaking routing or Vite setup.

---

## 📁 Deployment Structure

This project is deployed on GitHub Pages as part of a larger portal.

- **Main Portal**: `/` → displays all stories and navigation
- **My Fairy Tale**: `/sprookje` → this specific project page (Jack and the Beanstalk)

Each project lives within the same repo and routing is handled via React Router.

---

## 👤 Author

**Igor Lopes Oliveira**  
Front-End Design Student @ Erasmushogeschool Brussel

Languages: Dutch, French, English, Portuguese  
Contact: igor.lopes.oliveira@student.ehb.be

---

## 🔖 License

This project is educational and non-commercial. Visuals either belong to the creator or are free/public assets. Sources and licenses available upon request.

## Sources
- https://chatgpt.com/share/6823134b-7390-800d-9ad4-e207da0a1c66
- https://nasaprospect.com/
- https://canvas.ehb.be/courses/40436
- https://www.w3schools.com/react/default.asp
- https://stackoverflow.com/questions/69966907/slideshow-using-react-hooks-and-setinterval

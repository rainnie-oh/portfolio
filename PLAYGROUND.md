## Playground content index (for AI + future CMS)

Purpose: maintain a single source of truth for all Playground items, their categories, and their media paths.

Rules:

- Every item is in English.
- Categories are only: Interaction / Installation / Articles.
- Do NOT create extra categories just because there are 1–2 items of a subtype.
- Use `format` to describe the piece instead (creative-coding / motion-graphics / product-demo / writing).
- Asset paths should group all media for one item under one folder (images + videos together).

---

## Categories

- Interaction
- Installation
- Articles

---

## Item schema (MD)

Playground Item

- id: pg-...
- title: ...
- category: interaction | installation | articles
- format: creative-coding | motion-graphics | product-demo | other
- tags: [ ... ]
- summary: ... (1–2 sentences)
- timeline:
    - duration: ...
    - dates: ...
- tools: [ ... ]
- roles: [ ... ]
- awards: ... (optional)
- media:
- slug: ...

---

## Items

### Womenstruation
- id: pg-womenstruation
- title: Womenstruation
- category: installation
- format: creative-coding
- tags: [Installation, Creative Computing]
- summary: An interactive hardware installation that uses speech recognition to detect whether visitors say the real word “menstruation,” then visualizes the act of naming it as a step-by-step process of breaking the taboo.
- timeline:
    - dates: 2022.09–2022.11
- tools: [Arduino, p5.js]
- roles: [Design Technologist]
- slug: womenstruation

### P5.JS Mentorship
- id: pg-p5js-mentorship
- title: P5.JS Mentorship
- category: interaction
- format: creative-coding
- tags: [Creative Computing, p5.js]
- summary: Creative Coding Course For Beginners. Led 20 students to understand P5.JS through core programming fundamentals, and learn how to combine design thinking and programming thinking to solve problems.
- timeline:
    - dates: 2023.03–2023.05
- tools: [p5.js]
- roles: [Interactive Art Design Mentor]
- slug: p5js-mentorship

### Shanghai | 36-Hours Women’s Hackathon
- id: pg-hackathon
- title: Shanghai | 36-Hours Women’s Hackathon
- category: interaction
- format: product-demo
- tags: [Hackathon, Product Demo]
- awards: Top 5 (team)
- summary: First time attending a hackathon; our team placed Top 5. We built an interactive demo for AI sports-injury posture assessment, recognizing risky movement patterns and visualizing feedback in real time.
- timeline:
    - dates: 2025.12
- tools: [Antigravity, Mediapipe, Notion AI]
- roles: [Product manager]
- slug: hackathon

### Promo video | Setouchi Art Festival
- id: pg-setouchi
- title: Promo video | Setouchi Art Festival
- category: interaction
- format: motion-graphics
- tags: [Motion graphic, Art Festival]
- summary: A promotional motion video for the Setouchi Triennale (Setouchi Art Festival), a contemporary art festival held once every three years across the Setouchi islands in Japan.
- timeline:
    - dates: 2022.05
- tools: [After Effects]
- roles: [Motion graphic designer]
- slug: setouchi

### Mobile Haven
- id: pg-mobile-haven
- title: Mobile Haven
- category: installation
- format: creative-coding
- tags: [Installation, Creative Computing]
- summary: A playful interactive installation exhibited twice at a local museum in Savannah. Visitors can simulate “massaging” a phone, prompting reflection.
- timeline:
    - dates: 2024.07-2024.09
- tools: [Arduino, p5.js]
- roles: [Design Technologist, Climbing Video Volunteer]
- slug: mobile-haven

### Purrlanet
- id: pg-purrlanet
- title: Purrlanet
- category: interaction
- format: product-demo
- tags: [Product Demo, UI/UX]
- summary: The project offers a platform for remembrance and connection, supporting cat owners in coping with guilt. Users can interact with a customized digital cat on a cat planet.
- timeline:
    - dates: 2023.06-2023.08
- tools: [After Effects, Figma]
- roles: [UX Designer]
- slug: purrlanet

### On Designing for Engineers
- id: pg-designing-for-engineers
- title: On Designing for Engineers — Not Around Them
- category: articles
- format: writing
- tags: [Process, Engineering, Collaboration]
- summary: Article about what changes when you design with engineering knowledge from day one.
- timeline:
    - dates: 2025.01
- tools: [Writing]
- roles: [Author]
- slug: design-for-engineers

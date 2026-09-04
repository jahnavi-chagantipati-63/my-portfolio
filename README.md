# My Portfolio

This is a React portfolio built with Vite. This README is the project coding contract: read it before making any change and follow the technology, styling, structure, and content rules below.

## Technology contract

Use only the following stack for this project:

- **Frontend:** React 19 and React DOM
- **Build tool:** Vite
- **Styling:** Bootstrap, Tailwind CSS, custom CSS, PostCSS, and Autoprefixer
- **Animation:** Framer Motion and GSAP
- **Quality:** ESLint with React and React Hooks rules
- **Language:** JavaScript/JSX only

Do not introduce TypeScript, another UI framework, another CSS framework, or a new dependency without explicit approval. Reuse the installed stack before adding packages.

## Design direction

The visual language should feel refined, editorial, warm, and confident. Use the following palette as the source of truth for new UI work:

| Token | Hex | Usage |
| --- | --- | --- |
| Alabaster | `#F2F0E6` | Main light background and spacious surfaces |
| Grey | `#808080` | Muted text, borders, and secondary UI |
| Black Cherry | `#2B0F14` | Deep backgrounds, headings, and strong contrast |
| Racing Red | `#D90429` | Primary actions, active states, and emphasis |
| Cherry Coffee Bean | `#5A2A27` | Warm accent surfaces and supporting details |

Define palette values as CSS custom properties in the shared theme styles and reference the variables throughout the application. Do not scatter raw color values across components. Preserve readable contrast and provide visible keyboard focus states.

## Styling rules

- Use Bootstrap utilities and components where they provide a good fit.
- Use Tailwind utilities only when they improve consistency with the existing implementation; do not mix long, conflicting utility chains with custom CSS unnecessarily.
- Put styling in CSS files, CSS modules, or shared style files. **Do not use inline styles.**
- Keep global styles limited to resets, typography, theme variables, and shared foundations.
- Keep component-specific styles close to the component when practical.
- Use semantic, intention-revealing class names and responsive layouts.
- Prefer reusable CSS variables for spacing, color, typography, borders, and motion timing.
- Use Framer Motion or GSAP for purposeful animation; respect `prefers-reduced-motion`.

## Component rules

- Use functional React components and Hooks.
- Keep one focused component per file.
- Build reusable UI components before duplicating a pattern.
- Keep business logic and data transformation outside presentational components where practical.
- Pass content and configuration through props or data modules.
- Use semantic HTML, meaningful image `alt` text, keyboard-accessible controls, and proper button types.
- Keep imports organized and remove unused code.

## Project structure

```text
.
|-- assets/                         # Portfolio, certification, technology, and portrait images
|-- public/                         # Public files and Earth texture assets
|-- src/
|   |-- components/
|   |   |-- effects/                # Background and cursor effects
|   |   |-- layout/                 # Navbar, footer, social dock, scroll-to-top
|   |   |-- sections/               # Hero, About, Skills, Projects, Experience, etc.
|   |   `-- ui/                     # Reusable buttons, cards, modal, loader, images
|   |-- data/
|   |   |-- profile.js              # Main profile and portfolio content
|   |   `-- portfolio.json          # Experience and structured portfolio data
|   |-- hooks/                      # Scroll spy, image preload, in-view, and motion hooks
|   |-- styles/                     # Shared theme variables and CSS foundations
|   |-- App.jsx                     # Page composition and section order
|   |-- App.css                     # App-level styles
|   |-- index.css                   # Global styles and Tailwind entry point
|   `-- main.jsx
|-- index.html
|-- package.json
|-- tailwind.config.js
`-- vite.config.js
```

Use PascalCase for React component filenames (`ProjectCard.jsx`), camelCase for Hooks (`useInView.js`), and lowercase descriptive names for image assets.

## Content source of truth

Do not hardcode portfolio content inside page or section components. Edit [`src/data/profile.js`](src/data/profile.js) for:

- Name, role, summary, and links
- Skills
- Projects
- Experience
- Education
- Publications
- Certifications
- Testimonials

Employment history is loaded from [`src/data/portfolio.json`](src/data/portfolio.json).

## Images

Portraits and project visuals live in `assets/my-images/`. Import image paths from the asset folders in `src/data/profile.js`, then pass them into reusable components. Add meaningful `alt` text for informative images and `alt=""` for decorative images.

## Adding a project

Add a new item to the `projects` collection in `src/data/profile.js` with:

```js
{
  id,
  title,
  tags,
  image,
  description,
  impact,
  stack,
  repo,
  demo,
  details
}
```

The UI should render the project automatically through the existing reusable project components.

## Validation

Run these checks before finishing a change:

```bash
npm run lint
npm run build
```

Confirm that the change is responsive, accessible, uses the approved palette and stack, contains no inline styles, and does not duplicate existing component or content logic.

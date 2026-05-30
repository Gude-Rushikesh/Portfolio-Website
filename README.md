# Rushikesh — Portfolio

A premium dark-themed portfolio built with React, React Router, and Vite.

## Quick start

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## File structure

```
src/
├── data/
│   └── projects.js          ← ALL your project content lives here
├── components/
│   ├── Navbar.jsx            ← Shared nav (adapts between home and project pages)
│   └── Navbar.css
├── pages/
│   ├── HomePage.jsx          ← Hero, Projects grid, Skills, About, Contact
│   ├── HomePage.css
│   ├── ProjectPage.jsx       ← Full case study page (rendered from projects.js data)
│   └── ProjectPage.css
├── styles/
│   └── global.css            ← Design tokens (CSS variables), fonts, utilities
├── App.jsx                   ← React Router setup
└── main.jsx                  ← Entry point
```

## How to customise

### Add / edit projects
Open `src/data/projects.js` and edit the `PROJECTS` array. Each object has:

| Field | Description |
|---|---|
| `id` | URL slug — becomes `/projects/your-id` |
| `num` | Display number, e.g. `'01'` |
| `tag` | Category label shown on the card |
| `title` | Full project title |
| `titleItalic` | One word from the title that renders in italic |
| `subtitle` | One-line summary shown on the case study hero |
| `desc` | Short description shown on the home card |
| `chips` | Array of tech stack tags |
| `color` | Card / cover background hex color |
| `accent` | Accent color for that project |
| `role` | Your role on the project |
| `duration` | How long it took |
| `year` | Year shipped |
| `liveUrl` | Live URL (use `'#'` to hide the button) |
| `githubUrl` | GitHub URL (use `'#'` to hide the button) |
| `overview` | First body section — the goal |
| `process` | Second body section — how you approached it |
| `features` | Array of `{ title, desc, icon }` — key highlights |
| `challenges` | Array of `{ title, solution }` — problems solved |
| `outcome` | Final section — result / what you learned |

### Add your photo
In `HomePage.jsx`, replace the `<div className="about-img-placeholder">` block with:
```jsx
<img src="/your-photo.jpg" alt="Rushikesh" className="about-img" />
```
Put your photo in the `public/` folder.

### Add project screenshots
In `ProjectPage.jsx`, replace the `<div className="proj-thumb">` block with:
```jsx
<img src={p.image} alt={p.title} className="proj-thumb-img" />
```
Add an `image` field to each project in `projects.js` pointing to a file in `public/`.

### Update contact links
In `HomePage.jsx`, find the `<ContactLink>` components and update `href` values.

## Deploy

### Netlify / Vercel (recommended)
Both auto-detect Vite. Just push to GitHub and connect the repo.

For Netlify, add a `public/_redirects` file with:
```
/*  /index.html  200
```
This ensures React Router works on direct URL visits.

### Build manually
```bash
npm run build   # outputs to dist/
npm run preview # local preview of the build
```

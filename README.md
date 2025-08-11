<div align="center">

## Harshala Rani — Portfolio

A clean, responsive personal portfolio with subtle animations and a mobile‑first layout.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=111)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=fff)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38B2AC?logo=tailwindcss&logoColor=fff)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-~10-0055FF?logo=framer&logoColor=fff)](https://www.framer.com/motion/)
[![Docker](https://img.shields.io/badge/Docker-optional-2496ED?logo=docker&logoColor=fff)](https://www.docker.com/)

</div>

### Tech stack
- React 18 + TypeScript (Create React App)
- Tailwind CSS 3
- Framer Motion
- Docker (optional)

### Quick start
```bash
# install dependencies
npm install

# start the dev server
npm start
# http://localhost:3000
```

### Build
```bash
# production build (outputs to ./build)
npm run build
```
Serve the build directory with any static host (Nginx, Netlify, Vercel, etc.).

### Docker
```bash
# production container (Nginx inside)
docker-compose up -d
# http://localhost:3000
```
More in `DOCKER_DEPLOYMENT.md`.

### Customize
- Content: edit components in `src/components/` (`Hero.tsx`, `About.tsx`, `Projects.tsx`, etc.)
- Styles: Tailwind utilities and custom classes in `src/index.css`
- Assets: replace `public/profile-image.jpg`, `public/resume.pdf`
- Theme/animations: tweak `tailwind.config.js`

### Project structure (simplified)
```
Portfolio/
  public/                 # static assets (index.html, images, resume.pdf)
  src/
    components/           # sections (Hero, About, Skills, ...)
    App.tsx
    index.tsx
    index.css
  tailwind.config.js
  postcss.config.js
  package.json
```

### Scripts
- `npm start` — dev server
- `npm run build` — production build

### Contact
- Email: [harshalarani3@gmail.com](mailto:harshalarani3@gmail.com)
- GitHub: [harshhala-ranii](https://github.com/harshhala-ranii)
- LinkedIn: [Harshala Rani](https://www.linkedin.com/in/harshala-rani-a26880244/) 
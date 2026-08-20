# Tedi Qafko Portfolio (React Native)

Portfolio site rebuilt from Hugo using **React Native** ([Expo](https://expo.dev) + expo-router + react-native-web). It runs in the browser and can also run natively on iOS/Android from the same code.

## Layout

- **Projects** (home page `/`) — card grid of all projects
- **About Me** (`/about`)
- **Research** (`/research`) — publications grouped by year
- A wiki-docs style **left sidebar** lists all pages and every project. On narrow screens it collapses into a hamburger menu.

## Running

```bash
npm install
npm run web      # opens the site in the browser
```

`npm run ios` / `npm run android` run the same app natively.

To build a static site for deployment:

```bash
npx expo export --platform web
```

The output goes to `dist/`. Pushing to `react-native-site` (or `main`) runs GitHub Actions, which exports the site and deploys it to GitHub Pages at [tediqafko.com](https://tediqafko.com).

## Adding a project

1. Put the project's images in `assets/img/<project-name>/`.
2. Create `content/projects/<project-name>.ts`. Copy an existing file (e.g.
   `balancingRobot.ts` is a small one) and fill in:
   - `slug` — the URL path (`/projects/<slug>`)
   - `title`, `date`, `description`, `tags`
   - `image` — the thumbnail for the home page grid
   - `content` — an array of blocks: `heading`, `paragraph`, `image`,
     `imageRow`, `list`, `table`, `youtube`, `video`, `link`.
     Text supports `**bold**` and bare URLs become links automatically.
3. Import it in `content/projects/index.ts` and add it to the `projects` array.

That's it — it appears on the home page and in the sidebar automatically,
sorted by date.

## Adding a research publication

Add an entry to the array in `content/research.ts` with `year`, `image`,
`title`, `venue`, `description`, and `url`. The page groups publications
by year automatically.

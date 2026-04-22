# David Goh

A minimal academic homepage built with React and Tailwind CSS, deployed to GitHub Pages.

## Local Development

To work on this site locally:

```bash
# Clone the webdev project (not this repository)
gh repo clone davidcagoh/davidcagoh-site-refresh

cd davidcagoh-site-refresh

# Install dependencies
pnpm install

# Start the dev server
pnpm dev

# Build for production
pnpm build
```

The built output goes to `dist/public/`. To deploy, copy those files to the `davidcagoh.github.io` repository root and push.

## Deployment

This repository serves as the GitHub Pages deployment target. The source code lives in the separate `davidcagoh-site-refresh` project.

To update the site:

1. Make changes in the `davidcagoh-site-refresh` project
2. Run `pnpm build`
3. Copy `dist/public/*` to this repository
4. Commit and push

The site will be live at `https://davidcagoh.github.io/` within seconds.

## Future Work

- Add the four forthcoming projects or preprints to the "Work forthcoming" section
- Refine project descriptions based on final abstracts
- Consider adding a contact form or email link

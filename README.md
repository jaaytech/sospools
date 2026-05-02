# SOS Pool LLC Website

Fresh Next.js website/app for a pool cleaning business.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- ESLint

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open http://localhost:3000

## Production Validation

```bash
npm run lint
npm run build
```

## GitHub First Push

Run these commands from the project root after replacing `YOUR_REPO_URL`:

```bash
git init
git add .
git commit -m "Initial pool cleaning website setup"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```

If this repository already has a git history, skip `git init` and just set/update the remote.

## Vercel Deployment

1. Push to GitHub.
2. In Vercel, click "Add New Project".
3. Import this GitHub repository.
4. Keep default Next.js build settings.
5. Deploy.

After the first deploy, Vercel will auto-deploy on each push to `main`.

## Current Routes

- `/`
- `/services`
- `/about`
- `/booking`
- `/contact`

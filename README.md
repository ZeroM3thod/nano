# Qountex

Educational finance lessons and client-side tools. No account, server database, trackers or third-party scripts.

## Local development

```bash
npm install
npm run dev
```

Run `npm run lint` and `npm run build` before deployment.

## Deploy to Vercel

Push this repository to GitHub, then in Vercel choose **Add New → Project**, import the repository, and use the detected **Next.js** framework settings. Vercel builds and deploys each push to the connected `main` branch automatically.

## Android Trusted Web Activity

Set the release signing certificate fingerprint and package name in `public/.well-known/assetlinks.json`. Replace `REPLACE_WITH_SHA256` with the SHA-256 fingerprint formatted as colon-separated hexadecimal; update `com.qountex.learn` if the Android package name changes. Host this file at the exact `/.well-known/assetlinks.json` path over HTTPS.

## Contact

Change `contactEmail` in `data/config.ts` to set the contact address used by the site.

## GitHub push commands

Create an empty GitHub repository, then run:

```bash
git init
git add .
git commit -m "Build Qountex finance learning app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

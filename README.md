# David Waihenya's Portfolio

Welcome to your new portfolio website! This project is built using React, Vite, and Tailwind CSS.
It is extremely fast, fully responsive, and packed with optimized interactions, zero external charting or animation libraries.

## Pre-Launch Checklist

Before you push this site to the public, walk through these final steps:

- [ ] **Item 1:** Replace all photo placeholders with real photos (compress at squoosh.app first to maintain fast loading times). Ensure you update the `/public/assets` folder.
- [ ] **Item 2:** Replace all `href="#"` dummy links with your real GitHub, LinkedIn, and Twitter/X profile URLs.
- [ ] **Item 3:** Run Lighthouse in Chrome DevTools — target 90+ on Performance, Accessibility, and SEO.
- [ ] **Item 4:** Test on mobile screen sizes (e.g., iPhone SE 375px and Samsung Galaxy 412px) to guarantee flawless responsive behaviors.
- [ ] **Item 5:** Add a real Google Analytics tag or Plausible Analytics snippet in the `<head>` of `index.html` for visitor tracking.
- [ ] **Item 6:** Double check that your gold accent color (`#1e63ff` or `#004de6`) has sufficient WCAG AA contrast against the dark `#0b0b0b` backgrounds.

## GitHub Pages Deployment Guide

Follow these exact steps to deploy the application for free to GitHub Pages:

### Step 1: Prepare the repository
* Create a public GitHub repository named EXACTLY: `davidwaihenya.github.io`
* Clone this repository to your local machine.

### Step 2: Build and Push
* Open the terminal in your project directory and run:
  ```bash
  npm run build
  ```
* This will generate a `dist` folder. Because GitHub Pages for personal sites serves static files from the root of the repository, you need to commit the contents of `dist/` directly to the `main` branch.
* Note: Alternatively, push the entire source code to GitHub and set up a GitHub Actions workflow to build and deploy to GitHub Pages automatically.

### Step 3: Configure GitHub Pages
* Navigate to your repo on github.com
* Go to **Settings** → **Pages**
* Under *Build and deployment*, set **Source** to `Deploy from branch`
* Set **Branch** to `main` and **Folder** to `/ (root)`
* Click **Save**
* The site goes live at `https://davidwaihenya.github.io` within 2 minutes.

### Step 4: Add a Custom Domain (davidwaihenya.co.ke)
* Buy the domain `davidwaihenya.co.ke` from a provider like Truehost Kenya or KENIC.
* Create a file named `CNAME` in the root of your repository (or inside your `public/` directory before building) containing just your domain name:
  ```text
  davidwaihenya.co.ke
  ```
* In your domain provider's DNS settings, create **A records** pointing to these GitHub IPs:
  * `185.199.108.153`
  * `185.199.109.153`
  * `185.199.110.153`
  * `185.199.111.153`
* Wait up to 24 hours for DNS propagation. Afterward, your site will be fully live and secured with HTTPS!

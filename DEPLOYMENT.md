# 🚀 Deployment Guide - GitHub Pages

This guide will help you deploy your portfolio to GitHub Pages.

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Portfolio code ready to upload

## 🎯 Deployment Steps

### Step 1: Prepare Your Repository

Since this is a full-stack app but GitHub Pages only serves static files, we'll deploy just the frontend build.

1. **Update `package.json`** - Add GitHub Pages scripts:

```json
{
  "scripts": {
    "dev": "NODE_ENV=development tsx server/index.ts",
    "build": "vite build",
    "build:gh-pages": "vite build --base=/portfolio/",
    "start": "NODE_ENV=production node dist/index.js",
    "check": "tsc",
    "db:push": "drizzle-kit push",
    "predeploy": "npm run build:gh-pages",
    "deploy": "gh-pages -d dist/public"
  }
}
```

2. **Install gh-pages package:**

```bash
npm install --save-dev gh-pages
```

### Step 2: Update Vite Config for GitHub Pages

Your `vite.config.ts` needs to include the base path. Update it:

```typescript
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
  // ... rest of config
});
```

**Note:** Replace `/portfolio/` with `/<your-repo-name>/` if different.

### Step 3: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **+** icon → **New repository**
3. Repository name: `portfolio` (or your preferred name)
4. Description: "Personal Portfolio - Data Science"
5. Choose **Public**
6. **Don't** initialize with README (we already have one)
7. Click **Create repository**

### Step 4: Push Your Code to GitHub

```bash
# Navigate to your project folder
cd /home/abhinandan-singh-rana/Desktop/Portfolio-gj

# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website"

# Add remote (replace YOUR-USERNAME and YOUR-REPO-NAME)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 5: Deploy to GitHub Pages

```bash
# Build and deploy
npm run deploy
```

This command will:
1. Build your project (`npm run build:gh-pages`)
2. Create a `gh-pages` branch
3. Push the `dist/public` folder to that branch

### Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

### Step 7: Access Your Live Site

After 2-5 minutes, your site will be live at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

For example:
```
https://garima-jain11.github.io/portfolio/
```

## 🔄 Update Your Portfolio (Future Changes)

Whenever you make changes:

```bash
# Make your changes
# Commit changes
git add .
git commit -m "Description of changes"
git push origin main

# Deploy updated version
npm run deploy
```

## 🌐 Custom Domain (Optional)

If you want a custom domain like `garimajain.com`:

1. Buy a domain from providers like Namecheap, GoDaddy, etc.
2. Add a `CNAME` file to your `client` folder with your domain:
   ```
   garimajain.com
   ```
3. In your domain provider's DNS settings, add these records:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   
   Type: A
   Host: @
   Value: 185.199.109.153
   
   Type: A
   Host: @
   Value: 185.199.110.153
   
   Type: A
   Host: @
   Value: 185.199.111.153
   
   Type: CNAME
   Host: www
   Value: YOUR-USERNAME.github.io
   ```
4. In GitHub repo settings → Pages, add your custom domain

## 🐛 Troubleshooting

### Resume not downloading?
- Ensure `Garima_Jain.pdf` is in `attached_assets/` folder
- Check the path in HeroSection component: `/Garima_Jain.pdf`
- After deployment, try accessing: `https://YOUR-USERNAME.github.io/portfolio/Garima_Jain.pdf`

### 404 Error on GitHub Pages?
- Wait 5-10 minutes after deployment
- Check if `gh-pages` branch exists
- Verify GitHub Pages settings point to `gh-pages` branch

### Images not loading?
- Ensure all image imports use the `@assets` alias
- Check that `attached_assets` folder is included in build

### Blank page on deployment?
- Check if base path in `vite.config.ts` matches your repo name
- Open browser console (F12) to see any errors
- Ensure all routes use relative paths, not absolute

## 📱 Alternative Deployment Options

### Vercel (Recommended for Full-Stack)
1. Visit [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Configure:
   - Framework: Vite
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
4. Deploy!

### Netlify
1. Visit [netlify.com](https://netlify.com)
2. Drag & drop your `dist/public` folder
3. Or connect GitHub repo for auto-deployment

## ✅ Checklist Before Deployment

- [ ] Resume PDF is in `attached_assets/` folder
- [ ] All sensitive data removed (API keys, passwords)
- [ ] `.gitignore` updated
- [ ] README.md created
- [ ] All features tested locally (`npm run dev`)
- [ ] Build works without errors (`npm run build`)
- [ ] Images and assets load correctly

## 🎉 Your Portfolio is Live!

Share your portfolio link:
- On LinkedIn
- In your resume
- With potential employers
- On Twitter/X

---

**Need Help?** Open an issue on GitHub or check the [Vite deployment docs](https://vitejs.dev/guide/static-deploy.html)

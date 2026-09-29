# Portfolio Setup Guide

## Quick Start

Follow these steps to get your portfolio running:

### 1. Open Terminal in Project Folder
Navigate to the `ritvik-portfolio` folder:
```bash
cd ritvik-portfolio
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Open your browser and go to: **http://localhost:3000**

That's it! Your portfolio is now running! 🎉

## What You'll See

Your portfolio includes:

✅ **Animated Hero Section** with your name and social links  
✅ **About Section** with your education from MANIT Bhopal  
✅ **Skills Section** with all your tech stack (React, Node.js, Python, etc.)  
✅ **Projects Section** featuring:
- VibeXpert (200+ downloads, 17+ sellers)
- Calling AI (AI-powered call assistant)
- NutriLens (Food recognition with ML)

✅ **Achievements Section** with:
- 20+ live websites delivered
- 400+ coding problems solved
- Hackathon achievements
- AWS certification

✅ **Contact Section** with all your contact info and social links

## 🎨 Animations & Effects

- Smooth scroll animations
- Particle background with connections
- Gradient text effects
- Glass morphism cards
- Hover animations
- Animated counters
- Floating elements
- Responsive navigation

## 📱 Mobile Responsive

The entire portfolio is fully responsive and looks great on:
- Desktop computers
- Tablets
- Mobile phones

## 🚀 Deploy Your Portfolio

### Option 1: Vercel (Easiest)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "New Project"
5. Import your repository
6. Click "Deploy"
7. Done! Your portfolio is live! 🎉

### Option 2: Netlify
1. Build your project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop your `.next` folder
4. Your site is live!

## 🎯 Customization Tips

### Change Colors
Edit `tailwind.config.js`:
- `primary` - Main blue color
- `secondary` - Purple accent color

### Update Content
Edit files in `components/` folder:
- `Hero.tsx` - Main introduction
- `About.tsx` - Education info
- `Skills.tsx` - Your skills
- `Projects.tsx` - Your projects
- `Achievements.tsx` - Your achievements
- `Contact.tsx` - Contact information

### Add Your Photo
Replace the code icon in `Hero.tsx` with an image:
```tsx
<img src="/your-photo.jpg" alt="Profile" className="rounded-full" />
```

## 🐛 Troubleshooting

**Port already in use?**
```bash
npm run dev -- -p 3001
```

**Dependencies issue?**
```bash
rm -rf node_modules
npm install
```

**Build errors?**
Make sure all TypeScript errors are resolved before deploying.

## 📞 Need Help?

If you need to customize anything or face issues:
- Check the README.md file
- Review the component files
- Contact: ganugaritwik@gmail.com

---

**Enjoy your new portfolio! 🚀**

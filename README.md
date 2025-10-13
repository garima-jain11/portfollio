# Portfolio - Garima Jain

A modern, interactive portfolio website showcasing data science expertise, projects, and professional experience.

## ✨ Features

- 🎨 **Modern Design**: Clean, professional interface with glassmorphism effects
- 🕸️ **Interactive Skills Web**: Spider web visualization of technical skills with neon connections
- 💫 **Smooth Animations**: Framer Motion powered animations and transitions
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- 🌓 **Theme Support**: Beautiful design with theme toggle capability
- ⚡ **Fast Performance**: Built with Vite for optimal loading speed
- 🎯 **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **Shadcn/ui** - UI components
- **Lucide React** - Icons

### Backend
- **Express** - Server framework
- **Drizzle ORM** - Database ORM
- **PostgreSQL** - Database

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/garima-jain11/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables (optional)
```bash
# Create .env file if using database features
cp .env.example .env
# Add your DATABASE_URL if needed
```

4. Run development server
```bash
npm run dev
```

5. Open [http://localhost:5000](http://localhost:5000) in your browser

## 📦 Build for Production

```bash
npm run build
npm start
```

## 📂 Project Structure

```
portfolio/
├── client/              # Frontend React app
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── hooks/       # Custom hooks
│   │   ├── lib/         # Utilities
│   │   └── pages/       # Page components
│   └── index.html
├── server/              # Backend Express server
│   ├── index.ts         # Server entry point
│   └── routes.ts        # API routes
├── shared/              # Shared code (schemas, types)
└── attached_assets/     # Images and assets
```

## 🎯 Key Sections

1. **Hero Section** - Introduction with animated typing effect
2. **About** - Professional background and expertise
3. **Experience** - Work timeline with company logos
4. **Skills** - Interactive spider web visualization
5. **Projects** - Showcase of data science projects
6. **Education** - Academic background and achievements
7. **Contact** - Connect via email, GitHub, LinkedIn

## 🎨 Customization

### Update Personal Information

Edit the following files to customize with your information:
- `client/src/components/HeroSection.tsx` - Name, title, social links
- `client/src/components/AboutSection.tsx` - Bio and background
- `client/src/components/ExperienceTimeline.tsx` - Work experience
- `client/src/components/ProjectsSection.tsx` - Projects
- `client/src/components/EducationSection.tsx` - Education
- `client/src/components/ContactSection.tsx` - Contact info

### Update Skills
Edit `client/src/components/SkillsSection.tsx` to add/remove skills in the spider web.

### Change Theme Colors
Edit `tailwind.config.ts` to customize the color scheme.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

**Garima Jain**
- Email: jain.garima2003@gmail.com
- GitHub: [@garima-jain11](https://github.com/garima-jain11)
- LinkedIn: [garimajain](https://linkedin.com/in/garimajain)

---

⭐ If you like this project, please give it a star on GitHub!

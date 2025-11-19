# AI Super App - Quick Start Guide

## 🚀 Getting Started in 3 Steps

### Step 1: Navigate to the Project
```bash
cd react-app
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start the Development Server
```bash
npm run dev
```

Or simply **double-click** `start-app.bat` on Windows!

## 📱 Application Routes

Once the server is running, visit these pages:

- **Home/Landing**: http://localhost:3000/
- **Features**: http://localhost:3000/features
- **Pricing**: http://localhost:3000/pricing
- **Partners**: http://localhost:3000/partners

## 🎨 What's Included

### Pages
✅ **Landing Page** - Hero section, AI tools showcase, partner CTAs  
✅ **Features Page** - Creative tools and developer platform features  
✅ **Pricing Page** - Three-tier pricing with FAQ accordion  
✅ **Partners Page** - Partnership form with validation  

### Components
✅ Responsive Header with navigation  
✅ Footer with links  
✅ Feature Cards (reusable)  
✅ Pricing Cards with highlighting  

### Features
✅ Fully responsive design  
✅ Dark mode enabled  
✅ React Router for navigation  
✅ Form handling with state management  
✅ Tailwind CSS styling  

## 🛠 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Space Grotesk** - Font family
- **Material Symbols** - Icons

## 📦 Project Structure

```
react-app/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components (routes)
│   ├── App.jsx        # Main app with routing
│   ├── main.jsx       # Entry point
│   └── index.css      # Global styles
├── public/            # Static assets
├── index.html         # HTML template
└── package.json       # Dependencies
```

## 🎯 Key Features by Page

### Landing Page
- Gradient hero with AI imagery
- Three AI tools showcase
- Partner monetization CTA
- Get started section

### Features Page
- **Creative Tools**: Passport Photo, Storybook, Video Editor
- **Developer Platform**: Monetization, API, Audience
- CTA to get started

### Pricing Page
- Free, Pro, Business tiers
- Monthly/Annual toggle
- Feature comparison
- FAQ accordion (3 questions)

### Partners Page
- Three benefit cards
- Application form (5 fields)
- Form validation
- Submit handling

## 🔧 Customization

### Update Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#38e079',  // Your primary color
  'background-light': '#f6f8f7',
  'background-dark': '#122017',
}
```

### Change Font
Edit `index.html` and `tailwind.config.js` to use a different Google Font.

### Add New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/Header.jsx`

## 🐛 Troubleshooting

**Port 3000 already in use?**
```bash
# Vite will automatically try port 3001, 3002, etc.
```

**Dependencies not installing?**
```bash
# Clear npm cache
npm cache clean --force
npm install
```

**Module not found errors?**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📝 Next Steps

1. ✅ Start the app and explore all pages
2. 🎨 Customize colors and branding
3. 🖼️ Replace placeholder images with actual assets
4. 🔌 Connect forms to backend APIs
5. 🚀 Build and deploy to production

## 🌐 Production Build

```bash
npm run build
```

Output will be in `dist/` directory, ready to deploy to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting

## 💡 Tips

- The app uses dark mode by default
- All navigation works via React Router (no page reloads)
- Forms log to console (replace with API calls)
- Responsive breakpoints: mobile → tablet → desktop

---

**Ready to build something amazing! 🚀**

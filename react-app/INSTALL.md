# Installation & Setup Instructions

## 🚀 Quick Start (3 Easy Steps)

### Step 1: Open Terminal in Project Directory
Navigate to the react-app folder:
```bash
cd c:\Users\dines\AlgoClips\AISuperapp\react-app
```

Or use Windows Explorer:
- Right-click on the `react-app` folder
- Select "Open in Terminal" or "Open PowerShell window here"

### Step 2: Install Dependencies
Run this command to install all required packages:
```bash
npm install
```

This will install:
- React 18.3.1
- React DOM 18.3.1
- React Router DOM 6.22.0
- Vite 5.1.4
- Tailwind CSS 3.4.1
- And other dependencies

**Wait time:** 1-2 minutes depending on internet speed

### Step 3: Start Development Server
```bash
npm run dev
```

The app will automatically open in your browser at:
```
http://localhost:3000
```

---

## 🖥️ Alternative: Use the Batch File (Windows Only)

### Even Easier Method
Simply **double-click** the `start-app.bat` file!

This will:
1. Check if dependencies are installed
2. Install them if needed
3. Start the development server
4. Open your browser automatically

---

## ✅ Verification

### You'll know it's working when you see:

```
  VITE v5.1.4  ready in 500 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

### Test the Application

Visit these routes to verify everything works:

1. **Landing Page:** http://localhost:3000/
   - Should see hero section and AI tools

2. **Features Page:** http://localhost:3000/features
   - Should see creative tools and developer features

3. **Pricing Page:** http://localhost:3000/pricing
   - Should see three pricing tiers and FAQ

4. **Partners Page:** http://localhost:3000/partners
   - Should see application form

---

## 🛠️ Troubleshooting

### Problem: "npm is not recognized"
**Solution:** Install Node.js from https://nodejs.org/

### Problem: Port 3000 is already in use
**Solution:** Vite will automatically use next available port (3001, 3002, etc.)

### Problem: Dependencies fail to install
**Solution 1:** Clear cache and retry
```bash
npm cache clean --force
npm install
```

**Solution 2:** Delete node_modules and retry
```bash
rmdir /s node_modules
del package-lock.json
npm install
```

### Problem: Browser doesn't open automatically
**Solution:** Manually open browser and go to http://localhost:3000

### Problem: CSS not loading / Tailwind errors
**Solution:** Restart dev server
```bash
# Press Ctrl+C to stop
npm run dev
```

---

## 📦 What Gets Installed

When you run `npm install`, you get:

### Production Dependencies (~10MB)
- react (UI library)
- react-dom (React renderer)
- react-router-dom (Routing)

### Development Dependencies (~200MB)
- vite (Build tool)
- @vitejs/plugin-react (React support for Vite)
- tailwindcss (CSS framework)
- autoprefixer (CSS compatibility)
- postcss (CSS processor)

**Total size:** ~210MB

---

## 🔧 Available Commands

After installation, you can use:

### Development Server
```bash
npm run dev
```
- Starts dev server with hot reload
- Changes reflect immediately
- Default port: 3000

### Production Build
```bash
npm run build
```
- Creates optimized build in `dist/` folder
- Minifies code
- Ready for deployment

### Preview Production Build
```bash
npm run preview
```
- Preview the production build locally
- Tests optimized version

---

## 📁 After Installation

Your folder structure will include:

```
react-app/
├── node_modules/          # ✅ Installed packages (created)
├── dist/                  # (created after npm run build)
├── src/                   # ✅ Your source code (already exists)
├── package.json           # ✅ Dependencies list
├── package-lock.json      # ✅ Locked versions (created)
└── ...other files
```

---

## 🌐 Browser Requirements

### Recommended Browsers
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Mobile Browsers
- ✅ Chrome Mobile
- ✅ Safari iOS
- ✅ Samsung Internet

---

## 🎯 First Time Setup Checklist

- [ ] Node.js installed (v18 or higher)
- [ ] Navigated to react-app directory
- [ ] Ran `npm install`
- [ ] Saw successful installation message
- [ ] Ran `npm run dev`
- [ ] Browser opened to localhost:3000
- [ ] Can see landing page
- [ ] Navigation works (test all 4 pages)
- [ ] Forms are interactive

---

## 💡 Development Tips

### Auto-Reload
- Save any file in `src/`
- Browser automatically refreshes
- No manual reload needed

### Stop Server
- Press `Ctrl + C` in terminal
- Confirm with `Y` if asked

### Restart Server
```bash
npm run dev
```

### View Console
- Open browser DevTools (F12)
- Check for any errors
- Form submissions log here

---

## 🚀 Ready to Develop!

Once installation is complete, you can:

1. ✅ Edit components in `src/components/`
2. ✅ Modify pages in `src/pages/`
3. ✅ Update styles in component files
4. ✅ Change colors in `tailwind.config.js`
5. ✅ Add new routes in `src/App.jsx`

All changes appear instantly in the browser! 🎨

---

## 📞 Need Help?

1. Check console for error messages
2. Read `README.md` for detailed docs
3. Review `QUICKSTART.md` for quick reference
4. Check `PROJECT_SUMMARY.md` for overview

---

**Happy Coding! 🎉**

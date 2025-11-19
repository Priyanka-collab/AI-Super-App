# Configuration Quick Reference

## 🎯 What Changed?

```
BEFORE (Not Working):
┌─────────────────────────────────────────────┐
│ React App                                   │
│  ↓ Calls /api/enhance-photo (doesn't exist)│
│  ✗ FAILED - Endpoint doesn't exist          │
└─────────────────────────────────────────────┘

AFTER (Now Working):
┌─────────────────────────────────────────────┐
│ React App                                   │
│  ↓ Calls /api/segmind (proxy endpoint)     │
│  ↓ Backend forwards to Segmind API         │
│  ↓ nano-banana model processes image       │
│  ↓ Enhanced photo returned                 │
│  ✓ SUCCESS - Professional photo generated  │
└─────────────────────────────────────────────┘
```

## 🔧 One-Time Setup (5 Minutes)

### Step 1: Create .env file
```bash
cd passport-photo-generator
cp .env.example .env
```

### Step 2: Add your API key
Open `.env` and fill in:
```
SEGMIND_API_KEY=YOUR_KEY_HERE
GOOGLE_CLIENT_ID=YOUR_ID_HERE
GOOGLE_CLIENT_SECRET=YOUR_SECRET_HERE
SESSION_SECRET=any_random_string_here
```

### Step 3: Start server
```bash
npm install
npm start
```

**That's it!** Server ready at `http://localhost:3001`

## 📡 How Data Flows

```
User Photo Upload
       ↓
Is it a valid face? → No → Error "No face detected"
       ↓ Yes
Encode as Base64
       ↓
Send to /api/segmind
       ↓
  [Backend Proxy]
       ↓
Check: User logged in? → No → Error "Authentication required"
       ↓ Yes
Check: API Key set? → No → Error "SEGMIND_API_KEY not set"
       ↓ Yes
Send to https://api.segmind.com/v1/nano-banana
  + Bearer Token: SEGMIND_API_KEY
  + Prompt: "Professional passport photo"
       ↓
  [Segmind AI - nano-banana model]
       ↓
  Processing... (10-30 seconds)
       ↓
Return: Enhanced image (base64)
       ↓
[Backend Proxy]
       ↓
Send back to React App
       ↓
Crop to 600x800px
       ↓
Display preview
       ↓
Download button ready
```

## 🔑 What Each Config Variable Does

| Variable | Used For | Example |
|----------|----------|---------|
| `SEGMIND_API_URL` | Where to send requests | `https://api.segmind.com/v1/nano-banana` |
| `SEGMIND_API_KEY` | API authentication | `sk-1234567890abcdef` |
| `GOOGLE_CLIENT_ID` | Google login | `123456789.apps.googleusercontent.com` |
| `GOOGLE_CLIENT_SECRET` | Google login | `GOCSPX-xxxxxxxxxxx` |
| `SESSION_SECRET` | Encrypt sessions | `my_super_secret_123` |
| `NODE_ENV` | Environment mode | `development` or `production` |
| `PORT` | Server port | `3001` |

## 📊 Model Information: nano-banana

```
Model: nano-banana
├─ Purpose: Fast image generation/editing
├─ Speed: 10-30 seconds per image
├─ Max Input: 1200x1600 pixels
├─ Max Output: 1200x1600 pixels
├─ Format: PNG (base64)
├─ Quality: Professional grade
└─ Cost: Pay as you go (check Segmind pricing)
```

## ✅ Testing: Before & After

### ✗ Before (Original Code)
```
Upload photo → Click Generate → Error!
Browser console: "404 Not Found - /api/enhance-photo"
Result: Nothing happens
```

### ✓ After (With Integration)
```
Upload photo → Click Generate → Processing...
10-30 seconds later → Enhanced photo appears
Shows: Professional attire, proper pose, white background
Result: Download enhanced passport photo
```

## 🚨 Common Errors & Fixes

```
Error: "SEGMIND_API_KEY not set in environment variables"
Fix:   1. Check .env file exists
       2. Check SEGMIND_API_KEY=xxx is in the file
       3. Restart server after adding key

Error: "Authentication required"
Fix:   1. Click Google login button
       2. Complete OAuth flow
       3. Try again

Error: Image processing very slow (>60 seconds)
Fix:   1. Normal is 10-30 seconds
       2. Check internet connection
       3. Check API key has credits at segmind.com

Error: "No face detected"
Fix:   1. Use a clear photo of a face
       2. Face should be clearly visible
       3. Try another photo

Error: "CORS error" or "blocked by proxy"
Fix:   1. Ensure server running on port 3001
       2. Ensure React app on http://localhost:5173
       3. Check server hasn't crashed
```

## 🎬 Step-by-Step Test Run

```
1. Terminal 1:
   cd passport-photo-generator
   npm start
   → Should see: "listening on 3001" ✓

2. Terminal 2:
   cd ../react-app
   npm run dev
   → Should see: "http://localhost:5173" ✓

3. Browser:
   Open http://localhost:5173 ✓
   Navigate to "AI Passport Photo" ✓
   
4. Click "Select Photo" ✓
   
5. Choose a clear face photo ✓
   
6. Click "Generate Passport Photo" ✓
   
7. Wait 10-30 seconds for processing ✓
   
8. See result: Professional photo ✓
   
9. Click "Download Photo" ✓
   
10. Check Downloads folder for "passport-photo.png" ✓

Success! Integration working! 🎉
```

## 🔍 How to Debug

**Check Server is Running**:
```bash
curl http://localhost:3001/api/health
# Should return: {"ok": true, "hasKey": true, ...}
```

**Check API Key is Set**:
```bash
curl http://localhost:3001/api/health | grep hasKey
# Should show: "hasKey": true
```

**Monitor Server Logs**:
```
Keep terminal window open where you ran: npm start
You'll see:
  - "Using Segmind API endpoint: ..."
  - "API Key present: true"
  - Request/response logs
```

**Monitor Browser Logs** (F12 → Console):
```
- "Calling Segmind proxy API..."
- "✓ AI enhancement successful"
- "✓ Passport photo generated successfully"
```

## 📦 Installation Summary

```bash
# Clone/navigate to project
cd AISuperapp

# Setup backend
cd passport-photo-generator
cp .env.example .env
# Edit .env with your API key
npm install

# Setup frontend (in another terminal)
cd ../react-app
npm install
npm run dev

# Verify both running:
# Terminal 1: Proxy server on 3001 ✓
# Terminal 2: React app on 5173 ✓
# Browser: http://localhost:5173 ✓

# You're ready! Upload a photo and test
```

## 🎯 Success Indicators

✅ You know it's working when you see:

1. **Console Message**: "Using Segmind API endpoint: https://api.segmind.com/v1/nano-banana"
2. **API Key Log**: "API Key present: true"
3. **Processing**: Photo takes 10-30 seconds
4. **Result**: Enhanced photo looks professional (not just cropped)
5. **Download**: File downloads successfully
6. **Quality**: Photo has:
   - Professional attire
   - Front-facing pose
   - Visible shoulders
   - White background
   - Good lighting

## 🆘 Need Help?

Check these files in order:
1. `SETUP.md` - Setup instructions
2. `IMPLEMENTATION_CHECKLIST.md` - Step-by-step guide
3. `API_CONFIGURATION.md` - Configuration details
4. `INTEGRATION_SUMMARY.md` - Complete overview

Or visit:
- Segmind Docs: https://segmind.com/docs
- Model Info: https://segmind.com/models/nano-banana
- API Reference: https://segmind.com/api-reference

---

**Configuration Status**: ✅ Ready to Use
**API Endpoint**: https://api.segmind.com/v1/nano-banana
**Model**: nano-banana
**Last Updated**: November 13, 2025

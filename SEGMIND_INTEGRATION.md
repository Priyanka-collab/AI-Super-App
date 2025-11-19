# Segmind API Integration - Passport Photo Generator

## Overview
Successfully integrated Segmind API to enhance passport photos instead of just cropping them. The system now calls the Segmind AI API to transform photos into professional passport photos with proper attire, pose, and lighting.

## Architecture

### Components
1. **React App** (`react-app/`) - Frontend interface for uploading photos
2. **Passport Photo Generator** (`passport-photo-generator/`) - Backend proxy server
3. **Segmind API** - External AI service for image enhancement

### Flow
```
User Upload (React App)
    ↓
User clicks "Generate Passport Photo"
    ↓
PassportPhotoPage.jsx calls generatePassportPhotoWithAI()
    ↓
passportHelper.js (React app):
  1. Loads face-api models for face detection
  2. Calls enhanceWithAI() to transform photo with Segmind
  3. Segmind proxy authenticates the request
  4. Segmind API processes the image and returns enhanced version
  5. Crops and formats the result to passport size (600x800px)
    ↓
Result displayed with download option
```

## Key Changes

### 1. **Updated `react-app/src/utils/passportHelper.js`**

#### Changed `enhanceWithAI()` function:
- **Before**: Called a non-existent `/api/enhance-photo` endpoint
- **After**: Now calls `/api/segmind` (the actual proxy endpoint)

#### New Segmind API Integration:
```javascript
fetch('/api/segmind', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include', // For authentication
  body: JSON.stringify({
    model: 'qwen-image-edit-plus',
    init_images: [base64Image],
    prompt: fullPrompt,
    negative_prompt: '...',
    width: 1200,
    height: 1600
  })
})
```

#### Key Features:
- **Smart Prompting**: Uses a detailed system prompt that instructs the AI to:
  - Convert image to professional portrait
  - Preserve subject identity
  - Apply professional attire (dark blazer, collared shirt)
  - Ensure front-facing pose with visible shoulders
  - Use neutral expression
  - Create white studio background
  - Apply professional lighting

- **User Customization**: Users can provide additional instructions (e.g., "blue background", "female attire", etc.)

- **Negative Prompting**: Explicitly tells the AI to avoid undesirable elements like sunglasses, hats, poor lighting, etc.

- **Error Handling**: 
  - Graceful fallback if Segmind fails (uses original image)
  - Clear error messages for authentication issues
  - Detailed logging for debugging

- **Response Parsing**: Extracts image from various response formats that Segmind might return

### 2. **Improved `generatePassportPhotoWithAI()` function:**
- Better resource cleanup (revokes temporary URLs)
- Improved error handling with graceful degradation
- Better logging for debugging the complete flow

## How It Works

### Step 1: Face Detection (Client-side)
Uses `face-api.js` to:
- Detect face location and landmarks
- Ensure face is visible in the image
- Determine proper crop boundaries

### Step 2: AI Enhancement (Server-side via Proxy)
The proxy server at `/api/segmind` handles:
1. **Authentication**: Requires user to be logged in (Google OAuth)
2. **API Communication**: Forwards request to Segmind API with proper authentication
3. **Image Processing**: Segmind AI applies:
   - Professional pose correction (frontalization)
   - Attire replacement (professional business wear)
   - Expression adjustment (neutral)
   - Background replacement (white studio)
   - Lighting enhancement

### Step 3: Crop & Format (Client-side)
- Crops enhanced image to passport standard (600x800px)
- Positions face in upper portion with shoulders visible
- Fills background with chosen color

## Technical Details

### Segmind API Configuration
- **Model**: `qwen-image-edit-plus` - Advanced image editing model
- **Input Dimensions**: 1200x1600 (higher for better quality)
- **Output Format**: Base64 encoded PNG
- **Authentication**: Bearer token (SEGMIND_API_KEY from environment)

### Backend Proxy (`passport-photo-generator/server/index.js`)
- Uses Express.js with CORS support
- Implements Google OAuth for user authentication
- Handles multiple payload formats for flexibility
- Automatic retries on failures
- Support for both JSON and multipart form data

### Environment Variables Needed
```
SEGMIND_API_KEY=<your-api-key>
SEGMIND_API_URL=https://api.segmind.com/v1/nano-banana
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
SESSION_SECRET=<random-secret>
```

## Error Handling & Fallback

The system is designed with graceful degradation:

1. **Segmind API Fails**: Falls back to using the original image without enhancement
2. **No Face Detected**: Returns error message suggesting better photo
3. **Authentication Issues**: Clear message to user to log in
4. **Network Issues**: Automatic retries with exponential backoff

## Performance Optimization

- **Image Size**: 1200x1600 input for quality while maintaining reasonable processing time
- **Caching**: Models loaded once and reused
- **Resource Cleanup**: Temporary object URLs properly revoked
- **Async Processing**: Non-blocking operations with proper promises

## Testing Checklist

To verify the integration is working:

1. ✅ Start the backend proxy server
2. ✅ Configure Segmind API credentials
3. ✅ Upload a test photo
4. ✅ Verify enhanced image is downloaded (not just cropped)
5. ✅ Check console logs for successful API calls
6. ✅ Test with custom user prompts
7. ✅ Test error scenarios (bad photo, network issues)

## Files Modified

- `react-app/src/utils/passportHelper.js` - Updated AI enhancement logic
- `passport-photo-generator/server/index.js` - Proxy server (already configured)
- `PassportPhotoPage.jsx` - UI for showing results (already integrated)

## Future Enhancements

Potential improvements:
- Add real-time preview of AI enhancements
- Support multiple background colors
- Add retouching options (skin smoothing, etc.)
- Batch processing for multiple photos
- Output multiple standard formats (passport, visa, etc.)

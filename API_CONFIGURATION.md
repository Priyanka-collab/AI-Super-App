# API Configuration Reference

## Segmind API Endpoint Update

### Changed Configuration
- **Old Endpoint**: `https://www.segmind.com/models/qwen-image-edit-plus` (model page, not API)
- **New Endpoint**: `https://api.segmind.com/v1/nano-banana` (actual API inference endpoint)

### What is nano-banana?
The **nano-banana** model is Segmind's lightweight yet powerful image generation model optimized for:
- Fast processing (~10-30 seconds per image)
- High quality output
- Image editing and enhancement
- Portrait generation and transformation

### Server Configuration (`passport-photo-generator/server/index.js`)

The proxy server now correctly:
1. Uses the correct API endpoint by default
2. Loads API key from environment variables
3. Validates the API key is set
4. Adds proper logging for debugging
5. Forwards authenticated requests to Segmind

### Environment File (.env)

```bash
# Primary - The actual inference API endpoint
SEGMIND_API_URL=https://api.segmind.com/v1/nano-banana

# Your Segmind API key (get from https://segmind.com)
SEGMIND_API_KEY=your_api_key_here
```

### API Request Flow

```
React App (PassportPhotoPage)
    ↓
    POST /api/segmind with image data
    ↓
Backend Proxy (server/index.js)
    ↓
    Validates authentication (Google OAuth)
    ↓
    Adds Bearer token with API key
    ↓
    Forwards to https://api.segmind.com/v1/nano-banana
    ↓
Segmind API
    ↓
    Processes image with nano-banana model
    ↓
    Returns enhanced image (base64)
    ↓
Backend Proxy
    ↓
    Converts to response format
    ↓
React App
    ↓
    Crops to passport size
    ↓
    Downloads result
```

### Request Body Sent to Segmind

```json
{
  "model": "nano-banana",
  "init_images": ["base64_encoded_input_image"],
  "prompt": "Convert to professional portrait with proper attire and lighting",
  "negative_prompt": "sunglasses, hat, low quality, blurry, deformed",
  "width": 1200,
  "height": 1600
}
```

### Response from Segmind

```json
{
  "images": ["data:image/png;base64,iVBORw0KGgoAAAANS..."]
}
```

## Quick Setup Steps

1. **Get Segmind API Key**:
   - Visit https://segmind.com
   - Create account and navigate to API section
   - Generate new API key

2. **Configure Backend**:
   ```bash
   cd passport-photo-generator
   cp .env.example .env
   # Edit .env and add your SEGMIND_API_KEY
   ```

3. **Start Server**:
   ```bash
   npm install
   npm start
   ```

4. **Test Integration**:
   - Upload a photo via React app
   - Click "Generate Passport Photo"
   - Monitor console for successful API call logs

## Files Updated

- ✅ `passport-photo-generator/server/index.js` - Updated default API endpoint
- ✅ `passport-photo-generator/.env.example` - Added correct configuration
- ✅ `react-app/src/utils/passportHelper.js` - Already correctly configured
- ✅ `SETUP.md` - Added setup guide

## Verification

Check these logs to verify proper configuration:

**Console Output (Server)**:
```
Using Segmind API endpoint: https://api.segmind.com/v1/nano-banana
API Key present: true
```

**Console Output (Browser)**:
```
AI Enhancement Prompt: Convert the input into a professional...
Calling Segmind proxy API...
✓ AI enhancement successful, blob size: 123456
✓ Passport photo generated successfully
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "SEGMIND_API_KEY not set" | Add key to `.env` file and restart server |
| "Authentication required" | Log in via Google OAuth |
| "Invalid API response" | Verify API key has credits/is active |
| Slow processing | Expected ~10-30 seconds for nano-banana |
| CORS errors | Check proxy server is running on correct port |

## Support Resources

- Segmind Docs: https://segmind.com/docs
- API Reference: https://segmind.com/api-reference
- Nano-banana Model: https://segmind.com/models/nano-banana

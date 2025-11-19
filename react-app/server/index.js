import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import fetch from 'node-fetch'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production'
    ? process.env.FRONTEND_URL
    : 'http://localhost:5173',
  credentials: true
}))
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true, limit: '50mb' }))

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' })
})

// Segmind API endpoint for passport photo enhancement
app.post('/api/enhance-photo', async (req, res) => {
  try {
    const { image, prompt, negative_prompt, width, height } = req.body

    if (!image) {
      return res.status(400).json({ error: 'Image is required' })
    }

    const SEGMIND_API_KEY = process.env.SEGMIND_API_KEY
    const SEGMIND_API_URL = process.env.SEGMIND_API_URL || 'https://api.segmind.com/v1/qwen2-vl-flux-img2img'

    if (!SEGMIND_API_KEY) {
      console.error('SEGMIND_API_KEY not configured')
      return res.status(500).json({ error: 'AI service not configured. Please add SEGMIND_API_KEY to .env file' })
    }

    console.log('Calling Segmind API for image enhancement...')
    console.log('Prompt:', prompt)

    // Prepare the request to Segmind
    const segmindPayload = {
      image: image,
      prompt: prompt,
      negative_prompt: negative_prompt || 'sunglasses, hat, cap, hood, poor lighting, blurry, low quality, side view, profile view, back view, casual clothing, inappropriate attire, multiple people, text, watermark',
      samples: 1,
      scheduler: 'UniPC',
      num_inference_steps: 30,
      guidance_scale: 7.5,
      strength: 0.85,
      seed: Math.floor(Math.random() * 1000000),
      img_width: width || 1024,
      img_height: height || 1024,
      base64: false
    }

    const response = await fetch(SEGMIND_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': SEGMIND_API_KEY
      },
      body: JSON.stringify(segmindPayload)
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Segmind API error:', response.status, errorText)
      return res.status(response.status).json({ 
        error: 'AI enhancement failed', 
        details: errorText 
      })
    }

    // Get the image buffer from Segmind
    const imageBuffer = await response.buffer()
    
    console.log('✓ Image enhanced successfully')

    // Send the enhanced image back
    res.set('Content-Type', 'image/png')
    res.send(imageBuffer)

  } catch (error) {
    console.error('Error in enhance-photo endpoint:', error)
    res.status(500).json({ 
      error: 'Internal server error', 
      message: error.message 
    })
  }
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`)
  console.log(`🔑 Segmind API configured: ${process.env.SEGMIND_API_KEY ? 'Yes' : 'No'}`)
})

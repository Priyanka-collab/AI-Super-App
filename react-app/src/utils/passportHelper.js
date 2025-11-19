import * as faceapi from 'face-api.js'

// Load face-api models from CDN
const MODEL_URL = 'https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights'

let modelsLoadedFlag = false

export async function loadModels() {
  if (modelsLoadedFlag) {
    console.log('Models already loaded')
    return true
  }
  
  try {
    console.log('Loading face-api models from:', MODEL_URL)
    await Promise.all([
      faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
      faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL)
    ])
    modelsLoadedFlag = true
    console.log('✓ Face-api models loaded successfully')
    return true
  } catch (err) {
    console.error('Failed to load face-api models:', err)
    modelsLoadedFlag = false
    throw new Error('Failed to load AI models. Please check your internet connection and try again.')
  }
}

/**
 * Generate passport photo from an image
 * @param {string} imageSrc - Image URL or data URL
 * @param {Object} options - Configuration options
 * @returns {Promise<{url: string, width: number, height: number}>}
 */
export async function generatePassportPhoto(
  imageSrc,
  {
    outputWidth = 600,
    outputHeight = 800,
    backgroundColor = '#ffffff',
    padding = 0.15
  } = {}
) {
  try {
    console.log('Starting passport photo generation...')
    
    // Ensure models are loaded
    if (!modelsLoadedFlag) {
      console.log('Models not loaded, loading now...')
      await loadModels()
    }
    
    // Load the image
    console.log('Loading image...')
    const img = await loadImage(imageSrc)
    console.log('Image loaded:', img.width, 'x', img.height)
    
    // Detect face
    console.log('Detecting face...')
    const detection = await faceapi
      .detectSingleFace(img)
      .withFaceLandmarks()
    
    if (!detection) {
      throw new Error('No face detected in the image. Please use a photo with a clear, visible face.')
    }
    
    console.log('Face detected successfully')
    const { box } = detection.detection
  
  // Calculate crop dimensions with padding
  const faceWidth = box.width
  const faceHeight = box.height
  const faceCenterX = box.x + faceWidth / 2
  const faceCenterY = box.y + faceHeight / 2
  
  // Passport photo aspect ratio is typically 3:4 (width:height)
  const aspectRatio = outputWidth / outputHeight
  
  // Add padding around face
  const paddedWidth = faceWidth * (1 + padding * 2)
  const paddedHeight = faceHeight * (1 + padding * 3) // More padding at top/bottom
  
  // Determine crop dimensions while maintaining aspect ratio
  let cropWidth, cropHeight
  if (paddedWidth / paddedHeight > aspectRatio) {
    cropWidth = paddedWidth
    cropHeight = cropWidth / aspectRatio
  } else {
    cropHeight = paddedHeight
    cropWidth = cropHeight * aspectRatio
  }
  
  // Calculate crop position (centered on face, but with face in upper portion)
  const cropX = Math.max(0, faceCenterX - cropWidth / 2)
  const cropY = Math.max(0, faceCenterY - cropHeight * 0.4) // Face in upper 40%
  
  // Ensure crop doesn't exceed image boundaries
  const adjustedCropX = Math.min(cropX, img.width - cropWidth)
  const adjustedCropY = Math.min(cropY, img.height - cropHeight)
  const adjustedCropWidth = Math.min(cropWidth, img.width - adjustedCropX)
  const adjustedCropHeight = Math.min(cropHeight, img.height - adjustedCropY)
  
  // Create output canvas
  const canvas = document.createElement('canvas')
  canvas.width = outputWidth
  canvas.height = outputHeight
  const ctx = canvas.getContext('2d')
  
  // Fill background
  ctx.fillStyle = backgroundColor
  ctx.fillRect(0, 0, outputWidth, outputHeight)
  
  // Draw cropped and scaled image
  ctx.drawImage(
    img,
    adjustedCropX,
    adjustedCropY,
    adjustedCropWidth,
    adjustedCropHeight,
    0,
    0,
    outputWidth,
    outputHeight
  )
  
  // Convert to blob and create URL
  console.log('Creating passport photo output...')
  const blob = await new Promise((resolve) => {
    canvas.toBlob(resolve, 'image/png')
  })
  
  const url = URL.createObjectURL(blob)
  console.log('✓ Passport photo generated successfully')
  
  return {
    url,
    width: outputWidth,
    height: outputHeight,
    blob
  }
  } catch (error) {
    console.error('Error generating passport photo:', error)
    throw new Error(error.message || 'Failed to generate passport photo. Please try again with a different image.')
  }
}

/**
 * Load an image from URL
 * @param {string} src - Image URL
 * @returns {Promise<HTMLImageElement>}
 */
function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

/**
 * Detect if face-api models are loaded
 * @returns {boolean}
 */
export function areModelsLoaded() {
  return modelsLoadedFlag
}

/**
 * Enhance photo with AI using Segmind API
 * @param {string} imageSrc - Source image URL
 * @param {string} userPrompt - Optional user prompt
 * @returns {Promise<Blob>}
 */
export async function enhanceWithAI(imageSrc, userPrompt = '') {
  try {
    // System prompt for professional passport photo
    const systemPrompt = 'Convert the input into a professional, frontal, head-and-shoulders portrait. Preserve the subject\'s identity and facial features while rotating and frontalizing the head so the subject faces the camera with neutral expression. Replace clothing with professional attire (a dark blazer and collared shirt), ensure visible shoulders, remove distracting accessories, and render a clean white studio background. Photorealistic, high detail, natural skin tones, realistic shadows and studio lighting.'
    
    const fullPrompt = userPrompt 
      ? `${systemPrompt} Additional requirements: ${userPrompt}` 
      : systemPrompt
    
    console.log('AI Enhancement Prompt:', fullPrompt)
    
    // Load the image to get base64
    const img = await loadImage(imageSrc)
    const canvas = document.createElement('canvas')
    canvas.width = img.width
    canvas.height = img.height
    const ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0)
    
    // Convert to base64 (remove data URI prefix)
    const base64Image = canvas.toDataURL('image/png').split(',')[1]
    
    // Call Segmind API through the proxy
    console.log('Calling Segmind proxy API...')
    const response = await fetch('/api/segmind', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Include cookies for authentication
      body: JSON.stringify({
        model: 'qwen-image-edit-plus',
        init_images: [base64Image],
        prompt: fullPrompt,
        negative_prompt: 'sunglasses, hat, cap, hood, poor lighting, blurry, low quality, side view, profile view, back view, casual clothing, multiple people, text, watermark, deformed, disfigured',
        width: 1200,
        height: 1600
      })
    })
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('Segmind API error:', errorData)
      
      if (response.status === 401) {
        throw new Error('Authentication required. Please make sure you are logged in.')
      }
      
      throw new Error(
        errorData?.error || 
        errorData?.detail || 
        `AI enhancement service error (${response.status})`
      )
    }
    
    const responseData = await response.json()
    console.log('Segmind API response received')
    
    // Extract image from response
    let imageBase64 = null
    if (responseData.images && Array.isArray(responseData.images) && responseData.images[0]) {
      imageBase64 = responseData.images[0]
    } else if (responseData.data) {
      imageBase64 = responseData.data
    }
    
    if (!imageBase64) {
      console.error('Unexpected Segmind response format:', responseData)
      throw new Error('Invalid response format from Segmind API')
    }
    
    // Convert base64 to blob
    // Handle data URI format if returned
    if (imageBase64.startsWith('data:')) {
      imageBase64 = imageBase64.split(',')[1]
    }
    
    const binaryString = atob(imageBase64)
    const bytes = new Uint8Array(binaryString.length)
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i)
    }
    
    const blob = new Blob([bytes], { type: 'image/png' })
    console.log('✓ AI enhancement successful, blob size:', blob.size)
    return blob
  } catch (error) {
    console.error('AI enhancement error:', error)
    throw error
  }
}

/**
 * Generate passport photo with AI enhancement
 * @param {string} imageSrc - Source image
 * @param {Object} options - Configuration
 * @returns {Promise<{url: string, width: number, height: number, blob: Blob}>}
 */
export async function generatePassportPhotoWithAI(
  imageSrc,
  {
    outputWidth = 600,
    outputHeight = 800,
    backgroundColor = '#ffffff',
    userPrompt = '',
    useAI = true
  } = {}
) {
  let enhancedImageUrl = null
  
  try {
    console.log('Starting AI-enhanced passport photo generation...')
    
    // Ensure models are loaded for face detection
    if (!modelsLoadedFlag) {
      await loadModels()
    }
    
    let processedImageSrc = imageSrc
    
    // Try AI enhancement first if enabled
    if (useAI) {
      try {
        console.log('Attempting AI enhancement with Segmind...')
        const enhancedBlob = await enhanceWithAI(imageSrc, userPrompt)
        enhancedImageUrl = URL.createObjectURL(enhancedBlob)
        processedImageSrc = enhancedImageUrl
        console.log('✓ AI enhancement successful')
      } catch (aiError) {
        console.warn('AI enhancement failed, using original image:', aiError.message)
        // Continue with original image - don't fail completely
      }
    }
    
    // Now crop and format the (possibly enhanced) image
    const result = await generatePassportPhoto(processedImageSrc, {
      outputWidth,
      outputHeight,
      backgroundColor
    })
    
    // Clean up temporary URL if we created one
    if (enhancedImageUrl) {
      URL.revokeObjectURL(enhancedImageUrl)
    }
    
    return result
  } catch (error) {
    // Clean up if needed
    if (enhancedImageUrl) {
      URL.revokeObjectURL(enhancedImageUrl)
    }
    
    console.error('Error in AI-enhanced passport photo generation:', error)
    throw error
  }
}

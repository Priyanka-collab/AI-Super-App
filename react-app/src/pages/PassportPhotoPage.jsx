import { useRef, useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { generatePassportPhotoWithAI, loadModels } from '../utils/passportHelper'

const PassportPhotoPage = () => {
  const [src, setSrc] = useState(null)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [modelsLoaded, setModelsLoaded] = useState(false)
  const [error, setError] = useState(null)
  const [userPrompt, setUserPrompt] = useState('')
  const fileRef = useRef()

  useEffect(() => {
    // Load face-api models
    console.log('Initializing AI models...')
    loadModels()
      .then(() => {
        setModelsLoaded(true)
        console.log('AI models ready')
      })
      .catch(err => {
        console.error('Failed to load AI models:', err)
        setError('Failed to load AI models. Please refresh the page and check your internet connection.')
      })

    // Cleanup on unmount: revoke object URLs
    return () => {
      if (src) URL.revokeObjectURL(src)
      if (result?.url) URL.revokeObjectURL(result.url)
    }
  }, [src, result])

  async function onFile(e) {
    const file = e.target.files?.[0]
    if (!file) return
    
    // Revoke previous urls
    if (src) URL.revokeObjectURL(src)
    if (result?.url) {
      URL.revokeObjectURL(result.url)
      setResult(null)
    }
    
    const url = URL.createObjectURL(file)
    setSrc(url)
  }

  async function onGenerate() {
    if (!src) return
    if (!modelsLoaded) {
      setError('AI models are still loading. Please wait a moment and try again.')
      return
    }

    setLoading(true)
    setError(null)
    
    try {
      // Revoke previous result url if present
      if (result?.url) URL.revokeObjectURL(result.url)
      
      // Generate passport photo with AI enhancement
      const res = await generatePassportPhotoWithAI(src, {
        outputWidth: 600,
        outputHeight: 800,
        backgroundColor: '#ffffff',
        userPrompt: userPrompt.trim(),
        useAI: true
      })
      
      setResult(res)
      setError(null)
    } catch (error) {
      console.error('Failed to generate passport photo:', error)
      setError(error.message || 'Failed to generate passport photo. Please try with a different photo showing a clear face.')
    } finally {
      setLoading(false)
    }
  }

  function onDownload() {
    if (!result) return
    const link = document.createElement('a')
    link.href = result.url
    link.download = 'passport-photo.png'
    link.click()
  }

  function onReset() {
    if (src) URL.revokeObjectURL(src)
    if (result?.url) URL.revokeObjectURL(result.url)
    setSrc(null)
    setResult(null)
    if (fileRef.current) fileRef.current.value = ''
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <Header />
            
            {/* Page Content */}
            <div className="flex flex-col gap-6 px-4 py-8">
              {/* Header */}
              <div className="flex flex-col gap-3">
                <h1 className="text-gray-900 dark:text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">
                  AI Passport Photo Generator
                </h1>
                <p className="text-gray-600 dark:text-[#96c5a8] text-base leading-relaxed">
                  Transform any photo into a professional passport photo. Our AI automatically applies professional attire, ensures proper front-facing pose with visible shoulders, adds neutral expression, and formats to standard passport size.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex gap-3 items-start p-4 rounded-lg border border-gray-200 dark:border-[#366347] bg-white dark:bg-[#1b3124]">
                  <span className="material-symbols-outlined text-primary text-2xl">face</span>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-bold text-sm">Face Detection</h3>
                    <p className="text-gray-600 dark:text-[#96c5a8] text-xs">AI-powered face detection and alignment</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start p-4 rounded-lg border border-gray-200 dark:border-[#366347] bg-white dark:bg-[#1b3124]">
                  <span className="material-symbols-outlined text-primary text-2xl">crop</span>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-bold text-sm">Auto Crop</h3>
                    <p className="text-gray-600 dark:text-[#96c5a8] text-xs">Automatically cropped to passport standards</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start p-4 rounded-lg border border-gray-200 dark:border-[#366347] bg-white dark:bg-[#1b3124]">
                  <span className="material-symbols-outlined text-primary text-2xl">download</span>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-bold text-sm">Instant Download</h3>
                    <p className="text-gray-600 dark:text-[#96c5a8] text-xs">Download your photo in passport size (600x800px)</p>
                  </div>
                </div>
              </div>

              {/* Main Tool */}
              <div className="flex flex-col gap-6 mt-4">
                {/* Error Message */}
              {error && (
                <div className="flex items-start gap-3 p-4 bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-600 rounded-lg">
                  <span className="material-symbols-outlined text-red-600 dark:text-red-400 text-2xl">error</span>
                  <div className="flex-1">
                    <p className="text-red-800 dark:text-red-300 font-medium text-sm">{error}</p>
                  </div>
                  <button 
                    onClick={() => setError(null)}
                    className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200"
                  >
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
              )}

              {/* Upload Section */}
                {!src && (
                  <div className="flex flex-col gap-4 items-center justify-center p-12 border-2 border-dashed border-gray-300 dark:border-[#366347] rounded-xl bg-white dark:bg-[#1b3124]">
                    <span className="material-symbols-outlined text-primary text-6xl">upload_file</span>
                    <div className="text-center">
                      <h3 className="text-gray-900 dark:text-white text-xl font-bold mb-2">Upload Your Photo</h3>
                      <p className="text-gray-600 dark:text-[#96c5a8] text-sm mb-4">
                        {modelsLoaded ? 'Choose a clear selfie or portrait photo' : 'Loading AI models... Please wait'}
                      </p>
                      <input
                        ref={fileRef}
                        type="file"
                        accept="image/*"
                        onChange={onFile}
                        className="hidden"
                        id="photo-upload"
                      />
                      <label
                        htmlFor="photo-upload"
                        className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-bold rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                      >
                        <span className="material-symbols-outlined mr-2">photo_camera</span>
                        Select Photo
                      </label>
                    </div>
                  </div>
                )}

                {/* Preview and Generate Section */}
                {src && !result && (
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Original Photo */}
                      <div className="flex-1 flex flex-col gap-3">
                        <h3 className="text-gray-900 dark:text-white font-bold text-lg">Your Photo</h3>
                        <div className="border border-gray-200 dark:border-[#366347] rounded-lg overflow-hidden bg-white dark:bg-[#1b3124] p-4">
                          <img
                            src={src}
                            alt="Original"
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                      </div>
                    </div>

                    {/* AI Enhancement Options */}
                    <div className="flex flex-col gap-4 p-6 rounded-lg border border-gray-200 dark:border-[#366347] bg-white dark:bg-[#1b3124]">
                      <div className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary text-2xl">auto_awesome</span>
                        <div className="flex-1">
                          <h3 className="text-gray-900 dark:text-white font-bold text-base mb-2">AI Enhancement</h3>
                          <p className="text-gray-600 dark:text-[#96c5a8] text-sm mb-3">
                            Our AI will automatically transform your photo to professional passport standards with proper attire and pose.
                          </p>
                          <div className="flex flex-col gap-2">
                            <label htmlFor="user-prompt" className="text-gray-900 dark:text-white text-sm font-medium">
                              Custom Instructions (Optional)
                            </label>
                            <textarea
                              id="user-prompt"
                              value={userPrompt}
                              onChange={(e) => setUserPrompt(e.target.value)}
                              placeholder="e.g., 'blue background', 'female attire', 'eyeglasses', etc."
                              rows={3}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#366347] bg-white dark:bg-[#0d1912] text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-[#96c5a8] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                            />
                            <p className="text-gray-500 dark:text-[#96c5a8] text-xs">
                              💡 System will automatically apply: professional attire, front-facing pose, shoulders visible, neutral expression, white background
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 justify-center">
                      <button
                        onClick={onGenerate}
                        disabled={loading || !modelsLoaded}
                        className="flex items-center justify-center px-8 py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <span className="material-symbols-outlined animate-spin mr-2">refresh</span>
                            Processing...
                          </>
                        ) : !modelsLoaded ? (
                          <>
                            <span className="material-symbols-outlined animate-spin mr-2">refresh</span>
                            Loading AI...
                          </>
                        ) : (
                          <>
                            <span className="material-symbols-outlined mr-2">auto_fix_high</span>
                            Generate Passport Photo
                          </>
                        )}
                      </button>
                      <button
                        onClick={onReset}
                        disabled={loading}
                        className="flex items-center justify-center px-6 py-3 bg-gray-300 dark:bg-[#264532] text-gray-900 dark:text-white font-bold rounded-lg hover:bg-gray-400 dark:hover:bg-[#2d5339] transition-colors disabled:opacity-50"
                      >
                        <span className="material-symbols-outlined mr-2">close</span>
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                {/* Result Section */}
                {result && (
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Original Photo */}
                      <div className="flex-1 flex flex-col gap-3">
                        <h3 className="text-gray-900 dark:text-white font-bold text-lg">Original</h3>
                        <div className="border border-gray-200 dark:border-[#366347] rounded-lg overflow-hidden bg-white dark:bg-[#1b3124] p-4">
                          <img
                            src={src}
                            alt="Original"
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                      </div>

                      {/* Passport Photo */}
                      <div className="flex-1 flex flex-col gap-3">
                        <h3 className="text-gray-900 dark:text-white font-bold text-lg">
                          Passport Photo
                          <span className="ml-2 text-sm font-normal text-gray-600 dark:text-[#96c5a8]">
                            (600×800px)
                          </span>
                        </h3>
                        <div className="border-2 border-primary rounded-lg overflow-hidden bg-white dark:bg-[#1b3124] p-4">
                          <img
                            src={result.url}
                            alt="Passport Photo"
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Success Message */}
                    <div className="flex items-center gap-3 p-4 bg-primary/10 border border-primary rounded-lg">
                      <span className="material-symbols-outlined text-primary text-2xl">check_circle</span>
                      <p className="text-gray-900 dark:text-white font-medium">
                        Your passport photo is ready! Download it or create another one.
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 justify-center">
                      <button
                        onClick={onDownload}
                        className="flex items-center justify-center px-8 py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
                      >
                        <span className="material-symbols-outlined mr-2">download</span>
                        Download Photo
                      </button>
                      <button
                        onClick={onReset}
                        className="flex items-center justify-center px-6 py-3 bg-gray-300 dark:bg-[#264532] text-gray-900 dark:text-white font-bold rounded-lg hover:bg-gray-400 dark:hover:bg-[#2d5339] transition-colors"
                      >
                        <span className="material-symbols-outlined mr-2">restart_alt</span>
                        Create Another
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Instructions */}
              <div className="mt-6 p-6 rounded-lg border border-gray-200 dark:border-[#366347] bg-white dark:bg-[#1b3124]">
                <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Tips for Best Results</h3>
                <ul className="space-y-2 text-gray-700 dark:text-[#96c5a8] text-sm">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">check</span>
                    <span>Use a photo with good lighting and a clear, visible face</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">check</span>
                    <span>Face the camera directly with a neutral expression</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">check</span>
                    <span>Avoid sunglasses, hats, or anything covering your face</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">check</span>
                    <span>Ensure your face is centered in the frame</span>
                  </li>
                </ul>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PassportPhotoPage

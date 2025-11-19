import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FeatureCard from '../components/FeatureCard'
import { GOOGLE_FORM_URL } from '../config/formConfig'

const LandingPage = () => {
  const features = [
    {
      icon: 'photo_camera',
      title: 'AI Passport Photo',
      description: 'Automates cropping, background removal, and formatting for official photos.',
      link: GOOGLE_FORM_URL,
      isExternal: true
    },
    {
      icon: 'auto_stories',
      title: 'AI Storybook Creator',
      description: 'Generate beautifully illustrated stories from simple text prompts in minutes.',
      link: GOOGLE_FORM_URL,
      isExternal: true
    },
    {
      icon: 'movie_edit',
      title: 'AI Video Editor',
      description: 'Smart editing with automatic scene detection, captioning, and effects.',
      link: GOOGLE_FORM_URL,
      isExternal: true
    }
  ]

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <Header />
            
            {/* Hero Section */}
            <div className="@container">
              <div className="flex flex-col gap-6 px-4 py-8 md:py-12 lg:flex-row-reverse">
                <div 
                  className="flex-1 w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl lg:aspect-auto" 
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=800&fit=crop")'
                  }}
                  aria-label="Abstract gradient representing AI creativity"
                ></div>
                <div className="flex flex-1 flex-col gap-6 lg:justify-center">
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl">
                      Your Complete AI Creative Suite.
                    </h1>
                    <h2 className="text-gray-600 dark:text-[#96c5a8] text-sm font-normal leading-normal sm:text-base">
                      Create, edit, and design with the power of artificial intelligence, all in one place.
                    </h2>
                    <h2 className="text-gray-600 dark:text-[#96c5a8] text-sm font-normal leading-normal sm:text-base">
                      I’m excited to introduce Super App, an upcoming all-in-one platform designed to simplify daily tasks with intuitive, AI-powered features.
I’m opening a waitlist to understand user interest and invite early adopters for testing and feedback.
If you’d like to explore the app before launch, join the waitlist!
                    </h2>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 sm:h-12 sm:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] sm:text-base">
                    <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="truncate">
                      Join the Waitlist
                    </a>
                  </button>
                </div>
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="@container">
              <div className="flex flex-col gap-6 px-4 py-8 md:py-10">
                <h2 className="text-gray-900 dark:text-white text-2xl sm:text-3xl font-bold leading-tight text-center">
                  What Our Users Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Testimonial 1 */}
                  <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-[#366347] bg-white dark:bg-[#1b3124] p-6">
                    <div className="flex gap-1 text-primary">
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                    </div>
                    <p className="text-gray-700 dark:text-[#96c5a8] text-sm leading-normal">
                      "SuperApp has completely transformed my content creation workflow. The AI tools are incredibly intuitive and save me hours every week. Absolutely game-changing!"
                    </p>
                    <div className="flex flex-col">
                      <p className="text-gray-900 dark:text-white font-bold text-sm">Sarah Chen</p>
                      <p className="text-gray-600 dark:text-[#96c5a8] text-xs">Content Creator</p>
                    </div>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-[#366347] bg-white dark:bg-[#1b3124] p-6">
                    <div className="flex gap-1 text-primary">
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                    </div>
                    <p className="text-gray-700 dark:text-[#96c5a8] text-sm leading-normal">
                      "As a developer, I love the API access and flexibility. The documentation is excellent and the platform is incredibly stable. Best AI suite I've used!"
                    </p>
                    <div className="flex flex-col">
                      <p className="text-gray-900 dark:text-white font-bold text-sm">Michael Rodriguez</p>
                      <p className="text-gray-600 dark:text-[#96c5a8] text-xs">Software Engineer</p>
                    </div>
                  </div>

                  {/* Testimonial 3 */}
                  <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-[#366347] bg-white dark:bg-[#1b3124] p-6">
                    <div className="flex gap-1 text-primary">
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                      <span className="material-symbols-outlined">star</span>
                    </div>
                    <p className="text-gray-700 dark:text-[#96c5a8] text-sm leading-normal">
                      "The video editing and image generation tools are phenomenal. I've been able to scale my business without hiring additional team members. Highly recommend!"
                    </p>
                    <div className="flex flex-col">
                      <p className="text-gray-900 dark:text-white font-bold text-sm">Emma Thompson</p>
                      <p className="text-gray-600 dark:text-[#96c5a8] text-xs">Marketing Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="flex flex-col gap-6 px-4 py-8 md:py-10 @container">
              <div className="flex flex-col gap-4 text-center items-center">
                <h1 className="text-gray-900 dark:text-white tracking-light text-[32px] font-bold leading-tight sm:text-4xl sm:font-black sm:tracking-[-0.033em] max-w-[720px]">
                  Explore Our Powerful AI Tools
                </h1>
                <p className="text-gray-600 dark:text-[#96c5a8] text-base font-normal leading-normal max-w-[720px]">
                  Everything you need to bring your creative ideas to life, powered by advanced AI.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-0">
                {features.map((feature, index) => (
                  <FeatureCard 
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    variant="landing"
                    link={feature.link}
                    isExternal={feature.isExternal}
                  />
                ))}
              </div>
            </div>

            {/* Partner CTA Section */}
            <div className="bg-gray-100 dark:bg-[#1b3124] border-y border-gray-200 dark:border-[#366347]">
              <div className="@container">
                <div className="flex flex-col items-center justify-center gap-4 px-4 py-8 text-center md:py-10 sm:gap-6">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-gray-900 dark:text-white tracking-light text-[32px] font-bold leading-tight sm:text-4xl sm:font-black sm:tracking-[-0.033em] max-w-[720px]">
                      Join Our Platform & Monetize Your AI App
                    </h1>
                    <p className="text-gray-600 dark:text-[#96c5a8] text-base font-normal leading-normal max-w-[720px]">
                      Integrate your AI-powered applications with our platform to reach a wider audience, gain valuable user feedback, and create new revenue streams.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 sm:h-12 sm:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] sm:text-base grow">
                        <span className="truncate">Become a Partner</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage

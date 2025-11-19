import Header from '../components/Header'
import Footer from '../components/Footer'
import FeatureCard from '../components/FeatureCard'

const FeaturesPage = () => {
  const creativeTools = [
    {
      icon: 'badge',
      title: 'AI Passport Photo Generator',
      description: 'Instantly create compliant passport photos from any selfie with automatic background removal, compliance checks, and support for multiple country formats.'
    },
    {
      icon: 'auto_stories',
      title: 'AI Storybook Creator',
      description: 'Generate beautifully illustrated children\'s stories from a simple prompt. Choose your art style and enjoy consistent characters throughout your tale.'
    },
    {
      icon: 'movie_edit',
      title: 'Intelligent Video Editor',
      description: 'Effortlessly edit videos with AI-powered tools like auto-captions, smart trimming, and scene detection to create professional-quality content in minutes.'
    }
  ]

  const developerTools = [
    {
      icon: 'monetization_on',
      title: 'Monetization',
      description: 'Easily integrate monetization models into your applications and start earning from your creations.'
    },
    {
      icon: 'api',
      title: 'Robust API Access',
      description: 'Leverage our powerful and well-documented APIs to build innovative AI-driven features and services.'
    },
    {
      icon: 'groups',
      title: 'Audience Reach',
      description: 'Tap into our rapidly growing user base and showcase your tools to a global audience.'
    }
  ]

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-dark text-white overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <Header />
            
            {/* Page Heading */}
            <div className="flex flex-wrap justify-between gap-3 p-4 py-8 text-center sm:text-left">
              <div className="flex w-full flex-col items-center gap-3">
                <p className="text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">Features</p>
                <p className="text-[#96c5a8] text-base font-normal leading-normal max-w-xl">
                  Explore the powerful creative tools and developer platform of our AI Super App.
                </p>
              </div>
            </div>

            {/* Creative Tools Section */}
            <div className="flex flex-col gap-6 px-4 py-6 @container">
              <div className="flex flex-col gap-4">
                <h1 className="text-white tracking-light text-3xl font-bold leading-tight sm:text-4xl sm:font-black sm:tracking-[-0.033em] max-w-[720px]">
                  Creative Tools for Everyone
                </h1>
                <p className="text-[#96c5a8] text-base font-normal leading-normal max-w-[720px]">
                  Unleash your creativity with our suite of AI-powered tools. Designed for simplicity, built for power.
                </p>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
                {creativeTools.map((tool, index) => (
                  <FeatureCard
                    key={index}
                    icon={tool.icon}
                    title={tool.title}
                    description={tool.description}
                  />
                ))}
              </div>
            </div>

            {/* Developer Tools Section */}
            <div className="flex flex-col gap-6 px-4 py-6 @container">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <h1 className="text-white tracking-light text-3xl font-bold leading-tight sm:text-4xl sm:font-black sm:tracking-[-0.033em] max-w-[720px]">
                    For Our Developer Partners
                  </h1>
                  <p className="text-[#96c5a8] text-base font-normal leading-normal max-w-[720px]">
                    Build on our platform to reach a massive audience. We provide the tools, you bring the innovation.
                  </p>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 sm:h-12 sm:px-5 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em] sm:text-base w-fit">
                  <span className="truncate">View API Docs</span>
                </button>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
                {developerTools.map((tool, index) => (
                  <FeatureCard
                    key={index}
                    icon={tool.icon}
                    title={tool.title}
                    description={tool.description}
                  />
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="@container">
              <div className="flex flex-col justify-end gap-4 px-4 py-8 sm:gap-6 sm:px-10 sm:py-10">
                <div className="flex flex-col gap-2 text-center items-center">
                  <h1 className="text-white tracking-light text-3xl font-bold leading-tight sm:text-4xl sm:font-black sm:tracking-[-0.033em] max-w-[720px]">
                    Ready to get started?
                  </h1>
                  <p className="text-[#96c5a8] text-base font-normal leading-normal max-w-[720px]">
                    Join us and explore the future of AI-powered creativity and development.
                  </p>
                </div>
                <div className="flex flex-1 justify-center">
                  <div className="flex justify-center">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 sm:h-12 sm:px-5 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em] sm:text-base grow">
                      <span className="truncate">Get Started</span>
                    </button>
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

export default FeaturesPage

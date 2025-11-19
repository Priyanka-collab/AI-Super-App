import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FeatureCard from '../components/FeatureCard'

const PartnersPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    portfolioLink: '',
    aboutApp: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Application submitted successfully!')
  }

  const benefits = [
    {
      icon: 'groups',
      title: 'Access a Global Audience',
      description: 'Tap into our rapidly growing user base and showcase your tools to a worldwide community.'
    },
    {
      icon: 'monetization_on',
      title: 'Monetize Your Creations',
      description: 'Easily integrate monetization models into your applications and start earning from your creations.'
    },
    {
      icon: 'hub',
      title: 'Leverage Our Technology',
      description: 'Build on our robust infrastructure and powerful APIs to create next-generation AI experiences.'
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
                <p className="text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">
                  Partner With Us and Shape the Future of AI
                </p>
                <p className="text-[#96c5a8] text-base font-normal leading-normal max-w-xl">
                  Join our ecosystem of innovators and bring your AI-powered creations to a global audience.
                </p>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="flex flex-col gap-6 px-4 py-6 @container">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
                {benefits.map((benefit, index) => (
                  <FeatureCard
                    key={index}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                  />
                ))}
              </div>
            </div>

            {/* Partner Form */}
            <div className="w-full max-w-2xl mx-auto px-4 py-6">
              <div className="flex flex-col gap-6 p-6 sm:p-8 rounded-xl border border-[#366347] bg-[#1b3124]">
                <div className="text-center">
                  <h2 className="text-white text-2xl sm:text-3xl font-bold">Become a Partner</h2>
                  <p className="text-[#96c5a8] mt-2">Fill out the application below to get started.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-[#96c5a8] text-sm font-medium mb-2 block" htmlFor="fullName">
                      Full Name
                    </label>
                    <input
                      className="bg-[#1b3124] border border-[#366347] text-white rounded-lg p-3 w-full focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                      id="fullName"
                      name="fullName"
                      placeholder="Enter your full name"
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="text-[#96c5a8] text-sm font-medium mb-2 block" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      className="bg-[#1b3124] border border-[#366347] text-white rounded-lg p-3 w-full focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                      id="email"
                      name="email"
                      placeholder="you@company.com"
                      required
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="text-[#96c5a8] text-sm font-medium mb-2 block" htmlFor="companyName">
                      Company Name (Optional)
                    </label>
                    <input
                      className="bg-[#1b3124] border border-[#366347] text-white rounded-lg p-3 w-full focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                      id="companyName"
                      name="companyName"
                      placeholder="Your Company Inc."
                      type="text"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="text-[#96c5a8] text-sm font-medium mb-2 block" htmlFor="portfolioLink">
                      Link to your App or Portfolio
                    </label>
                    <input
                      className="bg-[#1b3124] border border-[#366347] text-white rounded-lg p-3 w-full focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                      id="portfolioLink"
                      name="portfolioLink"
                      placeholder="https://example.com"
                      required
                      type="url"
                      value={formData.portfolioLink}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="text-[#96c5a8] text-sm font-medium mb-2 block" htmlFor="aboutApp">
                      Tell us about your app
                    </label>
                    <textarea
                      className="bg-[#1b3124] border border-[#366347] text-white rounded-lg p-3 w-full min-h-[120px] focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                      id="aboutApp"
                      name="aboutApp"
                      placeholder="Describe your app, its features, and your target audience."
                      required
                      value={formData.aboutApp}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button
                    className="w-full flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-background-dark text-base font-bold leading-normal tracking-[0.015em]"
                    type="submit"
                  >
                    <span className="truncate">Submit Application</span>
                  </button>
                </form>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartnersPage

import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    
    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setSubmitting(false)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-dark overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <Header />
            
            {/* Page Heading */}
            <div className="flex flex-wrap justify-between gap-3 p-4 py-8 text-center sm:text-left">
              <div className="flex w-full flex-col items-center gap-3">
                <h1 className="text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">
                  Contact Us
                </h1>
                <p className="text-[#96c5a8] text-base font-normal leading-normal max-w-xl">
                  Have questions or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex flex-col gap-6 px-4 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="flex flex-col gap-6">
                  <h2 className="text-white text-2xl font-bold leading-tight">Get in Touch</h2>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 text-primary">
                        <span className="material-symbols-outlined">mail</span>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-white font-medium text-sm">Email</p>
                        <p className="text-[#96c5a8] text-sm">support@superapp.ai</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 text-primary">
                        <span className="material-symbols-outlined">location_on</span>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-white font-medium text-sm">Location</p>
                        <p className="text-[#96c5a8] text-sm">San Francisco, CA 94102</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 text-primary">
                        <span className="material-symbols-outlined">schedule</span>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-white font-medium text-sm">Business Hours</p>
                        <p className="text-[#96c5a8] text-sm">Mon-Fri: 9:00 AM - 6:00 PM PST</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="flex flex-col gap-4">
                  {submitted ? (
                    <div className="flex flex-col gap-4 items-center justify-center p-8 rounded-xl border border-primary bg-primary/10">
                      <span className="material-symbols-outlined text-primary text-5xl">check_circle</span>
                      <h3 className="text-white text-xl font-bold">Message Sent!</h3>
                      <p className="text-[#96c5a8] text-sm text-center">
                        Thank you for contacting us. We'll get back to you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-white text-sm font-medium">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full h-10 px-3 rounded-lg border border-[#366347] bg-[#1b3124] text-white placeholder-[#96c5a8] focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your name"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-white text-sm font-medium">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full h-10 px-3 rounded-lg border border-[#366347] bg-[#1b3124] text-white placeholder-[#96c5a8] focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="subject" className="text-white text-sm font-medium">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full h-10 px-3 rounded-lg border border-[#366347] bg-[#1b3124] text-white placeholder-[#96c5a8] focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="How can we help?"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-white text-sm font-medium">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="5"
                          className="w-full px-3 py-2 rounded-lg border border-[#366347] bg-[#1b3124] text-white placeholder-[#96c5a8] focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                          placeholder="Tell us more about your inquiry..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className={`flex items-center justify-center h-12 px-6 rounded-lg text-sm font-bold leading-normal tracking-[0.015em] transition-opacity ${
                          submitting
                            ? 'bg-primary/50 text-background-dark cursor-not-allowed'
                            : 'bg-primary text-background-dark hover:opacity-90'
                        }`}
                      >
                        {submitting ? (
                          <>
                            <span className="material-symbols-outlined animate-spin mr-2">refresh</span>
                            Sending...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </button>
                    </form>
                  )}
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

export default ContactPage

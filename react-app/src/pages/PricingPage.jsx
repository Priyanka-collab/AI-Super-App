import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PricingCard from '../components/PricingCard'

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('Monthly')
  const [openFAQ, setOpenFAQ] = useState(null)

  const pricingPlans = [
    {
      name: 'Free',
      description: 'For casual creators and exploration.',
      price: 0,
      period: 'month',
      buttonText: 'Start for Free',
      isPopular: false,
      features: [
        'Limited access to core tools',
        'Basic support',
        'Community access'
      ]
    },
    {
      name: 'Pro',
      description: 'For professionals and serious creators.',
      price: 29,
      period: 'month',
      buttonText: 'Choose Pro',
      isPopular: true,
      features: [
        "All 'Free' features",
        'Advanced AI models',
        'Unlimited projects',
        'Priority support',
        'API access'
      ]
    },
    {
      name: 'Business',
      description: 'For teams needing advanced collaboration.',
      price: 99,
      period: 'month',
      buttonText: 'Contact Sales',
      isPopular: false,
      features: [
        "All 'Pro' features",
        'Team management',
        'Dedicated support',
        'Enhanced security'
      ]
    }
  ]

  const faqs = [
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can upgrade, downgrade, or cancel your plan at any time from your account settings. Changes will be prorated and applied to your next billing cycle.'
    },
    {
      question: 'What is the difference between monthly and annual billing?',
      answer: "Choosing an annual plan gives you a 20% discount compared to paying monthly for 12 months. It's the best value if you plan to use our tools long-term."
    },
    {
      question: 'Is there a free trial for the Pro plan?',
      answer: 'We do not offer a time-based free trial for the Pro plan. However, our Free plan is available for you to explore our core features with no time limit.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-dark overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <Header />
            
            {/* Hero Section */}
            <div className="flex flex-col gap-6 px-4 py-8 text-center items-center">
              <div className="flex flex-col gap-3">
                <h1 className="text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">
                  Find the plan that's right for you
                </h1>
                <p className="text-[#96c5a8] text-base font-normal leading-normal max-w-[720px]">
                  Access our full suite of AI tools with a plan that scales with your needs.
                </p>
              </div>
              
              {/* Billing Toggle */}
              <div className="flex w-full max-w-xs px-4 py-2">
                <div className="flex h-10 flex-1 items-center justify-center rounded-lg bg-white/10 p-1">
                  <label className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 text-sm font-medium leading-normal ${
                    billingCycle === 'Monthly' 
                      ? 'bg-background-dark shadow-sm text-white' 
                      : 'text-gray-400'
                  }`}>
                    <span className="truncate">Monthly</span>
                    <input
                      checked={billingCycle === 'Monthly'}
                      className="invisible w-0"
                      name="billing-cycle"
                      type="radio"
                      value="Monthly"
                      onChange={(e) => setBillingCycle(e.target.value)}
                    />
                  </label>
                  <label className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 text-sm font-medium leading-normal ${
                    billingCycle === 'Annual' 
                      ? 'bg-background-dark shadow-sm text-white' 
                      : 'text-gray-400'
                  }`}>
                    <span className="truncate">Annual (Save 20%)</span>
                    <input
                      checked={billingCycle === 'Annual'}
                      className="invisible w-0"
                      name="billing-cycle"
                      type="radio"
                      value="Annual"
                      onChange={(e) => setBillingCycle(e.target.value)}
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 py-8">
              {pricingPlans.map((plan, index) => (
                <PricingCard
                  key={index}
                  name={plan.name}
                  description={plan.description}
                  price={plan.price}
                  period={plan.period}
                  features={plan.features}
                  buttonText={plan.buttonText}
                  isPopular={plan.isPopular}
                />
              ))}
            </div>

            {/* FAQ Section */}
            <div className="flex flex-col gap-6 px-4 py-8 items-center">
              <h3 className="text-white text-2xl font-bold leading-normal tracking-[0.015em] text-center">
                Frequently Asked Questions
              </h3>
              <div className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group p-4 rounded-lg bg-[#1b3124] border border-[#366347]"
                    open={openFAQ === index}
                    onClick={(e) => {
                      e.preventDefault()
                      toggleFAQ(index)
                    }}
                  >
                    <summary className="flex cursor-pointer items-center justify-between list-none">
                      <span className="font-medium text-white">{faq.question}</span>
                      <span className={`material-symbols-outlined text-gray-500 transition-transform duration-300 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`}>
                        expand_more
                      </span>
                    </summary>
                    {openFAQ === index && (
                      <p className="mt-4 text-[#96c5a8]">{faq.answer}</p>
                    )}
                  </details>
                ))}
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingPage

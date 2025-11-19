import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const TermsPage = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-dark overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <Header />
            
            {/* Page Content */}
            <div className="flex flex-col gap-6 px-4 py-8">
              <div className="flex flex-col gap-4">
                <h1 className="text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">
                  Terms of Service
                </h1>
                <p className="text-[#96c5a8] text-sm">
                  Last Updated: November 10, 2024
                </p>
              </div>

              <div className="flex flex-col gap-6 text-[#96c5a8]">
                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">1. Acceptance of Terms</h2>
                  <p className="text-sm leading-relaxed">
                    By accessing or using SuperApp's AI creative suite platform ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use our Service. These Terms constitute a legally binding agreement between you and SuperApp, Inc. ("SuperApp," "we," "our," or "us").
                  </p>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">2. Description of Service</h2>
                  <p className="text-sm leading-relaxed">
                    SuperApp provides AI-powered creative tools including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>AI Image Generation and Editing</li>
                    <li>AI Video Creation and Editing</li>
                    <li>AI Story and Content Generation</li>
                    <li>Developer APIs and Integration Tools</li>
                    <li>Additional features as we may add from time to time</li>
                  </ul>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">3. Account Registration</h2>
                  <p className="text-sm leading-relaxed">
                    To use our Service, you must:
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>Be at least 13 years of age (or legal age in your jurisdiction)</li>
                    <li>Provide accurate and complete registration information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Promptly update your account information as needed</li>
                    <li>Accept responsibility for all activities under your account</li>
                  </ul>
                  <p className="text-sm leading-relaxed mt-2">
                    You may not share your account with others or create multiple accounts.
                  </p>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">4. Subscription Plans and Billing</h2>
                  <h3 className="text-white text-lg font-semibold mt-2">4.1 Plans</h3>
                  <p className="text-sm leading-relaxed">
                    We offer Free, Pro, and Business subscription plans. Features and pricing are detailed on our <Link to="/pricing" className="text-primary hover:underline">Pricing page</Link>.
                  </p>
                  
                  <h3 className="text-white text-lg font-semibold mt-4">4.2 Payment</h3>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>Paid subscriptions are billed monthly or annually in advance</li>
                    <li>You authorize us to charge your payment method automatically</li>
                    <li>Prices are subject to change with 30 days notice</li>
                    <li>All fees are non-refundable except as stated in our Refund Policy</li>
                  </ul>

                  <h3 className="text-white text-lg font-semibold mt-4">4.3 Free Trial</h3>
                  <p className="text-sm leading-relaxed">
                    Free trials are offered at our discretion. You may be charged when the trial ends unless you cancel before the trial period expires.
                  </p>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">5. 7-Day Refund Policy</h2>
                  <div className="bg-primary/10 border border-primary rounded-lg p-4">
                    <p className="text-sm leading-relaxed">
                      <strong className="text-white">We offer a 7-day, no questions asked refund policy.</strong>
                    </p>
                    <p className="text-sm leading-relaxed mt-2">
                      If you are not satisfied with our Service for any reason, you may request a full refund within 7 days of your initial purchase or subscription renewal. After 7 days, all payments are final and non-refundable.
                    </p>
                    <p className="text-sm leading-relaxed mt-2">
                      To request a refund, contact us at <span className="text-white font-medium">support@superapp.ai</span> with your account details. Refunds are typically processed within 5-10 business days.
                    </p>
                    <p className="text-sm leading-relaxed mt-2">
                      <strong className="text-white">Note:</strong> This refund policy applies to subscription fees only. Credits, add-ons, or one-time purchases may have different refund policies.
                    </p>
                  </div>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">6. Acceptable Use Policy</h2>
                  <p className="text-sm leading-relaxed">
                    You agree NOT to use our Service to:
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>Generate illegal, harmful, or explicit content</li>
                    <li>Violate any third-party rights including intellectual property</li>
                    <li>Harass, abuse, or harm others</li>
                    <li>Spread misinformation or deepfakes without disclosure</li>
                    <li>Attempt to reverse-engineer or exploit our AI models</li>
                    <li>Engage in automated scraping or bulk data collection</li>
                    <li>Resell or redistribute our Service without permission</li>
                    <li>Bypass rate limits or usage restrictions</li>
                  </ul>
                  <p className="text-sm leading-relaxed mt-2">
                    Violation of this policy may result in immediate account suspension or termination.
                  </p>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">7. Content Ownership and Licensing</h2>
                  <h3 className="text-white text-lg font-semibold mt-2">7.1 Your Content</h3>
                  <p className="text-sm leading-relaxed">
                    You retain ownership of content you create using our Service. By using the Service, you grant SuperApp a worldwide, non-exclusive, royalty-free license to:
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>Host, store, and process your content</li>
                    <li>Use anonymized data to improve our AI models</li>
                    <li>Display your content within the platform (if you share it)</li>
                  </ul>

                  <h3 className="text-white text-lg font-semibold mt-4">7.2 Our Content</h3>
                  <p className="text-sm leading-relaxed">
                    SuperApp and its licensors own all rights to the Service, including AI models, software, designs, and trademarks. You may not copy, modify, or create derivative works without permission.
                  </p>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">8. AI-Generated Content Disclaimer</h2>
                  <p className="text-sm leading-relaxed">
                    AI-generated content may not always be accurate, appropriate, or original. You are responsible for:
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>Reviewing and verifying AI-generated content before use</li>
                    <li>Ensuring compliance with applicable laws and regulations</li>
                    <li>Obtaining necessary permissions for commercial use</li>
                    <li>Disclosing AI-generated content where required</li>
                  </ul>
                  <p className="text-sm leading-relaxed mt-2">
                    SuperApp is not liable for any issues arising from your use of AI-generated content.
                  </p>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">9. Service Availability</h2>
                  <p className="text-sm leading-relaxed">
                    We strive to provide reliable service but do not guarantee:
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>Uninterrupted or error-free operation</li>
                    <li>That the Service will meet your specific requirements</li>
                    <li>That content generated will be accurate or original</li>
                  </ul>
                  <p className="text-sm leading-relaxed mt-2">
                    We may suspend or discontinue the Service at any time with reasonable notice.
                  </p>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">10. Limitation of Liability</h2>
                  <p className="text-sm leading-relaxed">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, SUPERAPP SHALL NOT BE LIABLE FOR:
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>Indirect, incidental, or consequential damages</li>
                    <li>Loss of profits, data, or business opportunities</li>
                    <li>Any damages exceeding the amount you paid in the past 12 months</li>
                  </ul>
                  <p className="text-sm leading-relaxed mt-2">
                    Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you.
                  </p>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">11. Indemnification</h2>
                  <p className="text-sm leading-relaxed">
                    You agree to indemnify and hold SuperApp harmless from any claims, damages, or expenses arising from:
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>Your use of the Service</li>
                    <li>Your violation of these Terms</li>
                    <li>Your violation of any third-party rights</li>
                    <li>Content you create or share using our Service</li>
                  </ul>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">12. Termination</h2>
                  <p className="text-sm leading-relaxed">
                    You may cancel your account at any time through your account settings. We may suspend or terminate your account if you:
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>Violate these Terms or our policies</li>
                    <li>Engage in fraudulent or illegal activity</li>
                    <li>Fail to pay applicable fees</li>
                  </ul>
                  <p className="text-sm leading-relaxed mt-2">
                    Upon termination, your access will cease, but provisions regarding ownership, liability, and indemnification survive.
                  </p>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">13. Changes to Terms</h2>
                  <p className="text-sm leading-relaxed">
                    We may modify these Terms at any time. We will provide notice of material changes via email or through the Service. Continued use after changes constitutes acceptance of the new Terms.
                  </p>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">14. Governing Law</h2>
                  <p className="text-sm leading-relaxed">
                    These Terms are governed by the laws of the State of California, USA, without regard to conflict of law principles. Any disputes shall be resolved in the courts of San Francisco County, California.
                  </p>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">15. Contact Information</h2>
                  <p className="text-sm leading-relaxed">
                    For questions about these Terms, please contact us:
                  </p>
                  <div className="text-sm space-y-1 ml-4">
                    <p><strong className="text-white">Email:</strong> legal@superapp.ai</p>
                    <p><strong className="text-white">Support:</strong> support@superapp.ai</p>
                    <p><strong className="text-white">Address:</strong> SuperApp, Inc., San Francisco, CA 94102</p>
                  </div>
                </section>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsPage

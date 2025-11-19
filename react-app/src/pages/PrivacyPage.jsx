import Header from '../components/Header'
import Footer from '../components/Footer'

const PrivacyPage = () => {
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
                  Privacy Policy
                </h1>
                <p className="text-[#96c5a8] text-sm">
                  Last Updated: November 10, 2024
                </p>
              </div>

              <div className="flex flex-col gap-6 text-[#96c5a8]">
                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">1. Introduction</h2>
                  <p className="text-sm leading-relaxed">
                    Welcome to SuperApp ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered creative suite platform.
                  </p>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">2. Information We Collect</h2>
                  <h3 className="text-white text-lg font-semibold mt-2">2.1 Personal Information</h3>
                  <p className="text-sm leading-relaxed">
                    We collect personal information that you voluntarily provide when registering for an account, including:
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>Name and email address</li>
                    <li>Account credentials</li>
                    <li>Payment and billing information</li>
                    <li>Profile information and preferences</li>
                  </ul>

                  <h3 className="text-white text-lg font-semibold mt-4">2.2 Usage Data</h3>
                  <p className="text-sm leading-relaxed">
                    We automatically collect certain information when you use our services:
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Usage patterns and interaction data</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>AI tool usage and content generation metrics</li>
                  </ul>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">3. How We Use Your Information</h2>
                  <p className="text-sm leading-relaxed">
                    We use the collected information for the following purposes:
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>Provide, maintain, and improve our AI services</li>
                    <li>Process transactions and manage subscriptions</li>
                    <li>Send administrative information and updates</li>
                    <li>Personalize your experience and content recommendations</li>
                    <li>Train and improve our AI models (with your content)</li>
                    <li>Detect and prevent fraud or security issues</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">4. Data Sharing and Disclosure</h2>
                  <p className="text-sm leading-relaxed">
                    We do not sell your personal information. We may share your information with:
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li><strong className="text-white">Service Providers:</strong> Third-party vendors who assist in operating our platform</li>
                    <li><strong className="text-white">Payment Processors:</strong> To process your transactions securely</li>
                    <li><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights</li>
                    <li><strong className="text-white">Business Transfers:</strong> In connection with mergers or acquisitions</li>
                  </ul>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">5. Your Content and AI Training</h2>
                  <p className="text-sm leading-relaxed">
                    Content you create using our AI tools remains yours. However, by using our services, you grant us permission to:
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>Store and process your content to provide services</li>
                    <li>Use anonymized and aggregated data to improve AI models</li>
                    <li>You can opt-out of AI training usage in your account settings</li>
                  </ul>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">6. Data Security</h2>
                  <p className="text-sm leading-relaxed">
                    We implement industry-standard security measures to protect your information, including:
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Access controls and authentication protocols</li>
                    <li>Secure data centers with physical security measures</li>
                  </ul>
                  <p className="text-sm leading-relaxed mt-2">
                    However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">7. Your Rights</h2>
                  <p className="text-sm leading-relaxed">
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li><strong className="text-white">Access:</strong> Request a copy of your personal data</li>
                    <li><strong className="text-white">Correction:</strong> Update or correct inaccurate information</li>
                    <li><strong className="text-white">Deletion:</strong> Request deletion of your account and data</li>
                    <li><strong className="text-white">Export:</strong> Download your content and data</li>
                    <li><strong className="text-white">Opt-Out:</strong> Unsubscribe from marketing communications</li>
                  </ul>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">8. Cookies and Tracking</h2>
                  <p className="text-sm leading-relaxed">
                    We use cookies and similar technologies to enhance your experience. You can control cookie preferences through your browser settings. Types of cookies we use:
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li><strong className="text-white">Essential:</strong> Required for platform functionality</li>
                    <li><strong className="text-white">Analytics:</strong> Help us understand usage patterns</li>
                    <li><strong className="text-white">Preferences:</strong> Remember your settings and choices</li>
                  </ul>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">9. Children's Privacy</h2>
                  <p className="text-sm leading-relaxed">
                    Our services are not intended for users under 13 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                  </p>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">10. International Data Transfers</h2>
                  <p className="text-sm leading-relaxed">
                    Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
                  </p>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">11. Changes to This Policy</h2>
                  <p className="text-sm leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of significant changes via email or through our platform. Continued use of our services after changes constitutes acceptance of the updated policy.
                  </p>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">12. Contact Us</h2>
                  <p className="text-sm leading-relaxed">
                    If you have questions or concerns about this Privacy Policy, please contact us:
                  </p>
                  <div className="text-sm space-y-1 ml-4">
                    <p><strong className="text-white">Email:</strong> privacy@superapp.ai</p>
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

export default PrivacyPage

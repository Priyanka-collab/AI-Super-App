import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const RefundPage = () => {
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
                  Refund Policy
                </h1>
                <p className="text-[#96c5a8] text-sm">
                  Last Updated: November 10, 2024
                </p>
              </div>

              {/* Highlighted 7-Day Policy */}
              <div className="bg-primary/10 border-2 border-primary rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-white text-2xl font-bold">7-Day Money-Back Guarantee</h2>
                    <p className="text-[#96c5a8] text-base leading-relaxed">
                      We stand behind the quality of our AI creative suite. If you're not completely satisfied with SuperApp for any reason, we offer a full refund within 7 days of purchase—no questions asked.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6 text-[#96c5a8]">
                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">1. Eligibility</h2>
                  <p className="text-sm leading-relaxed">
                    Our 7-day refund policy applies to the following:
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li><strong className="text-white">New Subscriptions:</strong> Initial purchase of Pro or Business plans</li>
                    <li><strong className="text-white">Subscription Renewals:</strong> Monthly or annual renewal charges</li>
                    <li><strong className="text-white">Plan Upgrades:</strong> Difference in cost when upgrading plans</li>
                  </ul>
                  <p className="text-sm leading-relaxed mt-3">
                    The refund window begins from the date of the transaction and expires 7 calendar days later at 11:59 PM PST.
                  </p>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">2. What's Covered</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2 p-4 rounded-lg border border-[#366347] bg-[#1b3124]">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">check_circle</span>
                        <h3 className="text-white font-bold text-sm">Fully Refundable</h3>
                      </div>
                      <ul className="list-disc list-inside text-xs space-y-1 ml-6">
                        <li>Monthly subscription fees</li>
                        <li>Annual subscription fees</li>
                        <li>Plan upgrade costs</li>
                        <li>Initial purchases</li>
                      </ul>
                    </div>
                    
                    <div className="flex flex-col gap-2 p-4 rounded-lg border border-[#366347] bg-[#1b3124]">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#ff6b6b]">cancel</span>
                        <h3 className="text-white font-bold text-sm">Not Refundable</h3>
                      </div>
                      <ul className="list-disc list-inside text-xs space-y-1 ml-6">
                        <li>Additional credit purchases</li>
                        <li>API usage fees (pay-as-you-go)</li>
                        <li>Third-party integrations</li>
                        <li>Requests after 7 days</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">3. How to Request a Refund</h2>
                  <p className="text-sm leading-relaxed">
                    Requesting a refund is simple and straightforward:
                  </p>
                  
                  <div className="flex flex-col gap-4 mt-2">
                    <div className="flex gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-background-dark font-bold text-sm flex-shrink-0">
                        1
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-white font-bold text-sm">Contact Support</h3>
                        <p className="text-sm">
                          Email us at <a href="mailto:support@superapp.ai" className="text-primary hover:underline">support@superapp.ai</a> or use our <Link to="/contact" className="text-primary hover:underline">Contact Form</Link>
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-background-dark font-bold text-sm flex-shrink-0">
                        2
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-white font-bold text-sm">Provide Information</h3>
                        <p className="text-sm">
                          Include your account email, transaction date, and reason (optional—we truly don't require one)
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-background-dark font-bold text-sm flex-shrink-0">
                        3
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-white font-bold text-sm">Get Your Refund</h3>
                        <p className="text-sm">
                          We'll process your refund within 1-2 business days. Funds typically appear in 5-10 business days
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">4. Refund Processing Time</h2>
                  <p className="text-sm leading-relaxed">
                    Once your refund request is approved:
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li><strong className="text-white">Processing Time:</strong> 1-2 business days for review and approval</li>
                    <li><strong className="text-white">Refund Method:</strong> Credited to your original payment method</li>
                    <li><strong className="text-white">Bank Processing:</strong> 5-10 business days for funds to appear (varies by bank)</li>
                    <li><strong className="text-white">Notification:</strong> You'll receive email confirmation at each step</li>
                  </ul>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">5. Partial Refunds</h2>
                  <p className="text-sm leading-relaxed">
                    In certain situations, partial refunds may be issued:
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li><strong className="text-white">Plan Downgrades:</strong> Prorated refund for remaining subscription period</li>
                    <li><strong className="text-white">Service Issues:</strong> Compensation for extended outages or service disruptions</li>
                    <li><strong className="text-white">Billing Errors:</strong> Correction of overcharges or duplicate payments</li>
                  </ul>
                  <p className="text-sm leading-relaxed mt-2">
                    These are handled on a case-by-case basis. Contact support to discuss your specific situation.
                  </p>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">6. Account Status After Refund</h2>
                  <p className="text-sm leading-relaxed">
                    When a refund is issued:
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>Your paid subscription will be cancelled immediately</li>
                    <li>You'll retain access until the end of your current billing period</li>
                    <li>Your account will revert to the Free plan automatically</li>
                    <li>Your created content and projects remain accessible</li>
                    <li>You can resubscribe at any time</li>
                  </ul>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">7. Refund Abuse Prevention</h2>
                  <p className="text-sm leading-relaxed">
                    While we offer a generous refund policy, we reserve the right to:
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>Deny refunds to accounts with a pattern of abuse</li>
                    <li>Limit refunds to a reasonable number per customer per year</li>
                    <li>Investigate accounts suspected of fraudulent refund requests</li>
                    <li>Permanently ban accounts engaged in systematic abuse</li>
                  </ul>
                  <p className="text-sm leading-relaxed mt-2">
                    Our goal is to maintain a fair policy for all genuine customers while preventing exploitation.
                  </p>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">8. Special Circumstances</h2>
                  <p className="text-sm leading-relaxed">
                    We understand that exceptional situations occur. If you have a valid reason for requesting a refund after the 7-day window, please contact us. While we can't guarantee approval, we'll review each case with empathy and fairness.
                  </p>
                  <p className="text-sm leading-relaxed mt-2">
                    Examples that may warrant special consideration:
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>Extended illness or emergency situations</li>
                    <li>Technical issues preventing service usage</li>
                    <li>Billing errors or unauthorized charges</li>
                  </ul>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">9. Free Plan Limitations</h2>
                  <p className="text-sm leading-relaxed">
                    Our Free plan has no fees and therefore no refund considerations. However:
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>You can upgrade to a paid plan at any time</li>
                    <li>The 7-day refund policy applies to your first paid subscription</li>
                    <li>Free plan features and limits are subject to change</li>
                  </ul>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">10. Questions and Support</h2>
                  <p className="text-sm leading-relaxed">
                    Have questions about our refund policy? We're here to help:
                  </p>
                  <div className="flex flex-col gap-3 mt-2 p-4 rounded-lg border border-[#366347] bg-[#1b3124]">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">mail</span>
                      <div>
                        <p className="text-white font-bold text-sm">Email Support</p>
                        <p className="text-sm">support@superapp.ai</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">chat</span>
                      <div>
                        <p className="text-white font-bold text-sm">Contact Form</p>
                        <Link to="/contact" className="text-primary hover:underline text-sm">Submit a request</Link>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">schedule</span>
                      <div>
                        <p className="text-white font-bold text-sm">Response Time</p>
                        <p className="text-sm">Typically within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">11. Policy Changes</h2>
                  <p className="text-sm leading-relaxed">
                    We may update this Refund Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. Material changes will be communicated via email. The policy in effect at the time of your purchase applies to that transaction.
                  </p>
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

export default RefundPage

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 dark:bg-[#0d1912] border-t border-gray-200 dark:border-[#264532]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 text-gray-900 dark:text-white">
              <div className="size-6 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
                </svg>
              </div>
              <h2 className="text-lg font-bold">SuperApp</h2>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white">Product</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/features" className="text-gray-600 dark:text-[#96c5a8] hover:text-primary transition-colors text-sm">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-600 dark:text-[#96c5a8] hover:text-primary transition-colors text-sm">Pricing</Link></li>
              <li><a href="#" className="text-gray-600 dark:text-[#96c5a8] hover:text-primary transition-colors text-sm">Updates</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-[#96c5a8] hover:text-primary transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-gray-600 dark:text-[#96c5a8] hover:text-primary transition-colors text-sm">Careers</a></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-[#96c5a8] hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/privacy" className="text-gray-600 dark:text-[#96c5a8] hover:text-primary transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 dark:text-[#96c5a8] hover:text-primary transition-colors text-sm">Terms of Service</Link></li>
              <li><Link to="/refund" className="text-gray-600 dark:text-[#96c5a8] hover:text-primary transition-colors text-sm">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-200 dark:border-[#264532] pt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-[#96c5a8]">© 2024 SuperApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { GOOGLE_FORM_URL } from '../config/formConfig'

const Header = () => {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  
  const isActive = (path) => location.pathname === path

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#264532] dark:border-b-[#264532] border-b-gray-200 px-4 sm:px-10 py-3 bg-background-dark dark:bg-background-dark bg-white">
      <Link to="/" className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
        <div className="size-4 text-primary">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-white dark:text-white text-gray-900 text-lg font-bold leading-tight tracking-[-0.015em]">SuperApp</h2>
      </Link>
      
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link 
            to="/features" 
            className="text-white dark:text-white text-gray-700 text-sm font-medium leading-normal hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link 
            to="/partners" 
            className="text-white dark:text-white text-gray-700 text-sm font-medium leading-normal hover:text-primary transition-colors"
          >
            Developers
          </Link>
          <Link 
            to="/pricing" 
            className="text-white dark:text-white text-gray-700 text-sm font-medium leading-normal hover:text-primary transition-colors"
          >
            Pricing
          </Link>
          <Link 
            to="/contact" 
            className="text-white dark:text-white text-gray-700 text-sm font-medium leading-normal hover:text-primary transition-colors"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#264532] dark:bg-[#264532] bg-gray-200 text-white dark:text-white text-gray-700 hover:bg-[#2d5339] dark:hover:bg-[#2d5339] hover:bg-gray-300 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <span className="material-symbols-outlined text-xl">light_mode</span>
            ) : (
              <span className="material-symbols-outlined text-xl">dark_mode</span>
            )}
          </button>
          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-background-dark dark:text-background-dark text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
              <span className="truncate">Get Started</span>
            </button>
          </a>
          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#264532] dark:bg-[#264532] bg-gray-300 text-white dark:text-white text-gray-700 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#2d5339] dark:hover:bg-[#2d5339] hover:bg-gray-400 transition-colors">
              <span className="truncate">Log In</span>
            </button>
          </a>
        </div>
      </div>
      
      <div className="md:hidden flex items-center gap-2">
        <button 
          onClick={toggleTheme}
          className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#264532] dark:bg-[#264532] bg-gray-200 text-white dark:text-white text-gray-700 hover:bg-[#2d5339] dark:hover:bg-[#2d5339] hover:bg-gray-300 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <span className="material-symbols-outlined text-xl">light_mode</span>
          ) : (
            <span className="material-symbols-outlined text-xl">dark_mode</span>
          )}
        </button>
        <span className="material-symbols-outlined text-white dark:text-white text-gray-900">menu</span>
      </div>
    </header>
  )
}

export default Header

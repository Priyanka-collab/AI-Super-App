import { Link } from 'react-router-dom'

const FeatureCard = ({ icon, title, description, variant = 'default', link = null, isExternal = false }) => {
  const content = (
    <>
      {variant === 'landing' ? (
        <>
          <div className="w-12 h-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined">{icon}</span>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-gray-900 dark:text-white text-base font-bold leading-tight">{title}</h2>
            <p className="text-gray-700 dark:text-[#96c5a8] text-sm font-normal leading-normal">{description}</p>
          </div>
        </>
      ) : (
        <>
          <div className="text-primary">
            <span className="material-symbols-outlined">{icon}</span>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">{title}</h2>
            <p className="text-gray-700 dark:text-[#96c5a8] text-sm font-normal leading-normal">{description}</p>
          </div>
        </>
      )}
    </>
  )

  const className = variant === 'landing'
    ? "flex flex-1 gap-4 rounded-xl border border-gray-200 dark:border-[#366347] bg-white dark:bg-[#1b3124] p-6 flex-col text-center items-center transition-all hover:border-primary hover:shadow-lg cursor-pointer"
    : "flex flex-1 gap-4 rounded-lg border border-gray-200 dark:border-[#366347] bg-white dark:bg-[#1b3124] p-4 flex-col transition-all hover:border-primary hover:shadow-lg cursor-pointer"

  if (link) {
    if (isExternal) {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer" className={className}>
          {content}
        </a>
      )
    }
    return (
      <Link to={link} className={className}>
        {content}
      </Link>
    )
  }

  return (
    <div className={className.replace('cursor-pointer', '')}>
      {content}
    </div>
  )
}

export default FeatureCard

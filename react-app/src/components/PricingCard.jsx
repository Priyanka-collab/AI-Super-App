const PricingCard = ({ name, description, price, period, features, buttonText, isPopular = false }) => {
  return (
    <div className={`flex flex-1 flex-col gap-6 rounded-xl ${
      isPopular 
        ? 'border-2 border-primary bg-[#1b3124] p-6 lg:p-8 relative' 
        : 'border border-[#366347] bg-[#1b3124] p-6 lg:p-8'
    }`}>
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <p className="text-background-dark text-xs font-bold leading-normal tracking-[0.015em] rounded-full bg-primary px-3 py-1 text-center">
            Most Popular
          </p>
        </div>
      )}
      <div className="flex flex-col gap-4">
        <h2 className="text-white text-xl font-bold leading-tight">{name}</h2>
        <p className="text-[#96c5a8] text-sm italic">{description}</p>
        <p className="flex items-baseline gap-1 text-white">
          <span className="text-4xl font-black leading-tight tracking-[-0.033em]">${price}</span>
          <span className="text-base font-bold leading-tight">/{period}</span>
        </p>
      </div>
      <button className={`flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 text-sm font-bold leading-normal tracking-[0.015em] ${
        isPopular 
          ? 'bg-primary text-background-dark hover:opacity-90' 
          : 'bg-[#264532] text-white hover:bg-[#2d5339]'
      }`}>
        <span className="truncate">{buttonText}</span>
      </button>
      <div className="flex flex-col gap-3">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-3 text-white">
            <span className="material-symbols-outlined text-primary text-xl">check</span>
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PricingCard

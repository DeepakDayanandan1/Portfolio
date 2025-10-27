"use client";

<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap" rel="stylesheet" />


export default function Footer() {
  return (
    <footer className="bg-[#1a1d2e] py-12 sm:py-16 px-4 sm:px-6 mt-12 sm:mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-right justify-between gap-8">
        {/* Logo
        <div className="flex-shrink-0">
          <svg 
            width="150" 
            height="110" 
            viewBox="0 0 200 150" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-32 sm:w-40 md:w-[150px] h-auto"
          >
            <path d="M50 40L80 70L50 100L20 70L50 40Z" fill="white"/>
            <path d="M80 40L110 70L80 100L50 70L80 40Z" fill="white"/>
            <path d="M110 40L140 70L110 100L80 70L110 40Z" fill="white"/>
          </svg>
        </div> */}
        
        {/* Tagline */}
        <div className="text-right md:text-right ml-auto">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-gray-500">Creating </span>
            <span className="text-[#c4ff00]">stories </span>
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-gray-500">one </span>
            <span className="text-[#c4ff00]">frame</span>
            <span className="text-gray-500"> at a time.</span>
          </p>
          <p className="text-gray-500 text-xs sm:text-xs md:text-sm mt-3 sm:mt-4">Portfolio v2.3 © 2025 Deepak</p>
        </div>
      </div>
    </footer>
  );  
} 
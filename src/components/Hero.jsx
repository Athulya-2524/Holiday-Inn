import React from 'react'

function Hero() {
  return (
     <div className="relative h-screen bg-[url('/src/assets/mainHero.png')] bg-cover bg-center">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center px-6 md:px-16 lg:px-24 text-white h-full">
        <p className="bg-[#4B99FF]/50 px-3.5 py-1 rounded-full w-fit mb-4">
          The Ultimate Hotel Experience
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Discover Your Perfect Gateway Destination
        </h1>
        <p className="max-w-xl">
          Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts.
          Start your journey today.
        </p>
      </div>

    </div>
  )
}

export default Hero
import React from 'react'
import { FaStar } from 'react-icons/fa'

function Acheivments() {
  return (
    <section className="w-full flex flex-col md:flex-row   pb-2">
  {/* LEFT GREEN SECTION */}
  <div className="w-full h-100 md:w-3/4 bg-blue-500/50  text-blue-800 px-8 md:px-16 py-12">
    <h2 className="text-4xl md:text-5xl font-bold mb-4 my-10">
      Our Achievements
    </h2>

    <p className="text-lg text-blue-800 max-w-2xl mb-10">
      Holiday Inn brings travelers closer to unforgettable destinations with trusted stays across the globe. Our commitment to comfort, convenience, and quality ensures every journey feels effortless and rewarding.
    </p>

    {/* STATS */}
    <div className="flex flex-wrap gap-10">
      <div>
        <h3 className="text-4xl font-bold">12k+</h3>
        <p className="text-m  text-blue-800 mt-1">Happy Clients</p>
      </div>

      <div>
        <h3 className="text-4xl font-bold">3k+</h3>
        <p className="text-m  text-blue-800 mt-1">Different Cities</p>
      </div>

      <div>
        <h3 className="text-4xl font-bold">43k+</h3>
        <p className="text-m  text-blue-800 mt-1">Journeys Completed</p>
      </div>
    </div>
  </div>

  {/* RIGHT LIGHT SECTION */}
  <div className="w-full md:w-1/4 bg-blue-300/50 flex items-center justify-center px-6 py-12">
    <div className=" my-10 flex flex-col items-center gap-4">
      <div className="mb-5 w-12 h-12 flex items-center justify-center rounded-full border border-gray-700">
        <FaStar className='text-yellow-500 text-2xl'/>
      </div>

      <p className="mb-4 text-lg text-gray-700 text-center leading-relaxed md:rotate-0 md:text-left">
        Driven by comfort, care, and quality, we create memorable stays and seamless travel experiences for every guest, every journey.

      </p>
    </div>
  </div>
</section>

  )
}

export default Acheivments
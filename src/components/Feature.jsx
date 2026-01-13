import React from "react";

const Feature = () => {
  return (
    <div className="w-full px-4 py-10 md:py-12">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-white shadow-sm">

        {/* Blue curved background */}
        <div className="absolute left-0 top-0 h-full w-[60%] bg-blue-600 rounded-r-[150px] sm:w-[50%] md:w-[65%] md:rounded-r-[300px]" />

        <div className="relative z-10 flex flex-col items-center gap-6 p-8 md:flex-row md:justify-between md:p-12 md:text-left">
          {/* Text  */}
          <div className="text-white text-center md:text-left max-w-md px-4 sm:px-8">
            <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
              Want to feel at home on your next adventure?
            </h2>
          </div>

          
          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <h1 className="text-blue-600 text-xl sm:text-2xl font-semibold">
              Find Your Stay with Us
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

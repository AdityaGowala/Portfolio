import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    <div className="relative w-full bg-green-100 font-[Poppins] overflow-hidden" id="home">

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center px-6 sm:px-10 lg:px-24 gap-10 min-h-[100vh] pt-[80px]">
        
        {/* Image */}
        <img
          src="./me.jpg"
          alt="My Image"
          className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[500px] xl:w-[600px] rounded-lg shadow-lg object-cover mt-10 lg:mt-0"
        />

        {/* Text Content */}
        <div className="w-full lg:w-[600px] flex flex-col items-center lg:items-center text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Hi, I'm <span className="text-green-700">Aditya Gowala</span>
          </h1>

          <p className="pt-4 text-lg sm:text-xl text-green-800 font-medium min-h-[48px]">
            <Typewriter
              words={[
                'Nodejs Developer',
                'MERN Stack Developer',
                'Web Developer',
                'Software Developer',
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-sm hover:bg-green-700 transition-all">
            Get in touch
          </button>
        </div>
      </div>

      {/* Wave SVG */}
      <svg
        className="absolute bottom-0 left-0 w-full z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#FFFFFF"
          fillOpacity="1"
          d="M0,192L48,208C96,224,192,256,288,245.3C384,235,480,181,576,176C672,171,768,213,864,202.7C960,192,1056,128,1152,101.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  )
}

export default Hero

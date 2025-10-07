import React, { useState } from 'react';

const projects = [
  {
    title: 'PrimeCare - Doctor Appointment System',
    description:
      'PrimeCare is a full-featured web application for managing doctor appointments, built with React for the frontend, Node.js/Express for the backend, and a separate admin dashboard. It allows patients to book appointments, doctors to manage their schedules, and admins to manage users and appointments.',
    liveLink: 'https://primecare-frontend-u848.onrender.com/',
    sourceLink: '#',
    image:
      './PrimeCare.png',
  },
  {
    title: 'Whispr — Real-Time Chat Application',
    description:'Whispr is a full-stack real-time chat application built using React, Node.js, Express, MongoDB, and Socket.IO. It allows users to chat instantly, view online/offline status, edit their profiles, and manage conversations with a clean, modern interface.' , 
    liveLink: 'https://whispr-bzcg.onrender.com/',
    sourceLink: '#',
    image:
      './Whispr.png',
  },
  {
    title: 'Face Recognition Attendance System',
    description:
      'Smart attendance system using face recognition technology for seamless and accurate attendance tracking. Built with React frontend and Python backend.',
    liveLink: 'https://face-recognition-webapplication.netlify.app/',
    sourceLink: '#',
    image:
      './face_recognition.png',
  },
  {
    title: 'Weather App',
    description:
      'Live weather updates and forecasts with search functionality powered by OpenWeatherMap API and React.',
    liveLink: '#',
    sourceLink: '#',
    image:
      './weather_app.png',
  },
  {
    title: 'Quiz Application',
    description:
      'Interactive quiz app with timer, backend API, and score tracking to enhance user learning and engagement.',
    liveLink: '#',
    sourceLink: '#',
    image:
      './quiz.png',
  },
{
  title: 'Live News',
  description:
    'A fully functional real-time news web application built using React and integrated with a live news API. It fetches and displays the latest headlines across categories like technology, sports, business, and more, offering users up-to-date global news in an elegant UI.',
  liveLink: 'https://your-live-news-app-link.com', // replace with actual URL
  sourceLink: 'https://github.com/yourusername/news-app', // replace with actual repo
  image: './news_app.png',
}
  // Add more projects here as needed
];

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, projects.length));
  };

  const handleViewLess = () => {
    setVisibleCount(3);
  };

  const visibleProjects = projects.slice(0, visibleCount);

  return (
    <section className="relative bg-green-100 w-full overflow-hidden mt-32" id='projects'>
      {/* Top SVG Wave */}
      <div className="w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="block">
          <path
            fill="#FFFFFF"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,138.7C672,149,768,203,864,197.3C960,192,1056,128,1152,117.3C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      {/* Heading */}
      <div className="flex flex-col items-center -mt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-tight text-black">
          PROJECTS
        </h1>
        <div className="w-24 h-1.5 bg-green-700 mx-auto mb-16 rounded-full"></div>
      </div>

      {/* Projects List */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 space-y-20 pb-8">
        {visibleProjects.map(({ title, description, liveLink, sourceLink, image }, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              idx % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Text Content */}
            <div className="md:flex-1 max-w-xl text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold text-green-700 mb-5">{title}</h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">{description}</p>
              <div className="flex justify-center md:justify-start gap-6">
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-2 bg-green-700 text-white rounded-md font-medium hover:bg-green-800 transition"
                >
                  View Live
                </a>
                <a
                  href={sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-2 border border-green-700 text-green-700 rounded-md font-medium hover:bg-green-700 hover:text-white transition"
                >
                  Source Code
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="md:flex-1 max-w-md rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src={image}
                alt={title}
                className="w-full h-72 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Load More and View Less Buttons */}
      <div className="flex justify-center gap-4 mt-10">
        {visibleCount < projects.length && (
          <button
            onClick={handleLoadMore}
            className="px-10 py-3 bg-green-700 text-white rounded-md font-semibold hover:bg-green-800 transition"
          >
            Load More
          </button>
        )}
        {visibleCount > 3 && (
          <button
            onClick={handleViewLess}
            className="px-10 py-3 border border-green-700 text-green-700 rounded-md font-semibold hover:bg-green-700 hover:text-white transition"
          >
            View Less
          </button>
        )}
      </div>

      {/* Bottom SVG Wave */}
      <div className="w-full -mb-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="block">
          <path
            fill="#FFFFFF"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,138.7C672,149,768,203,864,197.3C960,192,1056,128,1152,117.3C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Projects;

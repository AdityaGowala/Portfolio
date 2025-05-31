import React from 'react';
import { Code, Monitor, Server } from 'lucide-react';

const TechnicalSkills = () => {
  const webDevSkills = ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React.js & Redux', 'Node.js' , 'Express.js' ,'Tailwind CSS', 'Responsive Design'];
  const programmingSkills = ['Python', 'Java', 'Data Structures', 'Algorithms'];
  const technicalSkills = ['Git & GitHub', 'REST APIs', 'Postman', 'Docker & Containers', 'VS Code', 'MongoDB' , 'SQL'];


  const badgeClass = `
    inline-block
    bg-green-100
    text-green-800
    text-sm
    font-semibold
    mr-3
    mb-3
    px-4
    py-2
    rounded-lg
    shadow-sm
    cursor-default
    transform
    transition
    duration-300
    hover:scale-105
    hover:shadow-md
    hover:bg-green-200
  `;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-20 mt-24">
      <h1 className="relative text-5xl font-extrabold text-center mb-2 tracking-tight text-gray-900">
        TECHNICAL <span className="text-green-700">SKILLS</span>
      </h1>
      <div className="w-32 h-[6px] mt-4 bg-green-700 mx-auto rounded-full mb-20 shadow-lg"></div>

      <div className="flex flex-col md:flex-row md:gap-x-16 gap-y-12">

        {/* Web Dev */}
        <div className="flex-1 bg-gradient-to-br from-green-50 via-white to-green-50 p-8 rounded-3xl shadow-xl border border-green-200 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="relative flex items-center text-3xl font-semibold mb-6 gap-3 text-green-900">
            <Code size={30} className="text-green-700" />
            Web Dev
            <Code size={80} className="absolute right-0 top-1/2 -translate-y-1/2 text-green-100 opacity-20 pointer-events-none select-none" />
          </h2>
          <div>
            {webDevSkills.map(skill => (
              <span key={skill} className={badgeClass}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Programming */}
        <div className="flex-1 bg-gradient-to-br from-green-50 via-white to-green-50 p-8 rounded-3xl shadow-xl border border-green-200 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="relative flex items-center text-3xl font-semibold mb-6 gap-3 text-green-900">
            <Monitor size={30} className="text-green-700" />
            Programming
            <Monitor size={80} className="absolute right-0 top-1/2 -translate-y-1/2 text-green-100 opacity-20 pointer-events-none select-none" />
          </h2>
          <div>
            {programmingSkills.map(skill => (
              <span key={skill} className={badgeClass}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Technical */}
        <div className="flex-1 bg-gradient-to-br from-green-50 via-white to-green-50 p-8 rounded-3xl shadow-xl border border-green-200 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="relative flex items-center text-3xl font-semibold mb-6 gap-3 text-green-900">
            <Server size={30} className="text-green-700" />
            Technical
            <Server size={80} className="absolute right-0 top-1/2 -translate-y-1/2 text-green-100 opacity-20 pointer-events-none select-none" />
          </h2>
          <div>
            {technicalSkills.map(skill => (
              <span key={skill} className={badgeClass}>
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TechnicalSkills;

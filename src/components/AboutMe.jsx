import React from 'react';
import TechnicalSkills from './TechnicalSkills'

const AboutMe = () => {
    return (
        <div className='w-full mt-[200px]' id='about'>

            {/* Header and underline */}
            <div className="flex flex-col items-center -mt-10">
                <h1 className='text-[60px] font-extrabold text-center'>
                    ABOUT <span className='text-green-700'>ME</span>
                </h1>
                <div className="w-[150px] h-[6px] bg-green-700 mt-2 rounded-lg"></div>
            </div>

            {/* About Me Section */}
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-10 px-6 lg:px-20">

                {/* Text Box */}
                <div className="bg-white w-full lg:w-[1000px] h-auto lg:h-[400px] p-6 lg:p-10 rounded-lg shadow-md flex flex-col justify-center">
                    <p className='text-[18px] lg:text-[20px] leading-relaxed text-gray-700'>
                        Hello! I'm a passionate and driven <span className="font-semibold text-green-700">BCA student at JIS University</span>, specializing in crafting modern, user-friendly web applications and exploring the possibilities of intelligent systems. With a strong foundation in <span className="font-semibold">React, Tailwind CSS, Node.js, and Python</span>, I love turning ideas into real-world projects.
                        <br /><br />
                        From building a <span className="font-semibold">Face Recognition Attendance System</span> to developing a sleek <span className="font-semibold">Weather App</span> and an interactive <span className="font-semibold">Quiz Application</span>, I’ve gained hands-on experience across the full development cycle. 
                        <br /><br />
                        I’m always eager to learn, grow, and take on new challenges. Whether it's creating seamless user experiences or solving complex backend logic, I aim to build impactful and meaningful digital solutions. Let’s connect and create something amazing!
                    </p>

                </div>

                {/* Image */}
                <div className="mt-10 lg:mt-0">
                    <img src="me4.jpg" alt="my photo" className='h-[400px] lg:h-[600px] object-cover rounded-lg shadow-lg' />
                </div>
            </div>

            <TechnicalSkills />

        </div>
    );
};

export default AboutMe;

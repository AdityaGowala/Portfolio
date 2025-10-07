import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // optional, you can use Heroicons or SVGs too

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = ['Home', 'About', 'Projects', 'Contact'];


  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center h-20 px-6 md:px-10 lg:px-16">
        {/* Logo */}
        <div className="text-5xl font-extrabold tracking-wide text-green-600">
          Portfolio
        </div>

        {/* Nav Links (Desktop) */}
        <ul className="hidden md:flex space-x-10 text-gray-700 font-medium text-[20px]">
          {navLinks.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-green-600 cursor-pointer">
                {item}
              </a>
            </li>
          ))}

        </ul>

        {/* Social & Resume (Desktop) */}
        <div className="hidden md:flex items-center gap-6 text-[22px]">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aditya-gowala"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            <svg
              className="w-8 h-8 text-blue-500 hover:text-blue-700"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 19h-2.5v-9h2.5v9zm-1.25-10.25c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm12.5 10.25h-2.5v-4.5c0-1.07-.02-2.44-1.5-2.44-1.5 0-1.73 1.17-1.73 2.37v4.57h-2.5v-9h2.4v1.23h.03c.33-.62 1.14-1.28 2.35-1.28 2.52 0 3 1.66 3 3.81v5.24z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/AdityaGowala"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-700 hover:text-gray-900 transition"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.76-1.604-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.124-.303-.536-1.527.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.65.243 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.62-5.475 5.92.43.372.81 1.1.81 2.22 0 1.604-.015 2.896-.015 3.286 0 .32.21.694.825.576 4.77-1.587 8.205-6.083 8.205-11.387 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          {/* Resume Button */}
         <a
  href={`${process.env.PUBLIC_URL}/My_Resume.pdf`}
  target="_blank"
  className="px-4 py-2 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition"
>
  Resume
</a>

        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 shadow-lg space-y-4 text-gray-700 font-medium text-lg">
          {navLinks.map((item) => (
            <div key={item} className="hover:text-green-600 cursor-pointer">
              {item}
            </div>
          ))}
          <hr />
          <div className="flex gap-6 text-xl">
            <a href="https://www.linkedin.com/in/aditya-gowala">
              <svg
              className="w-8 h-8 text-blue-500 hover:text-blue-700"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 19h-2.5v-9h2.5v9zm-1.25-10.25c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm12.5 10.25h-2.5v-4.5c0-1.07-.02-2.44-1.5-2.44-1.5 0-1.73 1.17-1.73 2.37v4.57h-2.5v-9h2.4v1.23h.03c.33-.62 1.14-1.28 2.35-1.28 2.52 0 3 1.66 3 3.81v5.24z" />
            </svg>
            </a>
            <a href="https://github.com/AdityaGowala">
              <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.76-1.604-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.124-.303-.536-1.527.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.65.243 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.62-5.475 5.92.43.372.81 1.1.81 2.22 0 1.604-.015 2.896-.015 3.286 0 .32.21.694.825.576 4.77-1.587 8.205-6.083 8.205-11.387 0-6.627-5.373-12-12-12z" />
            </svg>
            </a>
          </div>
          <a
           href={`${process.env.PUBLIC_URL}/My_Resume.pdf`}
            className="block w-full text-center mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

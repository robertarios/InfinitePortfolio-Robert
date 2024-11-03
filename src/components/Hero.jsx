import '../App.css';
import { useEffect, useState } from 'react';
import resumePDF from '../assets/resume.pdf'; // Impor file PDF

const Hero = () => {
  const fullText = "Robert Mangaratua Aritonang";
  const [typingText, setTypingText] = useState('');

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypingText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div id='home' className='hero-container min-h-screen flex flex-col justify-center items-center bg-[#f0f8ff]'>
      <h1 className='hero-title text-5xl md:text-7xl font-bold text-center mb-4'>
        <span className='text-black'>I am</span>{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 typing-animation'>
          {typingText}
        </span>
      </h1>
      <p className='hero-subtitle text-2xl md:text-4xl text-gray-700 mt-4'>
        Undergraduate Informatics Student
      </p>
      <div className='mt-20 space-x-4'>
        <button className='hero-button' onClick={() => window.location.hash = '#contact'}>
          Connect With Me
        </button>
        <a href={resumePDF} download="Robert_Mangaratua_Aritonang_Resume.pdf" className='hero-button'>
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;

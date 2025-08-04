import React, { useState, useEffect } from 'react';
import hamza00Photo from '../assets/hamza00.png';

const About = () => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = React.useMemo(() => [
    "Hi, I'm Hamza Jadoon",
    " Mobile App Developer",
    " Flutter Specialist",
  ], []);

  useEffect(() => {
    const currentText = texts[textIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayText(currentText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <section
      id="about"
      className="about bg-white relative"
      style={{ 
        minHeight: '100vh',
        height: 'auto',
        paddingTop: '130px', // header height
        paddingBottom: '40px', // bottom padding for buttons
        backgroundImage: `url(${hamza00Photo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-0" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 h-full min-h-screen flex items-center">
        <div className="hero flex flex-col md:flex-row items-center justify-center w-full py-8 sm:py-12">
          {/* Left: Text Content */}
          <div className="hero-content md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            {/* Typewriter heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white" 
                style={{ minHeight: '50px' }}>
              <span className="highlight text-blue-400">
                {displayText}
                <span style={{ 
                  display: 'inline-block',
                  width: '3px',
                  height: '1em',
                  backgroundColor: '#60a5fa',
                  marginLeft: '2px',
                  animation: 'blink 1s infinite'
                }}>|</span>
              </span>
            </h1>
            
            {/* Subtitle */}
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-4 sm:mb-6">
              Mobile App Developer | Flutter Specialist
            </h2>
            
            {/* Description */}
            <p className="text-gray-100 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
              I specialize in building high-performance, cross-platform mobile applications using Flutter, Dart, and Firebase. 
              My passion lies in delivering responsive user experiences, efficient backend integrations, and scalable app architecture. 
              With experience in Android & iOS development, real-time communication, and cloud computing, I turn ideas into functional mobile products.
            </p>
            
            {/* Buttons */}
            <div className="hero-buttons flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center md:justify-start">
              <button 
                className="btn primary bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 text-base sm:text-lg w-full sm:w-auto min-w-[140px]"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </button>
              <button 
                className="btn secondary border-2 border-blue-400 hover:bg-blue-400 hover:text-white text-blue-200 px-6 py-3 rounded-lg transition-all duration-300 text-base sm:text-lg w-full sm:w-auto min-w-[140px]"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default About;
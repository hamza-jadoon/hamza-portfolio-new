import React, { useState, useEffect } from 'react';
import hamzaPhoto from '../assets/hamza.png';

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
      className="about bg-white py-12 relative"
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="hero flex flex-col md:flex-row items-center">
          {/* Left: Text Content */}
          <div className="hero-content md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl font-bold mb-2 text-white" style={{ minHeight: '50px' }}>
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
            <h2 className="text-xl text-gray-200 mb-4">Mobile App Developer | Flutter Specialist</h2>
            <p className="text-gray-100 mb-6">
              I specialize in building high-performance, cross-platform mobile applications using Flutter, Dart, and Firebase. 
              My passion lies in delivering responsive user experiences, efficient backend integrations, and scalable app architecture. 
              With experience in Android & iOS development, real-time communication, and cloud computing, I turn ideas into functional mobile products.
            </p>
            <div className="hero-buttons flex gap-4">
              <button 
                className="btn primary bg-blue-600 text-white px-4 py-2 rounded"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </button>
              <button 
                className="btn secondary border border-blue-400 text-blue-200 px-4 py-2 rounded"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="hero-image flex justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-md">
              <img 
                src={hamzaPhoto} 
                alt="Hamza" 
                style={{ 
                  width: '300px', 
                  height: '300px', 
                  borderRadius: '50%', 
                  objectFit: 'cover', 
                  objectPosition: 'top'
                }} 
              />
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
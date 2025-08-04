import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Add scroll effect to header
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 12px 40px rgba(0,0,0,0.2)';
      } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 8px 32px rgba(0,0,0,0.15)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add click ripple effect
  const handleButtonClick = (e, sectionId) => {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: radial-gradient(circle, rgba(102, 126, 234, 0.4) 0%, transparent 70%);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s ease-out;
      pointer-events: none;
      z-index: 1;
    `;
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);

    scrollToSection(sectionId);
  };

  return (
    <>
      <style>
        {`
          @keyframes ripple {
            to {
              transform: scale(2);
              opacity: 0;
            }
          }

          @keyframes slideDown {
            from { 
              transform: translateY(-100%); 
              opacity: 0; 
            }
            to { 
              transform: translateY(0); 
              opacity: 1; 
            }
          }

          @keyframes textGlow {
            0% { 
              filter: brightness(1); 
              text-shadow: 0 0 5px rgba(102, 126, 234, 0.3);
            }
            100% { 
              filter: brightness(1.3); 
              text-shadow: 0 0 20px rgba(102, 126, 234, 0.6), 0 0 30px rgba(118, 75, 162, 0.4);
            }
          }

          @keyframes logoFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-3px) rotate(0.5deg); }
            75% { transform: translateY(3px) rotate(-0.5deg); }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(20px); }
          }

          .header {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(15px);
            box-shadow: 0 8px 32px rgba(0,0,0,0.15);
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
            animation: slideDown 1s ease-out;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          }

          .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="1" fill="rgba(102,126,234,0.3)"><animate attributeName="cy" values="20;80;20" dur="4s" repeatCount="indefinite"/></circle><circle cx="50" cy="60" r="1.5" fill="rgba(118,75,162,0.4)"><animate attributeName="cy" values="60;10;60" dur="6s" repeatCount="indefinite"/></circle><circle cx="80" cy="40" r="1" fill="rgba(240,147,251,0.3)"><animate attributeName="cy" values="40;90;40" dur="5s" repeatCount="indefinite"/></circle></svg>') repeat;
            opacity: 0.6;
            animation: float 10s ease-in-out infinite;
            pointer-events: none;
          }

          .logo {
            position: relative;
            overflow: hidden;
          }

          .logo h1 {
            background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-size: 1.8rem;
            font-weight: 800;
            animation: textGlow 3s ease-in-out infinite alternate, logoFloat 4s ease-in-out infinite;
            cursor: pointer;
            transition: transform 0.3s ease;
            margin: 0;
          }

          .logo h1:hover {
            transform: scale(1.05);
          }

          .logo p {
            color: #4a5568;
            font-size: 0.9rem;
            margin: 0;
            opacity: 0.8;
          }

          .nav ul {
            display: flex;
            list-style: none;
            gap: 1rem;
            margin: 0;
            padding: 0;
          }

          .nav li {
            animation: fadeInUp 0.8s ease-out forwards;
            opacity: 0;
            transform: translateY(20px);
          }

          .nav li:nth-child(1) { animation-delay: 0.2s; }
          .nav li:nth-child(2) { animation-delay: 0.4s; }
          .nav li:nth-child(3) { animation-delay: 0.6s; }
          .nav li:nth-child(4) { animation-delay: 0.8s; }

          .nav button {
            background: linear-gradient(45deg, transparent, transparent);
            border: 2px solid transparent;
            color: #2d3748;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            padding: 0.8rem 1.5rem;
            border-radius: 30px;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .nav button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, 
              transparent, 
              rgba(102, 126, 234, 0.3), 
              rgba(118, 75, 162, 0.3),
              transparent
            );
            transition: left 0.6s ease;
          }

          .nav button::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%);
            transition: all 0.4s ease;
            transform: translate(-50%, -50%);
            border-radius: 50%;
          }

          .nav button:hover::before {
            left: 100%;
          }

          .nav button:hover::after {
            width: 200px;
            height: 200px;
          }

          .nav button:hover {
            color: #667eea;
            background: rgba(102, 126, 234, 0.1);
            border: 2px solid rgba(102, 126, 234, 0.3);
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
          }

          .nav button:active {
            transform: translateY(-1px) scale(1.02);
          }

          .hamburger {
            display: none;
            flex-direction: column;
            cursor: pointer;
            padding: 10px;
            border-radius: 8px;
            transition: all 0.3s ease;
            position: relative;
            z-index: 1001;
          }

          .hamburger:hover {
            background: rgba(102, 126, 234, 0.1);
            transform: scale(1.1);
          }

          .hamburger span {
            width: 28px;
            height: 3px;
            background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
            margin: 4px 0;
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            border-radius: 3px;
            transform-origin: center;
            display: block;
          }

          .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(9px, 9px);
            background: linear-gradient(90deg, #f093fb, #764ba2);
          }

          .hamburger.active span:nth-child(2) {
            opacity: 0;
            transform: scale(0);
          }

          .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(9px, -9px);
            background: linear-gradient(90deg, #f093fb, #764ba2);
          }

          @media (max-width: 768px) {
            .hamburger {
              display: flex;
            }

            .nav {
              display: none;
              position: absolute;
              top: 100%;
              left: 0;
              width: 100%;
              background: rgba(255, 255, 255, 0.98);
              backdrop-filter: blur(15px);
              box-shadow: 0 8px 32px rgba(0,0,0,0.15);
              border-radius: 0 0 15px 15px;
              animation: slideDown 0.3s ease-out;
            }

            .nav.active {
              display: block;
            }

            .nav ul {
              flex-direction: column;
              padding: 1rem;
              gap: 0.5rem;
            }

            .nav button {
              width: 100%;
              text-align: left;
              justify-content: flex-start;
              border-radius: 15px;
              text-transform: none;
              letter-spacing: normal;
            }

            .logo h1 {
              font-size: 1.5rem;
            }

            .logo p {
              font-size: 0.8rem;
            }
          }
        `}
      </style>
      
      <header className="header">
        <div className="container flex justify-between items-center py-4 px-6">
          {/* Logo or Name */}
          <div className="logo">
            <h1>Hamza Jadoon</h1>
            {/* <p>Full Stack Developer</p> */}
          </div>

          {/* Navigation Menu */}
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li>
                <button onClick={(e) => handleButtonClick(e, 'about')}>
                  About Me
                </button>
              </li>
              <li>
                <button onClick={(e) => handleButtonClick(e, 'skills')}>
                  Skills
                </button>
              </li>
              <li>
                <button onClick={(e) => handleButtonClick(e, 'projects')}>
                  Projects
                </button>
              </li>
              <li>
                <button onClick={(e) => handleButtonClick(e, 'contact')}>
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          {/* Hamburger Icon */}
          <div 
            className={`hamburger md:hidden ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
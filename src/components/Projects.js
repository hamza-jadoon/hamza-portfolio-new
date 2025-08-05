import React from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Islamic Prayer Time App',
      description:
        'A Flutter-based mobile app that provides accurate global prayer times with real-time updates and customizable notifications.',
      technologies: ['Flutter', 'Hive DB', 'Dart', 'Notifications'],
      liveUrl: '#',
      githubUrl: 'https://github.com/hamza-jadoon/prayer_time',
      imageUrl: image2,
    },
    {
      id: 2,
      title: 'Bedtime Stories App',
      description:
        'A curated collection of bedtime stories for children with soothing narratives and exciting adventures.',
      technologies: ['Flutter', 'Dart', 'UI/UX', 'Hive'],
      liveUrl: '#',
      githubUrl: 'https://github.com/hamza-jadoon/bedtime_stories',
      imageUrl: image1, // Changed from image1 to image2
    },
    {
      id: 3,
      title: 'Rate Your Mental Health',
      description:
        'An app to help users assess and monitor their mental well-being with tools focused on mood, anxiety, depression, and stress.',
      technologies: ['Flutter', 'Firebase', 'Riverpod', 'Dart'],
      liveUrl: '#',
      githubUrl: 'https://github.com/hamza-jadoon/mental_health_app',
      imageUrl: image3, // Changed from image1 to image3
    },
  ];

  return (
    <section id="projects" className="projects py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-3xl font-bold mb-10 text-center">My Projects</h2>
        <div className="projects-grid grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card bg-gray-100 p-6 rounded shadow">
              <div className="project-image mb-4 relative">
                {/* Blue gradient background container */}
                <div className="bg-gradient-to-br from-blue-400 to-purple-500 h-48 rounded-lg p-4 flex items-center justify-center">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                      // Hide image if it fails to load and show placeholder text
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<span class="text-white font-medium text-lg">Project Screenshot</span>';
                    }}
                  />
                </div>
              </div>
              <div className="project-content">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="project-technologies flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links flex gap-4">
                  <a 
                    href={project.liveUrl} 
                    className="btn primary text-blue-600 font-medium hover:text-blue-800 transition-colors" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    className="btn secondary text-gray-700 font-medium hover:text-gray-900 transition-colors" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
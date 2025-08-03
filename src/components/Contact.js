import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-3xl font-bold mb-10 text-center">Get In Touch</h2>
        
        <div className="contact-content grid md:grid-cols-2 gap-10">
          <div className="contact-info">
            <h3 className="text-xl font-semibold mb-4">Let’s work together!</h3>
            <p className="text-gray-700 mb-6">
              I’m open to freelance opportunities, collaborations, or full-time roles in mobile development. 
              If you have an idea, a project, or just want to say hello — feel free to reach out!
            </p>

            <div className="contact-details space-y-3">
              <div className="contact-item">
                <strong>Email:</strong> <span>hamzajadoon365@gmail.com</span>
              </div>
              <div className="contact-item">
                <strong>Phone (PK):</strong> <span>+92 311 5811841</span>
              </div>
              <div className="contact-item">
                <strong>Phone (UAE):</strong> <span>+971 58 611 8105</span>
              </div>
              <div className="contact-item">
                <strong>Location:</strong> <span>Pakistan / UAE (Remote-friendly)</span>
              </div>
            </div>

            <div className="social-links mt-6 flex gap-4">
              <a href="https://www.linkedin.com/in/hamza-jadoon-6836a62a3/" className="text-blue-600" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/hamza-jadoon" className="text-gray-800" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded"
                required
              />
            </div>
            <div className="form-group mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded"
                required
              />
            </div>
            <div className="form-group mb-4">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn bg-blue-600 text-white px-6 py-2 rounded">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

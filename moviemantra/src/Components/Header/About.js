import React from 'react';
import './About.css';
const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <div className="overlay"></div>
        <h1>About Movie Mantra</h1>
        <p>Discover the latest movies, explore reviews, and find your next favorite film!</p>
      </div>

      <div className="about-content">
        <h2>Meet the Creator</h2>
        <div className="about-card">
          <img src="https://png.pngtree.com/thumb_back/fw800/background/20231120/pngtree-clipart-a-compelling-movie-poster-background-image_14645888.jpg" alt="Devesh Sharma" className="about-photo"/>
          <div className="about-info">
            <h3>Devesh Sharma</h3>
            <p>
              Hi, I’m Devesh Sharma from Agra, UP. I recently completed my BTech from GLA University, 
              and I’m passionate about web development and software engineering. 
              I’ve built Movie Mantra as a way to combine my love for movies and coding.
            </p>
            <p>
              I'm currently learning React and have completed projects like Trek Venture, 
              a platform for exploring campgrounds. 
              I've also taken a JOVAC course on frontend development technologies like HTML, 
              CSS, JavaScript, and React.
            </p>
            <p>Feel free to reach out at <a href="mailto:sdevesh890@gmail.com">sdevesh890@gmail.com</a></p>
          </div>
        </div>
      </div>
      
      <div className="about-footer">
        <p>Phone: +91 8909729014</p>
        <p>&copy; 2024 Movie Mantra. All rights reserved.</p>
      </div>
    </div>
  );
};

export default About;

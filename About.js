import React from 'react';
import './About.css';
import AboutImage from './Aboutus.jpg'; // Replace with the correct image path

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={AboutImage} alt="About Our Vision" />
        </div>
        <div className="about-content">
          <h2>About Our Vision</h2>
          <p>
            Attention-Deficit/Hyperactivity Disorder (ADHD) significantly impacts children’s attention,
             hyperactivity, and impulsivity, often leading to challenges with traditional treatments such as 
             medication and behavioral therapy. This project explores the potential of Virtual Reality (VR) as a therapeutic
             tool to engage children aged 6-11 with ADHD. 
          
            By utilizing VR’s immersive and interactive capabilities, we aim to develop a tailored intervention
             that directly addresses ADHD symptoms through engaging tasks and games, progress tracking, 
             and age-appropriate content to enhance therapeutic effectiveness.
          
            Addressing the challenges of content development and ethical considerations, this project seeks 
            to demonstrate the efficacy of VR as a complementary treatment, ultimately providing clinicians and parents
              with a valuable resource to improve the lives of children with ADHD.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

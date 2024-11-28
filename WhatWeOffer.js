import React from 'react';
import './WhatWeOffer.css';
import GameSpaceImage from './Game.jpg'; // Replace with your actual image path
import PuzzleAreaImage from './puzzles.jpg'; // Replace with your actual image path
import CoolDownZonesImage from './Cool.jpg'; // Replace with your actual image path

const WhatWeOffer = () => {
  return (
    <section className="what-we-offer-section">
      <div className="offer-container">
        <h2>What we offer</h2>
        <p className="offer-intro">
        We offer an innovative suite of VR-based games, puzzles, and calming experiences
         designed to help children aged 6-11 manage ADHD effectively. Our engaging games 
         enhance focus, problem-solving, and cognitive skills, while immersive puzzles encourage 
         attention and spatial reasoning. Additionally, our soothing cooldown zones provide a relaxing
          virtual environment, promoting emotional balance and reducing stress. Developed with insights 
          from experts, our solutions are tailored to support both therapeutic goals and enjoyable experiences, 
          empowering children to thrive in a supportive, interactive space.
        </p>
        <div className="offer-grid">
          <div className="offer-item">
            <img src={GameSpaceImage} alt="Games Space" />
            <h3>Games Space</h3>
            <p>VR game tailored for attention improvement, children with ADHD can experience enhanced
                 sustained focus and a better ability to filter distractions, which supports
                  cognitive growth and task prioritization</p>
          </div>
          <div className="offer-item">
            <img src={PuzzleAreaImage} alt="Puzzle Area" />
            <h3>Puzzle Area</h3>
            <p>VR puzzles helps children with ADHD develop stronger problem-solving skills, 
                enhance their sustained attention, and improve spatial reasoning abilities
                 while making learning engaging and interactive</p>
          </div>
          <div className="offer-item">
            <img src={CoolDownZonesImage} alt="Cool Down Zones" />
            <h3>Cool Down Zones</h3>
            <p>VR cooldown zones promotes mental relaxation in children with ADHD by reducing stress, 
                improving emotional regulation, and fostering a calm state through immersive,
                 soothing environments and guided mindfulness techniques</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;

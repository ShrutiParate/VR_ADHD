import React, { useState } from "react";
import "./Questions.css";

const questions = [
  {
    question: "What is VRJoy?",
    answer:
      "VRJoy is a pioneering platform at the intersection of healthcare and Extended Reality (VR) technology. It provides VR therapeutic applications to enhance child care through immersive experiences. These tools are used for mental health, inattention, and cognitive improvement.",
  },
  {
    question: "What is Virtual Reality?",
    answer:
      "Virtual Reality (VR) is a simulated experience that can mimic or completely differ from the real world. It immerses users in a three-dimensional, interactive environment using VR headsets and controllers.",
  },
  {
    question: "What is Virtual Reality therapy?",
    answer:
      "VR therapy uses immersive virtual environments to help manage physical and mental health conditions. It provides engaging, controlled settings for treatments such as relaxation exercises, cognitive therapy.",
  },
  {
    question: "Who is this for?",
    answer:
      "This therapy is designed for individuals across age groups between 6-11 years, which includes children who are managing mental health challenges, recovering from physical injuries, or seeking cognitive development tools.",
  },
  {
    question: "How is Virtual Reality therapy applied in healthcare?",
    answer:
      "VR therapy is applied in healthcare for pain management, mental health treatments (like anxiety or PTSD), physical therapy, and cognitive rehabilitation. It provides an immersive and controlled environment for targeted care.",
  },
  {
    question: "Which conditions can be addressed through Virtual Reality therapy?",
    answer:
      "Conditions such as chronic pain, anxiety, PTSD, ADHD, depression, autism spectrum disorder, and physical injuries can be addressed with VR therapy.",
  },
  {
    question: "Is Virtual Reality therapy safe?",
    answer:
      "Yes, VR therapy is generally safe when administered under professional guidance. Potential side effects, like motion sickness, are rare and can often be mitigated by tailoring the VR experience to the user.",
  },
];

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="questions-section">
      <div className="questions-container">
        <h2 className="questions-heading">Questions?</h2>
        <div className="questions-list">
          {questions.map((item, index) => (
            <div
              className={`question-item ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <div
                className="question-title"
                onClick={() => toggleAnswer(index)}
              >
                <h3>{item.question}</h3>
                <span className="arrow-icon">
                  {activeIndex === index ? "▲" : "▼"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="question-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;

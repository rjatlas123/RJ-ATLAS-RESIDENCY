import React, { useState } from "react";
import "./ChatBot.css";
import { FaComments, FaTimes } from "react-icons/fa";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    residencyType: "",
    message: ""
  });

  const questions = [
    { key: "name", question: "What is your full name?" },
    { key: "phone", question: "Please provide your phone number." },
    { key: "residencyType", question: "What type of residency are you enquiring about? (e.g., Apartment, Villa)" },
    { key: "message", question: "Any specific requirements or questions?" }
  ];

  const handleSubmit = () => {
    console.log("Residency Enquiry Data:", formData);
    alert("Your enquiry has been submitted! We will contact you soon.");
    setIsOpen(false);
    setStep(0);
    setFormData({ name: "", phone: "", residencyType: "", message: "" });
  };

  const handleAnswer = (value) => {
    setFormData({ ...formData, [questions[step].key]: value });
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  return (
    <div className="chatbot-container">
      {/* Toggle Button */}
      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaComments />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">Residency Enquiry Bot</div>
          <div className="chat-body">
            <p className="bot-message">{questions[step].question}</p>
            <input
              type="text"
              className="chat-input"
              value={formData[questions[step].key]}
              onChange={(e) =>
                setFormData({ ...formData, [questions[step].key]: e.target.value })
              }
              placeholder="Type your answer..."
            />
            <button
              className="send-btn"
              onClick={() => handleAnswer(formData[questions[step].key])}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;

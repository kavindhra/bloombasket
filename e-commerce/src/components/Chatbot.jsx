// src/components/Chatbot.jsx
import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm ShopHub Assistant 🤖. How can I help you today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    if (!input.trim() || loading) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    // Simulated response — no API call, no key
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Thanks for your message! This is a demo version. Real AI responses will be available soon 😊",
        sender: 'bot'
      }]);
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      {/* Robot Toggle Button - Top Right */}
      <button className="chatbot-toggle-top" onClick={() => setIsOpen(!isOpen)}>
        🤖
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window-top">
          <div className="chatbot-header">
            <div className="header-title">
              <span className="robot-icon">🤖</span>
              <h3>ShopHub Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="close-btn">×</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.sender}`}>
                <p>{msg.text}</p>
              </div>
            ))}
            {loading && <div className="message bot loading">Thinking...</div>}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              disabled={loading}
            />
            <button onClick={handleSend} disabled={loading}>
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
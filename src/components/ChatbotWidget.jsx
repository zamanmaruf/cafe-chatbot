import React, { useState } from "react";
import "./ChatbotWidget.css";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  return (
    <div className="chatbot-widget">
      {open ? (
        <div className="chatbot-frame-container">
          <button className="chatbot-close" onClick={() => setOpen(false)}>&times;</button>
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/your-bot-id" // Replace with your bot's URL
            title="BrewBot"
            width="350"
            height="500"
            style={{ border: "none", borderRadius: 12 }}
          />
          <div className="chatbot-powered">Powered by AI</div>
        </div>
      ) : (
        <button className="chatbot-open" onClick={() => setOpen(true)}>
          <span role="img" aria-label="robot">🤖</span> Chat with BrewBot
        </button>
      )}
    </div>
  );
} 
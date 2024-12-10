import React from 'react';
import "../../app/globals.css";

const MessageItem = ({ message }) => {
  return (
    <li className={`conversation-item ${message.sender === 'me' ? 'me' : ''}`}>
      <div className="conversation-item-side">
        <img className="conversation-item-image" src={message.image} alt="Profile" />
      </div>
      <div className="conversation-item-content">
        <div className="conversation-item-wrapper">
          <div className="conversation-item-box">
            <div className="conversation-item-text">
              <p>{message.text}</p>
              <div className="conversation-item-time">{message.time}</div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default MessageItem;

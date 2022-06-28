import React from "react";

import "./Input.css";

const Input = ({ name, message, setMessage, sendMessage }) => (
  
  <form className="form">
    <input
      type="text"
      className="input"
      placeholder={(name.charAt(0).toUpperCase() + name.slice(1)) + ", Type a message.."}
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <button className="sendButton" onClick={(event) => sendMessage(event)}>
      Send
    </button>
  </form>
);

export default Input;

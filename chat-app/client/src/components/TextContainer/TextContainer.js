import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {users ? (
      <div>
        <div>
          <h2>
            Welcome to the Chat App{" "}
            <span role="img" aria-label="emoji">
              💬
            </span>
          </h2>
          <p>
            Chat with your friends online{" "}
            <span role="img" aria-label="emoji">
              😀
            </span>
          </p>
          <p>Share the link and the RoomCode with them</p>
          <code>
            {window.location.href.slice(
              0,
              window.location.href.indexOf("/chat")
            )}
          </code>
          <p className="bottom"></p>
        </div>

        <h2 className="peopleOnline">People Online:</h2>
        <div className="activeContainer">
          <h3>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                <img src={onlineIcon} alt="Online Icon" />
                {name}
              </div>
            ))}
          </h3>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;

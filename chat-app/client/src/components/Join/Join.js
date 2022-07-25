import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Welcome!</h1>
        <h2 className="h2Heading">Please Enter your Name and RoomCode</h2>
        <div>
          <input
            type="text"
            className="joinInput"
            id=""
            placeholder="Enter your Name"
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            className="joinInput mt-20"
            id=""
            placeholder="Enter your RoomCode"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="joinButton mt-20" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;

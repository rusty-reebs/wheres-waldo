// Message.js

import React from "react";

const Message = (props) => {
  return (
    <div className="Message-container">
      <div className="Message-box">
        <h2>{props.message}</h2>
        {props.toggleInput && (
          <form onSubmit={props.handleSubmit}>
            <input
              onChange={props.handleInputChange}
              value={props.userName}
              type="text"
              placeholder="Enter your name..."
              required={true}
            ></input>
          </form>
        )}
      </div>
    </div>
  );
};

export default Message;

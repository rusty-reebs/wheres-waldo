// Message.js

import React from "react";

const Message = (props) => {
  return (
    <div className="Message-container">
      <div className="Message-box">
        <h2>{props.message}</h2>
      </div>
    </div>
  );
};

export default Message;

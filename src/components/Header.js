// Header.js

import React from "react";

const imageWaldo = require("../img/waldo-1.png");
const imageWenda = require("../img/wenda-1.png");
const imageWizard = require("../img/wizard-1.png");
const imageOdlaw = require("../img/odlaw-1.png");

const Header = (props) => {
  const charState = props.charState;

  return (
    <div className="Header">
      <div className="Header-title">
        <h1>Where's Waldo?</h1>
        <p>A project coded with React and Firebase</p>
      </div>
      <h3>Left to find:</h3>
      {/* check found state, if true, then change opacity */}
      <div className="Header-char">
        <p>Waldo</p>
        <img src={imageWaldo.default} alt="Waldo" />
      </div>
      <div className="Header-char">
        <p>Wenda</p>
        <img src={imageWenda.default} alt="Wenda" />
      </div>
      <div className="Header-char">
        <p>Wizard</p>
        <img src={imageWizard.default} alt="Wizard" />
      </div>
      <div className="Header-char">
        <p>Odlaw</p>
        <img src={imageOdlaw.default} alt="Odlaw" />
      </div>
      <h1>Time: 0:00</h1>
    </div>
  );
};

export default Header;

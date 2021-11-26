// Dropdown.js

import React from "react";

const imageWaldo = require("../img/waldo-1.png");
const imageWenda = require("../img/wenda-1.png");
const imageWizard = require("../img/wizard-1.png");
const imageOdlaw = require("../img/odlaw-1.png");

const Dropdown = (props) => {
  let popupLocation = {};
  popupLocation["--popup-left"] = props.left + 20 + "px";
  popupLocation["--popup-top"] = props.top + 10 + "px";
  console.log(props.left);
  console.log(props.top);
  console.log("popupLocation", popupLocation);

  return (
    <div>
      {props.toggleDropdown && (
        <div className="Dropdown" style={popupLocation}>
          <div className="Dropdown-table">
            {/* set the x and y with props? */}
            <div className="Dropdown-row">
              <img src={imageWaldo.default} alt="Waldo" />
              <p>Waldo</p>
            </div>
            <div className="Dropdown-row">
              <img src={imageWenda.default} alt="Wenda" />
              <p>Wenda</p>
            </div>
            <div className="Dropdown-row">
              <img src={imageWizard.default} alt="Wizard" />
              <p>Wizard</p>
            </div>
            <div className="Dropdown-row">
              <img src={imageOdlaw.default} alt="Odlaw" />
              <p>Odlaw</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

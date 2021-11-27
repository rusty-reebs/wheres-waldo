// Dropdown.js

import React from "react";

const imageWaldo = require("../img/waldo-1.png");
const imageWenda = require("../img/wenda-1.png");
const imageWizard = require("../img/wizard-1.png");
const imageOdlaw = require("../img/odlaw-1.png");

const Dropdown = (props) => {
  const charLocations = props.charLocations;
  //   console.log("charLocations", charLocations);
  const rect = props.rect;

  let popupLocation = {};
  popupLocation["--popup-left"] = props.left + 20 + "px";
  popupLocation["--popup-top"] = props.top + 10 + "px";

  let userX = props.userCoords[0];
  let userY = props.userCoords[1];

  const checkForMatch = (char) => {
    if (props.toggleDropdown) {
      console.log("userX", userX);
      console.log("userY", userY);
      let character = charLocations.find((charact) => charact.name === char);
      console.log(character);

      //   console.log(character.name, "x min", rect.width * 0.4912 * 0.9);
      //   console.log(character.name, "x max", rect.width * 0.4912 * 1.1);
      //   console.log(character.name, "y min", rect.height * 0.41619 * 0.9);
      //   console.log(character.name, "y max", rect.height * 0.41619 * 1.1);

      if (
        userX > rect.width * character.coords.x * 0.9 &&
        userX < rect.width * character.coords.x * 1.1 &&
        userY > rect.height * character.coords.y * 0.9 &&
        userY < rect.height * character.coords.y * 1.1
      ) {
        console.log("you found", character.name);
      }
    }
  };

  //TODO add onClick to Dropdown-row, pass char name to function that checks for matching coords

  return (
    <div>
      {props.toggleDropdown && (
        <div className="Dropdown" style={popupLocation}>
          <div className="Dropdown-table">
            {/* check found state, if true, then do not render */}
            <div className="Dropdown-row" onClick={checkForMatch("Waldo")}>
              <img src={imageWaldo.default} alt="Waldo" />
              <p>Waldo</p>
            </div>
            <div className="Dropdown-row" onClick={checkForMatch("Wenda")}>
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

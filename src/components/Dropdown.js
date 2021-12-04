// Dropdown.js

import React from "react";

const Dropdown = (props) => {
  const charLocations = props.charLocations;
  const gameDimensions = props.gameDimensions;
  let userX = props.userCoords[0];
  let userY = props.userCoords[1];

  let dropdownLocation = {};
  dropdownLocation["--dropdown-left"] = userX + 20 + "px";
  dropdownLocation["--dropdown-top"] = userY + 90 + "px";

  const checkForMatch = (char) => {
    let character = charLocations.find((charact) => charact.name === char);
    if (
      userX > gameDimensions.width * character.coords.x * 0.92 &&
      userX < gameDimensions.width * character.coords.x * 1.08 &&
      userY > gameDimensions.height * character.coords.y * 0.92 &&
      userY < gameDimensions.height * character.coords.y * 1.08
    ) {
      props.handleMessage("You found " + character.name + "!");
      props.setToggleMessageBox(true);
      setTimeout(() => {
        props.setToggleMessageBox(false);
        props.setToggleDropdown(false);
        props.handleFound(character.name);
      }, 1500);
    } else {
      props.handleMessage("That's not " + character.name + "!");
      props.setToggleMessageBox(true);
      setTimeout(() => {
        props.setToggleMessageBox(false);
        props.setToggleDropdown(false);
      }, 1500);
    }
  };

  return (
    <div>
      <div className="Dropdown" style={dropdownLocation}>
        <div className="Dropdown-table">
          {props.characterState.map((char) => {
            return !char.found ? (
              <div
                key={char.name}
                className="Dropdown-row"
                onClick={() => checkForMatch(char.name)}
              >
                <img src={char.image} alt={char.name} />
                <p>{char.name}</p>
              </div>
            ) : (
              false
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

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
    console.log("you clicked a row!", char);
    // if (props.toggleDropdown) {
    let character = charLocations.find((charact) => charact.name === char);
    if (
      userX > gameDimensions.width * character.coords.x * 0.95 &&
      userX < gameDimensions.width * character.coords.x * 1.05 &&
      userY > gameDimensions.height * character.coords.y * 0.95 &&
      userY < gameDimensions.height * character.coords.y * 1.05
    ) {
      console.log("you found", character.name);
      setTimeout(() => {
        props.setToggleDropdown(false);
      }, 500);
      console.log("on");
      props.handleMessage("You found " + character.name + "!");
      props.setToggleMessageBox(true);
      setTimeout(() => {
        console.log("off");
        props.setToggleMessageBox(false);
        props.handleFound(character.name);
        console.log(props.characterState);
      }, 1200);
    } else {
      setTimeout(() => {
        props.setToggleDropdown(false);
      }, 500);
      console.log("on");
      props.handleMessage("That's not " + character.name + "!");
      props.setToggleMessageBox(true);
      setTimeout(() => {
        console.log("off");
        props.setToggleMessageBox(false);
      }, 1200);
    }
    // }
  };

  return (
    <div>
      <div className="Dropdown" style={dropdownLocation}>
        <div className="Dropdown-table">
          {charLocations.map((char) => (
            <div
              key={char.name}
              className="Dropdown-row"
              onClick={() => checkForMatch(char.name)}
            >
              <img src={char.coords.image} alt={char.name} />
              <p>{char.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

// Dropdown.js

import React from "react";

const Dropdown = (props) => {
  const charLocations = props.charLocations;
  const gameSize = props.gameSize;
  let userX = props.userCoords[0];
  let userY = props.userCoords[1];

  let dropdownLocation = {};
  dropdownLocation["--dropdown-left"] = userX + 20 + "px";
  dropdownLocation["--dropdown-top"] = userY + 90 + "px";

  //? useEffect componentdidmount

  const checkForMatch = (char) => {
    console.log("you clicked a row!", char);
    // if (props.toggleDropdown) {
    let character = charLocations.find((charact) => charact.name === char);
    if (
      userX > gameSize.width * character.coords.x * 0.95 &&
      userX < gameSize.width * character.coords.x * 1.05 &&
      userY > gameSize.height * character.coords.y * 0.95 &&
      userY < gameSize.height * character.coords.y * 1.05
    ) {
      console.log("you found", character.name);
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

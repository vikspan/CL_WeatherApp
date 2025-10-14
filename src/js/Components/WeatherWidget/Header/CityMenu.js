import React from "react";
import "./CityMenu.scss";

const CityMenu = ({ cities, setCity }) => {

  return (
    <div className="widget__header--menu" >
      {
        cities.map(city => (
          <button
            key={city}
            type="button"
            className="widget__header--menu-item"
            onClick={() => setCity(city)}
          >
            {city}
          </button>
        ))
      }
    </div>
  );
}

export default CityMenu;

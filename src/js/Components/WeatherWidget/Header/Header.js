import React from "react";
import styles from "./Header.scss";
import CityMenu from "./CityMenu";

const Header = (props) => {
  const { cities, setCity, city, temp, state } = props;

  return (
    <div className="widget__header">
      <CityMenu cities={cities} setCity={setCity} />
      <div className="widget__header--city" >{city}</div>
      <h1 className="widget__header--temp">{temp}°C</h1>
      <div className="widget__header--state">{state}</div>
    </div>
  )
}

export default Header;
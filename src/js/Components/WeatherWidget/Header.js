import React from "react";
import styles from "./Header.scss";

const Header = (props) => {
    const {city, temp, state} = props;
    return (
        <div className="widget__header">
            <h1 className="widget__header--city" >{city}</h1>
            <div className="widget__header--temp">{temp}°C</div>
            <div className="widget__header--state">{state}</div>
        </div>
    )
}

export default Header;
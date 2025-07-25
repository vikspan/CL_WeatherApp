import React from "react";
import styles from "./Header.scss";

const Header = (props) => {
    return (
        <div className="widget__header">
            <h1 className="widget__header--city" >Ljubljana</h1>
            <div className="widget__header--temp">20°C</div>
            <div className="widget__header--state">Clear</div>
        </div>
    )
}

export default Header;
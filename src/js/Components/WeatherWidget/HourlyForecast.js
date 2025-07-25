import React from "react";
import styles from "./HourlyForecast.scss";

const HourlyForecast = (props) => {
    return (
        <div className="hourly__forecast">
            <div className="hourly__forecast--item">
                <span>20:00</span>
                <span>IKONA</span>
                <span>18°C</span>
            </div>
            <div className="hourly__forecast--item">
                <span>20:00</span>
                <span>IKONA</span>
                <span>18°C</span>
            </div>
        </div>
    )
}

export default HourlyForecast;
import React from "react";
import styles from "./HourlyForecast.scss";

const HourlyForecast = (props) => {
    const { forecast } = props;
    console.log(forecast);
    return (
        <div className="hourly__forecast">
            {
                forecast.map((el, i) => {
                    const {hour, state, temperature} = el;
                    return (
                        <div key={i} className="hourly__forecast--item">
                            <span>{hour}</span>
                            <span>{state}</span>
                            <span>{temperature}°C</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default HourlyForecast;
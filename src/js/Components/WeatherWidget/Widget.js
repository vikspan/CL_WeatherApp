import React from "react";
import styles from "./Widget.scss";
import Header from "./Header";
import HourlyForecast from "./HourlyForecast"

const Widget = (props) => {
    const {city, currentTemperature, state} = props.data;
    return (
        <section className="widget__section">
            <Header city={city} temp={currentTemperature} state={state} />
            <HourlyForecast />
        </section>
    )
}

export default Widget;

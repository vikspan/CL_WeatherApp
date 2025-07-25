import React from "react";
import styles from "./Widget.scss";
import Header from "./Header";
import HourlyForecast from "./HourlyForecast"

const Widget = (props) => {
    return (
        <section className="widget__section">
            <Header />
            <HourlyForecast />
        </section>
    )
}

export default Widget;

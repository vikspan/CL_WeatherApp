import React from "react";
import styles from "../../styles/main.scss";
import Widget from "./WeatherWidget/Widget";
import data from "../data/weather";

const App = () => {
    return (
        <Widget data={data[1]} />
    )
}

export default App;
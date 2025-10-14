import React, { useState } from "react";
import styles from "../../styles/main.scss";
import Widget from "./WeatherWidget/Widget";
import data from "../data/weather";

const App = () => {
  const cities = data.map(item => item.city);
  const [city, setCity] = useState(cities[0]);
  const selectedCityData = data.find(item => item.city === city);

  return (
    <Widget data={selectedCityData} setCity={setCity} cities={cities} />
  )
}

export default App;
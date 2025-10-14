import React from "react";
import styles from "./Widget.scss";
import Header from "./Header/Header";
import HourlyForecast from "./HourlyForecast/HourlyForecast"
import Details from "./Details/Details";

const Widget = (props) => {
  const { city, currentTemperature, state } = props.data;
  const { hourly } = props.data;
  const { details } = props.data;
  return (
    <section className="widget__section">
      <Header city={city} temp={currentTemperature} state={state} setCity={props.setCity} cities={props.cities}  />
      <HourlyForecast forecast={hourly} />
      <Details details={details} />
    </section>
  )
}

export default Widget;

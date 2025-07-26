import React from "react";
import styles from "./HourlyForecast.scss";

const HourlyForecast = (props) => {
  const { forecast } = props;
  console.log(forecast);
  return (
    <div className="hourly__forecast">
      {
        forecast.map((hour, i) => {
          const stateImg = `../../../assets/img/${hour.state}.png`;
          return (
            <div key={i} className="hourly__forecast--item">
              <span>{hour.hour}</span>
              <img src={stateImg} />
              <span>{hour.temperature}°C</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default HourlyForecast;
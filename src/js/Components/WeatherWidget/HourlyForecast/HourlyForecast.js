import React from "react";
import styles from "./HourlyForecast.scss";
import sunny from "../../../../assets/img/sunny.png";
import cloudy from "../../../../assets/img/cloudy.png";
import rainy from "../../../../assets/img/rainy.png";
import night from "../../../../assets/img/night.png";

const stateIcons = {
  sunny,
  cloudy,
  rainy,
  night
};

const HourlyForecast = (props) => {
  const { forecast } = props;

  return (
    <div className="hourly__forecast">
      {
        forecast.map((hour, i) => {
          return (
            <div key={i} className="hourly__forecast--item">
              <span>{hour.hour}</span>
              <img src={stateIcons[hour.state]} alt={hour.state} />
              <span>{hour.temperature}°C</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default HourlyForecast;
import React from "react";
import styles from "./Details.scss";
import sunriseIcon from "../../../../assets/img/sunrise.svg";
import sunsetIcon from "../../../../assets/img/sunset.svg";
import detailsIcon from "../../../../assets/img/details.svg";
import DetailsData from "./DetailsData";

const Details = (props) => {
  const { sunrise, sunset, realFeel, humidity, wind, pressure } = props.details;
  return (
    <div className="widget__details">
      <h2>Details</h2>
      <div className="widget__details__sun">
        <div className="widget__details__sun--sunrise">
          <img src={sunriseIcon} />
          <span>{sunrise}</span>
        </div>
        <div className="widget__details__sun--details">
          <img src={detailsIcon} />
        </div>
        <div className="widget__details__sun--sunset">
          <img src={sunsetIcon} />
          <span>{sunset}</span>
        </div>
      </div>
      <div className="widget__details__data">
        <DetailsData temp={realFeel} unit="°C" title="RealFeel" />
        <DetailsData temp={humidity} unit="%" title="Humidity" />
        <DetailsData temp={wind} unit="m/s" title="Wind" />
        <DetailsData temp={pressure} unit="hPa" title="Pressure" />
      </div>
    </div>
  )
}

export default Details;

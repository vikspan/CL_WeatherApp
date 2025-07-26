import React from "react";
import styles from "./DetailsData.scss";

const DetailsData = (props) => {
  const { temp, unit, title } = props;
  return (
    <div className="widget__details__data--item">
      <span className="widget__details__data--temp">{temp}{unit}</span>
      <span className="widget__details__data--title">{title}</span>
    </div>
  )
}

export default DetailsData;

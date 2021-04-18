import React from 'react';
import styles from './ForecastBlock.module.css';

const ForecastBlock = ({weather, main}) => {
  const toTitleCase = (str) => {
    return str.replace(
      /\w\S*|([а-я])\S*/gi,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }
  return (
    <div className={styles.forecast_wrapper}>
        <div className={styles.forecast}>
          {toTitleCase(weather.description)}
        </div>
        <div className={styles.degrees}>
          {Math.round(main.temp)}<span>&deg;</span>
        </div>
      </div>
  );
};

export default ForecastBlock;
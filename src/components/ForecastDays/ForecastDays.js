import React from 'react';
import styles from './ForecastDays.module.css';
import therm from '../../images/therm.png';
import humidity from '../../images/humidity.png';
import gauge from '../../images/gauge.png';
import windImg from '../../images/wind.png';

const ForecastDays = ({main, wind }) => {

  return (
    <div className={styles.forecast_tomorrow}>
      <div className={styles.info}>
        <div className={styles.info_item} >
            <img src={therm} alt='themperature'/>
            <h4>Відчувається як</h4>
            <p>{Math.round(main.feels_like)}&deg;</p>
        </div>
        <div className={styles.info_item} >
            <img src={humidity} alt='humidity'/>
            <h4>Вологість</h4>
            <p>{main.humidity}%</p>
        </div>
        <div className={styles.info_item} >
            <img src={gauge} alt='pressure'/>
            <h4>Тиск</h4>
            <p>{main.pressure} гПа</p>
        </div>
        <div className={styles.info_item} >
            <img src={windImg} alt='wind speed'/>
            <h4>Вітер</h4>
            <p>{wind.speed} км/год</p>
        </div>
      </div>
    </div>
  );
};

export default ForecastDays;
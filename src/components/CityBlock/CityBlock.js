import React from 'react';
import styles from './CityBlock.module.css';
import geo from '../../images/gps.png'

const CityBlock = ({name}) => {
  return (
    <div className={styles.city_wrapper}>
      <div className={styles.geo_icon}>
        <img src={geo} alt='Position'/>
      </div>
      <div className={styles.city_name}>
        {name}
      </div>
    </div>
  );
};

export default CityBlock;
import React from 'react';
import styles from './HeaderBlock.module.css';
import menu from '../../images/menu.png'
import { imageHelper } from './../../helpers/imageHelper';

const HeaderBlock = ({setIsModal, weather}) => {

  return (
    <div className={styles.top_block}>
      {weather.main && <img src={imageHelper(weather.main)} className={styles.forecast_img} alt='Forecast' />}
      <button className={styles.menu_btn} onClick={() => setIsModal(true)}>
        <img src={menu} className={styles.menu_btn_img}  alt='Menu'/>
      </button>
    </div>
  );
};

export default HeaderBlock;
import React, { useState } from 'react';
import styles from './Modal.module.css';
import geo from '../../images/gps.png'
import search from '../../images/search.png';
import { usePosition } from 'use-position';
import { connect } from 'react-redux';
import { setCoord, setCity } from '../../redux/reducer';

const Modal = (props) => {
  const { setIsModal } = props;
  const [ val, setVal ] = useState('');
  const { latitude, longitude } = usePosition(true, {enableHighAccuracy: true}); 

  const myLocation = () => {
    props.setCoord(latitude, longitude);
    setIsModal(false)
  }
  const findCity = (e) => {
    
    e.preventDefault();
    props.setCity(val);
    setIsModal(false);

  }
  return (
    <div className={styles.overlay} >
      <div className={styles.modal}>
        <button className={styles.closeIcon} onClick={() => setIsModal(false)}>&times;</button>
        <form className={styles.cityEnter} onSubmit={e => findCity(e)}>
            <input 
              className={styles.city_enter_field} 
              placeholder='Введіть ваше місто' 
              onChange={e => setVal(e.target.value)}
              value={val}
            />
            <button className={styles.city_find} type='submit'>
              <img src={search} className={styles.search_img} alt='Search'/>
            </button>
        </form>
        <div className={styles.findLocation}>
          <button className={styles.findLocation_btn} onClick={myLocation}>
            <img src={geo} className={styles.myLocation_img} alt='Position'/>
            <span className={styles.location_text}> Моє місцезнаходження </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { setCoord, setCity })(Modal);
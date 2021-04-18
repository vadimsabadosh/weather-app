import React from 'react';
import styles from './Modal.module.css';
import warn from '../../images/triangle.svg';

const ModalError = ({error, setAPIError}) => {

  return (
    <div className={styles.overlay} >
      <div className={styles.modal}>
        <button className={styles.closeIcon} onClick={() => setAPIError(null)}>&times;</button>
        
        <div className={styles.error_wrapper}>
            <img src={warn} alt=''/>
            <h3>{error}</h3>
        </div>
      </div>
    </div>
  );
};


export default ModalError;
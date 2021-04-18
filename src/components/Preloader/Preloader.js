import React from 'react';

const Preloader = () => {
  return (
    <div className='container'>
      <div className='loader-container'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className='spinner-container'>
        <div className="spinner-path">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
import React, { useEffect, useState } from 'react';
import './App.css';
import CityBlock from './components/CityBlock/CityBlock' ;
import ForecastBlock from './components/ForecastBlock/ForecastBlock';
import HeaderBlock from './components/HeaderBlock/HeaderBlock';
import ForecastDays from './components/ForecastDays/ForecastDays';
import Modal from './components/Modal/Modal';
import { setCity, setAPIError } from './redux/reducer';
import { connect } from 'react-redux';
import Preloader from './components/Preloader/Preloader';
import ModalError from './components/Modal/ModalError';

const App = (props) => {
  
  const [ isModal, setIsModal ] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('city')){
      props.setCity(localStorage.getItem('city'))
    }else{
      setIsModal(true)
    }
  },[])

  if(props.loading){
    return <Preloader />
  }
  return (
    <div className='main_app'>
      <HeaderBlock 
        weather={props.weather[0]} 
        setIsModal={setIsModal}
      />

      <CityBlock 
        name={props.name}
      />

      <ForecastBlock 
        main={props.main} 
        weather={props.weather[0]}
      />

      <ForecastDays 
        main={props.main} 
        wind={props.wind}
      />
      {isModal && <Modal setIsModal={setIsModal}/>}
      {props.error && <ModalError error={props.error} setAPIError={props.setAPIError}/>}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    main: state.main,
    name: state.name,
    weather: state.weather,
    wind:state.wind,
    loading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps, {setCity, setAPIError})(App);

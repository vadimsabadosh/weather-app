import { weatherAPI } from './../api/weatherAPI';

const ADD_WEATHER = 'ADD_WEATHER';
const LOADING = 'LOADING';
const SET_ERROR = 'SET_ERROR';

let initialState = {
    name: '',
    weather: [
      {
          main: "",
          description: "",
      }
    ],
    main: {
      temp: 8.54,
      feels_like: 6.21,
      pressure: 1016,
      humidity: 87
    },
    wind: {
      speed: 4,
      deg: 300
    },
    id: 703448,
    isLoading: false,
    error: null,

}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WEATHER:{
      return{
        ...state,
        ...action.payload
      }
    }
    
    case LOADING:{
      return {
        ...state,
        isLoading: action.bool
      }
    }
    case SET_ERROR:{
      return {
        ...state,
        error: action.msg
      }
    }
    default: 
      return state;
  }
}

export default reducer;


/******************* ACTIONS ****************/

const addWeather = (payload) => ({ type: ADD_WEATHER, payload });
const addLoading = (bool) => ({ type: LOADING, bool });
const setError = (msg) => ({type: SET_ERROR, msg})






/********************* THUNKs ***************/

export const setCity = (city) => {
  return async(dispatch) => {
    dispatch(addLoading(true))
    const response = await weatherAPI.getWeatherByCity(city)
      .catch(e => {
        dispatch(setError(e.response.data.message))
      });
    dispatch(addWeather(response));
    if(response){
      localStorage.setItem('city', response.name)
    }
    dispatch(addLoading(false))
  }
}

export const setCoord = (lat, lon) => {
  return async(dispatch) => {
    dispatch(addLoading(true))
    const response = await weatherAPI.getWeatherByCoord(lat, lon);
    dispatch(addWeather(response));
    localStorage.setItem('city', response.name)
    dispatch(addLoading(false))
  }
}
export const setAPIError = (error) => {
  return async(dispatch) => {
    dispatch(setError(error))
  }
}


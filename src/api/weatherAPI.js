import axios from 'axios';

const appID = '2f720667554e58071332a55212703508'
const baseURL = `http://api.openweathermap.org/data/2.5/weather?lang=uk&units=metric&appid=${appID}`;

export const weatherAPI = {
  getWeatherByCity(city){
    return axios.get(`${baseURL}&q=${city}`).then(response => response.data);
  },

  getWeatherByCoord(lat, lon){
    return axios.get(`${baseURL}&lat=${lat}&lon=${lon}`).then(response => response.data);
  }
}
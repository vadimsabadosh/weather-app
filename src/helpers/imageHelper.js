import sunny from '../images/sunny.png';
import clouds from '../images/clouds.png';
import rainy from '../images/rainy.png';
import snow from '../images/snow.png';
import drizzle from '../images/drizzle.png';
import haze from '../images/haze.png';
import thunder from '../images/thunder.png';
import sand from '../images/sand.png';

const imgs = {
  'Clouds': clouds,
  'Rain': rainy,
  'Clear': sunny,
  'Drizzle': drizzle,
  'Thunderstorm': thunder,
  'Snow': snow,
  'Mist': drizzle,
  'Smoke': haze,
  'Haze': haze,
  'Dust': haze,
  'Fog': drizzle,
  'Sand': sand,
  'Dust': sand,
  'Ash': sand,
  'Squall': haze,
  'Tornado': haze,
}

export const imageHelper = img => {
  for(let key in imgs){
    if(img === key){
      return imgs[key];
    }
  }
}
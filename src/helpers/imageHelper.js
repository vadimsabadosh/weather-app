import sunny from '../images/sunny.png';
import clouds from '../images/clouds.png';
import rainy from '../images/rainy.png';
import snow from '../images/snow.png';
import drizzle from '../images/drizzle.png';
import thunder from '../images/thunder.png';

const imgs = {
  'Clouds': clouds,
  'Rain': rainy,
  'Clear': sunny,
  'Drizzle': drizzle,
  'Thunderstorm': thunder,
  'Snow': snow
}

export const imageHelper = img => {
  for(let key in imgs){
    if(img === key){
      return imgs[key];
    }
  }
}
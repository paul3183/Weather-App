import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Time from './components/Time'


function App() {

  const [ weather, setWeather ] = useState({});
  const [ isCelsius, setIsCelsius ] = useState(true);


  useEffect (() => {

    const success = pos => {
      const lat = pos.coords.latitude
      const lon = pos.coords.longitude
      axios 
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3c96f59e6c67b5379bbc03c3e83356c2`)
      .then((res) => setWeather(res.data));
    }
    navigator.geolocation.getCurrentPosition(success)
   },[])

  console.log(weather);

  let fundTime = weather.weather?.[0].icon
  let linkFund = ""
  
    switch (fundTime){
      case '01d':
        linkFund = 'https://images.pexels.com/photos/4671463/pexels-photo-4671463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        break
      case '01n':
        linkFund = 'https://images.pexels.com/photos/13891178/pexels-photo-13891178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        break
      case '02d':
        linkFund = 'https://images.pexels.com/photos/5069533/pexels-photo-5069533.jpeg?auto=compress&cs=tinysrgb&w=800'
        break
      case '02n':
        linkFund = 'https://images.pexels.com/photos/13511276/pexels-photo-13511276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        break
      case '03d':
        linkFund = 'https://images.pexels.com/photos/12262726/pexels-photo-12262726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        break
      case '03n':
        linkFund = 'https://images.pexels.com/photos/12903460/pexels-photo-12903460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        break;
      case '04d':
        linkFund = 'https://images.pexels.com/photos/11513041/pexels-photo-11513041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        break
      case '04n':
        linkFund = 'https://images.pexels.com/photos/12956574/pexels-photo-12956574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        break
      case '09d':
        linkFund = 'https://images.pexels.com/photos/2144326/pexels-photo-2144326.jpeg?auto=compress&cs=tinysrgb&w=800'
        break;
      case '09n':
        linkFund = 'https://images.pexels.com/photos/2618980/pexels-photo-2618980.jpeg?auto=compress&cs=tinysrgb&w=800'
        break;
      case '10d':
        linkFund = 'https://images.pexels.com/photos/1755702/pexels-photo-1755702.jpeg?auto=compress&cs=tinysrgb&w=800'
        break;
      case '10n':
        linkFund = 'https://images.pexels.com/photos/11408850/pexels-photo-11408850.jpeg?auto=compress&cs=tinysrgb&w=800'
        break;
      case '11d':
        linkFund = 'https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg?auto=compress&cs=tinysrgb&w=800'
        break;
      case '11n':
        linkFund = 'https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=800'
        break;
      case '13d':
        linkFund = 'https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=800'
        break;
      case '13n':
        linkFund = 'https://images.pexels.com/photos/2422497/pexels-photo-2422497.jpeg?auto=compress&cs=tinysrgb&w=800'
        break;
      case '50d':
        linkFund = 'https://images.pexels.com/photos/7919/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        break;
      case '50n':
        linkFund = 'https://images.pexels.com/photos/3299386/pexels-photo-3299386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        break;
      default:
        linkFund = 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
    }

    document.body.style = `background-image: url(${linkFund})`

  return (
    <>
     <Time/>
    <div className="App">
      <div className='title'>
        <h1>Wheather App</h1>
        <p>Ciudad {weather.name}, {weather.sys?.country}</p>
      </div>
      <div className='image_container'>
        <div className='img_cont'>
          <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}/>
          <p>
          {isCelsius ?  Math.floor((((weather.main?.temp - 273.15)* 9/5 + 32)- 32) * 5/9): Math.floor((weather.main?.temp - 273.15)* 9/5 + 32)}
          {' '}
          {isCelsius ? "ºC" : "ºF" }
          </p>
        </div>
        <ul>
          <li>"{weather.weather?.[0].description}"</li>
          <li><i className="fa-solid fa-wind"></i> Wind speed {weather.wind?.speed} m/s</li>
          <li><i className="fa-solid fa-cloud"></i> Clouds: {weather.clouds?.all} %</li>
          <li><i className="fa-solid fa-temperature-three-quarters"></i> Pressure: {weather.main?.pressure} mb</li>
        </ul>
      </div>
      <button onClick={() => setIsCelsius(!isCelsius)}> Degrees ºF/ºC </button>
    </div>
    </>
    
  )
}

export default App

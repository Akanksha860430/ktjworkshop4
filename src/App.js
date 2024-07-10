import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


import rainy from './components/rainy.png'
import sun from './components/sun.png'
import mist from './components/mist.png'
import cloudy from './components/cloudy.png'
import storm from './components/storm.png'
import heavy from './components/heavy-rain.png'
import home from './components/home.png'
import axios from 'axios'

export default function App() {
  const [location, setLocation] = useState('');
  const [data, setData] = useState(null)

  const url = `https://api.weatherapi.com/v1/forecast.json?key=3ba4b85ae3db442eb5d30844240807&q=${location}&days=5&aqi=no&alerts=no`

  const handleLocation = (event) => {
    setLocation(event.target.value)
  }
  const searchLocation = () => {

    axios.get(url).then((response) => {
      console.log(response)
      setData(response.data)
    })
    setLocation('')

  }
  return (
    <Router>
    <div>
      <div className='container'>
        <div className="Navbar">
          <div className="home">
            <a href="/">
              <img src={home} alt="Home" />
            </a>
            <h2>My Weather App</h2>
          </div>
          <div className="bar">
            <input className='search' value={location} onChange={handleLocation} type="text" placeholder='Enter Location' />
            <button className='search btn' onClick={searchLocation} >Search</button>
            <Link to="/add" className='search btn blue' >Sign Up</Link>
            <Link to="/add-location" className='search btn blue' >Save Location</Link>
           <Link to="/:username/locations" className='search btn blue' >Visit Saved Locations</Link>
           
          </div>
        </div>



        {data &&
          <div className="currentLocation">
            <div className="icon">

              {data.current.condition.text === 'Mist' &&
                <img src={mist} alt="rainy" />
              }
              {data.current.condition.text === 'Sunny' &&
                <img src={sun} alt="sun" />
              }
              {data.current.condition.text === 'Clear' &&
                <img src={sun} alt="sun" />
              }
              {data.current.condition.text === 'Light rain' &&
                <img src={rainy} alt="rainy" />
              }
              {data.current.condition.text === 'Patchy rain nearby' &&
                <img src={rainy} alt="rainy" />
              }
              {data.current.condition.text === 'Light rain shower' &&
                <img src={rainy} alt="rainy" />
              }
              {data.current.condition.text === 'Patchy light rain' &&
                <img src={rainy} alt="rainy" />
              }
              {data.current.condition.text === 'Light drizzle' &&
                <img src={rainy} alt="rainy" />
              }
              {data.current.condition.text === 'Patchy light rain in area with thunder' &&
                <img src={storm} alt="rainy" />
              }
              {data.current.condition.text === 'Torrential rain shower' &&
                <img src={heavy} alt="rainy" />
              }
              {data.current.condition.text === 'Moderate or heavy rain shower' &&
                <img src={heavy} alt="rainy" />
              }
              {data.current.condition.text === 'Moderate or heavy rain with thunder' &&
                <img src={storm} alt="rainy" />
              }
              {data.current.condition.text === 'Thundery outbreaks in nearby' &&
                <img src={storm} alt="rainy" />
              }
              {data.current.condition.text === 'Partly cloudy' &&
                <img src={cloudy} alt="rainy" />
              }
              {data.current.condition.text === 'Overcast' &&
                <img src={cloudy} alt="rainy" />
              }
              {data.current.condition.text === 'Cloudy' &&
                <img src={cloudy} alt="rainy" />
              }
            </div>
            <div className="city">
              <h1>{data.location.name}</h1>
              <h4>{data.location.country}</h4>
            </div>
            <div className="condition">
              <h3>Weather</h3>
              <h2>  {data.current.condition.text}</h2>
              <h3> {data.current.last_updated} </h3>
            </div>
            <div className="temp">
              <h4>Temperature</h4>
              <h1>  {data.current.temp_c.toFixed()}°C</h1>
            </div>
            <div className="humi">
              <h4>Humidity</h4>
              <h1>  {data.current.humidity}%</h1>
            </div>
            <div className="windspeed">
              <h4>Wind Speed</h4>
              <h1>  {data.current.wind_kph.toFixed()} kmph</h1>
            </div>
          </div>
        }

        {data && <div className="hours-detail">
          <div className="check">
            <div className="am">
          <p>{ data.forecast && data.forecast.forecastday[0].hour[8].condition.text }</p>
            <p>{data && data.forecast && data.forecast.forecastday[0].hour[8].temp_c.toFixed()}°C</p>
            </div>
            <h2>8am</h2>
          </div>


          <div className="check">
          <div className="am">
          <p>{ data.forecast && data.forecast.forecastday[0].hour[10].condition.text }</p>
            <p>{ data.forecast && data.forecast.forecastday[0].hour[10].temp_c.toFixed() }°C</p>
         
          </div>
          <h2>10am</h2>
          </div>


          <div className="check">
          <div className="pm">
          <p>{ data.forecast && data.forecast.forecastday[0].hour[12].condition.text }</p>
            <p>{ data.forecast && data.forecast.forecastday[0].hour[12].temp_c.toFixed()}°C</p>
          </div>
          <h2>12pm</h2>
          </div>

          <div className="check">
          <div className="pm">
          <p>{ data.forecast && data.forecast.forecastday[0].hour[14].condition.text }</p>
            <p>{ data.forecast && data.forecast.forecastday[0].hour[14].temp_c.toFixed()}°C</p>
          </div>
          <h2>2pm</h2>
          </div>

          <div className="check">
          <div className="pm">
          <p>{ data.forecast && data.forecast.forecastday[0].hour[16].condition.text }</p>
            <p>{ data.forecast && data.forecast.forecastday[0].hour[16].temp_c.toFixed()}°C</p>
          </div>
          <h2>4pm</h2>
          </div>

          <div className="check">
          <div className="pm">
          <p>{ data.forecast && data.forecast.forecastday[0].hour[18].condition.text }</p>
            <p>{ data.forecast && data.forecast.forecastday[0].hour[18].temp_c.toFixed()}°C</p>
          </div>
          <h2>6pm</h2>
          </div>

          <div className="check">
          <div className="pm">
          <p>{ data.forecast && data.forecast.forecastday[0].hour[20].condition.text }</p>
            <p>{ data.forecast && data.forecast.forecastday[0].hour[20].temp_c.toFixed()}°C</p>
          </div>
          <h2>8pm</h2>
          </div>
         
        </div>}
       
       {data&&
       <div className="days-detail">
 <div className="day">
            <div className="tilt">
          <p>Max Temperature { data.forecast && data.forecast.forecastday[0].day.maxtemp_c.toFixed() }°C</p>
            <p>Min Temperature {data && data.forecast && data.forecast.forecastday[0].day.mintemp_c.toFixed()}°C</p>
            <p>{ data.forecast && data.forecast.forecastday[0].hour[12].condition.text} at 12pm</p>
            </div>
            <h2>{data && data.forecast && data.forecast.forecastday[0].date}</h2>
          </div>
 <div className="day">
            <div className="tilt">
          <p>Max Temperature { data.forecast && data.forecast.forecastday[1].day.maxtemp_c.toFixed() }°C</p>
            <p>Min Temperature {data && data.forecast && data.forecast.forecastday[1].day.mintemp_c.toFixed()}°C</p>
            <p>{ data.forecast && data.forecast.forecastday[1].hour[12].condition.text} at 12pm</p>
            </div>
            <h2>{data && data.forecast && data.forecast.forecastday[1].date}</h2>
          </div>
 <div className="day">
            <div className="tilt">
          <p>Max Temperature { data.forecast && data.forecast.forecastday[2].day.maxtemp_c.toFixed() }°C</p>
            <p>Min Temperature {data && data.forecast && data.forecast.forecastday[2].day.mintemp_c.toFixed()}°C</p>
            <p>{ data.forecast && data.forecast.forecastday[2].hour[12].condition.text} at 12pm</p>
            </div>
            <h2>{data && data.forecast && data.forecast.forecastday[2].date}</h2>
          </div>
 <div className="day">
            <div className="tilt">
          <p>Max Temperature { data.forecast && data.forecast.forecastday[3].day.maxtemp_c.toFixed() }°C</p>
            <p>Min Temperature {data && data.forecast && data.forecast.forecastday[3].day.mintemp_c.toFixed()}°C</p>
            <p>{ data.forecast && data.forecast.forecastday[3].hour[12].condition.text} at 12pm</p>
            </div>
            <h2>{data && data.forecast && data.forecast.forecastday[3].date}</h2>
          </div>
 <div className="day">
            <div className="tilt">
          <p>Max Temperature { data.forecast && data.forecast.forecastday[4].day.maxtemp_c.toFixed() }°C</p>
            <p>Min Temperature {data && data.forecast && data.forecast.forecastday[4].day.mintemp_c.toFixed()}°C</p>
            <p>{ data.forecast && data.forecast.forecastday[4].hour[12].condition.text} at 12pm</p>
            </div>
            <h2>{data && data.forecast && data.forecast.forecastday[4].date}</h2>
          </div>


       </div>
      }
      </div>
    </div>
    </Router>
  );
 
}

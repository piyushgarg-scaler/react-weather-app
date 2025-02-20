import React from 'react'
import axios from 'axios'


const API_KEY = process.env.REACT_APP_API_KEY; // maruga mai chori kiya toh
const API_URL= 'https://api.openweathermap.org/data/2.5/weather'

export const getWeather = async (city) => {

    try{
      let response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
      return response.data;
    }
    catch(error){
        console.log(error.message)
        return error.response;
    }
    
}

export const getWeatherByCoords = async (latitude, longitude) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Unable to fetch weather data.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

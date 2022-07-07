import "./App.css";
import Menu from "./components/Menu/Menu";
import Dash from "./components/Dash/Dash"
import Forecast from "./components/Forecast/Forecast"
import React, {useState, useEffect} from "react"
import axios from "axios"

function App() {
  const [weatherData, setWeatherData] = useState();
  const [currentLocation, setCurrentLocation] = useState();
  
  const [formState, setFormState] = useState({
    city: "Cleveland",
    state: "OH",
    country: "USA"
  });
  
  console.log(formState)
  const options = {
    part: "",
    city: formState.city,
    state: formState.state,
    country: formState.country,
    apiKey: "ce8ded9363f8838690bb46ae0314a5c5"
  }

  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${options.city},${options.state},${options.country}&appid=${options.apiKey}`;
  console.log(options.city)
  console.log(baseUrl)

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormState({
      ...formState,
      [name]: value
    })
  }

const getWeatherData = async (url) => {
  await axios.get(url).then(response => {
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&&appid=${options.apiKey}&units=imperial`).then(response => {
      console.log(response)
      setWeatherData(response) // Not setting this?
      console.log(weatherData)
    })
  })
}

useEffect(() => {
  getWeatherData(baseUrl)
}, [])


  return <div className="app flex-row">
    {
      weatherData && (
      <>
        <Menu />
        <Dash
          options={options}
          weatherData={weatherData}
          getWeatherData={getWeatherData}
          formState={formState}
          setFormState={setFormState}
          handleChange={handleChange}
      />
        <Forecast 
          weatherData={weatherData}
      />  
      </>
      )
    }
  </div>;
}

export default App;

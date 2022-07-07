import React from "react";
import LargeTile from "../LargeTile/LargeTile"
import SmallTile from "../SmallTile/SmallTile"
import "./Dash.css";

const Dash = ({ weatherData, getWeatherData, formState, setFormState, handleChange, options}) => {
    console.log(weatherData)
    return (
    <div className="dash">
        <nav className="nav flex-row justify-between align-center">
            <div className="nav-left">
                <input type="text" className="city-search search" name="city" placeholder="Enter City Here" onChange={handleChange} />
                <input type="text" className="state-search search" name="state" placeholder="Enter State Here" onChange={handleChange} />
                <button onClick={getWeatherData}>Search</button>
            </div>
            <div className="nav-right flex-row justify-center align-center">
                <img src="https://www.svgrepo.com/show/150275/notification.svg" alt="profile-pic" />
                {/* <img src="" alt="notifications-icon" /> */}
            </div>
        </nav>
        <div className="dash-main">
            <LargeTile weatherData={weatherData} dimensions={[1, 1, 3, 3]} options={options} formState={setFormState}/>
            <SmallTile weatherData={weatherData} dimensions={[3, 1, 4, 2]} data={{primaryText: "Wind", secondaryText: "Today's Wind Speed", data: weatherData.data.daily[0].wind_speed}} />
            <SmallTile weatherData={weatherData} dimensions={[3, 2, 4, 3]} data={{primaryText: "UVI", secondaryText: "Today's UVI", data: weatherData.data.daily[0].uvi}} />
            <SmallTile weatherData={weatherData} dimensions={[4, 1, 5, 2]} data={{primaryText: "Humidity", secondaryText: "Today's Humidity", data: weatherData.data.daily[0].humidity}} />
            <SmallTile weatherData={weatherData} dimensions={[4, 2, 5, 3]} data={{primaryText: "Dew Point", secondaryText: "Today's Dew Point", data: weatherData.data.daily[0].dew_point}} />
        </div> 
    </div>
    )
}

export default Dash
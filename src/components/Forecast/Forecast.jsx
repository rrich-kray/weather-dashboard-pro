import React from 'react';
import "./Forecast.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Forecast = ({ weatherData }) => {
    return (
        <div className="forecast">
            <div className="week-selector flex-row justify-around align-center">
                <ArrowBackIosIcon />
                <span>This Week</span>
                <ArrowForwardIosIcon />
            </div>
            <div className="today">
                <h5>Today</h5>
                <div className="today-tiles flex-row justify-center align-center">
                    {/* {weatherData.data.hourly.map(hour => (
                        <div className="today-tile"></div>
                    ))} */}
                </div>
            </div>
            <div className="forecast-panel">
                {weatherData && weatherData.data.daily.map(day => (
                    <div className="forecast-tile flex-row justify-between align-center">
                        <div className="forecast-container">
                            <span></span>
                            <span></span>
                        </div>
                        <div className="forecast-temp">
                            <span>{day.temp.day}</span>
                        </div>
                        <div className="forecast-icon"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Forecast
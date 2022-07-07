import React from 'react';
import "./Forecast.css"
import { format_date, format_date_day, date_shortform } from '../../utils/helpers';
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
            {/* <div className="today">
                <h5>Today</h5>
                <div className="today-tiles flex-row justify-center align-center">
                    {weatherData.data.hourly.map(hour => (
                        <div className="today-tile"></div>
                    ))}
                </div>
            </div> */}
            <div className="forecast-panel flex-col justify-between">
                {weatherData && weatherData.data.daily.map(day => (
                    <div className="forecast-tile flex-row justify-between align-center">
                        <div className="forecast-container flex-col align-start justify-center">
                            <span>{format_date_day(day.dt)}</span>
                            <span>{date_shortform(day.dt)}</span>
                        </div>
                        <div className="forecast-temp flex-row align-center justify-center">
                            <span>{`${day.temp.day} °F`}</span>
                        </div>
                        <div className="forecast-icon flex-row justify-end">
                            <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Forecast
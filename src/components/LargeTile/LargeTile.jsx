import react, {useState, useEffect} from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import axios from "axios"
import { format_time } from "../../utils/helpers";
import "./LargeTile.css"

const LargeTile = ({weatherData, dimensions, formState, options}) => {
    const [currentFont, changeCurrentFont] = useState();
    const [dailyTempData, setDailyTempData] = useState();
    const [currentDayIndex, changeCurrentDayIndex] = useState(0)

    useEffect(() => {
        setDailyTempData([
            {name: "Morning", value: weatherData.data.daily[0].temp.morn},
            {name: "Day", value: weatherData.data.daily[0].temp.day},
            {name: "Evening", value: weatherData.data.daily[0].temp.eve},
            {name: "Night", value: weatherData.data.daily[0].temp.night}
        ])
        console.log(dailyTempData)
    }, [])

    return (
        <div className="large-tile tile" style={{gridRowStart: dimensions[0], gridColumnStart: dimensions[1], gridRowEnd: dimensions[2], gridColumnEnd: dimensions[3]}}>
            {weatherData &&
            <> 
                <div className="tile-container-left flex-col">
                    <div className="location flex-row justify-between align-center">
                        <span className="city-location">{`${options.city}, ${options.state}`}</span>
                        <span className="current-time">{format_time(weatherData.data.current.dt)}</span>
                    </div>
                    <div className="temp flex-col justify-center align-center">
                        <span>{`${weatherData.data.current.temp}°F`}</span>
                        <span>{weatherData.data.current.weather[0].description}</span>
                    </div>
                    <div className="other-info flex-row justify-between align-center">
                        <div className="pressure other-tile">
                            <img src="https://www.svgrepo.com/show/25788/rain.svg" alt="wind-icon"/>
                            <span>{`${weatherData.data.current.pressure} hPa`}</span>
                        </div>
                        <div className="pressure other-tile">
                            <img src="https://www.svgrepo.com/show/25788/rain.svg" alt="wind-icon"/>
                            <span>{`${weatherData.data.current.wind_speed} deg`}</span>
                        </div>
                        <div className="wind other-tile">
                            <img src="https://www.svgrepo.com/show/80461/wind.svg" alt="wind-icon"/>
                            <span>{`${weatherData.data.current.wind_speed} deg`}</span>
                        </div>
                    </div>
                </div>
                <div className="tile-container-right">
                    <header className="flex-row justify-start align-center">
                        <h4>Temperature</h4>
                    </header>
                    <ResponsiveContainer height="75%" width="90%">
                        <LineChart width="100%" height="100%" data={dailyTempData} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
                            <Line type="monotone" dataKey="value" stroke="#8884d8" />
                            <XAxis dataKey="name" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </>
            }
        </div>
    )
}

export default LargeTile
import React from 'react';
import "./Menu.css";

const Menu = () => {
    return (
    <div className="menu">
        <div className="logo flex-row justify-start align-center">
            <img src="https://www.svgrepo.com/show/270812/sun-weather.svg" alt="" />
            <span>Weather Dashboard</span>
        </div>
        <div className="links">
            <div className="dashboard-link link">
                <img 
                src="https://www.svgrepo.com/show/314838/dashboard.svg" 
                alt="dash-icon" 
            />
                <span>Dashboard</span>
            </div>
            <div className="map-link link">
                <img 
                src="https://www.svgrepo.com/show/21594/map.svg" 
                alt="map-icon" 
            />
                <span>Map</span>
            </div>
            <div className="saved-link link">
                <img 
                src="https://www.svgrepo.com/show/15203/heart.svg" 
                alt="heart-icon" 
            />
                <span>Saved Locations</span>
            </div>
            <div className="settings-link link">
                <img 
                src="https://www.svgrepo.com/show/10700/settings.svg" 
                alt="settings-icon" 
            />
                <span>Settings</span>
            </div>
        </div>
    </div>
    )
}

export default Menu
import React, {useState, useEffect} from "react";
import "./SmallTile.css";

const SmallTile = ({weatherData, dimensions, data}) => {
    return (
        <div className="small-tile tile flex-row" style={{gridRowStart: dimensions[0], gridColumnStart: dimensions[1], gridRowEnd: dimensions[2], gridColumnEnd: dimensions[3]}}>
            <div className="small-left-panel flex-col justify-around align-start">
                <div className="primary-text">{data.primaryText}</div>
                <div className="secondary-text">{data.secondaryText}</div>
                <div className="data">{data.data}</div>
            </div>
            <div className="small-right-panel"></div>
        </div>
    )
}

export default SmallTile
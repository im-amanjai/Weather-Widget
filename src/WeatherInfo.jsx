import SearchBox from "./SearchBox";
import DataBox from "./DataBox";
import { useState } from "react";
export default function WeatherInfo(){
    const [weatherinfo, setWeatherInfo]= useState({
        city: "Varanasi",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        Humidity: 47, 
        // WindSpeed:3.5,
        weather: "haze",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo); // re-rendering new value
    }
    return(
        <div style={{textAlign: "center"}}>
              <h2>Weather App</h2>
              <SearchBox updateInfo={updateInfo}/> 
              <DataBox data = {weatherinfo}/> 
        </div>
    )
}
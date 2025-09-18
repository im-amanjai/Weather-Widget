/* eslint-disable no-useless-catch */
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Search.css";
import { useState } from 'react';
// import DataBox from './DataBox';

export default function SearchBox({updateInfo}){ // as a prop updateInfo comes from weatherinfo.jsx
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const api_url = "https://api.openweathermap.org/data/2.5/weather";
   const api_key = import.meta.env.VITE_WEATHER_API_KEY;

    let fetchWeatherInfo = async()=>{
        
        try{
            let response =  await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric`);
            let jsonResponse = await response.json();
         //    console.log(jsonResponse);
            let result ={ //object for storing the data
             city: city,
             temp: jsonResponse.main.temp,
             tempMin: jsonResponse.main.temp_min,
             tempMax: jsonResponse.main.temp_max,
             Humidity: jsonResponse.main.humidity,
            //  WindSpeed: jsonResponse.wind.speed,
             feelsLike: jsonResponse.main.feels_like,
             weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch(err){
           throw err;
        }
       
    
    };
    
     
    let handle =(event)=>{
       setCity(event.target.value);
    }

    let onSubmit= async (event)=>{
        try{
            event.preventDefault();
        console.log(city);
        setCity("");
       let newInfo = await fetchWeatherInfo();
       updateInfo(newInfo); // new information k sth hm updateInfo ko call kr denge
        // eslint-disable-next-line no-unused-vars
        } catch(err){
            setError(true); // upr se jo error throw hoga vo yha p catch hoga
        }
    }

    return(
        <div className='search'>
            <form onSubmit={onSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handle} />
            <br /> <br />
            <Button variant="contained" type='submit'>Search</Button>
            {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    )
}
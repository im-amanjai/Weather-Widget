import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./DataBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function DataBox({data}){ // ab initial value prop k form m aa rhi hai weatherinfo.jsx se 
    
// const start_img = "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3VkfGVufDB8fDB8fHww";

const Warm_url="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
const cold_url="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
const Rainy_url="https://images.unsplash.com/photo-1493314894560-5c412a56c17c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";


    return (
        <div className="DataBox">
            <div className='cardcontainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={data.Humidity > 80 ? Rainy_url : data.temp > 15 ? Warm_url : cold_url } // condition for image changing sbse phele humidity check hogi humidity agr > 80 hai to rainy nhi hai to phir temperature ko check kro
      /> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.city}
          {data.Humidity > 80 ? <ThunderstormIcon/> : data.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/> }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temprature = {data.temp}&deg;C</p>
         <p>Humidity = {data.Humidity}%</p>
         {/* <p>WindSpeed = {data.WindSpeed} m/s</p> */}
         <p>Min-Temprature = {data.tempMin}&deg;C</p>
         <p>Max-Temprature = {data.tempMax}&deg;C</p>
         <p>The weather can be described as <b>{data.weather}</b> and feels like {data.feelsLike}&deg;C  </p>
        
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    )
}
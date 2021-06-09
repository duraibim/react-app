import React, {useState} from "react";
import axios from "axios";
import './Weather.css';



export default function Search(){
    const [city, setCity] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [weather, setWeather] = useState({});

    function handleResponse(response){
        setLoaded(true);
        setWeather({
            ready: true,   
            city: response.data.name,
            temperature: response.data.main.temp,
          });
        }
    

    function handleSubmit(event) {
        event.preventDefault();
        let apiKey = "0196dac33373aaa2798921754f07b116";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(url).then(handleResponse);
        }

        function updateCity(event) {
            setCity(event.target.value);
          }

    let form = (
        <div className="weather-app">
        <form className="search-form" onSubmit= {handleSubmit}>
        <div class="row">
            <div class="col-9">
            <input
                type="text"
                name="city"
                className="search-form"
                placeholder="Type a city.."
                autofocus="on"
                autocomplete="off"
                value={city}
                onChange={updateCity}
            />
            </div>
            <div className="col-3">
            <input
                type="submit"
                value="Search"
            />
            </div>
        </div>
        </form>
        </div>
   );

    if (loaded){
        return (
        <div>
        {form}
        <ul className="ul">
            <li>City: {weather.city}</li>
            <li>Temperature: {Math.round(weather.temperature)}°C</li>
          
        </ul>
      </div>
    );

}else{
   return form;
 } 
}
       
    
        
        

        


        




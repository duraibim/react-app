import React, {useState} from "react";
import axios from "axios";



export default function Weather(props){
    
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response){
        setWeatherData({
            ready: true,   
            city: response.data.name,
            temperature: response.data.main.temp,
          });
        }
    
    function handleSubmit(event) {
        event.preventDefault();
        search();
        }
    
    function handleChange(event) {
        setCity(event.target.value);
        }

    function search() {
        let apiKey = "0196dac33373aaa2798921754f07b116";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(url).then(handleResponse);
        }


    if (weatherData.ready){
        return (
<form className="search-form" id="search-form" onSubmit= {handleSubmit}>
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
                onChange={handleChange}
            />
            </div>
            <div class="col-3">
            <input
                type="submit"
                value="Search"
            />
            </div>
        </div>
        </form>


    

   );
}else{
    search();
   return "Loading....";
 } 
}
       
    
        
        

        


        




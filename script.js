
async function checkWeather(){
    const apiKey = "471c98632c71481906287301496b2089";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");
    const city = searchBox.value;
    const response = await fetch(apiUrl+ city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else if(city == ""){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        var data = await response.json();

        console.log(data);
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "clouds.png"
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "clear.png"
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "rain.png"
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "drizzle.png"
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "mist.png"
        }
        document.querySelector(".error").style.display="none";
        document.querySelector(".weather").style.display="block";

        document.getElementById("input-box").value="";
        }
} 
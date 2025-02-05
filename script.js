const apiKey = "58eab29ad0114e147deccc6494ef9c81";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const weather_icon = document.querySelector(".icon")

async function weather(){
    var city = document.getElementById("name").value
    if (!city){
        alert("Enter city name!!")
    }
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)


        var data = await response.json();

        if (data.cod == "404") {
            document.querySelector(".err").style.display = "block";
            document.querySelector(".weather").style.display = "none";
            return;
        }
        console.log(data)
    
    
        document.querySelector(".degree").innerHTML = Math.round(data.main.temp) + "°C"
        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h"
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    
    
        if(data.weather[0].main=="Clear"){
            weather_icon.src = "imgs/clear.png"
        }
        else if(data.weather[0].main=="Clouds"){
            weather_icon.src = "imgs/clouds.png"
        }
    
        else if(data.weather[0].main=="Drizzle"){
            weather_icon.src = "imgs/drizzle.png"
        }
    
    
        else if(data.weather[0].main=="Mist"){
            weather_icon.src = "imgs/mist.png"
        }
    
        else if(data.weather[0].main=="Rain"){
            weather_icon.src = "imgs/rain.png"
        }
    
        else if(data.weather[0].main=="Snow"){
            weather_icon.src = "imgs/snow.png"
        }
    
        document.querySelector(".weather").style.display = "block";

    }

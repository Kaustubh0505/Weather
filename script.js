const apiKey = "58eab29ad0114e147deccc6494ef9c81";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const weather_icon = document.querySelector(".icon");

async function weather() {
    var city = document.getElementById("name").value;
    if (!city) {
        return alert("Enter city name!!");
    }
    
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (!response.ok) {
        return alert("Enter valid city name");
    }

    var data = await response.json();

    document.querySelector(".degree").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

    var lat = data.coord.lat;
    var lon = data.coord.lon;

    var aqimake = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    let aqimakee = await aqimake.json();
    const aqivalue = aqimakee.list[0].main.aqi;
    document.getElementById("api").innerHTML = aqivalue;

    if (data.weather[0].main == "Clear") {
        weather_icon.src = "imgs/clear.png";
        document.body.style.backgroundImage = "url(https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)";
        document.querySelector(".htw").innerHTML = "Clear";

    } else if (data.weather[0].main == "Clouds") {
        weather_icon.src = "imgs/clouds.png";
        document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1482541337505-79022d671e66?q=80&w=3087&auto=format&fit=crop)";
        document.querySelector(".htw").innerHTML = "Cloudy";

    } else if (data.weather[0].main == "Drizzle") {
        weather_icon.src = "imgs/drizzle.png";
        document.body.style.backgroundImage = "url(https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/rain/raindrops-misted-on-a-windscreen.jpg)";
        document.querySelector(".htw").innerHTML = "Drizzle";

    } else if (data.weather[0].main == "Mist") {
        weather_icon.src = "imgs/mist.png";
        document.body.style.backgroundImage = "url(https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1200)";
        document.querySelector(".htw").innerHTML = "Mist";

    } else if (data.weather[0].main == "Rain") {
        weather_icon.src = "imgs/rain.png";
        document.body.style.backgroundImage = "url(https://media.gettyimages.com/id/1476190237/photo/summer-rain-raindrops-bad-weather-depression.jpg)";
        document.querySelector(".htw").innerHTML = "Rainy";

    } else if (data.weather[0].main == "Snow") {
        weather_icon.src = "imgs/snow.png";
        document.body.style.backgroundImage = "url(https://media.istockphoto.com/id/1065457848/photo/happy-snowman-in-winter-secenery.jpg)";
        document.querySelector(".htw").innerHTML = "Snow";

    } else {
        document.querySelector(".htw").innerHTML = data.weather[0].main;
    }

    document.querySelector(".weather").style.display = "block";
    console.log(data);
}

window.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        weather();
    }
});

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition, accessDenied);
    }
}

function showPosition(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
}

function accessDenied(erro) {
    console.log("Deu ruim");
}

getLocation();

function getTemperature(){
    const promise = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat={}&lon={}&appid=bf7f435975e801f6a8b91919e3d6a5ab&units=metric`)
}
let latitude = 0;
let longitude = 0;

let tempServidor = "";

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition, accessDenied);
    }
}

function showPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    showTemp();
    }

function accessDenied(erro) {
    console.log("Deu ruim");
}

getLocation();

function showTemp() {
    // const promessa = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=bf7f435975e801f6a8b91919e3d6a5ab&units=metric`);
    // promessa.then(processarResposta);

    // function processarResposta(resposta) {
    //     tempServidor = resposta.data;
    // }

    tempServidor = {
        "coord": {
            "lon": -38.5778,
            "lat": -3.7716
        },
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02n"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 27.93,
            "feels_like": 31.63,
            "temp_min": 27.93,
            "temp_max": 28.31,
            "pressure": 1010,
            "humidity": 78
        },
        "visibility": 10000,
        "wind": {
            "speed": 2.57,
            "deg": 60
        },
        "clouds": {
            "all": 20
        },
        "dt": 1646436175,
        "sys": {
            "type": 1,
            "id": 8363,
            "country": "BR",
            "sunrise": 1646383269,
            "sunset": 1646427075
        },
        "timezone": -10800,
        "id": 3393046,
        "name": "Parangaba",
        "cod": 200
    };
}

tempServidor = {
    "coord": {
        "lon": -38.5778,
        "lat": -3.7716
    },
    "weather": [
        {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 27.93,
        "feels_like": 31.63,
        "temp_min": 27.93,
        "temp_max": 28.31,
        "pressure": 1010,
        "humidity": 78
    },
    "visibility": 10000,
    "wind": {
        "speed": 2.57,
        "deg": 60
    },
    "clouds": {
        "all": 20
    },
    "dt": 1646436175,
    "sys": {
        "type": 1,
        "id": 8363,
        "country": "BR",
        "sunrise": 1646383269,
        "sunset": 1646427075
    },
    "timezone": -10800,
    "id": 3393046,
    "name": "Parangaba",
    "cod": 200
};
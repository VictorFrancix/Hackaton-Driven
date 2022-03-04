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
const main = document.querySelector('main');
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(handleLocation);
    function handleLocation(location) {
        const lat = location.coords.latitude;
        const long = location.coords.longitude;
        const acc = location.coords.accuracy;
        main.innerHTML += `
        Latitude: ${lat}<br>
        Longitude: ${long}<br>
        Accuracy (Meters): ${acc}<br>`;
    }
}
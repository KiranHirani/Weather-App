//Initialize storage
const storage = new Storage();

const weatherLocation = storage.getLocationData();

//Initialize weather class
const weather = new Weather(weatherLocation.city);

//Initialize UI 
const ui = new UI;

//Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

//Change location event
document.getElementById('w-change-btn').addEventListener('click', (event) => {
    const city = document.getElementById('city').value;

    //Change location
    weather.changeLocation(city);

    //set location in local storage
    storage.setLocationData(city)

    //Get and display weather
    getWeather();

    //Close the modal 
    $('#locModal').modal('hide');

    document.getElementById('city').value = '';
})

function getWeather() {
    weather.get()
        .then(data => ui.paint(data))
        .catch(err => console.log(err));
}
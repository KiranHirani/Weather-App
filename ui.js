class UI {

    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
    }


    paint(weather) {
        this.location.textContent = `${weather.city}, ${weather.country.country}`;
        this.desc.textContent = weather.weatherDesc.main;
        this.string.textContent = `${this.temperature(weather.tempData.temp)}°F (${Math.floor(weather.tempData.temp - 273.15)}°C)`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weatherDesc.icon}@2x.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.tempData.humidity}%`;
        this.feelsLike.textContent = `Feels Like: ${Math.floor(weather.tempData.feels_like - 273.15)}°C`;
        this.pressure.textContent = `Pressure: ${weather.tempData.pressure} mb`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed} km/h`;
    }


    temperature(temp) {
        const celsius = temp - 273.15;
        const fh = Math.floor(((celsius * 9) / 5) + 32);
        return fh;
    }
}
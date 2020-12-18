class Weather {

    constructor(city) {
        this.apiKey = 'abc';
        this.city = city;
    }

    //Fetch weather from api
    async get() {

        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}`);
        // const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);

        const data = await response.json();

        return {
            city: data.name,
            tempData: data.main,
            country: data.sys,
            weatherDesc: data.weather[0],
            wind: data.wind
        }
    }

    //Change Weather location
    changeLocation(city) {
        this.city = city
    }
}
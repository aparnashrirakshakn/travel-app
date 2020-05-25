import { API } from './api';

async function fetchLocationInfo(city) {
    const locationUrl = `${API.geoNames.baseUrl}&q=${city}&username=${API.geoNames.username}&style=${API.geoNames.style}`;

    try {
        const response = fetch(locationUrl);

        if(response.status === 200) {
            const jsonResponse = await response.json();
            return jsonResponse.geonames[0];
        }
        else {
            console.log(`Error occured. No valid response received. ${response}`)
        }
    }
    catch(error) {
        console.log(`Could not fetch location info : ${error}`);
    }

}

async function fetchWeatherInfo(latitude, longitude) {
    const weatherUrl = `${API.weatherBit.baseUrl}&lat=${latitude}&lon=${longitude}&key=${API.weatherBit.key}`;

    try {
        const response = fetch(weatherUrl);

        if(response.status === 200) {
            const jsonResponse = await response.json();
            return jsonResponse.data[0];
        }
        else {
            console.log(`Error occured. No valid response received. ${response}`)
        }
    }
    catch(error) {
        console.log(`Could not fetch weather info : ${error}`);
    }
}

async function fetchLocationPic(countryName) {
    const locationPicUrl = `${API.pixabay.baseUrl}&q=${city}&key=${API.pixabay.apiKey}&image_type=${API.pixabay.image_type}`;

    try {
        const response = fetch(locationPicUrl);

        if(response.status === 200) {
            const jsonResponse = await response.json();
            return jsonResponse.hits[0].largeImageURL;
        }
        else {
            console.log(`Error occured. No valid response received. ${response}`);
            return null;
        }
    }
    catch(error) {
        console.log(`Could not fetch location pic : ${error}`);
    }
}

async function fetchCountryInfo(countryName) {
    const locationPicUrl = `${API.restCountries.baseUrl}${countryName}`;

    try {
        const response = fetch(locationPicUrl);

        if(response.status === 200) {
            const jsonResponse = await response.json();
            return jsonResponse[0];
        }
        else {
            console.log(`Error occured. No valid response received. ${response}`);
            return null;
        }
    }
    catch(error) {
        console.log(`Could not fetch country information : ${error}`);
    }
}

function getCountdown(tripDate) {
    var today = new Date();
    var tripDay = new Date(tripDate);
    var oneDay = 86400000; //number of milliseconds in a day
    return (tripDay-today) / oneDay;
}

export { fetchLocationInfo, fetchWeatherInfo, fetchLocationPic, fetchCountryInfo, getCountdown };
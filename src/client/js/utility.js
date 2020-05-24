import { API } from './api';

function fetchLocationInfo(city) {
    
}

function fetchWeatherInfo(latitude, longitude) {

}

function fetchLocationPic(countryName) {

}

function getCountdown(tripDate) {
    var today = new Date();
    var tripDay = new Date(tripDate);
    var oneDay = 86400000; //number of milliseconds in a day
    return (tripDay-today) / oneDay;
}

export { fetchLocationInfo, fetchWeatherInfo, fetchLocationPic, getCountdown };
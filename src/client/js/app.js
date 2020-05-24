import { fetchLocationInfo, fetchWeatherInfo, fetchLocationPic, getCountdown } from '../js/utility';

async function onClickPlanButtonListener(e) {
    e.preventDefault();

    // fetch user inputs

    const location = document.getElementById('location').value;
    const tripDate = document.getElementById('trip-date').value;

    const daysToTrip = getCountdown(tripDate);

    // get required info from APIs

    const locationDetails = await fetchLocationInfo(location);
    const weatherDetails = await fetchWeatherInfo(locationDetails.lat, locationDetails.long);
    const locationPic = await fetchLocationPic(weatherDetails.countryName);

    // construct the UI

    constructUI(locationDetails, weatherDetails, locationPic);
}
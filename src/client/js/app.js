import { fetchLocationInfo, fetchWeatherInfo, fetchLocationPic, fetchCountryInfo, getCountdown } from '../js/utility';

let plan = {};

async function onPlanButtonClick(e) {
    e.preventDefault();

    // fetch user inputs

    const locationInput = document.getElementById('location').value;
    const tripDateInput = document.getElementById('trip-date').value;

    const daysToTrip = getCountdown(tripDateInput);

    // get required info from APIs

    const locationDetails = await fetchLocationInfo(locationInput);
    const weatherDetails = await fetchWeatherInfo(locationDetails.lat, locationDetails.lng);
    const locationPic = await fetchLocationPic(locationDetails.countryName);
    locationDetails.countryDetails = await fetchCountryInfo(locationDetails.countryName);

    plan.location = locationDetails;
    plan.location.daysToTrip = daysToTrip;
    plan.weather = weatherDetails;
    plan.picture = locationPic;

    // construct the UI
    constructUI(plan);
}

function constructUI(plan) {
    const resultContainer = document.getElementById('result-container');

    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('class','card');
    cardDiv.setAttribute('id','card-div');

    const cardImg = document.createElement('img');
    cardImg.setAttribute('src',picture);
    cardDiv.setAttribute('id','card-img');

    const cardParagraph = document.createElement('p');
    cardParagraph.innerHTML = `Your trip to <strong>${plan.location.city}</strong> is in <strong>${plan.location.daysToTrip}</strong> days!
    Expect the temperature to be about <strong>${plan.weather.temp}</strong>.
    Make sure to carry some <strong>${plan.location.countryDetails.currencies[0].name}(${plan.location.countryDetails.currencies[0].symbol})</strong>with you!`;
    cardDiv.setAttribute('id','card-paragraph');

    const buttonDiv = document.createElement('div');
    buttonDiv.setAttribute('class','card-footer');
    cardDiv.setAttribute('id','button-div');

    const cancelButton = document.createElement('button');
    cancelButton.setAttribute('id', 'btn-cancel');
    cancelButton.addEventListener('click', onCancelButtonClick);

    const saveButton = document.createElement('button');
    saveButton.setAttribute('id', 'btn-save');
    saveButton.addEventListener('click', onSaveButtonClick);

    buttonDiv.appendChild(cancelButton);
    buttonDiv.appendChild(saveButton);

    cardDiv.appendChild(cardImg);
    cardDiv.appendChild(cardParagraph);
    cardDiv.appendChild(buttonDiv);

    resultContainer.appendChild(cardDiv);
}

async function onSaveButtonClick(e) {
    e.preventDefault();

    try {
        const response = await fetch("http://localhost:8080/plan/save", {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify({ plan: plan }),
        });

        const plans = await response.json();

        constructSavedCardUI(plans);
        
    } catch (error) {
        console.log(error);
    }

}

async function onCancelButtonClick(e) {
    e.preventDefault();

    clearResultUI();
}

function clearResultUI() {
    const resultContainer = document.getElementById('result-container');

    const cardDiv = document.getElementById('card-div');

    const cardImg = document.getElementById('card-img');

    const cardParagraph = document.getElementById('card-paragraph');

    const buttonDiv = document.getElementById('button-div')

    cardDiv.remove(cardImg);
    cardDiv.remove(cardParagraph);
    cardDiv.remove(buttonDiv);

    resultContainer.remove(cardDiv);
}

// TODO: Complete this to finish the application logic
function constructSavedCardUI(plans) {

}


export {
    onCancelButtonClick, onPlanButtonClick, onSaveButtonClick
}
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

    console.log(plan);
    // construct the UI
    constructUI(plan);
}

function constructUI(plan) {
    const resultContainer = document.getElementById('result-container');

    const cardDiv = createCard(plan);

    resultContainer.appendChild(cardDiv);
}

function createCard(plan, displayButtons = true) {
    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('class','card');
    cardDiv.setAttribute('id', "card-div");

    const cardImg = document.createElement('img');
    cardImg.setAttribute('src',plan.picture);

    const cardParagraph = document.createElement('p');
    cardParagraph.innerHTML = `Your trip to <strong>${plan.location.toponymName}</strong> is in <strong>${plan.location.daysToTrip}</strong> days!
    Expect the temperature to be about <strong>${plan.weather.temp} &deg;C</strong>, with <strong>${plan.weather.weather.description}</strong>.
    Make sure to carry some <strong>${plan.location.countryDetails.currencies[0].name}(${plan.location.countryDetails.currencies[0].symbol})</strong> with you!`;

    const buttonDiv = document.createElement('div');
    buttonDiv.setAttribute('class','card-footer');

    cardDiv.appendChild(cardImg);
    cardDiv.appendChild(cardParagraph);

    if(displayButtons){
        const cancelButton = document.createElement('button');
        cancelButton.addEventListener('click', onCancelButtonClick);
        cancelButton.innerHTML = "Cancel";
    
        const saveButton = document.createElement('button');
        saveButton.addEventListener('click', onSaveButtonClick);
        saveButton.innerHTML = "Save";
    
        buttonDiv.appendChild(cancelButton);
        buttonDiv.appendChild(saveButton);
        cardDiv.appendChild(buttonDiv);
    }

    return cardDiv;
}

async function onSaveButtonClick(e) {
    e.preventDefault();

    try {
        const response = await fetch("http://localhost:8081/plan/save", {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify({ plan: plan }),
        });

        const plans = await response.json();

        constructSavedCardUI(plans);
        clearResultUI();
        
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

    resultContainer.removeChild(cardDiv);
}

function constructSavedCardUI(plans) {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.querySelectorAll('*').forEach(node => node.remove());
    plans.map(plan => {
        let cardDiv = createCard(plan, false);
        cardsContainer.appendChild(cardDiv);
    })
}

export {
    onCancelButtonClick, onPlanButtonClick, onSaveButtonClick
}
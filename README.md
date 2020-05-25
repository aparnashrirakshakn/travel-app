# Travel App

An app that, at a minimum, obtains a desired trip location & date from the user, and displays weather, countdown, currency and an image of the location using information obtained from four external APIs.

## APIs used
1. Weatherbit
2. Geonames
3. Pixabay
4. REST Countries

## How to use the APIs
### Geonames API for Location Information
Use the following URL for fetching the latitude, longitude and country code information for a place entered by a user.
http://api.geonames.org/searchJSON?formatted=true&q=CITY&username=USERNAME&style=full

### Weatherbit API for Weather Information
Use the following URL for fetching the weather information by latitude and longitude information
https://api.weatherbit.io/v2.0/current?city=CITY&key=API_KEY

### Pixabay API for Location Picture
Use the following URL for searching images for a place that a user is visiting
https://pixabay.com/api/?key=API_KEY&q=PLACE&image_type=photo

### Rest Countries for Country Information
Use the following URL for fetching information about a country
https://restcountries.eu/rest/v2/name/{name}

## API Credentials
1. Go to src > client > js > api.js
2. Insert your username for the Geonames API
3. Insert your API key for the Weatherbit API
4. Insert your APi key for the Pixabay API

## How to run
1. Run npm install
2. To start the node server, npm run start
3. To run the application in development mode, npm run build-dev
4. To run the application in production mode, run npm run build-prod

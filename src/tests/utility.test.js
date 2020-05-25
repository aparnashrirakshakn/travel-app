import { fetchLocationInfo, fetchWeatherInfo, fetchLocationPic, fetchCountryInfo, getCountdown } from '../client/js/utility.js';
import 'babel-polyfill';

describe('Given fetchLocationInfo(), expect it to be defined' , () => {
    test('It should be defined', async () => {
        expect(fetchLocationInfo).toBeDefined();
    });
});

describe('Given fetchWeatherInfo(), expect it to be defined' , () => {
    test('It should be defined', async () => {
        expect(fetchWeatherInfo).toBeDefined();
    });
});

describe('Given fetchLocationPic(), expect it to be defined' , () => {
    test('It should be defined', async () => {
        expect(fetchLocationPic).toBeDefined();
    });
});

describe('Given fetchCountryInfo(), expect it to be defined' , () => {
    test('It should be defined', async () => {
        expect(fetchCountryInfo).toBeDefined();
    });
});

describe('Given getCountdown(), expect it to be defined' , () => {
    test('It should be defined', async () => {
        expect(getCountdown).toBeDefined();
    });
});
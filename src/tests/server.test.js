const request = require('supertest');
import { app } from '../server/index';
import 'babel-polyfill';

describe('test endpoint' , () => {
    test('It should return `Test Successful!`', async () => {
        const res = await request(app)
            .get('/test')
            .send("Test Successful!");
    expect(res.statusCode).toEqual(200);
    });
});

describe('save endpoint' , () => {
    test('It should returns plans', async () => {
        const plans = {};
        const res = await request(app)
            .post('/plan/save')
            .send(plans);
    expect(res.statusCode).toEqual(201);
    });
});

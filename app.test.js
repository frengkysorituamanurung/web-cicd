// app.test.js
const request = require('supertest');
const app = require('./index');

test('responds with Hello World!', async () => {
  const response = await request(app).get('/');
  expect(response.text).toBe('Hello World!');
});

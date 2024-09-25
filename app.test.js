const request = require('supertest');
const { app, server } = require('./index');

afterAll((done) => {
  server.close(done); // Tutup server setelah semua pengujian selesai
});

test('responds with Hello World!', async () => {
  const response = await request(app).get('/');
  expect(response.text).toBe('Hello World!');
});

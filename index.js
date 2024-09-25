const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const server = app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

// Ekspor hanya aplikasi dan fungsi untuk menutup server
module.exports = {
  app,
  startServer: () => server,
  closeServer: (callback) => server.close(callback),
};

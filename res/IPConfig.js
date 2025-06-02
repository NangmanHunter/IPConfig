const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  ip = ip.replace(/^::ffff:/, '');
  res.send(`Your IP address is: ${ip}`);
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

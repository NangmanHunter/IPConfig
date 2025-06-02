const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${port}`);
});


app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});


app.get('/api/ip', (req, res) => {
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(req.headers['x-forwarded-for']);
  console.log(req.connection.remoteAddress);
  ip = ip.replace(/^::ffff:/, '');
  res.send(ip);
});




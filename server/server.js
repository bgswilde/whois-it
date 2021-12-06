
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const router = require('./routes/whois');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.use(router)

app.listen(PORT, () => {
  console.log(`⬆️ ➕ 🏃 Server is up and running on port ${PORT}!`);
});
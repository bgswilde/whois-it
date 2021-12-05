require("dotenv").config();
const { response } = require("express");
const express = require('express');
const fetch = require('node-fetch');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/whois", async (req, res) => {
  try {
    // gathered from the search box on the front end
    const search = req.query.domainOrIP;
    // using node-fetch package to make the request to the who is api, passing in the protected api key and the front end search query
    const results = await fetch(`https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${process.env.API_KEY}&domainName=${search}&outputFormat=JSON&ignoreRawTexts=1`);

    console.log(results);

    const whoisData = await results.json();

    return res.json({
      success: true,
      whoisData,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    })
  }
});

app.listen(PORT, () => {
  console.log(`⬆️ ➕ 🏃 Server is up and running on port ${PORT}!`);
});
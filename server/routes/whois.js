// const express = require('express')
require("dotenv").config();
const fetch = require('node-fetch');
const router = require('express').Router();
// const { response } = require("express");

// refactor to move the route on the server.js file here to clean up code
router.get("/api/whois", async (req, res) => {
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

module.exports = router
const express = require('express');
require('dotenv').config();
const app = express();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2022-11-15',
});

app.use(express.static('public'));
app.use(express.json());


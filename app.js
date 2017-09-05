const express = require('express');
const mongoose = require('mongoose');
const vendingMachineInventory = require('./Models/schema.js')
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/vendingMachine');

const app = express();

app.listen(3000, function() {
  console.log('Successfully started express application!')
})

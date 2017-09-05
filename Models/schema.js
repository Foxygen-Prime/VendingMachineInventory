const mongoose = require('mongoose');

const vendingMachineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  quantity: {
    type: Number,

  },
  price: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    unique: true
  }
});

const vendingMachineInventory = mongoose.model('vendingMachineInventory', vendingMachineSchema);
module.exports = vendingMachineInventory;

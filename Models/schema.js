const mongoose = require('mongoose');

const vendingMachineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  quantity: {
    inStock: Number,
    required: true,
  },
  type: [String],
  Available: Boolean,
  Price: Number
})

const vendingMachineInventory = mongoose.model('vendingMachineInventory', vendingMachineSchema);
    module.exports = vendingMachineInventory;

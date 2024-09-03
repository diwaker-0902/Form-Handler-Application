const mongoose = require("mongoose");

// Define the schema for the member
const employeeSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },

  Address: {
    type: String,
    required: true,
  },

  State: {
    type: String,
    required: true,
  },

  Country: {
    type: String,
    required: true,
  },

  Qualification: {
    type: String,
    required: true,
  },

  Religion: {
    type: String,
    required: true,
  },
});

// Create a model from the schema
const RegForm = mongoose.model("RegForm", employeeSchema);
module.exports = RegForm;

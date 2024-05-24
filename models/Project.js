const mongoose = require("mongoose");
const itemSchema = require("./Item").schema;
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    Name: { type: String, default: "(Untitled Project)" },
    Items: [itemSchema],
    Quantity: [Number],
    Total_Project_Cost: { type: [Number], default: [0] },
  },
  {
    timestamps: true,
  }
);

// By convention, the name of the Model is singular and UpperCamelCased
module.exports = mongoose.model("Project", projectSchema);

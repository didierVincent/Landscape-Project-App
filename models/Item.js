const mongoose = require("mongoose");

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    _id: String,
    Item_ID: String,
    Category_ID: String,
    Name: String,
    Quality: {
      type: Number,
      min: 1,
      max: 3,
      default: 3,
    },
    Supplier: String,
    Price: Number,
  },
  {
    timestamps: true,
  }
);

// By convention, the name of the Model is singular and UpperCamelCased
module.exports = mongoose.model("Item", itemSchema);

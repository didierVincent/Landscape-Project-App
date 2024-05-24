const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const projectSchema = require("./Project").schema;

const userSchema = new Schema(
  {
    name: String,
    googleId: {
      type: String,
      required: true,
    },
    email: String,
    avatar: String,
    projects: [projectSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);

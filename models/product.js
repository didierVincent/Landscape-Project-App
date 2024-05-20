const productSchema = new mongoose.Schema({
  id: String,
  item: String,
  supplier: String,
  price: Number,
});

// By convention, the name of the Model is singular and UpperCamelCased
module.exports = mongoose.model("Product", productSchema);

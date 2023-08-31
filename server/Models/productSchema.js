const mongoose = require('mongoose');
// import autoIncrement from 'mongoose-auto-increment';
const keys = require("../config/keys")

// mongoose.connect(keys.mongo.mongoURL);

try {
    mongoose.connect(keys.mongo.mongoURL);
} catch (error) {
    console.log("error inside product-schema")
}

const product_Schema = new mongoose.Schema({
    id: {
      type:String,
      unique:true,
      required:true
    },
  url: String,
  detailUrl: String,
  title: {
    shortTitle: String,
    longTitle: String,
  },
  price: {
    mrp: Number,
    cost: Number,
    discount: String,
  },
  quantity: Number,
  description: String,
  discount: String,
  tagline: String,
});
// autoIncrement.initialize(mongoose.connection);
// productSchema.plugin(autoIncrement.plugin, 'product');

const product = mongoose.model('product' , product_Schema);

module.exports = product;




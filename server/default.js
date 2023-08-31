const Product = require("./Models/productSchema");

const products = require("./constants/product");

const DefaultData = async()=>{
    try {
        await Product.deleteMany({});
        await Product.insertMany(products);
        // console.log(products);
        console.log("product fetched successfully");
    } catch (error) {
        console.log("error while pushing data in default.js");
    }
}
module.exports = DefaultData;
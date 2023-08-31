const express = require('express');
// import { getProductById, getProducts } from '../controller/product-controller.js';
const { getProductById, getProducts } = require('../controller/product-controller.js');

const { userSignUp, userLogIn } = require('../controller/user-controller.js');
// import { addItemInCart } from '../controller/cart-controller.js';
const { addPaymentGateway, paymentResponse } = require('../controller/payment-controller.js');

const router = express.Router();

//login & signup
router.post('/signup', userSignUp);
router.post('/login', userLogIn);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);

// router.post('/cart/add', addItemInCart);

router.post('/payment', addPaymentGateway);
router.post('/callback', paymentResponse);

module.exports= router;

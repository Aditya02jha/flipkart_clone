const express = require('express');
const bodyParser  = require( 'body-parser');
const  cors  = require( 'cors');
const dotenv  = require( 'dotenv');
// import { v4 as uuid } from 'uuid';
const mongoose = require('mongoose');



const keys = require('./config/keys');
const DefaultData = require("./default.js");
const Routes =  require('./routes/route.js');


const app = express();


dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', Routes);


(async () => {
  try {
    mongoose.connect(keys.mongo.mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("database is connected in App.js");
  } catch (error) {
    console.log("database got error in connecting.");
  }
})();

// connection();
// const PORT = process.env.PORT;

app.listen(8000, () => {
  console.log(`server is live at port number 8000`);
});

DefaultData();

// app.use('/', Routes);

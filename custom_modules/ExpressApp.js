module.exports.getApp = function () {
    /*Import express,body-parser and cors modules
*-> express module is used to build rest APIs
*-> body-parser module is used to parse request into different parts
*-> cors module module is used to use express middleware to enable cross origin resource sharing
* */
    const express = require('express');
    const userRouter = express.Router();
    const homeRouter = express.Router();
    const sensorRouter = express.Router();
    const bodyParse = require('body-parser');
    const cors = require('cors');

//Creating Express app
    const sensorManagementApp = express();

    var corsOptions = {origin: 'http://localhost:8081'};

//Add cors with given options in express app
    sensorManagementApp.use(cors(corsOptions));
//Add bodyParser in express app to parse requests with content-type->application/json
    sensorManagementApp.use(bodyParse.json());
//Add bodyParser in express app to parse requests with content-type->application/x-www-form-urlencoded
    sensorManagementApp.use(bodyParse.urlencoded({extended: true}));


    var userRoute = require('../routes/user.routes');
    userRoute.setRoutes(sensorManagementApp,userRouter);

    var homeRoute = require('../routes/home.routes');
    homeRoute.setRoutes(sensorManagementApp,homeRouter);

    var sensorRoute = require('../routes/sensor.routes');
    sensorRoute.setRoutes(sensorManagementApp,sensorRouter);

    return sensorManagementApp;
}
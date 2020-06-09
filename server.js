var expressApp = require('./custom_modules/ExpressApp');
const sensorManagementApp = expressApp.getApp();


// set port, listen for requests
const PORT = process.env.PORT || 8080;
sensorManagementApp.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

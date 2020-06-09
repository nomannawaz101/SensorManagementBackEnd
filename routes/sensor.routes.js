module.exports.setRoutes = function (app,router) {
    const sensors = require("../controllers/sensor.controller");

    // var router = require("express");
    // var router = sensorManagementApp.Routes();

    // Create a new User
    router.post('/', sensors.create);
    router.get("/", sensors.findAll);
    router.get("/:id", sensors.findOne);
    router.put("/:id", sensors.update);
    router.delete("/:id", sensors.delete);
    router.delete("/", sensors.deleteAll);

    app.use('/api/sensor', router);
};
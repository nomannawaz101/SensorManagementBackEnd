module.exports.setRoutes = function (app,router) {
    const users = require("../controllers/user.controller");

    // var router = require("express");
    // var router = sensorManagementApp.Routes();

    // Create a new User
    router.post('/', users.create);

    // Retrieve all User
    router.get("/", users.findAll);

    // Retrieve a single User with id
    router.get("/:id", users.findOne);

    // Update a User with id
    router.put("/:id", users.update);

    // Delete a User with id
    router.delete("/:id", users.delete);

    // Create all users
    router.delete("/", users.deleteAll);

    app.use('/api/users', router);
};
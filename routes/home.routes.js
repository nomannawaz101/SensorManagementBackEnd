module.exports.setRoutes = function (app,router) {
    const homeController = require("../controllers/home.controller");

    // Retrieve all User
    // router.get("/", homeController.login);
    router.post("/login", homeController.login);
    router.post("/signup",homeController.signup);

    app.use('/api/home', router);
};
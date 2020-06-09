const userController = require('../controllers/user.controller');

exports.login = (req, res) => {
    userController.login(req, res);
};

exports.signup = (req, res) => {
    userController.createForSignUp(req, res);
};

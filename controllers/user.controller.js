const database = require("../models");
var utils = require('../Utils/Utilities');
const User = database.users;
const Op = database.Sequelize.Op;
var bcrypt = require("bcryptjs");


exports.create = (req, res) => {
    if (!utils.checkPasswordMinLength(req.body.password)) {
        return res.status(500).send({message: "Password Must be 8 characters long minimum."});
    }
    User.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(user => {
            if (user) {
                return res.status(404).send({message: "User Already exists."});
            }
        });
    // Create a User
    const user = {
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 8)
    };

    // Save User in the database
    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log('error');
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });
};

exports.createForSignUp = (req, res) => {
    if (!utils.checkPasswordMinLength(req.body.password)) {
        return res.status(500).send({message: "Password Must be 8 characters long minimum."});
    }
    User.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(user => {
            if (user) {
                return res.status(404).send({message: "User Already exists."});
            }
        });
    // Create a User
    const userNew = {
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 8)
    };

    // Save User in the database
    User.create(userNew)
        .then(data => {
            const userController = require('../controllers/user.controller');
            userController.login(req, res);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });
};

exports.login = (req, res) => {
    if (!utils.checkPasswordMinLength(req.body.password)) {
        return res.status(500).send({message: "Password Must be 8 characters long minimum."});
    }
    User.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(user => {
            if (!user) {
                return res.status(404).send({message: "User Not found."});
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }

            var token = utils.getJWT(user.id);

            res.status(200).send({
                id: user.id,
                username: user.username,
                accessToken: token
            });
        })
        .catch(err => {
            res.status(500).send({message: err.message});
        });
};

// Retrieve all User from the database.
exports.findAll = (req, res) => {

    User.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving User."
            });
        });
};

// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving User with id=" + id
            });
        });
};

// Update a User by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with id=" + id
            });
        });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    User.destroy({
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete User with id=${id}. Maybe User was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
};

// Delete all User from the database.
exports.deleteAll = (req, res) => {
    User.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({message: `${nums} User were deleted successfully!`});
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all User."
            });
        });
};




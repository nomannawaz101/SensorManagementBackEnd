const database = require("../models");
const Sensor = database.sensors;
const Zone = database.zones;
const HtoT = database.HtoTs;
const Op = database.Sequelize.Op;
var bcrypt = require("bcryptjs");


exports.create = (req, res) => {
    const sensor = {
        bus_code: req.body.bus_code,
        datetime: req.body.datetime,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        Zones: [
            {
                full_zone: req.body.average_h_full_zone,
                upper_zone: req.body.average_h_upper_zone,
                center_zone: req.body.average_h_center_zone,
                lower_zone: req.body.average_h_lower_zone,
                zone_type: req.body.average_h_zonename
            },
            {
                full_zone: req.body.magnitude_full_zone,
                upper_zone: req.body.magnitude_upper_zone,
                center_zone: req.body.magnitude_center_zone,
                lower_zone: req.body.magnitude_lower_zone,
                zone_type: magnitude_zonename
            }
            ,
            {
                full_zone: req.body.average_t_full_zone,
                upper_zone: req.body.average_t_upper_zone,
                center_zone: req.body.average_t_center_zone,
                lower_zone: req.body.average_t_lower_zone,
                zone_type: average_t_zonename
            }
        ],
        HtoT: [
            {
                moisture: req.body.moisture,
                temp: req.body.temp,
                self_turn: req.body.self_turn
            }
        ]

    };

    Sensor.create(sensor,{
        include: [{ model: Zone, as: 'Zones' } , { model: HtoT, as: 'HtoT' }]
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log('error');
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Sensor."
            });
        });
};

// Retrieve all Sensor from the database.
exports.findAll = (req, res) => {

    Sensor.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Sensor."
            });
        });
};

// Find a single Sensor with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Sensor.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Sensor with id=" + id
            });
        });
};

// Update a Sensor by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Sensor.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Sensor was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Sensor with id=${id}. Maybe Sensor was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Sensor with id=" + id
            });
        });
};

// Delete a Sensor with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Sensor.destroy({
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Sensor was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Sensor with id=${id}. Maybe Sensor was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Sensor with id=" + id
            });
        });
};

// Delete all Sensor from the database.
exports.deleteAll = (req, res) => {
    Sensor.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({message: `${nums} Sensor were deleted successfully!`});
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Sensor."
            });
        });
};




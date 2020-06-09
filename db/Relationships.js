module.exports.set = function (database) {
    // const database = require("../models");

    // const User = database.users;
    const Sensor = database.sensors;
    const Zone_Point = database.zone_points;
    const HtoT = database.HtoTs;
    const Zone = database.zones;

    //Defining Relationship
    Sensor.hasMany(Zone , {
        onDelete: 'CASCADE',
        as: 'Zones'
    });
    Zone.belongsTo(Sensor, {
        foreignKey: "SensorId",
        as: "Sensor",
    });

    Sensor.hasOne(HtoT , {
        onDelete: 'CASCADE',
        as: 'HtoT'
    });
    HtoT.belongsTo(Sensor, {
        foreignKey: "SensorId",
        as: "Sensor",
    });

    Zone.hasOne(Zone_Point , {
        onDelete: 'CASCADE',
        as: "Zone_Point",
    });
    Zone_Point.belongsTo(Zone, {
        foreignKey: "ZoneId",
        as: "Zone",
    });
}
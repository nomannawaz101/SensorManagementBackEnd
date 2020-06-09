const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const database = {};

database.Sequelize = Sequelize;
database.sequelize = sequelize;

database.sensors = require("./sensor.model")(sequelize, Sequelize);
database.users = require("./user.model")(sequelize, Sequelize);
database.HtoTs = require("./HtoT.model")(sequelize, Sequelize);
database.zones = require("./zone.model")(sequelize, Sequelize);
database.zone_points = require("./zone_points.model")(sequelize, Sequelize);

var relationships = require('../db/Relationships');
relationships.set(database);

database.sequelize.sync({force: true}).then(() => {
    console.log("Drop and re-sync db.");
});

module.exports = database;
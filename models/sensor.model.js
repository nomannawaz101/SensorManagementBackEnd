//sensor model, which sequelize ORM will use to map to/from database.
module.exports = (sequelize, Sequelize) => {
    const Sensor = sequelize.define("sensor", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        bus_code: {
            allowNull: false,
            type: Sequelize.STRING
        },
        datetime: {
            allowNull: false,
            type: Sequelize.DATE
        },
        longitude: {
            allowNull: true,
            type: Sequelize.FLOAT
        },
        latitude
            : {
            allowNull: true,
            type: Sequelize.FLOAT
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW'),
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW'),
        }
    });
    return Sensor;
};
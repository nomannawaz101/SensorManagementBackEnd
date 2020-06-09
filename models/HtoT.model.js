//HtoT model, which sequelize ORM will use to map to/from database.
module.exports = (sequelize, Sequelize) => {
    const HToT = sequelize.define("htot", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        moisture: {
            allowNull: true,
            type: Sequelize.INTEGER
        },
        temp: {
            allowNull: true,
            type: Sequelize.INTEGER
        },
        self_turn: {
            allowNull: true,
            type: Sequelize.INTEGER
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

    return HToT;
};
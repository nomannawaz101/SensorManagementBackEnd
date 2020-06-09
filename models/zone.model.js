//zone model, which sequelize ORM will use to map to/from database.
module.exports = (sequelize, Sequelize) => {
    const Zone = sequelize.define("zone", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        full_zone: {
            allowNull: true,
            type: Sequelize.FLOAT
        },
        upper_zone: {
            allowNull: true,
            type: Sequelize.FLOAT
        },
        center_zone: {
            allowNull: true,
            type: Sequelize.FLOAT
        },
        lower_zone: {
            allowNull: true,
            type: Sequelize.FLOAT
        },
        zone_type: {
            allowNull: false,
            type: Sequelize.STRING
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
    return Zone;
};
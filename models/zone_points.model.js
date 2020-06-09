//zone_pints model, which sequelize ORM will use to map to/from database.
module.exports = (sequelize, Sequelize) => {
    const Zone_Points = sequelize.define("zone_points", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        z1: {
            allowNull: true,
            type: Sequelize.FLOAT
        },
        z2: {
            allowNull: true,
            type: Sequelize.FLOAT
        },
        z3: {
            allowNull: true,
            type: Sequelize.FLOAT
        },
        z4: {
            allowNull: true,
            type: Sequelize.FLOAT
        },
        z5: {
            allowNull: true,
            type: Sequelize.FLOAT
        },
        z6: {
            allowNull: true,
            type: Sequelize.FLOAT
        },
        z7: {
            allowNull: true,
            type: Sequelize.FLOAT
        },
        z8: {
            allowNull: true,
            type: Sequelize.FLOAT
        },
        z9: {
            allowNull: true,
            type: Sequelize.FLOAT
        },
        z10: {
            allowNull: true,
            type: Sequelize.FLOAT
        },
        z11: {
            allowNull: true,
            type: Sequelize.FLOAT
        },
        z12: {
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

    return Zone_Points;
};
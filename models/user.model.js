//user model, which sequelize ORM will use to map to/from database.
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            allowNull: false,
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
                isEmail: true
            }
        },
        password: {
            allowNull: false,
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
                min: 8
            }
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
    });
    return User;
};
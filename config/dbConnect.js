const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('allfiles', 'root', '1234', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

const dbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Db connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = { dbConnection, sequelize };
const {Sequelize} = require('sequelize');
require('dotenv').config();

const DATABASE = process.env.DB;
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const HOST = process.env.DB_HOST;

const sequelize = new Sequelize(DATABASE,USER,PASSWORD,{
    host: HOST,
    dialect: 'postgres'
})

const modelDefiners = [
    require('./models/users.model'),
]

for(const modelDefiner of modelDefiners) {
    modelDefiner(sequelize)
}

sequelize.sync({force:false})
module.exports = sequelize
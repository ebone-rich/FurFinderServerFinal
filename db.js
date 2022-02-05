const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://postgres:41e4c9c7d8eb46a69433e0075118e918@localhost:5432/furfinderserver")
// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//     dialect: 'postgres',
//     // dialectOptions: {
//     //     ssl: {
//     //         require: true,
//     //         rejectUnauthorized: false
//     //     }
//     // }
// })

module.exports = sequelize;
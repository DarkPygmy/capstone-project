const sequelize = require('./database.js')

const seed = () => {
    sequelize.query(`
        DROP TABLE IF EXISTS games;

        CREATE TABLE games (
            id SERIAL PRIMARY KEY, 
            name VARCHAR(30),
            date DATE,
            description VARCHAR(400),
            complete BOOLEAN
        );
    `).then(() => {
        console.log(`DB has been seeded!`)
    })
}

module.exports = seed
const sequelize = require(`./database.js`)

module.exports = {
    addGame: (req, res) => {
         const {name, date, description} = req.body 

         sequelize.query(`
            INSERT INTO games (name, date, description, complete)
            VALUES (
                '${name}',
                '${date}',
                '${description}',
                false
            )
            RETURNING *;
         `).then(dbRes => {
            res.status(200).send(dbRes[0])
         })
         .catch(err => console.log(err))
    },

    getGames: (req, res) => {
        sequelize.query(`
            SELECT * FROM games
            ORDER BY date ASC;
        `).then(dbRes => {
            res.status(200).send(dbRes[0])
        }).catch(err => console.log(err))
    },
    deleteGame: (req, res) => {
        let {id} = req.params
        sequelize.query(`
            DELETE FROM games WHERE id = ${id};
            SELECT * FROM games
            ORDER BY date ASC;
        `).then(dbRes => {
            res.status(200).send(dbRes[0])
        })
    }
    
}
const express = require('express')
const cors = require('cors')

const sequelize = require('./database')

const seed = require(`./seed.js`)
const {addGame, getGames, deleteGame} = require(`./controller.js`)

const app = express()
app.use(express.json())
app.use(cors())

app.post(`/api/seed`, seed)

app.post(`/api/game`, addGame)
app.get('/api/games', getGames)
app.delete('/api/game/:id', deleteGame)
sequelize.sync()

app.listen(4545, () => console.log('Take us to warp 4545!'))
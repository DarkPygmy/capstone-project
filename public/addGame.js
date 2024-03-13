console.log("Js connected")
const form = document.getElementById('game-form')
const gameName = document.getElementById('game-name')
const gameDate = document.getElementById('game-date')
const gameDesc = document.getElementById('game-desc')

const sendGame = (e) => {
    e.preventDefault()

    const newGame = {
        name: gameName.value,
        date: gameDate.value,
        description: gameDesc.value
    }

    axios.post("http://localhost:4545/api/game", newGame)
    .then(res => {
        console.log(res.data)
        alert("Your game has been added!")
    })
    .catch(err => console.log(err))
}

form.addEventListener('submit', sendGame)
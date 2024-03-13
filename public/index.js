const gameContainer = document.getElementById('game-container')

const createCard = game => {
    let card = document.createElement('div')
    card.classList += 'game-card'

    let cardHeader = document.createElement('div')
    cardHeader.classList += 'game-header'

    let options = document.createElement('dvi')
    options.classList += 'game-options'

    let gameName = document.createElement('h3')
    gameName.textContent = game.name

    let trashIcon = document.createElement('h3')
    trashIcon.textContent = '🚮'

    
    card.appendChild(cardHeader)
    cardHeader.appendChild(gameName)
    cardHeader.appendChild(options)
    options.appendChild(trashIcon)

    let description = document.createElement('p')
    description.textContent = game.description
    card.appendChild(description)

    gameContainer.appendChild(card)
}

const fetchGames = () => {
    axios.get('http://localhost:4545/api/games')
        .then(res => {
            console.log(res.data)
            res.data.forEach(createCard)
        })
}

fetchGames()
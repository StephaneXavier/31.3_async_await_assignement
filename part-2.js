const baseURL = 'http://deckofcardsapi.com/api/deck'

// Question 1

async function drawCard() {
    let { data: card } = await axios.get(`${baseURL}/new/draw`)
    console.log(`${card.cards[0].value} of ${card.cards[0].suit}`)
    console.log(card)
}

// Question 2

async function drawTwoCards() {
    let { data: cardOne } = await axios.get(`${baseURL}/new/draw`)
    console.log('first card =>', `${cardOne.cards[0].value} of ${cardOne.cards[0].suit}`)
    let { data: cardTwo } = await axios.get(`${baseURL}/${cardOne.deck_id}/draw`)
    console.log('second card =>', `${cardTwo.cards[0].value} of ${cardTwo.cards[0].suit}`)
}




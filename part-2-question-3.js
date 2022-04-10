const baseURL = 'http://deckofcardsapi.com/api/deck'


const deck = {
    async init() {
        let res = await axios.get(`${baseURL}/new/shuffle`)
        this.deck_id = res.data.deck_id
        this.remaining = res.data.remaining
    },

    async draw_card() {
        let res = await axios.get(`${baseURL}/${this.deck_id}/draw`)
        $('img').attr("src", res.data.cards[0].image)
        this.remaining -= 1
        $('h3').text(`${this.remaining} remaining`)
    },


}



$('document').ready(
    deck.init()
)

$('button').on('click', () => { deck.draw_card() })
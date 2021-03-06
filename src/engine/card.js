const addCardToDeck = (card, deck) => ([...deck, card])
const removeCardFromDeck = (deck) => (deck.slice(0, -1))

export default {
  addCardToDeck,
  removeCardFromDeck
}
import React from 'react';
import { Deck } from './Deck'

import * as CardStories from '../cards/Card.stories'

export default {
  title: "Deck/Deck",
  component: Text,
  argTypes: {}
}

const Template = (args) => <Deck {...args} ></Deck>;

export const DeckWithOneCard = Template.bind({})
DeckWithOneCard.args = {
  cards: [<CardStories.EmptyCard />]
}
export const DeckWithSevenCard = Template.bind({})
DeckWithSevenCard.args = {
  cards: [
    <CardStories.EmptyCard />,
    <CardStories.EmptyCard />,
    <CardStories.EmptyCard />,
    <CardStories.EmptyCard />,
    <CardStories.EmptyCard />,
    <CardStories.EmptyCard />,
    <CardStories.EmptyCard />
  ]
}

export const EmptyDeck = Template.bind({})
EmptyDeck.args = {
  cards: []
}
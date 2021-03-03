/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import {GameCard} from "./GameCard";

const Template = (args) => <GameCard {...args} />;

export const HeroGameCard = Template.bind({});
HeroGameCard.args = {
  title: "Hero",
  text: "Just a Hero for example",
  imgSrc: "/img/cards/hero-example-card.jpg",
  rarity: "rare"
}

export const EmptyGameCard = Template.bind({});
export default {
  title: "Cards/GameCard",
  component: GameCard,
  argTypes: {},
};

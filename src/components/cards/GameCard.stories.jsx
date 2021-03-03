/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import {GameCard} from "./GameCard";

const Template = (args) => <GameCard {...args} />;

export const GameCardWithText = Template.bind({});
GameCardWithText.args = {
  title: "Title",
  text: "Some text"
}

export const EmptyGameCard = Template.bind({});
export default {
  title: "Cards/GameCard",
  component: GameCard,
  argTypes: {},
};

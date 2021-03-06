import React from 'react';
import Dice from './Dice'

export default {
  title: "Dices/Dice",
  component: Dice,
  argTypes: {}
}

const Template = (args) => <Dice {...args} />;

export const DefaultDice = Template.bind({});

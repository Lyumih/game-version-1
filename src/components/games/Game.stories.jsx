import React from 'react';
import Game from './Game';

export default {
  title: "Games/Game",
  component: Game,
  argTypes: {}
}

const Template = (args) => <Game {...args}/>

export const DefaultGame = Template.bind({})
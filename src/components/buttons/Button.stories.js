import React from 'react';

import Button from './Button';

export default {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const StartGameButton = Template.bind({})
StartGameButton.args = {
  label: 'Начать игру',
};

export const WithoutLabelButton = Template.bind({});

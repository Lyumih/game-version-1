import React from 'react';
import CardImg from './CardImg'

export default {
  title: "Img/CardImg",
  component: CardImg,
  argTypes: {}
}

const Template = (args) => <CardImg {...args} />;

export const DefaultCardImg = Template.bind({});

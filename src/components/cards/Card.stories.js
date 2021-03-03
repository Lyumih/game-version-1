import React from 'react';
import { Card } from './Card'

export default {
  title: "Cards/Card",
  component: Card,
  argTypes: {}
}

const Template = (args) => <Card {...args} />;

export const EmptyCard = Template.bind({});

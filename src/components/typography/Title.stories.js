import React from 'react';
import { Title } from './Title'

export default {
  title: "Typography/Title",
  component: Title,
  argTypes: {}
}

const Template = (args) => <Title {...args} />;

export const SmallTitle = Template.bind({})
SmallTitle.args = {
  text: "Some text"
}

export const EmptyTitle = Template.bind({});
import React from 'react';
import Text from './Text'

export default {
  title: "Typography/Text",
  component: Text,
  argTypes: {}
}

const Template = (args) => <Text {...args} />;

export const SmallText = Template.bind({})
SmallText.args = {
  text: "Some text"
}

export const EmptyText = Template.bind({});
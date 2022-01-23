import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';

import { Badge } from './Badge';

export default {
  title: 'Badge',
  component: Badge,
} as Meta;

const Template: Story<ComponentProps<typeof Badge>> = (args) => (
  <Badge {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Badge',
};

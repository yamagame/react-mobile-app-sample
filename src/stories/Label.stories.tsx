import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Label, LabelProps } from './Label'

export default {
  title: 'Example/Label',
  component: Label,
  argTypes: {},
} as Meta

const Template: Story<LabelProps> = (args) => (
  <Label {...args} />
)

export const NormalLabel = Template.bind({})
NormalLabel.args = {
  label: 'Label',
}

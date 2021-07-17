import React from 'react'
import { Matrix } from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Matrix',
  component: Matrix
} as ComponentMeta<typeof Matrix>

const Template: ComponentStory<typeof Matrix> = (args) => <Matrix {...args} />

export const Primary = Template.bind({})

Primary.args = {
  items: [],
  xLabel: '',
  yLabel: ''
}

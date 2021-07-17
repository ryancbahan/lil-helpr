import React from 'react'
import { DraggableItem } from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'DraggableItem',
  component: DraggableItem
} as ComponentMeta<typeof DraggableItem>

const Template: ComponentStory<typeof DraggableItem> = (args) => <DraggableItem {...args} />

export const Primary = Template.bind({})

Primary.args = {
  name: 'Important task'
}

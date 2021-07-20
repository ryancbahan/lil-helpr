import React from 'react'
import { TextField } from './TextField'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'TextField',
  component: TextField
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />

export const NoLabel = Template.bind({})

NoLabel.args = {
  type: 'text',
  onChange: () => {},
  value: 'text'
}

export const Label = Template.bind({})

Label.args = {
  type: 'text',
  onChange: () => {},
  value: 'text',
  label: 'my text field'
}

export const PlaceholderText = Template.bind({})

PlaceholderText.args = {
  type: 'text',
  onChange: () => {},
  value: '',
  placeholder: 'type something...'
}

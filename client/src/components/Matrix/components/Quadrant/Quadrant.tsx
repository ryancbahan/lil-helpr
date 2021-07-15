import React from 'react'
import { ITEM_SIZE } from '../../../../utils/constants'

const quadrantStyles = {
  width: `${ITEM_SIZE * 4}rem`,
  height: `${ITEM_SIZE * 4}rem`,
  border: 'solid 1px black'
}

export const Quadrant = () => {
  return <div style={quadrantStyles} />
}

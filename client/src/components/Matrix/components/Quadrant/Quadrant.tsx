import React from 'react'
import { ITEM_SIZE } from '../../../../utils/constants'
import { theme } from '../../../../theme'

const quadrantStyles = {
  width: `${ITEM_SIZE * 4}rem`,
  height: `${ITEM_SIZE * 4}rem`,
  border: `solid 1px ${theme.lightGrey}`,
  background: theme.white,
  borderRadius: theme.borderRadiusSmall

}

export const Quadrant = () => {
  return <div style={quadrantStyles} />
}

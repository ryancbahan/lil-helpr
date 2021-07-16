import React, { RefObject } from 'react'
import { ITEM_SIZE } from '../../utils/constants'
import { motion, useMotionValue } from 'framer-motion'
import { theme } from '../../theme'

export interface DraggableItemProps {
  name: string;
}

const ItemStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute' as 'absolute',
  ZIndex: '1',
  fontSize: '1rem'
}

const Circle = {
  width: `${ITEM_SIZE / 2}rem`,
  height: `${ITEM_SIZE / 2}rem`,
  borderRadius: `${ITEM_SIZE}rem`,
  border: `solid 1px ${theme.lightGrey}`,
  boxShadow: `0.25rem 0.25rem 1rem ${theme.lighterGrey}`,
  background: '#9b59b6',
  marginRight: '0.5rem'
}

export const DraggableItem = React.forwardRef(({ name }: DraggableItemProps, ref) => {
  const x = useMotionValue<number>(0)
  const y = useMotionValue<number>(0)

  const onDragEnd = () => {
    console.log(x.get(), y.get())
  }

  return (
    <motion.div
      style={{ ...ItemStyles, x, y }}
      drag
      dragConstraints={ref as RefObject<HTMLElement>}
      dragElastic={0}
      dragMomentum={false}
      onDragEnd={onDragEnd}
    >
      <div style={Circle} />
      <p>{name}</p>
    </motion.div>
  )
})

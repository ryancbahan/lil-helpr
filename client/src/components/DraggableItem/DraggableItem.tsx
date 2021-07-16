import React, { RefObject } from 'react'
import { ITEM_SIZE } from '../../utils/constants'
import { motion, useMotionValue } from 'framer-motion'

export interface DraggableItemProps {
  name: string;
}

const ItemStyles = {
  width: `${ITEM_SIZE}rem`,
  height: `${ITEM_SIZE}rem`,
  borderRadius: `${ITEM_SIZE}rem`,
  border: 'solid 1px black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute' as 'absolute',
  ZIndex: '1',
  background: 'white',
  fontSize: '1rem'
}

export const DraggableItem = React.forwardRef(({ name }: DraggableItemProps, ref) => {
  const x = useMotionValue<number>(0)
  const y = useMotionValue<number>(0)

  const onDragEnd = () => {
    console.log(x.get(), y.get())
  }

  return <motion.div
    style={{ ...ItemStyles, x, y }}
    drag
    dragConstraints={ref as RefObject<HTMLElement>}
    dragElastic={0}
    dragMomentum={false}
    onDragEnd={onDragEnd}
  >
    <p>{name}</p>
  </motion.div>
})

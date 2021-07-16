import React, { useRef } from 'react'
import { Quadrant } from './components/Quadrant'
import { DraggableItem } from '../DraggableItem'
import { ITEM_SIZE } from '../../utils/constants'

const MatrixStyles = {
  position: 'relative' as 'relative',
  display: 'grid',
  gridTemplateColumns: `${ITEM_SIZE * 4}rem ${ITEM_SIZE * 4}rem`,
  gridTemplateRows: `${ITEM_SIZE * 4}rem ${ITEM_SIZE * 4}rem`,
  gridGap: '0.5rem',
  margin: '1rem'
}

export interface PriorityItem {
  name: string
}

export interface MatrixProps {
  items: PriorityItem[];
  xLabel?: string;
  yLabel?: string;
}

export function Matrix ({ items, xLabel, yLabel }: MatrixProps) {
  const constraintsRef = useRef<HTMLDivElement>(null)

  return (
    <div style={{ display: 'flex', fontSize: '2rem', position: 'relative' as 'relative' }}>
      {yLabel && (
        <div style={{ position: 'absolute' as 'absolute', top: '42.5%', left: '-5rem' }}>
          <div style={{ transform: 'rotate(-90deg)' }}>{yLabel}</div>
        </div>
      )}
      <div>
        <div style={MatrixStyles} ref={constraintsRef}>
          <Quadrant />
          <Quadrant />
          <Quadrant />
          <Quadrant />
          {items.map(({ name }, index) => <DraggableItem key={index} ref={constraintsRef} name={name} />)}
        </div>
        {xLabel && <div style={{ textAlign: 'center', margin: '2rem 0' }}>{xLabel}</div>}
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import { FullPageFrame } from '../../../components/FullPageFrame'
import { Matrix, PriorityItem } from '../../../components/Matrix'

export function PriorityMatrix () {
  const [items, setItems] = useState<PriorityItem[]>([])
  const [text, setText] = useState<string>('')

  const onButtonClick = () => {
    setItems([...items, { name: text }])
    setText('')
  }

  const onInputChange = (event: { target: HTMLInputElement}) => setText(event.target.value)

  return (
    <FullPageFrame>
      <div style={{ border: 'solid 1px black' }}>
        <Matrix items={items} xLabel="Effort" yLabel="Impact" />
        <div style={{ margin: '2rem 0' }}>
          <input value={text} onChange={onInputChange} />
          <button onClick={onButtonClick}>Add item</button>
        </div>
      </div>
    </FullPageFrame>
  )
}

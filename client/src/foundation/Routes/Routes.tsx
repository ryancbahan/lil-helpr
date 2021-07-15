import React from 'react'
import { Switch, Route } from 'react-router'
import { PriorityMatrix } from '../../pages/app/PriorityMatrix'

export function Routes () {
  return (
    <Switch>
      <Route path="/">
        <PriorityMatrix />
      </Route>
    </Switch>
  )
}

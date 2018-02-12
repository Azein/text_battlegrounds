import React from 'react'
import { Route } from 'react-router-dom'
import { injectReducer, ejectReducer } from 'redux-dynamix'
import CharCreation from './index'
import charCreationReducer from './ducks'

const CharCreationRoute = ({ ...props }) => (
  <Route
    {...props}
    component={CharCreation}
    onEnter={() => {
      injectReducer('charCreation', charCreationReducer)
    }}
    onLeave={() => {
      ejectReducer('charCreation')
    }}
  />
)

export default CharCreationRoute

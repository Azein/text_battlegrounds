import React from 'react'
import { Route } from 'react-router-dom'
import { injectReducer, ejectReducer } from 'redux-dynamix'
import { compose, lifecycle } from 'recompose'
import CharCreation from './index'
import charCreationReducer from './ducks'

const CharCreationRoute = ({ ...props }) => (
  <Route {...props} component={CharCreation} />
)

export default lifecycle({
  componentWillMount() {
    console.log('a')
    injectReducer('charCreation', charCreationReducer)
  },
  componentWillUnmount() {
    console.log('b')
    ejectReducer('charCreation')
  },
})(CharCreationRoute)

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import * as theme from 'ui/theme'
import MainMenu from 'screens/MainMenu'
import CharCreationRoute from 'screens/CharCreation/route'
import CharCreation from './screens/CharCreation'
import './App.css'

const App = () => (
  <Router>
    <div className="App">
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={MainMenu} />
          <CharCreationRoute exact path="/charCreation" />
        </Switch>
      </ThemeProvider>
    </div>
  </Router>
)

export default App

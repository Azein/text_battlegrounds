import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import * as theme from 'ui/theme'
import MainMenu from 'screens/MainMenu'
import './App.css'

const App = () => (
  <Router>
    <div className="App">
      <ThemeProvider theme={theme}>
        <Route
          exact
          path="/"
          component={() => [
            <header className="App-header" key={'header'}>
              <h1 className="App-title">Text Battlegrounds</h1>
            </header>,
            <MainMenu key={'main_menu'} />,
          ]}
        />
      </ThemeProvider>
    </div>
  </Router>
)

export default App

// @flow
import React, { Component } from 'react'
import { AnimatedButton } from 'ui/components/Button'
import isElectron from 'is-electron'
import {
  StyledLayout,
  Background,
  ActiveLayer,
  MenuContainer,
  ButtonsContainer,
} from './styled'
import Header from 'screens/parts/header'

const audioTheme = require('./pubg_main.mp3')

type Props = {}
type State = {}

let electronApp = {}
if (isElectron()) {
  electronApp = window.require('electron').remote.app
  alert(electronApp)
}

export default class MainMenu extends Component<Props, State> {
  render() {
    return (
      <StyledLayout>
        <audio src={audioTheme} />
        <Header />
        <Background />
        <ActiveLayer>
          <MenuContainer>
            <ButtonsContainer>
              <AnimatedButton
                onClick={() => {
                  this.props.history.push('charCreation')
                }}
              >
                Новая игра
              </AnimatedButton>
              <AnimatedButton>Загрузить игру</AnimatedButton>
              {isElectron() && (
                <AnimatedButton
                  onClick={() => {
                    electronApp.quit()
                  }}
                >
                  Выход
                </AnimatedButton>
              )}
            </ButtonsContainer>
          </MenuContainer>
        </ActiveLayer>
      </StyledLayout>
    )
  }
}

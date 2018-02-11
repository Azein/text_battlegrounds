// @flow
import React, { Component } from 'react'
import { AnimatedButton } from 'ui/components/Button'
import isElectron from 'is-electron'
import {
  Layout,
  Background,
  ActiveLayer,
  MenuContainer,
  ButtonsContainer,
} from './styled'

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
      <Layout>
        <audio src={audioTheme} />
        <Background />
        <ActiveLayer>
          <MenuContainer>
            <ButtonsContainer>
              <AnimatedButton>Новая игра</AnimatedButton>
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
      </Layout>
    )
  }
}

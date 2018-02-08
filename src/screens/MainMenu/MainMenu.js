// @flow
import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Button, { AnimatedButton } from 'ui/components/Button'

import {
  Layout,
  Background,
  ActiveLayer,
  MenuContainer,
  ButtonsContainer,
} from './styled'


type Props = {}
type State = {}

export default class MainMenu extends Component <Props, State> {
  render() {
    return (
      <Layout>

        <Background />
        <ActiveLayer>
          <MenuContainer>
            <ButtonsContainer>
              <AnimatedButton>
                Новая игра
              </AnimatedButton>
              <AnimatedButton>
                Загрузить игру
              </AnimatedButton>
              <AnimatedButton>
                Выход
              </AnimatedButton>
            </ButtonsContainer>
          </MenuContainer>
        </ActiveLayer>

      </Layout>
    )
  }
}

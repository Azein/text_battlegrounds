import styled from 'styled-components'
import { Layout } from 'ui/components/Layout'

const bgImage = require('./bg.png')

const StyledLayout = styled(Layout)`
  justify-content: center;
  align-items: center;
`

const Background = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background: url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  filter: grayscale(0.8);
  z-index: 1;
`

const ActiveLayer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`

const MenuContainer = styled.div`
  height: 480px;
  width: 640px;
  flex-grow: 0;
  flex-shrink: 0;
  background: rgba(178, 223, 219, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

const ButtonsContainer = styled.div`
  flex-grow: 0;
  width: 300px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export {
  StyledLayout,
  Background,
  ActiveLayer,
  MenuContainer,
  ButtonsContainer,
}

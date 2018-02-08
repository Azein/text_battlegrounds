import styled from 'styled-components'

const Layout = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Background = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-size: contain;
  filter: grayscale(0.8) blur(2px);
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
  background: rgba(178, 223, 219, 0.70);
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
  Layout,
  Background,
  ActiveLayer,
  MenuContainer,
  ButtonsContainer,
}

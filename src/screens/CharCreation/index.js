import React from 'react'
import Header from 'screens/parts/header'
import { AnimatedButton } from 'ui/components/Button'
import {
  StyledButton,
  Layout,
  HorizontalLayout,
  StatsSection,
  DescSection,
  StartSection,
  Description,
  Row,
  StatName,
} from './styled'

const CharCreation = () => (
  <Layout>
    <Header />
    <HorizontalLayout>
      <StatsSection>
        <Row>
          <StatName>Реакция</StatName>
        </Row>
        <Row>
          <StatName>Внимательность</StatName>
        </Row>
        <Row>
          <StatName>Штурмовые винтовки</StatName>
        </Row>
        <Row>
          <StatName>Снайперские винтовки</StatName>
        </Row>
        <Row>
          <StatName>Пистолеты-пулеметы</StatName>
        </Row>
        <Row>
          <StatName>Дробовики</StatName>
        </Row>
        <Row>
          <StatName>Метательное оружие</StatName>
        </Row>
        <Row>
          <StatName>Ближний бой</StatName>
        </Row>
        <Row>
          <StatName>Скрытность</StatName>
        </Row>
        <Row>
          <StatName>Управление транспортом</StatName>
        </Row>
      </StatsSection>
      <DescSection>
        <Description />
        <StartSection>
          <AnimatedButton>Начать игру</AnimatedButton>
        </StartSection>
      </DescSection>
    </HorizontalLayout>
  </Layout>
)

export default CharCreation

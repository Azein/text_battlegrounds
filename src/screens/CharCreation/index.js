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
} from './styled'

const CharCreation = () => (
  <Layout>
    <Header />
    <HorizontalLayout>
      <StatsSection />
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

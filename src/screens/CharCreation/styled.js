import styled from 'styled-components'
import Button from '@kupibilet/ui/components/Button'
import { Layout } from 'ui/components/Layout'

const StyledButton = styled(Button)`
  border-radius: 0;
`

const HorizontalLayout = styled(Layout)`
  flex-direction: row;
  flex-flow: nowrap;
`

const StatsSection = styled(Layout)`
  width: 50%;
  background-color: ${({ theme }) => theme.color.darkestGrey};
  color: ${({ theme }) => theme.color.textWhite};
`

const DescSection = styled(Layout)`
  width: 50%;
  background-color: ${({ theme }) => theme.color.darkerGrey};
`

const StartSection = styled(Layout)`
  flex-direction: row;
  flex-grow: 0;
  flex-shrink: 0;
  height: 80px;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  padding-right: 40px;
`

const Description = styled(Layout)`
  color: ${({ theme }) => theme.color.textWhite};
`

const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  flex-shrink: 0;
  flex-grow: 0;
  height: 40px;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
`

const StatName = styled.div`
  flex-grow: 0;
  font-size: 18px;
`

export {
  StyledButton,
  Layout,
  HorizontalLayout,
  StatsSection,
  DescSection,
  StartSection,
  Description,
  Row,
  StatName,
}

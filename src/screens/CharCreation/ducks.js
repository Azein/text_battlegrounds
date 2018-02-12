// @flow

import type { charStats } from 'types/character'

const INCREASE_STAT = '@BATTLEGROUNDS/INCREASE_STAT'
const DECREASE_STAT = '@BATTLEGROUNDS/DECREASE_STAT'

type State = {
  ...charStats,
  freePoints: number,
  rules: {
    statMax: number,
  },
}

type Payload = {
  name?: string,
  amount?: number,
}

type Action = {
  type: string,
  payload: Payload,
}

type ChangeStat = (string, number) => Action

const inreaseStat: ChangeStat = (name, amount) => ({
  type: INCREASE_STAT,
  payload: {
    name,
    amount,
  },
})

const decreaseStat: ChangeStat = (name, amount) => ({
  type: DECREASE_STAT,
  payload: {
    name,
    amount,
  },
})

const initialState = {
  stats: {
    aim: 0,
    awareness: 0,
    stealth: 0,
    reaction: 0,
    transport: 0,
  },
  freePoints: 10,
  rules: {
    statMax: 5,
  },
}

const charCreationReducer = (
  state: State = initialState,
  { type, payload }: Action,
) => {
  switch (type) {
    default:
      return state
  }
}

export default charCreationReducer

import React, { ReactNode, useState } from 'react'
import { CounterContext } from './CounterContext'

interface Props {
    children: ReactNode
}
const CounterProvider = ({ children } : Props) => {
  const count = 0;
  return (
    <CounterContext.Provider value={{ count } as any}>
        { children }
    </CounterContext.Provider>
  )
}

export default CounterProvider

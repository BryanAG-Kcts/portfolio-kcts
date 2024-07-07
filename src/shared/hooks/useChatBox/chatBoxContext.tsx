'use client'

import { ReactNode } from 'react'
import { useChatBox, useChatBoxContext } from './useChatBox'

interface Props {
  children: ReactNode
}
export const ChatBoxContext = ({ children }: Props): JSX.Element => {
  return (
    <useChatBoxContext.Provider value={useChatBox()}>
      {children}
    </useChatBoxContext.Provider>
  )
}

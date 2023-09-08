import { createContext, useContext } from 'react'

export const CanvasContext = createContext<any>({})

export function useCanvas() {
  return useContext(CanvasContext)
}

import { createContext, useContext } from 'react'

let TranslationContext

export function initTranslation(messages) {
  TranslationContext = createContext(messages)
}

export function useTranslation() {
  const messages = useContext(TranslationContext)
 
  return {
    t(key) {
      return messages[key]
    }
  }
}


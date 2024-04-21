import es from './es/main'
import en from './en/main'

export const main = {
  es,
  en
}

export type Locale = typeof main.es

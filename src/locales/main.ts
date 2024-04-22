import es from './es/main'
import en from './en/main'
import { Languages } from './constants/constants'

export const main = {
  es,
  en
}

export type Locale = typeof main.es
export type Experience = (typeof main.es.experience.experiences)[0]
export type Technology = (typeof main.es.skills.skills)[0]
export type Information = (typeof main.es.information.information)[0]

export const getLocale = (lang: Languages): Locale => main[lang] ?? main.es

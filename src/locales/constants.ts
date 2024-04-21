import { main, Locale } from './main'

export type Languages = 'es' | 'en'
export interface RouterLangsProps {
  params: {
    lang: Languages
  }
}

export const getLocale = (lang: Languages): Locale => main[lang] ?? main.es

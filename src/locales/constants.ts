export type Languages = 'es' | 'en'
export interface RouterLangsProps {
  params: {
    lang: Languages
  }
}
export const nowadays = {
  es: 'Actualmente...',
  en: 'Nowadays...'
}

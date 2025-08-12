import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getPrimaryColor() {
  const isDark = document.body.classList.contains('dark')
  return isDark ? '#e5e5e5' : '#171717'
}

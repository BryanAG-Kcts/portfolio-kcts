import { MessageCircle, Star, Timer } from 'lucide-react'

export const iconCards = {
  quality: Star,
  communication: MessageCircle,
  time: Timer
}

export type IconCard = (typeof iconCards)[keyof typeof iconCards]

import { Languages } from '@/locales/constants/constants'
import { getLocale } from '@/locales/main'
import { TitleGenerator } from '@/shared/components/titleGenerator/titleGenerator'
import { ChatForm } from './chatForm'
import { MessagesBox } from './messagesBox'
import { ChatBoxContext } from '@/shared/hooks/useChatBox/chatBoxContext'

interface Props {
  lang: Languages
}
export const ChatBot = ({ lang }: Props): JSX.Element => {
  const { title } = getLocale(lang).chatBot

  return (
    <div className='p-2 flex flex-col gap-3'>
      <TitleGenerator>{title}</TitleGenerator>
      <ChatBoxContext>
        <MessagesBox />
        <ChatForm lang={lang} />
      </ChatBoxContext>
    </div>
  )
}

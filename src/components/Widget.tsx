import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'

export function Widget() {
  return (
    <Popover className='position absolute bottom-5 right-5'>
      <Popover.Panel>
        <span>Deixe seu Feedback</span>
      </Popover.Panel>

      <Popover.Button className='flex items-center justify-center h-12 w-12 hover:w-36 hover:p-2 bg-brand-50 rounded-3xl group  transition-all duration-500 ease-linear'>
        <ChatTeardropDots className='text-white h-6 w-6' />
        <span className='text-white overflow-hidden w-0 group-hover:w-20'>Feedback</span>
      </Popover.Button>
    </Popover>
  )
}
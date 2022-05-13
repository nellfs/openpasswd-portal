/* eslint-disable react/no-unescaped-entities */
import {
  DocumentTextIcon,
  CloudIcon,
  TerminalIcon
} from '@heroicons/react/outline'

import {
  ShieldExclamationIcon,
  EyeOffIcon,
  ChevronDoubleUpIcon,
  PencilIcon
} from '@heroicons/react/solid'


function Home() {
  return (
    <div className="font-body font-semibold mt-16">
      <div className='flex flex-col md:flex-row justify-center items-center'>
        <ShieldExclamationIcon className='hidden md:flex h-10 pb-1 mr-2 text-red-400' />
        <h1 className="text-3xl md:text-4xl text-red-400 md:text-slate-500 bg-blue-white">
          Why trust in OpenPasswd? </h1>
      </div>
      <div className="flex flex-col justify-center mt-8 mb-16 md:mb-0">
        <div className="m-auto grid gap-x-[1.5rem] gap-y-4 grid-row-3 md:grid-cols-3  text-white">
          <div className='bg-sky-500 h-72 w-72 rounded-lg drop-shadow-lg'>
            <h1 className='flex justify-center md:text-2xl text-3xl mt-2'>
              You can't see me</h1>
            <h2 className='text-slate-200  flex justify-center md:text-1xl pl-2 pr-2'>Your password is encrypted </h2>
            <div className='flex flex-col'>
              <DocumentTextIcon className='h-44' />
              <EyeOffIcon className='h-8  animate-pulse' />
            </div>
          </div>

          <div className='bg-sky-500 h-72 w-72 rounded-lg drop-shadow-lg'>
            <h1 className='flex justify-center md:text-2xl text-3xl mt-2'>
              It's all yours!</h1>
            <h2 className='text-slate-200 flex justify-center md:text-1xl pl-2 pr-2'>You can deploy anywhere you trust!</h2>
            <div className='flex flex-col'>
              <CloudIcon className='h-44' />
              <ChevronDoubleUpIcon className='h-8 animate-bounce' />
            </div>
          </div>

          <div className='bg-sky-500 h-72 w-72 rounded-lg drop-shadow-lg'>
            <h1 className='flex justify-center md:text-2xl text-3xl mt-2'>
              What's happening?</h1>
            <h2 className='text-slate-200 flex justify-center text-1xl pl-2 pr-2'>View and edit the source code :)</h2>
            <div className='flex flex-col'>
              <TerminalIcon className='h-44' />
              <PencilIcon className='h-8 animate-wiggle' />
            </div>
          </div>
        </div>
        <div className="md:hidden flex justify-center mt-4 font-body text-slate-400">©2022 Copyright - OpenPasswd</div>
        <div className="hidden md:flex my-9 justify-center font-body text-slate-400">©2022 Copyright - OpenPasswd</div>

      </div>
    </div >
  )
}

export default Home;

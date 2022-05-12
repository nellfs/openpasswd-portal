
import {
    CodeIcon,
    ServerIcon,
    KeyIcon
} from '@heroicons/react/outline'

function Intro() {
    return (
        <>
            <div className='h-16 bg-gradient-to-r from-secure-blue to-cyan-500' />
            <div className='font others font-thers text-white bg-gradient-to-r from-secure-blue to-cyan-500'>
                <div className='h-px bg-gradient-to-l from-sky-300 to-blue-500 ml-16 mr-16 mb-28' />
                <div className=' flex flex-col items-center' >
                    <h1 className='text-3xl md:text-6xl font-semibold '>Secure and Open Source </h1>
                    <h2 className='text-1xl md:text-3xl text-slate-300 font-semibold mb-2'>Your passwords more safer than ever.</h2>
                    <div className='mt-3 flex flex-row justify-center gap-6 md:gap-8 md:justify-start text-gray-200 pb-32'>
                        <ul className='flex gap-1'><KeyIcon className=' text-blue-300 h-6 my-auto' />Encrypted</ul>
                        <ul className='flex gap-1'><ServerIcon className='text-blue-300 h-6 my-auto' />Self-Host</ul>
                        <ul className='flex gap-1'><CodeIcon className='text-blue-300 h-6 my-auto' />Open Source</ul>
                    </div>
                </div >
            </div>
        </>
    )
}

export default Intro;
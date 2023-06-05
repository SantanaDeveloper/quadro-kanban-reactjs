import React from 'react'
import Image from 'next/image';
import { MagnifyingGlassIcon, BellAlertIcon, LanguageIcon } from "@heroicons/react/24/outline"


const TopBar = () => {
    return (
        <div className='h-16 pl-16 md:pl-32 fixed bg-purple-600 w-full flex items-center justify-between pr-5 shadow-xl z-50'>
            <div className='flex px-5 items-center'>
                <MagnifyingGlassIcon className='w-5 h-5 text-white' />
                <input className="bg-transparent border-0 text-white placeholder-gray-200 w-28
                outline-none focus:ring-0 text-lg" type='text' placeholder='Procurar' />
            </div>
            <div className='flex md:space-x-5'>
                <LanguageIcon className='hidden md:block w-7 h-7 text-white' />
                <BellAlertIcon className='hidden md:block w-7 h-7 text-white' />
                <div className="flex items-center text-white">
                    <h3 className="font-bold mr-3 hidden md:block ">Santana Developer</h3>
                    <Image src="https://avatars.githubusercontent.com/u/48597174?v=4"
                    width="36" height="36" style={{objectFit: 'cover'}} 
                    className="rounded-full " alt={''}/>
                </div>
            </div>
        </div>
    )
}

export default TopBar
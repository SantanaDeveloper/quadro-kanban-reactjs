import React from 'react'
import Image from 'next/image';
import { MagnifyingGlassIcon, AtSymbolIcon, BellIcon } from "@heroicons/react/24/outline"


const TopBar = () => {
    return (
        <div className='h-16 pl-40 fixed bg-purple-600 w-full flex items-center justify-between pr-5 shadow-xl'>
            <div className='flex px-5 items-center'>
                <MagnifyingGlassIcon className='w-5 h-5 text-white' />
                <input className=" bg-transparent border-0 text-white placeholder-gray-200
                outline-none focus:ring-0 text-lg" type='text' placeholder='Procure uma tarefa' />
            </div>
            <div className='flex space-x-5'>
                <AtSymbolIcon className='w-7 h-7 text-white' />
                <BellIcon className='w-7 h-7 text-white' />
                <div className="flex items-center text-white">
                    <h3 className="font-bold mr-3">Santana Developer</h3>
                    <Image src="https://avatars.githubusercontent.com/u/48597174?v=4"
                    width="36" height="36" style={{objectFit: 'cover'}} 
                    className=" rounded-full " alt={''}/>
                </div>
            </div>
        </div>
    )
}

export default TopBar
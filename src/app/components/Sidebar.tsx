import React from 'react'

import { PresentationChartBarIcon , UserGroupIcon, RectangleGroupIcon, CalendarDaysIcon, CogIcon, ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline"

const Sidebar = () => {
    return (
        <div className='fixed inset-y-0 left-0 bg-white w-32'>
            <h1 className='flex items-center justify-center text-2xl h-16 bg-purple-600 text-white font-bold'>Santana</h1>
            <ul className='flex flex-col text-base h-full shadow-xl'>
                <li className='flex justify-center items-center flex-col py-7 text-gray-500'>
                    <PresentationChartBarIcon className='w-7 h-7' />
                    Dashboard
                </li>
                <li className='flex justify-center items-center flex-col py-7 border-l-4 border-purple-500 text-purple-500 font-bold'>
                    <RectangleGroupIcon className='w-7 h-7 text-purple-500' />
                    Quadros
                </li>
                <li className='flex justify-center items-center flex-col py-7 text-gray-500'>
                    <CalendarDaysIcon className='w-7 h-7' />
                    Calendário
                </li>
                <li className='flex justify-center items-center flex-col py-7 text-gray-500'>
                    <CogIcon className='w-7 h-7' />
                    Administração
                </li>
                <li className='flex justify-center items-center flex-col py-7 text-gray-500 mt-auto mb-16' >
                    <ArrowLeftOnRectangleIcon className='w-7 h-7' />
                    Sair
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
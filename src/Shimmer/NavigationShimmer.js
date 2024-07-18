import React from 'react'

const NavigationShimmer = () => {
    return (
        <div className='h-16 w-full flex justify-between items-center px-4 md:px-8 bg-slate-200 shadow-lg'>
            <div className='h-8 w-14 rounded-2xl bg-gray-300 animate-pulse'></div>

            <div className='flex gap-3 md:gap-6 justify-center items-center animate-pulse' >
                <div className='h-3 w-10 rounded-md bg-gray-300'></div>
                <div className='h-8 w-8 rounded-lg bg-gray-300'></div>
            </div>
        </div>
    )
}

export default NavigationShimmer
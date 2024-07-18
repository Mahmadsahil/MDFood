import React from 'react'
import Shimmer from './Shimmer'

const WhatsOnYourMinditemShimmer = () => {
    return (
        <div className='flex flex-col'>
            <div className='w-full flex flex-col items-start my-2 md:my-4'>
                <div className='h-3 w-52 md:h-4 md:w-3/12 m-1 md:m-2 bg-gray-300 rounded-lg'></div>
                <div className='h-3 w-12 md:h-2 md:w-1/12 m-1 bg-gray-300 rounded-lg'></div>
            </div>
            <Shimmer />
        </div>
    )
}

export default WhatsOnYourMinditemShimmer
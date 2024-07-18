import React from 'react'

const ItemCardShimmer = () => {
    return (
        <div className='flex justify-between p-3  m-2 animate-pulse'>
            <div className='flex flex-col gap-3 justify-center'>
                <div className='w-40 h-2 rounded-lg bg-gray-300'></div>
                <div className='w-32 h-2 rounded-lg bg-gray-300'></div>
            </div>
            <div className=" h-16 w-20 md:w-32 md:h-32 rounded-lg bg-gray-300 text-xs text-center text-gray-400"></div>
        </div>
    )
}

export default ItemCardShimmer;

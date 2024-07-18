import React from 'react'
import Shimmer from './Shimmer'

const CartShimmer = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='w-full flex flex-col items-center mt-8 md:my-4'>
                <div className='h-4 w-10 md:h-4 md:w-16 m-1 bg-gray-300 rounded-lg'></div>
                <div className='h-4 w-8/12 md:h-6 md:w-24 m-1 md:m-2 bg-gray-300 rounded-lg'></div>
            </div>
            <Shimmer />
        </div>
    )
}

export default CartShimmer
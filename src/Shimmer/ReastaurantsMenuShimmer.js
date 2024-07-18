import React from 'react'

const array = [0, 1, 2, 3, 4,5];

const ReastaurantsMenuShimmer = () => {
    return (
        <div className='w-full flex flex-col justify-center mt-4 gap-8 animate-pulse'>
            <div className='w-full flex flex-col items-center my-2 md:my-4'>
                <div className='h-3 w-52 md:h-4 md:w-3/12 m-1 md:m-2 bg-gray-300 rounded-lg'></div>
                <div className='h-3 w-12 md:h-2 md:w-1/12 m-1 bg-gray-300 rounded-lg'></div>
            </div>

            <div className='w-full flex flex-col  items-center'>
                {array.map(item => <div key={item} className='h-16 w-10/12 md:h-44 md:w-7/12 bg-gray-300 rounded-lg m-2 md:m-4'></div>)}
            </div>

        </div>
    )
}

export default ReastaurantsMenuShimmer;
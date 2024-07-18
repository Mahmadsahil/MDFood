import React from 'react'

const ResCardShimmer = () => {
    return (
        <div className="mx-2 my-4 flex md:flex-col  items-center">
            <div> <div className="h-20 w-28 md:h-32 md:w-56   bg-gray-300 rounded-lg m-2 animate-pulse"></div></div>
            <div className='flex flex-col gap-2 md:gap-0'>
                <span className=" md:hidden h-4 w-32 md:h-2 md:w-48 bg-gray-300  rounded-md m-1 animate-pulse"></span>
                <span className="h-1 w-32 md:h-2 md:w-48 bg-gray-300  rounded-lg m-1 animate-pulse"></span>
                <span className="h-1 w-32 md:h-2 md:w-48 bg-gray-300 rounded-lg m-1  animate-pulse"></span>
            </div>
        </div>
    )
}

export default ResCardShimmer;
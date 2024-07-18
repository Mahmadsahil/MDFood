import React from 'react'
import ResCardShimmer from './resCardShimmer'

const SearchRestaurantsShimmer = () => {
    return (
        <div className='flex flex-col items-center mt-40'>
            <div className='h-2 w-6/12 bg-slate-200 rounded-lg animate-pulse'></div>
            <div className='flex flex-wrap justify-center'>
                <ResCardShimmer />
                <ResCardShimmer />
                <ResCardShimmer />
                <ResCardShimmer />
            </div>
        </div>
    )
}

export default SearchRestaurantsShimmer
import React from 'react'
import Shimmer from './Shimmer'
import TopRestaurantChainsShimmer from './TopRestaurantChainsShimmer';
import WhatsOnMindBoxGroupShimmer from './WhatsOnMindBoxGroupShimmer';

const BodyShimmer = () => {
    return (
     <div className='w-full flex justify-center'>
           <div className='w-10/12 flex flex-col'>
            <div className='w-full flex m-2 justify-center items-center'>
                <WhatsOnMindBoxGroupShimmer />
            </div>
            <div className='w-full flex gap-1 md:gap-4 overflow-x-scroll'>
                <TopRestaurantChainsShimmer />
            </div>
            <Shimmer />
        </div>
     </div>
    )
}

export default BodyShimmer;
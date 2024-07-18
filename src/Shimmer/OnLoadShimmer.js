import React from 'react'
import { LOGO_URL } from '../utils/links'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const OnLoadShimmer = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='flex gap-4 flex-col justify-center items-center'>
                <LazyLoadImage className='h-12 md:h-16' loading='lazy' alt='logo' src={LOGO_URL}/>
                <div className=' h-6 md:h-8 w-6 md:w-8 border rounded-full border-t-2 border-t-green-600 animate-spin'></div>
            </div>
        </div>
    )
}

export default OnLoadShimmer;
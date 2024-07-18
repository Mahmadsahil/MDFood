import React from 'react'
import { CDN_URL } from '../utils/links'
import WhatsOnMindBoxShimmer from '../Shimmer/WhatsOnMindBoxShimmer'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';


const WhatsOnYourMinditemImage = ({ imgLink }) => {
    return (
        <>
            {
                imgLink ? <LazyLoadImage
                    data-testid="mindImage"
                    className='cursor-pointer w-28 md:w-40 md:my-2'
                    alt='whats on your mind items'
                    loading='lazy'
                    effect="blur"
                    src={CDN_URL + imgLink}
                />
                    :
                    <WhatsOnMindBoxShimmer />
            }
        </>
    )
}

export default WhatsOnYourMinditemImage
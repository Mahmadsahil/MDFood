import React from 'react'
import TopReastaurantCardShimmer from './TopReastaurantCardShimmer';

const TopRestaurantChainsShimmer = () => {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <>
            {array.map((item) => (
                <TopReastaurantCardShimmer key={item} />
            ))}
        </>
    );
}

export default TopRestaurantChainsShimmer
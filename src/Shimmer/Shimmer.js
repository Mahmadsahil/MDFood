import React from 'react'
import ResCardShimmer from './resCardShimmer';

const Shimmer = () => {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (

        <div data-testid="ShimmerTestid" className="w-full flex flex-wrap justify-center">
            {array.map((item) => (

                <ResCardShimmer key={item} />
            ))}
        </div>
    );
};
export default Shimmer;0
import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import ResCardShimmer from '../Shimmer/ResCardShimmer';
const Restorants = lazy(() => import('./Restorants'));

const WhatsOnYourMinditem = () => {
    const whatsOnMindData2 = useSelector(state => state.app.mindData);
    const { title, description } = whatsOnMindData2?.data?.cards[0]?.card?.card;
    const { cards } = whatsOnMindData2?.data;

    return (
        <div data-testid="WhatsOnYourMinditem" className='w-full flex justify-center'>
            <div className='w-full lg:w-10/12 flex flex-col my-4 px-4'>
                <div>
                    <h1 className='text-xl md:text-4xl font-bold text-gray-600 pt-4'>{title}</h1>
                    <p className='text-md md:text-xl text-gray-600 font-medium py-2'>{description}</p>
                </div>
                <div className='flex flex-wrap justify-center'>
                    {
                        whatsOnMindData2.length !== 0 ?
                            (cards.map((data, idx) => data?.card?.card?.info && (
                                <div key={idx} className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4'>
                                    <Suspense className={<ResCardShimmer />}>
                                        <Restorants key={idx} resData={data?.card?.card} />
                                    </Suspense>
                                </div>
                            )))
                            :
                            <WhatsOnYourMinditemShimmer />
                    }
                </div>
            </div>
        </div>
    );
};

export default WhatsOnYourMinditem;

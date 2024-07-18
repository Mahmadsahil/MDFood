import React, { useState, useEffect, useContext, lazy, Suspense } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { resList } from "../utils/mockData"
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import ResCardShimmer from "../Shimmer/resCardShimmer";
import { RestauranPromoted } from "./Restorants";
import { MdFilterList, MdFilterListOff } from "react-icons/md";
import Restaurant_API_Data from "../mocks/Restaurant_API_Data.json"
import useGetRestaurants from "../hooks/useGetRestaurants";
import { useSelector } from "react-redux";
import TopRestaurantChainsShimmer from "../Shimmer/TopRestaurantChainsShimmer";
import TopRestaurantCard from "./TopRestaurantCard";
import WhatsOnMindBoxGroupShimmer from "../Shimmer/WhatsOnMindBoxGroupShimmer";
const WhatsOnYourMind = lazy(() => import('./WhatsOnYourMind'));
const Restorants = lazy(() => import('./Restorants'));

const Body = () => {
    const [pageCount, setPageCount] = useState(12);
    const PromotedRestauran = RestauranPromoted(Restorants);
    const { listOfRestaurant1, listOfRestaurant2, restaurantsHeader, topRestaurantChains, topRestaurantChainsHeader, isFetching, updateFiltered } = useGetRestaurants(pageCount)
    useEffect(() => {

        const onScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !isFetching) {
                setPageCount(prevPageCount => prevPageCount + 12);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [isFetching]);


    const handleResetFilter = () => {
        updateFiltered(listOfRestaurant1);
    }

    const handleFilter1520 = () => {
        const searchedRestaurant = listOfRestaurant2.filter(
            (restaurant) => restaurant.info.sla.deliveryTime <= 30
        );
        updateFiltered(searchedRestaurant);
    }
    const handleFilter3040 = () => {
        const searchedRestaurant = listOfRestaurant2.filter(
            (restaurant) => restaurant.info.sla.deliveryTime >= 30
        );
        updateFiltered(searchedRestaurant);
    }

    const handleFilterRating3 = () => {
        const searchedRestaurant = listOfRestaurant2.filter(
            (restaurant) => restaurant.info.avgRating <= 4
        );
        updateFiltered(searchedRestaurant);
    }

    const handleFilterRating4 = () => {
        const searchedRestaurant = listOfRestaurant2.filter(
            (restaurant) => restaurant.info.avgRating >= 4
        );
        updateFiltered(searchedRestaurant);
    }

    const showBtn = useSelector(state => state.cart.cartBtnValue);

    return (
        <div className="w-full flex flex-col justify-center items-center px-4">
            <div className="w-full p-2 md:p-3 md:w-10/12 flex flex-col items-center ">
                <div className="w-full flex flex-col">

                    <p className='text-left pt-4 text-lg md:text-2xl font-bold text-gray-600'>What's on your mind</p>

                    <div className="flex mt-4 ">
                        <Suspense fallback={<WhatsOnMindBoxGroupShimmer />}>
                            <WhatsOnYourMind />
                        </Suspense>
                    </div>

                </div>

                <div className="w-full flex flex-col gap-1 md:gap-4 justify-center">
                    <div className="w-full flex justify-start items-center my-2">
                        <p className="text-left text-lg md:text-2xl font-bold text-gray-600">{topRestaurantChainsHeader}</p>
                    </div>

                    <div className="w-full flex gap-1 md:gap-4 overflow-x-scroll">
                        {topRestaurantChains.length === 0 ? (
                            <TopRestaurantChainsShimmer />
                        ) : (
                            (topRestaurantChains).map((restaurant, idx) => (
                                <Link
                                    key={`${restaurant?.info?.id}-${idx}`}
                                    to={`/reastaurantsMenu/${restaurant?.info?.id}`}
                                >
                                    {restaurant?.info.promoted ? (
                                        <RestauranPromoted resData={restaurant} />
                                    )
                                        :
                                        (
                                            <Suspense fallback={<ResCardShimmer />}>
                                                <TopRestaurantCard resData={restaurant} />
                                            </Suspense>
                                        )}
                                </Link>
                            ))
                        )

                        }
                    </div>
                </div>


                <div className="w-full flex overflow-scroll items-center justify-start gap-2 my-4 md:my-8 ">

                    <p className=" flex gap-1 items-center text-sm md:text-base font-semibold cursor-pointer text-gray-800 py-1 md:py-2 md:px-4 border border-gray-100 rounded-2xl">
                        Filter <MdFilterList className="text-sm md:text-2xl" />
                    </p>

                    <button
                        className="text-xs md:text-base font-semibold cursor-pointer py-1 px-2 md:py-2 md:px-4 my-4 border text-gray-700 border-gray-300 rounded-2xl"
                        onClick={handleResetFilter}
                    >
                        <MdFilterListOff className="text-base md:text-xl" />
                    </button>

                    <button data-testid="15-25-min" className="flex gap-2 text-xs md:text-base font-semibold cursor-pointer py-1 px-2 my-2 md:py-2 md:px-4 md:my-4 border text-gray-700 border-gray-300 rounded-2xl"
                        onClick={handleFilter1520}
                    >
                        <p className="block md:hidden">15-25m</p><p className="hidden md:block">15-25 min</p>
                    </button>

                    <button className="flex gap-2 text-xs md:text-base font-semibold cursor-pointer py-1 px-2 my-2 md:py-2 md:px-4 md:my-4 border text-gray-700 border-gray-300 rounded-2xl"
                        onClick={handleFilter3040}
                    >
                        <p className="block md:hidden">30-40m</p><p className="hidden md:block">30-40 min</p>
                    </button>

                    <button
                        className="text-xs md:text-base font-semibold cursor-pointer py-1 px-2 my-2 md:py-2 md:px-4 md:my-4 border text-gray-700 border-gray-300 rounded-2xl"
                        onClick={handleFilterRating3}
                    >
                        <p className="block md:hidden">3-4 ☆</p><p className="hidden md:block">3-4 ☆</p>
                    </button>

                    <button
                        className="text-xs md:text-base font-semibold cursor-pointer py-1 px-2 my-2 md:py-2 md:px-4 md:my-4 border text-gray-700 border-gray-300 rounded-2xl"
                        onClick={handleFilterRating4}
                    >
                        <p className="block md:hidden">4-5 ☆</p><p className="hidden md:block">4-5 ☆</p>
                    </button>

                </div>

                <div className="w-full flex flex-wrap gap-1 md:gap-4 justify-center">
                    <div className="w-full flex justify-start items-center my-2">
                        <p className="text-left text-lg md:text-2xl font-bold text-gray-600">{restaurantsHeader}</p>
                    </div>

                    {listOfRestaurant2.length === 0 ? (
                        <Shimmer />
                    ) : (
                        (listOfRestaurant2).map((restaurant, idx) => (
                            <Suspense fallback={<ResCardShimmer />}>
                                <Link
                                    rel="preload"
                                    key={`${restaurant?.info?.id}-${idx}`}
                                    to={`/reastaurantsMenu/${restaurant?.info?.id}`}
                                >
                                    {restaurant?.info.promoted ? (
                                        <RestauranPromoted resData={restaurant} />
                                    )
                                        :
                                        (
                                            <Restorants resData={restaurant} />
                                        )}
                                </Link>
                            </Suspense>
                        ))
                    )

                    }


                    {isFetching && <Shimmer />}
                </div>
            </div>
        </div>
    )
}

export default Body;

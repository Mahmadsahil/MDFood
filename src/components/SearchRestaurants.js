import React, { Suspense, lazy, useEffect, useState } from 'react'
import  { RestauranPromoted } from './Restorants';
import { useSelector } from 'react-redux';
import Shimmer from "../Shimmer/Shimmer"
import { Link } from "react-router-dom";
import SearchShimmer from '../Shimmer/SearchShimmer';
import { IoArrowBackSharp } from 'react-icons/io5';
import ResCardShimmer from '../Shimmer/ResCardShimmer';
const Restorants = lazy(() => import('./Restorants'));


const SearchRestaurants = () => {

    const [listOfRestaurant, setlistOfRestaurant] = useState([]);
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);
    const [searchText, setsearchText] = useState("");
    const [deliveryTime, setDeliveryTime] = useState('');
    const RestaurantData = useSelector(state => state.app.restaurantList);
    useEffect(() => {
        setlistOfRestaurant(RestaurantData);
    }, [RestaurantData]);

    const handleSearchBtn = () => {
        const searchedRestaurant = listOfRestaurant.filter(
            (restaurant) => {
                const nameMatch = restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
                const cuisineMatch = restaurant.info.cuisines.some(cuisine =>
                    cuisine.toLowerCase().includes(searchText.toLowerCase())
                );
                return nameMatch || cuisineMatch;
            }
        );
        setfilteredRestaurant(searchedRestaurant);
    }


    const handleSearchResetBtn = () => {
        setsearchText('');
        setfilteredRestaurant([]);
    }

    const handleInputText = (e) => setsearchText(e.target.value)

    return (
        <>
            <div  className="w-full flex justify-center mt-8 md:mt-0 items-center my-2">
                <button
                    className="text-base md:text-2xl m-1 md:m-1  py-1 px-2 "
                    onClick={handleSearchResetBtn}
                >
                    <IoArrowBackSharp />
                </button>

                <input
                    className="w-8/12 md:w-4/12 text-xs md:text-lg m-1 p-2 md:py-2 md:px-4 md:my-8 md:mx-2  text-gray-600 border border-gray-500 rounded-md"
                    value={searchText}
                    type="text"
                    placeholder="Search what's on your mind..."
                    onChange={handleInputText}
                />

                <button
                    className="text-xs md:text-lg m-1 p-2  md:m-1 md:py-2 md:px-4  shadow-xl text-gray-600 rounded-md border border-gray-200"
                    onClick={handleSearchBtn}
                >
                    Search
                </button>



            </div>

            <div className="w-full h-full flex flex-wrap gap-1 md:gap-4 justify-center items-center">
                {filteredRestaurant.length !== 0 ?
                    filteredRestaurant && (filteredRestaurant.map((restaurant, idx) => (
                        <Link
                            key={restaurant?.info?.id + idx}
                            to={"/reastaurantsMenu/" + restaurant?.info?.id}
                            rel="preload"
                        >
                            {restaurant?.info.promoted ? (
                                <RestauranPromoted resData={restaurant} />
                            ) : (
                                <Suspense fallback={<ResCardShimmer/>}>
                                    <Restorants resData={restaurant} />
                                </Suspense>
                            )}
                        </Link>

                    ))
                    )
                    : <SearchShimmer />
                }

            </div>
        </>
    )
}

export default SearchRestaurants
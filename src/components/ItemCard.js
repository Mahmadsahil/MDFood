import React from 'react'
import { useDispatch } from 'react-redux';
import { addCart } from '../utils/cartSlice';
import { CDN_URL } from "../utils/links"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ItemCard = ({ item, showBtn }) => {
    const dispatch = useDispatch();
    const handleAddCart = (item) => {
        dispatch(addCart(item));
    };

    return (
        <div className="w-full flex justify-between items-center p-6 border-t shadow-lg" data-testid="ItemCardid">


            <div className="flex text-left gap-2 flex-col w-8/12 md:w-9/12 p-1">
                <div>
                    {
                        item.card.info.itemAttribute.vegClassifier === "VEG" ?
                            <LazyLoadImage className="w-3 md:w-4 object-cover" alt='veg' loading='lazy' effect="blur" src="https://i.pinimg.com/originals/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.png" />
                            :
                            <LazyLoadImage className="w-3 md:w-4 opacity-82 object-cover" alt='nonVeg' loading='lazy' effect="blur" src="https://thumbs.dreamstime.com/b/non-vegetarian-sign-veg-logo-symbol-red-color-food-grade-circle-312777489.jpg" />
                    }
                </div>

                <div className="flex flex-col gap-1">
                    <span className="text-xs md:text-xl font-mediums">{item.card.info.name}</span>
                    <span className="text-xs md:text-lg">{item.card.info.price && "₹" + item.card.info.price / 100} </span>
                </div>

                <div>
                    <p className="text-xs md:text-sm">{item.card.info.ratings.aggregatedRating.rating && `⭐ ${item.card.info.ratings.aggregatedRating.rating}`}</p>
                </div>

                <div>
                    <p className="hidden text-gray-600 md:block md:text-sm">{item.card.info.description}</p>
                </div>

            </div>

            <div>
                <div className=" w-full flex flex-col justify-center ">
                    {showBtn &&
                        <div className="absolute ml-5 mt-4 md:mt-2 md:ml-8 h-16 md:h-36 flex justify-center items-end ">
                            <button className="text-xs p-1  md:text-base z-50 rounded-md cursor-pointer bg-white shadow-lg text-green-500 font-bold" onClick={() => handleAddCart(item)}>Add +</button>
                        </div>}

                    {
                        item.card.info.imageId ?
                            <LazyLoadImage className=" h-16 w-20 md:w-full md:h-32 rounded-lg object-cover" loading='lazy' src={CDN_URL + item.card.info.imageId} />
                            :
                            <div className=" h-16 w-20 md:w-32 md:h-32 rounded-lg animate-pulse -z-10 bg-gray-300 text-xs text-center text-gray-400">no image</div>
                    }
                </div>
            </div>

        </div>
    )
}

export default ItemCard
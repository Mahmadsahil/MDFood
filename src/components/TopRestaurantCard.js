import React from "react";
import { useContext } from "react";
import { CDN_URL } from "../utils/links"
import Restorants from "./Restorants";
import { LazyLoadImage } from "react-lazy-load-image-component";

const TopRestaurantCard = ({ resData }) => {
    const { cloudinaryImageId, id, name, cuisines, costForTwo, avgRating, sla } = resData?.info;

    return (

        <div data-testid="TopResCard" className="p-2 w-[150px] md:w-[240px]  md:flex-col md:justify-center md:items-center transition duration-150 ease-out hover:ease-in md:hover:scale-95">
            <LazyLoadImage className=" w-full h-[100px] m-1 md:h-[140px] md:w-[240px] rounded-lg object-cover" loading="lazy" src={CDN_URL + cloudinaryImageId} />
            <div className="w-full flex flex-col p-1">
                <p className=" font-medium md:font-bold text-gray-700 text-sm md:text-base py-1 truncate ...">{name}</p>
                <div className="w-full flex justify-between items-center my-1 md:my-0 ">
                    <p className={`w-10 md:w-auto text-xs md:text-sm ${avgRating && "bg-green-600"} p-1 rounded-md text-white`}>{`☆ ${avgRating}`}</p>
                    <p className="text-xs md:text-base">🕝 {sla.slaString}</p></div>
            </div>
        </div>
    )
}

export const RestauranPromoted = (Restaurans) => {
    return (props) => {
        return (
            <>
                <p data-testid="promoted" className="p-1 m-1 bg-slate-800 text-white absolute rounded-lg">Promoted</p>
                <Restorants {...props} />
            </>
        )
    }
}


export default TopRestaurantCard
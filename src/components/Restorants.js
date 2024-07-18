import React from "react";
import { useContext } from "react";
import { CDN_URL } from "../utils/links";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Restorants = ({ resData }) => {
    const { cloudinaryImageId, id, name, cuisines, costForTwo, avgRating, sla } = resData?.info;



    return (

        <div data-testid="resCard" className="w-[340px] p-2 md:w-[240px] md:m-2 flex md:flex-col md:justify-center md:items-center transition duration-150 ease-out hover:ease-in md:hover:scale-95">
            <LazyLoadImage className=" w-[100px] m-1 md:h-[140px] md:w-[240px] rounded-lg object-cover" effect="blur" loading="lazy" src={CDN_URL + cloudinaryImageId} />
            <div className="w-full flex flex-col p-1">
                <p className=" font-medium md:font-bold text-gray-700 text-base md:text-lg py-1">{name}</p>
                <div className="w-full flex justify-between items-center my-1 md:my-0 ">
                    <p className={`text-xs md:text-base font-bold ${avgRating && "bg-green-700"} p-1 rounded-md text-white`}>{`☆ ${avgRating}`}</p>
                    <p className="text-xs md:text-sm">🕝 {sla.slaString}</p></div>
                <p className="text-sm md:text-base text-gray-700">{cuisines.join(", ")}</p>
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

export default Restorants;
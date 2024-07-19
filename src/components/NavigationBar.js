import React from 'react';
import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/links"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { addCartBtnValues } from "../utils/cartSlice";
import { FiSearch } from 'react-icons/fi';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const NavigationBar = () => {
    const cart = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleCartBtn = () => {
        // dispatch(addCartBtnValues(false))
    }

    return (
        <nav className="flex p-0 md:p-2 justify-between items-center shadow-md">
            <div className="">
                <LazyLoadImage className="w-[90px] px-3 md:w-[110px]" alt='Logo' src={LOGO_URL} loading='lazy'/>
            </div>
            <div className="md:mr-8">
                <ul className="flex items-center gap-4 md:gap-8">
                    <li>
                        <Link rel="preload" to={'/search'}>
                        
                            <p className='flex items-center gap-1 text-sm md:text-lg font-medium cursor-pointer text-gray-600'>
                                <FiSearch className="text-sm md:text-lg" /> Search</p>
                        </Link>
                    </li>

                    <li className="m-2 px-3 font-bold" onClick={handleCartBtn}>
                        <Link rel="preload" to={'/cart'}>
                            <div className="flex">
                                <p><PiShoppingCartSimpleThin className="text-4xl md:text-5xl font-semibold" /></p>
                                <p className="absolute text-[.7rem] md:text-[.8rem] py-[2px] mx-4 my-2 md:py-[1px] md:px-[4px] md:my-3 md:mx-5  rounded-full">
                                    {cart.length}
                                </p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav >
    )
}
export default NavigationBar;
import React from "react";
import ReactDOM from "react-dom/client";
import { LazyLoadImage } from "react-lazy-load-image-component";
    
const Error = () => {
    return (
        <>
            <div className="h-screen w-full flex flex-col justify-center items-center">
                <LazyLoadImage className="h-[280px] md:h-[300px]" alt="error" loading='lazy' src="https://cdn.dribbble.com/users/189859/screenshots/3639645/abc.gif" />
            </div >
        </>
    )
}

export default Error;
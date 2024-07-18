import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./Error";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import OnLoadShimmer from "./Shimmer/OnLoadShimmer";
import ReastaurantsMenuShimmer from "./Shimmer/ReastaurantsMenuShimmer";
import SearchRestaurantsShimmer from "./Shimmer/SearchRestaurantsShimmer";
import BodyShimmer from "./Shimmer/BodyShimmer";
import WhatsOnYourMinditemShimmer from "./Shimmer/WhatsOnYourMinditemShimmer";
import NavigationShimmer from "./Shimmer/NavigationShimmer";
import CartShimmer from "./Shimmer/CartShimmer";
const WhatsOnYourMinditem = lazy(() => import("./components/WhatsOnYourMinditem"));
const SearchRestaurants = lazy(() => import("./components/SearchRestaurants"));
const Cart = lazy(() => import("./components/Cart"));
const ReastaurantsMenu = lazy(() => import("./components/ReastaurantsMenu"));
const Body = lazy(() => import("./components/Body"));
const NavigationBar = lazy(() => import("./components/NavigationBar"));


const AppLayout = () => {

    return (
        <>
            <Provider store={appStore}>
                <Suspense fallback={<OnLoadShimmer />}>

                    <Suspense fallback={<NavigationShimmer />}>
                        <NavigationBar />
                    </Suspense>
                    <Outlet />
                </Suspense>
            </Provider>
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Suspense fallback={<BodyShimmer />}>
                    <Body />
                </Suspense>
            },
            {
                path: "/reastaurantsMenu/:resId",
                element: <Suspense fallback={<ReastaurantsMenuShimmer />}>
                    <ReastaurantsMenu />
                </Suspense>
            },
            {
                path: '/cart',
                element: <Suspense fallback={<CartShimmer/>}>
                    <Cart />,
                </Suspense>
            },
            {
                path: '/mind',
                element: <Suspense fallback={<WhatsOnYourMinditemShimmer />}>
                    <WhatsOnYourMinditem />,
                </Suspense>

            },
            {
                path: '/search',
                element: <Suspense fallback={<SearchRestaurantsShimmer />}>
                    <SearchRestaurants />,
                </Suspense>

            },
        ],
        errorElement: <Error />,
    },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
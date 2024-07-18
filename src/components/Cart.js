import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartBtnValues, clearCart } from "../utils/cartSlice";
import { lazy, Suspense, useEffect } from "react";
import ItemCardShimmer from "../Shimmer/ItemCardShimmer";
const ItemList = lazy(() => import("./ItemList"))



const Cart = () => {
    const cart = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="flex flex-col items-center m-auto" data-testid="Cartid">
            <h1 className="text-gray-600 text-center mt-4 md:m-6 text-2xl font-bold">Cart</h1>
            <button className="w-3/12  bg-slate-600 m-2 p-1 text-sm md:m-4 md:p-2 rounded-lg text-white" onClick={handleClearCart}>Clear Cart</button>
            <div className="w-10/12">
                <Suspense fallback={<ItemCardShimmer />}>
                    <ItemList showBtn={false} items={cart} />
                </Suspense >
            </div>
        </div >
    )
}


export default Cart;
import React, { lazy, Suspense, useEffect, useState } from 'react';
import ItemCardShimmer from '../Shimmer/ItemCardShimmer'
const ItemCard = lazy(() => import('./ItemCard'))

const ItemList = ({ items, showBtn }) => {

    return (
        <div data-testid="ItemList">
            {items.map((item, idx) => (
                <Suspense key={item.card.info.id } fallback={<ItemCardShimmer />}>
                    < ItemCard item={item} showBtn={showBtn} />
                </Suspense>
            ))}
        </div >
    )
}

export default ItemList;
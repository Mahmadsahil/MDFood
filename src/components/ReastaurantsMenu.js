import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import useReastaurantsMenu from '../hooks/useReastaurantsMenu';
import ReastaurantsMenuShimmer from '../Shimmer/ReastaurantsMenuShimmer';
import { TbArrowWaveLeftDown, TbArrowWaveRightDown } from "react-icons/tb";
import ItemCardShimmer from '../Shimmer/ItemCardShimmer';
const RestaurantCategory = lazy(() => import('./RestaurantCategory'));

const ReastaurantsMenu = () => {
    const { resId } = useParams();
    const [showItems, setShowItems] = useState(null);
    const [showVeg, setShowVeg] = useState(false);
    const [showNonVeg, setShowNonVeg] = useState(false);
    const [filteredCategories, setFilteredCategories] = useState([]);

    const reastaurantsMenu = useReastaurantsMenu(resId);

    useEffect(() => {
        if (reastaurantsMenu !== null) {
            const categories = reastaurantsMenu.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards.filter(
                (e) => e.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            );

            const filteredCategories = categories.map(category => {
                const filteredCategory = JSON.parse(JSON.stringify(category));
                filteredCategory.card.card.itemCards = filteredCategory.card.card.itemCards.filter(item => {
                    if (showVeg) {
                        return item.card.info.itemAttribute.vegClassifier === 'VEG';
                    } else if (showNonVeg) {
                        return item.card.info.itemAttribute.vegClassifier === 'NONVEG';
                    }
                    return true;
                });
                return filteredCategory;

            });
            setFilteredCategories(filteredCategories);
        }
    }, [reastaurantsMenu, showVeg, showNonVeg]);

    if (reastaurantsMenu === null) return <ReastaurantsMenuShimmer />;

    const { name, costForTwoMessage } = reastaurantsMenu.data.cards[2].card.card.info;

    const handleShowVeg = () => {
        setShowVeg(!showVeg);
        setShowNonVeg(false);
    };

    const handleShowNonVeg = () => {
        setShowNonVeg(!showNonVeg);
        setShowVeg(false);
    };

    return (
        <div className="flex flex-col items-center text-center">
            <h1 className="text-gray-600 text-xl pt-6 md:text-2xl font-bold">{name}</h1>
            <span>{costForTwoMessage}</span>
            <div className='w-full flex justify-center mt-4'>
                <p className='flex items-center gap-2 text-center text-md'><TbArrowWaveLeftDown />MENU<TbArrowWaveRightDown /></p>
            </div>

            {/* Filter buttons */}
            <div className="flex gap-2 mt-4">
                <button
                    className={`text-sm md:text-base py-1 px-2 rounded-md shadow-lg  ${showVeg ? 'bg-green-500 text-white' : 'border border-gray-300 '}`}
                    onClick={handleShowVeg}
                >
                    Veg
                </button>
                <button
                    className={`text-sm md:text-base py-1 px-2 rounded-md  shadow-lg ${showNonVeg ? 'bg-red-500 text-white' : 'border border-gray-300 '}`}
                    onClick={handleShowNonVeg}
                >
                    Non-Veg
                </button>
            </div>

            {/* Display categories based on filters */}
            {filteredCategories.map((category, index) => (
                <Suspense fallback={<ItemCardShimmer />}>

                    <RestaurantCategory
                        key={category.card.card.title}
                        data={category.card.card}
                        showItems={index === showItems}
                        setShowItems={() => setShowItems(index)}
                        items={category.card.card.itemCards}
                    />

                </Suspense>
            ))}
        </div>
    );
};

export default ReastaurantsMenu;

import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const RestaurantCategory = ({ data, showItems, setShowItems }) => {
    const [toggleData, setToggleData] = useState(true);

    const handleClick = () => {
        setToggleData(!toggleData);
    };

    return (
        <>
            <div className="m-2 w-11/12 md:w-7/12 flex justify-between flex-col shadow-lg">
                <div className="flex justify-between p-3" onClick={handleClick}>
                    <span className="text-gray-600 font-bold">{data.title}</span>
                    <span>{toggleData ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                </div>

                {toggleData && <ItemList showBtn={"show"} items={data.itemCards} />}
            </div>
        </>
    );
};

export default RestaurantCategory;

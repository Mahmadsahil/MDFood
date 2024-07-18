import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addResListData } from "../utils/appSlice";
import Restaurant_API_Data from "../mocks/Restaurant_API_Data.json"

const useGetRestaurants = (pageCount) => {
    const [listOfRestaurant1, setlistOfRestaurant1] = useState([]);
    const [listOfRestaurant2, setlistOfRestaurant2] = useState([]);
    const [topRestaurantChains, setTopRestaurantChains] = useState([]);
    const [topRestaurantChainsHeader, setTopRestaurantChainsHeader] = useState([]);
    const [restaurantsHeader, setRestaurantsHeader] = useState('');
    const [isFetching, setIsFetching] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchRestaurantsData(pageCount);
    }, [pageCount]);

    const topRestaurantChainsMock = Restaurant_API_Data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    const gottopRestaurantChainsHeaderMock = Restaurant_API_Data?.data?.cards[1]?.card?.card?.header?.title;
    const restaurantsHeaderMock = Restaurant_API_Data?.data?.cards[2]?.card?.card?.title;
    const restaurantsListMock = Restaurant_API_Data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    console.log("topRestaurantChainsMock", topRestaurantChainsMock)
    console.log("gottopRestaurantChainsHeaderMock", gottopRestaurantChainsHeaderMock)
    console.log("restaurantsHeaderMock", restaurantsHeaderMock)
    console.log("restaurantsListMock", restaurantsListMock)
    const fetchRestaurantsData = async (pageCount) => {
        try {
            setIsFetching(true);
            const response = await fetch(`https://www.swiggy.com/mapi/restaurants/list/v5?offset=${pageCount}&is-seo-homepage-enabled=true&lat=12.9715987&lng=77.5945627&carousel=true&third_party_vendor=1`);

            if (!response.ok) {
                setIsFetching(false);
                return;
            }

            const jsonData = await response.json();
            const topRestaurantChains = (jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || topRestaurantChainsMock);
            const gottopRestaurantChainsHeader = (jsonData?.data?.cards[1]?.card?.card?.header?.title || gottopRestaurantChainsHeaderMock);
            const restaurantsHeader = (jsonData?.data?.cards[2]?.card?.card?.title || restaurantsHeaderMock);
            const restaurantsList = (jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || restaurantsListMock);
            console.log("jsonData", (jsonData || Restaurant_API_Data));

            setlistOfRestaurant1(restaurantsList);

            setlistOfRestaurant2((prev) => [...prev, ...restaurantsList]);

            setIsFetching(false);
            setTopRestaurantChainsHeader(gottopRestaurantChainsHeader);
            setTopRestaurantChains(topRestaurantChains);
            setRestaurantsHeader(restaurantsHeader);
        } catch (error) {
            setlistOfRestaurant1(restaurantsListMock);
            setIsFetching(true);
            setlistOfRestaurant2((prev) => [...prev, ...restaurantsListMock]);
            setIsFetching(false);
            setTopRestaurantChainsHeader(gottopRestaurantChainsHeaderMock);
            setTopRestaurantChains(topRestaurantChainsMock);
            setRestaurantsHeader(restaurantsHeaderMock);
            console.error("Error fetching data:", error);
        }
    }
    dispatch(addResListData(listOfRestaurant2))

    const updateFiltered = (data) => {
        setlistOfRestaurant2(data);
        console.log("data", data);
    }

    return {
        listOfRestaurant1,
        listOfRestaurant2,
        restaurantsHeader,
        topRestaurantChains,
        topRestaurantChainsHeader,
        isFetching,
        updateFiltered,
    };
};

export default useGetRestaurants;

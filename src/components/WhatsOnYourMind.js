import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { swiggy_API } from '../utils/links';
import { addMindData } from '../utils/appSlice';
import { Link, useNavigate } from 'react-router-dom';
import WhatsOnMindBoxShimmer from '../Shimmer/WhatsOnMindBoxShimmer';
import TopReastaurantCardShimmer from '../Shimmer/TopReastaurantCardShimmer';
import WhatsOnMindBoxGroupShimmer from '../Shimmer/WhatsOnMindBoxGroupShimmer';
const WhatsOnYourMinditemImage = lazy(() => import('./WhatsOnYourMinditemImage'))
import Restaurant_API_Data from "../mocks/Restaurant_API_Data.json"
import Error from '../Error';

const WhatsOnYourMind = () => {
    const [whatsOnMindData, setWhatsOnMindData] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        GetWhatsOnMyMindData();
    }, []);

    const handleClick = async (e) => {
        await GetWhatsOnMyMindItemData(e.entityId, e.action.text);
        navigate('/mind');
    }

    const WhatsOnMyMindDataMock = (Restaurant_API_Data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info || []);

    const GetWhatsOnMyMindData = async () => {
        try {
            const data = await fetch(swiggy_API);
            const jsonData = await data.json();
            const info = jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;
            setWhatsOnMindData((info || WhatsOnMyMindDataMock));
        } catch (error) {
            setWhatsOnMindData((WhatsOnMyMindDataMock || []));
            <Error/>
        }
    }

    const GetWhatsOnMyMindItemData = async (id, itemName) => {
        try {
            const data = await fetch(`https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/mapi/restaurants/list/v5?lat=16.1569756&lng=75.6695376&collection=${id}&tags=layout_BAU_Contextual%2C${itemName}&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1`);
            const jsonData = await data.json();
            dispatch(addMindData(jsonData));
        } catch (error) {
            dispatch(addMindData([]));
            <Error />
        }
    }

    const array = [1, 2, 3, 4, 5, 6]

    return (
        <div className='w-full flex mx-2 justify-start items-center overflow-x-scroll' data-testid='WhatsOnMindTest'>
            {
                whatsOnMindData ? (whatsOnMindData.filter(item => item?.entityId.length < 6).map(item => item && (
                    <Link
                        to='/mind'
                        rel="preload"
                        key={item.id}
                        onClick={(e) => {
                            e.preventDefault();
                            handleClick(item);
                        }}
                        className="flex-shrink-0"
                    >
                        <Suspense fallback={<WhatsOnMindBoxShimmer />}>
                            {item.imageId ?

                                <WhatsOnYourMinditemImage data-testid="WhatsOnYourMinditemImage" key={item?.entityId} imgLink={item.imageId} />
                                :
                                <WhatsOnMindBoxShimmer />
                            }
                        </Suspense>

                    </Link>
                ))
                ) :
                    <div className="flex">
                        {
                            array.map(item => <WhatsOnMindBoxShimmer key={item} />)
                        }
                    </div>
            }
        </div>
    );
}

export default WhatsOnYourMind;
import React, { useEffect } from 'react'

const useGetWhatsOnMyMindItemData = async (id, itemName) => {

    try {
        const data = await fetch(`https://www.swiggy.com/mapi/restaurants/list/v5?lat=16.1569756&lng=75.6695376&collection=${id}&tags=layout_BAU_Contextual%2C${itemName}&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1`);
        const jsonData = await data.json();
        dispatch(addMindData(jsonData));
    } catch (error) {
        console.error("Error fetching item data:", error);
    }

}

export default useGetWhatsOnMyMindItemData;
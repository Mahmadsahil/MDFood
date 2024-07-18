import { useEffect, useState } from "react"
import { Restaurans_URL } from "../utils/links";


const useReastaurantsMenu = (resId) => {

    const [reastaurantsMenu, setReastaurantsMenu] = useState(null);

    useEffect(() => {
        fetchResMenu();
    }, []);

    const fetchResMenu = async () => {
        const data = await fetch(Restaurans_URL + resId);
        const jsonData = await data.json();
        setReastaurantsMenu(jsonData);
    };

    return reastaurantsMenu;
};

export default useReastaurantsMenu;
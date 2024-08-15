import { useEffect, useState } from "react";
import { MENU_URL1 } from "../utils/contents";

const useRestaurentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_URL1 + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json.data);
    console.log(json);
  };
  return resInfo;
};
export default useRestaurentMenu;

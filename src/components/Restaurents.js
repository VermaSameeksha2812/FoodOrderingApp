import Shimmer from "./Shimmer";
import RestauentCategory from "./RestauentCategory";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const Restaurent = () => {
  const { resId } = useParams();

  const resInfo = useRestaurentMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const resHeader = resInfo?.cards[2]?.card?.card;
  const { name, areaName, avgRating, cuisines, costForTwoMessage } =
    resHeader?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="  px-52 ">
      <h1 className="font-bold text-2xl py-6">{name}</h1>
      <div className="info-box border border-solid p-3 shadow-xl rounded-2xl">
        <ul className="font-semibold flex">
          <li className="px-3">⭐{avgRating}</li>
          <li>{costForTwoMessage}</li>
        </ul>
        <h4 className="px-3 text-red-600">{cuisines.join(",")}</h4>
        <h4 className="px-3">{areaName}</h4>
      </div>
      <div className="menu-box">
        {categories.map((category) => (
          <RestauentCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurent;

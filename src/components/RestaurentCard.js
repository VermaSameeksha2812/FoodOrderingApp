import { useState } from "react";
import { CDN_URL } from "../utils/contents";

const RestaurentCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  //const [btnName, setBtnName] = useState("login");
  return (
    <div className="res-card m-4 p-4 w-52 bg-blue-50 ">
      <img
        className="res-logo "
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3 className="res-name font-bold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>⭐{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime}minutes</h4>
    </div>
  );
};

export const withOffer = (RestaurentCard) => {
  return (props) => {
    const { resData } = props;
    const { header, subHeader } = resData?.info?.aggregatedDiscountInfoV3;
    return (
      <div>
        <label className="absolute bg-gray-500 text-white font-bold p-[3px] m-3 rounded-lg ">
          {header} {subHeader}{" "}
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

export default RestaurentCard;

import { CDN_URL2 } from "../utils/contents";

const ItemCard = ({ itemData }) => {
  const {
    name,
    imageId,
    isVeg,
    description,
    price,
    defaultPrice,
    ratings,
    itemAttribute,
  } = itemData?.card?.info;
  return (
    <div className="item-box  border border-solid p-3 shadow-sm rounded-2xl flex justify-between">
      <div className="info pr-20 py-5 w-9/12">
        {itemAttribute.vegClassifier === "VEG" ? <h4>🟢</h4> : <h4>🔴</h4>}
        <h2 className="font-bold text-gray-700 my-3">{name}</h2>
        <h3 className="font-semibold my-2">
          ₹{price / 100 || defaultPrice / 100}
        </h3>
        {/* <p>
          ⭐{ratings?.aggregatedRating?.rating}(
          {ratings?.aggregatedRating?.ratingCountV2})
        </p>*/}
        <p className="text-xs my-2">{description}</p>
      </div>
      <div className=" m-4 p-6 w-3/12">
        <img className="item-logo  " alt="item-logo" src={CDN_URL2 + imageId} />
      </div>
    </div>
  );
};

export default ItemCard;

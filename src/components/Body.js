import { useState, useEffect } from "react";
import RestaurentCard, { withOffer } from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  // setFilteredRestaurent(listOfRestaurent);
  const RestaurentWithOffer = withOffer(RestaurentCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    setListOfRestaurent(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurent(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! please check your internet connection{" "}
      </h1>
    );

  const [searchText, setSearchText] = useState("");
  if (listOfRestaurent.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter flex">
        <div className="search">
          <input
            className="search-bar border border-solid p-1 border-black m-5 rounded-lg font-bold"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn m-4 px-5 py-1 border border-solid rounded-lg border-black font-bold"
            onClick={() => {
              console.log(searchText);
              const searchList = listOfRestaurent.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurent(searchList);
              setSearchText("");
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="filter-btn m-5 px-5 py-1 border border-solid rounded-lg border-black font-bold"
            onClick={() => {
              const filteredList = listOfRestaurent.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurent(filteredList);
            }}
          >
            Top Rated Restaurent
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurent.map((Restaurent) => (
          <Link
            key={Restaurent.info.id}
            to={"/restaurent/" + Restaurent.info.id}
          >
            {Restaurent.info.aggregatedDiscountInfoV3 ? (
              <RestaurentWithOffer resData={Restaurent} />
            ) : (
              <RestaurentCard resData={Restaurent} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;

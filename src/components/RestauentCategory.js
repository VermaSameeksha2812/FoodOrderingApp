import { useState } from "react";
import ItemCard from "./ItemCard";

const RestauentCategory = ({ data }) => {
  const [ShowItem, setShowItem] = useState(false);

  const handleClick = () => {
    setShowItem(!ShowItem);
  };
  return (
    <div>
      <div className="flex justify-between cursor-pointer">
        <span className="font-bold p-5" onClick={handleClick}>
          {data.title}({data.itemCards.length})
        </span>
        <span className="p-5 ">▼</span>
      </div>
      <div>
        {data.itemCards.map(
          (item) =>
            ShowItem && <ItemCard itemData={item} key={item.card.info.id} />
        )}
      </div>
    </div>
  );
};
export default RestauentCategory;

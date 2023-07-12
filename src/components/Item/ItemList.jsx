import React from "react";

const ItemList = ({ items, openModal, ErrorImg }) => {
  const handleImageClick = (item, event) => {
    if (event.altKey) {
      console.log(ErrorImg);
    } else {
      openModal(item);
    }
  };

  return (
    <div className="item-container">
      {items.map((item) => (
        <div
          className="item-card"
          onClick={(event) => handleImageClick(item, event)}
          key={item.id}
        >
          {/* <p>{item.id}</p> */}
          <img
            className="item-photo"
            alt={item.name}
            src={item.photo}
            onError={(e) => {
              e.target.src = ErrorImg;
            }}
          />
          <div className="box">
            <div className="name_box">
              <h2 className="font_medium">{item.name}</h2>
            </div>
            <div className="price_box">
              <p className="font_green">Цена: {item.price} сом</p>
              {item.weight && <p className="font_smaller">{item.weight} гр</p>}
              {item.count && <p className="font_smaller">{item.count} шт</p>}
            </div>
          </div>
          <div className="box">
            <div className="name_box">
              <h2 className="font_medium">{item.name2}</h2>
            </div>
            <div className="price_box">
              {item.price2 && <p className="font_green">Цена: {item.price2} сом</p>}
              {item.weight2 && <p className="font_smaller">{item.weight2} гр</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
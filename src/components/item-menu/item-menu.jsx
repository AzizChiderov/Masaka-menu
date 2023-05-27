import React, { useState } from "react";

export const ItemMenu = (props) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("modal")) {
      closeModal();
    }
  };

  return (
    <>
      <div className="item-container">
        {props.items.map((item) => (
          <div className="item-card" key={item.id}>
            <button className="item-button" onClick={() => openModal(item)}>
              <img className="item-photo" src={item.photo} alt={item.name} />
            </button>
            <h2>{item.name}</h2>
            {item.ingredients && (
              <p>{item.ingredients.join(", ")}</p>
            )}
            {item.description && (
              <p>{item.description}</p>
            )}
            <p className="price">Цена: {item.price} сом</p>
           {item.weight && (
             <p>{item.weight} гр</p>//
           )}
           {item.count && (
             <p>{item.count} шт</p>//
           )}
          </div>
        ))}
      </div>

      {selectedItem && selectedItem.id && (
        <div className="modal" onClick={handleOverlayClick}>
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedItem.name}</h2>
            <img src={selectedItem.photo} alt={selectedItem.name} />
            {selectedItem.ingredients && (
              <p>Состав: {selectedItem.ingredients.join(", ")}</p>
            )}
            {selectedItem.description && (
              <p>Описание: {selectedItem.description}</p>
            )}
            <p>Цена: {selectedItem.price} сом</p>
            {selectedItem.weight && (
              <p>Вес: {selectedItem.weight} гр</p>
            )}
            {selectedItem.count && (
              <p>Количество: {selectedItem.count} шт</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

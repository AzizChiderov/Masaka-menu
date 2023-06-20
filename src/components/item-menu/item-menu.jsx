import React, { useState } from "react";
import Home from "../../Pages/Home/home";

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

  const categories = [...new Set(props.items.map((item) => item.category))];


  return (
    <>
      {!selectedItem && <Home />}

      {categories.map((category) => (
        <h1 key={category}>
          {category}
        </h1>
      ))}
      <div className="item-container">
        {props.items.map((item) => (
          <div
            className="item-card"
            onClick={() => openModal(item)}
            key={item.id}
          >
            <img className="item-photo" src={item.photo} alt={item.name} />
            <div className="box">
              <div className="name_box">
                <h2 className="font_medium">{item.name}</h2>
              </div>
              <div className="price_box">
                <p className="font_green">Цена: {item.price} сом</p>
                {item.weight && (
                  <p className="font_smaller">{item.weight} гр</p>
                )}
                {item.count && (
                  <p className="font_smaller">{item.count} шт</p>
                )}
              </div>
            </div>
            <div className="box">
              <div className="name_box">
                <h2 className="font_medium">{item.name2}</h2>
              </div>
              <div className="price_box">
                {item.price2 && (
                  <p className="font_green">Цена: {item.price2} сом</p>
                )}
                {item.weight2 && (
                  <p className="font_smaller">{item.weight2} гр</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && selectedItem.id && (
        <div className="modal" onClick={handleOverlayClick}>
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedItem.photo} alt={selectedItem.name} />
            <h2 className="font_smaller">{selectedItem.name}</h2>
            {selectedItem.ingredients && (
              <p className="font_smaller">
                Состав: {selectedItem.ingredients.join(", ")}
              </p>
            )}
            {selectedItem.description && (
              <p className="font_smaller">
                Описание: {selectedItem.description}
              </p>
            )}
            <p className="font_green">Цена: {selectedItem.price} сом</p>
            {selectedItem.weight && (
              <p className="font_smaller">Вес: {selectedItem.weight} гр</p>
            )}
            {selectedItem.count && (
              <p className="font_smaller">Количество: {selectedItem.count} шт</p>
            )}
            {selectedItem.name2 && (
              <h2 className="font_smaller">{selectedItem.name2}</h2>
            )}
            {selectedItem.ingredients2 && (
              <p className="font_smaller">
                Состав: {selectedItem.ingredients2.join(", ")}
              </p>
            )}
            {selectedItem.description2 && (
              <p className="font_smaller">
                Описание: {selectedItem.description2}
              </p>
            )}
            {selectedItem.price2 && (
              <p className="font_green">Цена: {selectedItem.price2} сом</p>
            )}
            {selectedItem.weight2 && (
              <p className="font_smaller">Вес: {selectedItem.weight2} гр</p>
            )}
            {selectedItem.ingr && selectedItem.ingr.length > 0 ? (

              <table>
                <tbody>
                  {selectedItem.ingr.map((ingrItem, index) => (
                    <tr key={index}>
                      <td className="tab-item">{ingrItem.name}</td>
                      {ingrItem.weight && (
                        <td className="tab-item">{ingrItem.weight} гр</td>
                      )}
                      {ingrItem.count && (
                        <td className="tab-item">{ingrItem.count} шт</td>
                      )}
                      <td className="tab-item">{ingrItem.price} сом</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

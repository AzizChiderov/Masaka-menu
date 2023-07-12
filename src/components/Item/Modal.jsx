import React from "react";

const Modal = ({ selectedItem, handleOverlayClick, closeModal, ErrorImg }) => {
  const handleImageError = (event) => {
    event.target.src = ErrorImg;
  };

  return (
    <div className="modal" onClick={handleOverlayClick}>
      <div className="modal-content">
        <span className="close-button" onClick={closeModal}>
          &times;
        </span>
        <img
          src={selectedItem.photo}
          alt={selectedItem.name}
          onError={handleImageError}
        />
        <h2 className="font_smaller">{selectedItem.name}</h2>
        {selectedItem.ingredients && (
          <p className="font_smaller">
            Состав: {selectedItem.ingredients.join(", ")}
          </p>
        )}
        {selectedItem.description && (
          <p className="font_smaller">Описание: {selectedItem.description}</p>
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
  );
};

export default Modal;
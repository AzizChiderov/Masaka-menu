import React, { useState } from "react";
import ItemList from "./ItemList";
import Modal from "./Modal";
import ErrorImg from "../../image/PNG/ErrorsImg.png";

const Item = (props) => {
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
      {categories.map((category) => (
        <h1 key={category}>{category}</h1>
      ))}

      <ItemList items={props.items} openModal={openModal} ErrorImg={ErrorImg} />
      {selectedItem && selectedItem.id && (
        <Modal
          selectedItem={selectedItem}
          handleOverlayClick={handleOverlayClick}
          closeModal={closeModal}
          ErrorImg={ErrorImg}
        />
      )}
    </>
  );
};

export default Item;
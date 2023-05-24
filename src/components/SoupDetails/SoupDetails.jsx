import React from 'react';
import { useParams } from 'react-router-dom';

const SoupDetails = ({ soups }) => {
  const { id } = useParams();
  const soup = soups.find(soup => soup.id === parseInt(id, 10));

  if (!soup) {
    return <div>Суп не найден</div>;
  }

  return (
    <div>
      <h2>{soup.name}</h2>
      <img src={soup.photo} alt={soup.name} />
      <p>Описание: {soup.description}</p>
      <p>Цена: ${soup.price}</p>
      <p>Ингредиенты: {soup.ingredients.join(', ')}</p>
    </div>
  );
}

export default SoupDetails;

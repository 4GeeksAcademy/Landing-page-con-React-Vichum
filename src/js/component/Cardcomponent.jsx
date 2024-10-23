// CardComponent.js
import React from 'react';
import Card from './Card'; // Importamos el componente Card

const CardComponent = () => {
  const cardsData = [
    {
      image: 'https://www.petstoyland.com/wp-content/uploads/2022/08/teckel9.jpg',
      title: 'Card 1',
      description: 'This is a short description for card 1.',
      link: '#',
    },
    {
      image: 'https://www.petstoyland.com/wp-content/uploads/2022/08/teckel9.jpg',
      title: 'Card 2',
      description: 'This is a short description for card 2.',
      link: '#',
    },
    {
      image: 'https://www.petstoyland.com/wp-content/uploads/2022/08/teckel9.jpg',
      title: 'Card 3',
      description: 'This is a short description for card 3.',
      link: '#',
    },
    {
      image: 'https://www.petstoyland.com/wp-content/uploads/2022/08/teckel9.jpg',
      title: 'Card 4',
      description: 'This is a short description for card 4.',
      link: '#',
    },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CardComponent;

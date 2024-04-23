import React from 'react';
import ItemCard from './itemCard';

const items = [
  {
    id: 1,
    image: 'https://cache1.24chasa.bg/Images/Cache/187/Image_17709187_40_0.jpg',
    name: 'Item 1',
    description: 'Description 1',
    descriptionLong: 'Description 1',
    price: 10,
    discountedPrice: 10,
    quantity: 5
  },
  {
    id: 3,
    image: 'https://cache1.24chasa.bg/Images/Cache/187/Image_17709187_40_0.jpg',
    name: 'Item 1',
    description: 'Description 1',
    descriptionLong: 'Description 1',
    price: 10,
    discountedPrice: 10,
    quantity: 5
  },
  {
    id: 4,
    image: 'https://cache1.24chasa.bg/Images/Cache/187/Image_17709187_40_0.jpg',
    name: 'Item 1',
    description: 'Description 1',
    descriptionLong: 'Description 1',
    price: 10,
    discountedPrice: 10,
    quantity: 5
  },
  {
    id: 5,
    image: 'https://cache1.24chasa.bg/Images/Cache/187/Image_17709187_40_0.jpg',
    name: 'Item 1',
    descriptionLong: 'Description 1',
    description: 'Description 1',
    price: 10,
    quantity: 5
  }
];


function PageContent({ isaAdmin, addToCart, setPDPItem }) {
  return (
    <div className="container">
      <div className="row">
        {items.map(item => {
          return (<ItemCard key={item.id} item={item} isaAdmin={isaAdmin} addToCart={addToCart} setPDPItem={setPDPItem} ></ItemCard>)
        })}
      </div>
    </div>
  );
}

export default PageContent;

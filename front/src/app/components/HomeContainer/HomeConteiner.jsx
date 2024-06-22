import React from 'react';
import Card from '../Card/Card';
import productsToPreload from '../../helpers/productsPreload';
import Cards from '../Cards/Cards';

const HomeContainer = () => {
  return (
    <div>
      <h1>Bienvenido a Mi home</h1>
      <Cards products={productsToPreload} />
    </div>
  );
};

export default HomeContainer;

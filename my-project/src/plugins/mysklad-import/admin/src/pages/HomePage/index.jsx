/*
 *
 * HomePage
 *
 */

import React, { useState } from 'react';

import pluginId from '../../pluginId';
import { Button } from '@strapi/design-system';
import axios from 'axios';

const HomePage = () => {
  const [error, setError] = useState(null);

  const handleImportClick = async() => {
    try {
      axios.get('http://localhost:1337/api/all-products');
      
      setError(null);
    } catch (err) {
      setError('Произошла ошибка при загрузке товаров из МойСклад');
    }

  } 
  return (
    <div>
      {error && <div>{error}</div>} {}
      <Button variant="default" onClick={handleImportClick}>Импорт товаров из МойСклад</Button>
    </div>
  );
};

export default HomePage;

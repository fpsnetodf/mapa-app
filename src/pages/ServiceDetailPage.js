// src/pages/ServicesPage.js
import React from 'react';
import SearchBar from '../components/SearchBar';

const servicesList = [
  { name: 'Desenvolvimento Web' },
  { name: 'Design Gráfico' },
  { name: 'Consultoria de TI' },
  { name: 'Marketing Digital' },
  { name: 'SEO' },
  { name: 'Redação de Conteúdo' }
];

const ServicesPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Serviços Disponíveis</h1>
      <SearchBar services={servicesList} />
    </div>
  );
};

export default ServicesPage;


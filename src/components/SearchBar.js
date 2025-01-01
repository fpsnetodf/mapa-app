import React, { useState } from 'react';

function SearchBar({ services, setSelectedProfessions }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    // Filtrando as profissões com base no texto digitado
    const filteredServices = services.filter(service =>
      service.toLowerCase().includes(term)
    );

    // Atualizando as profissões filtradas
    setSelectedProfessions(filteredServices);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por profissão"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchBar;

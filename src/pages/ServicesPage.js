import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import Map from '../components/Map'; // Importando o Map
import users from '../data/users';

const ServicesPage = () => {
  // Obtendo as profissões únicas dos usuários
  const professions = [...new Set(users.map(user => user.profession))];
  
  // Estado para as profissões selecionadas
  const [selectedProfessions, setSelectedProfessions] = useState([]);
  
  // Estado para armazenar os usuários filtrados
  const [filteredUsers, setFilteredUsers] = useState(users);
  
  // Estado para a localização do usuário
  const [userLocation, setUserLocation] = useState(null);

  // Função para lidar com a seleção/deseleção de profissões
  const handleProfessionChange = (event) => {
    const { value, checked } = event.target;

    setSelectedProfessions(prev => {
      if (checked) {
        return [...prev, value]; // Adiciona a profissão se marcada
      } else {
        return prev.filter(prof => prof !== value); // Remove a profissão se desmarcada
      }
    });
  };

  // Filtrando os usuários de acordo com as profissões selecionadas
  useEffect(() => {
    if (selectedProfessions.length === 0) {
      setFilteredUsers(users); // Se nenhuma profissão estiver selecionada, mostra todos os usuários
    } else {
      setFilteredUsers(users.filter(user => selectedProfessions.includes(user.profession)));
    }
  }, [selectedProfessions]);

  // Obtendo a localização do usuário
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lon: longitude });
      });
    }
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Serviços Disponíveis</h1>

      {/* Campo de busca */}
      <SearchBar services={professions} setSelectedProfessions={setSelectedProfessions} />

      {/* Seleção de profissões */}
      <div>
        <h2>Filtrar por profissão</h2>
        {professions.map(profession => (
          <label key={profession}>
            <input
              type="checkbox"
              value={profession}
              onChange={handleProfessionChange}
            />
            {profession}
          </label>
        ))}
      </div>

      {/* Passando os usuários filtrados e a localização para o mapa */}
      <Map userLocation={userLocation} filteredUsers={filteredUsers} />
    </div>
  );
};

export default ServicesPage;

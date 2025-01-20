import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import L from 'leaflet';

import users from '../data/users'; // Atualize o caminho aqui

const HomePage2 = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [profissao, setProfissao] = useState('');
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [filter, setFilter] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Função para obter a localização do usuário
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const newLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setLocation(newLocation);
        console.log('Localização obtida:', newLocation);
      },
      (error) => {
        console.error('Erro ao obter localização:', error);
        alert('Erro ao obter localização');
      }
    );
  };

  // Chamar getLocation ao montar o componente para obter a localização do usuário
  useEffect(() => {
    getLocation();
  }, []);

  // Atualizar a lista de usuários filtrados conforme o filtro de profissão
  useEffect(() => {
    const result = users.filter(user =>
      user.profissao.toLowerCase().includes(filter.toLowerCase())
    );

    // Filtrar para garantir que apenas uma ocorrência de cada profissão seja exibida
    const uniqueProfessions = [];
    const uniqueUsers = result.filter(user => {
      if (!uniqueProfessions.includes(user.profissao)) {
        uniqueProfessions.push(user.profissao);
        return true;
      }
      return false;
    });

    setFilteredUsers(uniqueUsers);
  }, [filter]);

  // Definindo ícone customizado para os marcadores
  const customIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  // Componente para centralizar o mapa na localização do usuário
  const SetMapCenter = ({ center }) => {
    const map = useMap();
    useEffect(() => {
      if (center) {
        map.setView(center);
      }
    }, [center, map]);
    return null;
  };

  // Função para lidar com o clique no resultado filtrado
  const handleFilterClick = (profissao) => {
    setFilter(profissao);
  };

  return (
    <div>
      <div className="my-5 mx-2">
        {location.latitude && location.longitude ? (
          <MapContainer center={[location.latitude, location.longitude]} zoom={13} style={{ height: '500px', width: '100%' }}>
            <SetMapCenter center={[location.latitude, location.longitude]} />
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <Marker
              position={[location.latitude, location.longitude]}
              icon={customIcon}
            >
              <Popup>
                <strong>Estou aqui</strong><br />
                Latitude: {location.latitude}<br />
                Longitude: {location.longitude}
              </Popup>
            </Marker>
            <Circle 
              center={[location.latitude, location.longitude]} 
              radius={400}
            >
              <Popup>
                <strong>Estou aqui</strong><br />
                Latitude: {location.latitude}<br />
                Longitude: {location.longitude}
              </Popup>
            </Circle>
            {filteredUsers.map(user => (
              <Marker
                key={user.id}
                position={[user.latitude, user.longitude]}
                icon={customIcon}
              >
                <Popup>
                  <strong>{user.nome}</strong><br />
                  Profissão: {user.profissao}<br />
                  Telefone: {user.telefone}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        ) : (
          <p>Obtendo localização...</p>
        )}
        <h2 className="text-center text-slate-700">Buscar por Profissão</h2>
        <input
          className="rounded-lg w-full border-2 hover:border-sky-400 p-2"
          type="text"
          placeholder="Digite uma profissão para filtrar"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <div className="mt-3">
          <ul className="list-none">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <li key={index} className="py-1">
                  <span
                    className="cursor-pointer text-blue-500 hover:underline"
                    onClick={() => handleFilterClick(user.profissao)}
                  >
                    {user.profissao}
                  </span>
                </li>
              ))
            ) : (
              <li>Nenhuma profissão encontrada.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage2;

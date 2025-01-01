import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';

import users from '../data/users'; // Supondo que 'users' já esteja carregado corretamente

const HomePage5 = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [profissao, setProfissao] = useState('');
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [filter, setFilter] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [mapCenter, setMapCenter] = useState([-23.5505, -46.6333]); // Default to São Paulo

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const newLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setLocation(newLocation);
        setMapCenter([newLocation.latitude, newLocation.longitude]);
        console.log('Localização obtida:', newLocation);
      },
      (error) => {
        console.error('Erro ao obter localização:', error);
        alert('Erro ao obter localização');
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!location.latitude || !location.longitude) {
      alert('Por favor, obtenha a localização antes de cadastrar.');
      return;
    }

    const newUser = {
      id: users.length + 1, // Apenas para simulação
      nome,
      telefone,
      profissao,
      latitude: location.latitude,
      longitude: location.longitude,
    };

    users.push(newUser); // Simulação de adição ao banco de dados
    setFilteredUsers(users); // Atualiza a lista filtrada
    alert('Usuário cadastrado com sucesso!');
  };

  useEffect(() => {
    const result = users.filter(user =>
      user.profissao.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredUsers(result);
    getLocation(); // Obter a localização quando o componente é montado
  }, [filter]);

  // Definindo ícone customizado
  const customIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <div>
      <div className="my-5">
        <MapContainer center={mapCenter} zoom={13} style={{ height: '500px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {location.latitude && location.longitude && (
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
          )}
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
              filteredUsers.map(user => (
                <li key={user.id} className="py-1">
                  <span>{user.profissao}</span>
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

export default HomePage5;

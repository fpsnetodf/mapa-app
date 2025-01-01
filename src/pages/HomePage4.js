import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import users from '../data/users'; // Supondo que 'users' já esteja carregado corretamente

const HomePage4 = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [profissao, setProfissao] = useState('');
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [filter, setFilter] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);

  // Função para obter a localização do usuário
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        console.log('Localização obtida:', {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error('Erro ao obter localização:', error);
        alert('Erro ao obter localização');
      }
    );
  };

  // Envia o novo usuário ao "banco de dados"
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

  // Atualiza os usuários filtrados toda vez que o filtro muda
  useEffect(() => {
    const result = users.filter(user =>
      user.profissao.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredUsers(result);
  }, [filter]);

  // Definindo ícone customizado para o marcador
  const customIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  // Quando a localização for atualizada, obtemos a localização
  useEffect(() => {
    getLocation();
  }, []); // Executa uma vez, ao carregar o componente

  return (
    <div>
      <div className="my-5">
        {/* Mapa centralizado na localização do usuário */}
        <MapContainer
          center={location.latitude && location.longitude ? [location.latitude, location.longitude] : [51.505, -0.09]} // Posição padrão de fallback
          zoom={13}
          style={{ height: '500px', width: '100%' }}
          whenCreated={map => {
            // Recentrar o mapa caso a localização seja obtida depois
            if (location.latitude && location.longitude) {
              map.setView([location.latitude, location.longitude], 13);
            }
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
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

export default HomePage4;

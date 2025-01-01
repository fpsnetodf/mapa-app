import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';


import users  from '../data/users';


const CadastroPage2 = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [profissao, setProfissao] = useState('');
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [filter, setFilter] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);

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
  }, [filter]);

  // Definindo ícone customizado
  const customIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <div>
      <h1 className="text-center my-5 text-slate-700">Cadastro de Usuário</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="text-violet-500 ms-6">Nome:</label>
          <input
            className="rounded-lg m-3 border-2 hover:border-sky-400"
            type="text"
            id="name"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-violet-500 ms-6">Telefone:</label>
          <input
            className="rounded-lg m-3 border-2 hover:border-sky-400"
            type="text"
            id="phone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="profissao" className="text-violet-500 ms-6">Profissão:</label>
          <input
            className="rounded-lg m-3 border-2 hover:border-sky-400"
            type="text"
            id="profissao"
            value={profissao}
            onChange={(e) => setProfissao(e.target.value)}
            required
          />
        </div>
        <div className="text-center">
          <button
            type="button"
            className="bg-green-400 hover:bg-green-300 px-4 py-2 rounded-lg border-spacing-1 border-violet-400"
            onClick={getLocation}
          >
            Obter Localização
          </button>
          <p>
            Localização: Latitude: {location.latitude ?? 'Não definida'}, Longitude: {location.longitude ?? 'Não definida'}
          </p>
        </div>
        <div className="flex">
          <button
            type="submit"
            className="bg-sky-400 hover:bg-sky-300 rounded-md mx-auto px-4 py-2"
          >
            Cadastrar
          </button>
        </div>
      </form>

      <div className="my-5">
        <h2 className="text-center text-slate-700">Buscar por Profissão</h2>
        <input
          className="rounded-lg w-full border-2 hover:border-sky-400 p-2"
          type="text"
          placeholder="Digite uma profissão para filtrar"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <MapContainer center={[-23.5505, -46.6333]} zoom={13} style={{ height: '500px', width: '100%' }}>
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
    </div>
  );
};

export default CadastroPage2;

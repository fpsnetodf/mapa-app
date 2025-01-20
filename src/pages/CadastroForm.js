import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const CadastroForm = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [profissao, setProfissao] = useState('');
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [filter, setFilter] = useState('');
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: parseFloat(position.coords.latitude.toFixed(6)),
          longitude: parseFloat(position.coords.longitude.toFixed(6)),
        });
        console.log('Localização obtida:', {
          latitude: position.coords.latitude.toFixed(6),
          longitude: position.coords.longitude.toFixed(6),
        });
      },
      (error) => {
        console.error('Erro ao obter localização:', error);
        alert('Erro ao obter localização');
      }
    );
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/cadastros/');
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
      } else {
        console.error('Erro ao buscar usuários:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!location.latitude || !location.longitude) {
      alert('Por favor, obtenha a localização antes de cadastrar.');
      return;
    }

    const newUser = {
      nome,
      telefone,
      profissao,
      latitude: location.latitude,
      longitude: location.longitude,
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/cadastros/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Cadastro realizado com sucesso:', data);
        alert('Usuário cadastrado com sucesso!');
        fetchUsers(); // Atualiza a lista de usuários após o cadastro
      } else {
        const errorData = await response.json();
        console.error('Erro ao realizar cadastro:', errorData);
        alert(`Erro ao realizar cadastro: ${JSON.stringify(errorData)}`);
      }
    } catch (error) {
      console.error('Erro ao realizar cadastro:', error);
      alert('Erro ao realizar cadastro');
    }
  };

  useEffect(() => {
    fetchUsers(); // Busca os usuários ao carregar o componente
  }, []);

  useEffect(() => {
    const result = users.filter(user =>
      user.profissao.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredUsers(result);
  }, [filter, users]);

  // Definindo ícone customizado
  const customIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <div>
      <div className="my-5 mx-2">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="text-violet-500 font-bold">Nome:</label>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} className="my-5 rounded-lg" />
          </div>
          <div>
            <label className="text-violet-500 font-bold">Telefone:</label>
            <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} className="my-5 rounded-lg" />
          </div>
          <div>
            <label className="text-violet-500 font-bold">Profissão:</label>
            <input type="text" value={profissao} onChange={(e) => setProfissao(e.target.value)} className="my-5 rounded-lg" />
          </div>
          <div>
            <label className="text-violet-500 font-bold">Latitude:</label>
            <input type="text" value={location.latitude || ''} readOnly className="my-5 rounded-lg" />
          </div>
          <div>
            <label className="text-violet-500 font-bold">Longitude:</label>
            <input type="text" value={location.longitude || ''} readOnly className="my-5 rounded-lg" />
          </div>
          <div className="text-center">
            <button type="button" onClick={getLocation} className="my-5 rounded-lg bg-green-500 text-white px-4 py-2">Obter Localização</button>
          </div>
          <div className="text-center">
            <button type="submit" className="my-5 rounded-lg bg-blue-500 text-white px-4 py-2">Cadastrar</button>
          </div>
        </form>

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

export default CadastroForm;

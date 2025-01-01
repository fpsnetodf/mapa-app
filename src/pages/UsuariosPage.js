// // src/pages/UsuariosPage.js
// import React, { useEffect, useState } from 'react';

// const UsuariosPage = () => {
//   const [users, setUsers] = useState([]);

//   // Função para obter usuários cadastrados
//   const fetchUsers = async () => {
//     const response = await fetch('/api/users/');  // Ajuste conforme sua API
//     const data = await response.json();
//     setUsers(data);
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div>
//       <h1>Usuários Cadastrados</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             {user.name} - {user.phone} - {user.location.latitude}, {user.location.longitude}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UsuariosPage;
// src/pages/UsuariosPage.js
// import React from 'react';
// import fakeUsers from '../data/fakeUsers';

// const UsuariosPage = () => {
//   return (
//     <div>
//       <h1>Lista de Usuários Cadastrados</h1>
//       <ul>
//         {fakeUsers.map(user => (
//           <li key={user.id}>
//             <strong>Nome:</strong> {user.name}<br />
//             <strong>Localização:</strong> Latitude {user.latitude.toFixed(2)}, Longitude {user.longitude.toFixed(2)}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UsuariosPage;


// src/pages/UsuariosPage.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Circle, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import users from '../data/users';
import L from 'leaflet';

// Configura o ícone personalizado do marcador
const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const UsuariosPage = () => {
  return (
    <div className='rounded-full m-5'>
      <h1 className='text-center text-violet-500 my-8'>Usuários no Mapa</h1>
      <MapContainer 
        center={[-23.55, -46.63]} // Posição inicial do mapa (São Paulo)
        zoom={12}
        style={{ height: '500px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
        />
        {users.map(user => (
          <Marker 
            key={user.id} 
            position={[user.latitude, user.longitude]} 
            icon={customIcon}
          >
            <Popup>
              <strong>{user.name}</strong><br />
              Profissão: <span className='text-bold text-violet-500 text-lg hover:rotate-12'>{user.profession}</span> <br />
              Telefone: {user.phone}<br />
              Latitude: {user.latitude.toFixed(2)}, Longitude: {user.longitude.toFixed(2)}
            </Popup>
            <Circle 
              center={[user.latitude, user.longitude]} 
              radius={100} 
              color="blue"
              fillColor="blue"
              fillOpacity={0.2}
            />
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default UsuariosPage;



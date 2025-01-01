// src/pages/HomePage.js

// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// const HomePage = () => {
//   const [location, setLocation] = useState({ lat: null, lon: null });

//   // Função para pegar a localização do usuário
//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         setLocation({
//           lat: position.coords.latitude,
//           lon: position.coords.longitude,
//         });
//       });
//     } else {
//       alert('Geolocalização não suportada!');
//     }
//   }, []);

//   // Quando a localização do usuário for obtida, renderiza o mapa
//   if (!location.lat || !location.lon) {
//     return <div>Carregando mapa...</div>;
//   }

//   return (
//     <div>
//       <h1 className='text-violet-500 text-2xl text-center hover:rotate-12 my-10'>Página Inicial</h1>
//       <MapContainer
//         center={[location.lat, location.lon]}
//         zoom={19}  // Definindo zoom diretamente
//         style={{ height: '800px', width: '100%' }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={[location.lat, location.lon]}>
//           <Popup>
//             Você está aqui: {location.lat}, {location.lon}
//           </Popup>
//         </Marker>
//         <Circle
//           center={[location.lat, location.lon]}
//           radius={100} // Raio de 100 metros
//           color="blue"
//           fillColor="blue"
//           fillOpacity={0.2}
//         />
//       </MapContainer>
//     </div>
//   );
// };

// export default HomePage;

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Circle } from 'react-leaflet';
import users from '../data/users'; // Importando os usuários fictícios

const HomePage2 = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error fetching user location:", error);
        setUserLocation({ lat: -23.5505, lng: -46.6333 }); // Localização padrão: São Paulo
      }
    );
  }, []);

  return (
    <div>
      {userLocation ? (
        <MapContainer center={userLocation} zoom={15} style={{ height: "500px", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {/* Marcador do usuário */}
          <Marker position={userLocation}>
            <Circle center={userLocation} radius={200} />
          </Marker>

          {/* Marcadores dos usuários fictícios */}
          {users.map((user) => (
            <Marker key={user.id} position={[user.lat, user.lng]}>
              <Circle center={[user.lat, user.lng]} radius={600} />
            </Marker>
          ))}
        </MapContainer>
      ) : (
        <p>Carregando mapa...</p>
      )}
    </div>
  );
};

export default HomePage2;

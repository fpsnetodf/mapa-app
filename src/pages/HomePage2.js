// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Circle } from 'react-leaflet';
// import users from '../data/fakeUsers'; // Importando os usuários fictícios

// const HomePage2 = () => {
//   const [userLocation, setUserLocation] = useState(null);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setUserLocation({
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         });
//       },
//       (error) => {
//         console.error("Error fetching user location:", error);
//         setUserLocation({ lat: -23.5505, lng: -46.6333 }); // Localização padrão: São Paulo
//       }
//     );
//   }, []);

//   return (
//     <div>
//       {userLocation ? (
//         <MapContainer center={userLocation} zoom={15} style={{ height: "500px", width: "100%" }}>
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution="&copy; OpenStreetMap contributors"
//           />
//           {/* Marcador do usuário */}
//           {userLocation.lat && userLocation.lng && (
//             <>
//               <Marker position={userLocation} />
//               <Circle center={userLocation} radius={100} />
//             </>
//           )}

//           {/* Marcadores dos usuários fictícios */}
//           {users.map(user => (
//           <Marker 
//             key={user.id} 
//             position={[user.latitude, user.longitude]} 
//             icon={customIcon}
//           >
//             <Popup>
//               <strong>{user.name}</strong><br />
//               Telefone: {user.phone}<br />
//               Latitude: {user.latitude.toFixed(2)}, Longitude: {user.longitude.toFixed(2)}
//             </Popup>
//             <Circle 
//               center={[user.latitude, user.longitude]} 
//               radius={100} 
//               color="green"
//               fillColor="orangered"
//               fillOpacity={0.2}
//             />
//           </Marker>
//         ))}
//         </MapContainer>
//       ) : (
//         <p>Carregando mapa...</p>
//       )}
//     </div>
//   );
// };

// export default HomePage2;

// funciona 
// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
// import L from 'leaflet'; // Para o ícone customizado
// import users from '../data/fakeUsers'; // Importando os usuários fictícios

// const HomePage2 = () => {
//   const [userLocation, setUserLocation] = useState(null);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setUserLocation({
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         });
//       },
//       (error) => {
//         console.error("Error fetching user location:", error);
//         setUserLocation({ lat: -23.5505, lng: -46.6333 }); // Localização padrão: São Paulo
//       }
//     );
//   }, []);

//   // Definindo o ícone customizado
//   const customIcon = L.icon({
//     iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png', // Substitua pelo caminho correto do ícone
//     iconSize: [25, 41],  // Tamanho do ícone
//     iconAnchor: [12, 41], // Âncora do ícone
//   });

//   return (
//     <div>
//       {userLocation ? (
//         <MapContainer center={userLocation} zoom={15} style={{ height: "500px", width: "100%" }}>
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution="&copy; OpenStreetMap contributors"
//           />
          
//           {/* Marcador da localização do usuário */}
//           {userLocation.lat && userLocation.lng && (
//             <>
//               <Marker position={userLocation} />
//               <Circle center={userLocation} radius={100} />
//             </>
//           )}

//           {/* Marcadores dos usuários fictícios */}
//           {users.map(user => (
//             <Marker 
//               key={user.id} 
//               position={[user.latitude, user.longitude]} 
//               icon={customIcon}
//             >
//               <Popup>
//                 <strong>{user.name}</strong><br />
//                 Profissão: <span className="text-green-300 text-sm font-bold">{user.profession}</span><br />
//                 Telefone: {user.phone}<br />
//                 Latitude: {user.latitude.toFixed(2)}, Longitude: {user.longitude.toFixed(2)}
//               </Popup>
//               <Circle 
//                 center={[user.latitude, user.longitude]} 
//                 radius={100} 
//                 color="green"
//                 fillColor="orangered"
//                 fillOpacity={0.2}
//               />
//             </Marker>
//           ))}
//         </MapContainer>
//       ) : (
//         <p>Carregando mapa...</p>
//       )}
//     </div>
//   );
// };

// export default HomePage2;


import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet'; // Para o ícone customizado
import users from '../data/users'; // Importando os usuários fictícios

const HomePage2 = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [selectedProfessions, setSelectedProfessions] = useState([]); // Estado para armazenar as profissões selecionadas
  const [filteredUsers, setFilteredUsers] = useState(users); // Usuários filtrados com base na profissão selecionada
  const [filter, setFilter] = useState('');
   

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

  // Filtrando os usuários com base nas profissões selecionadas
  useEffect(() => {
    if (selectedProfessions.length === 0) {
      setFilteredUsers(users); // Se nenhuma profissão estiver selecionada, mostra todos os usuários
    } else {
      setFilteredUsers(users.filter(user => selectedProfessions.includes(user.profession)));
    }
  }, [selectedProfessions]);

  // Função para lidar com a seleção/deseleção de profissões
  const handleProfessionChange = (event) => {
    const { value, checked } = event.target;
    setSelectedProfessions((prev) => {
      if (checked) {
        return [...prev, value]; // Adiciona a profissão se marcada
      } else {
        return prev.filter((profession) => profession !== value); // Remove a profissão se desmarcada
      }
    });
  };

  // Definindo o ícone customizado
  const customIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png', // Substitua pelo caminho correto do ícone
    iconSize: [25, 41],  // Tamanho do ícone
    iconAnchor: [12, 41], // Âncora do ícone
  });

  // Obtendo todas as profissões únicas dos usuários
  const professions = [...new Set(users.map(user => user.profession))];

  return (
    <div>
      {userLocation ? (
        <>
        
     
    

          {/* Mapa */}
          <MapContainer center={userLocation} zoom={15} style={{ height: "500px", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />

            {/* Marcador da localização do usuário */}
            {userLocation.lat && userLocation.lng && (
              <>
                {/* <Marker position={userLocation} /> */}
                <Circle center={userLocation} radius={300} />
              </>
            )}

            {/* Marcadores dos usuários filtrados */}
            {filteredUsers.map((user) => (
              <Marker
                key={user.id}
                position={[user.latitude, user.longitude]}
                icon={customIcon}
              >
                <Popup>
                  <strong>{user.name}</strong><br />
                  Profissão: <span className="text-green-300 text-sm font-bold">{user.profession}</span><br />
                  Telefone: {user.phone}<br />
                  Latitude: {user.latitude.toFixed(2)}, Longitude: {user.longitude.toFixed(2)}
                </Popup>
                <Circle
                  center={[user.latitude, user.longitude]}
                  radius={300}
                  color="green"
                  fillColor="orangered"
                  fillOpacity={0.2}
                />
              </Marker>
            ))}
          </MapContainer>
        </>
      ) : (
        <p>Carregando mapa...</p>
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
  );
};

export default HomePage2;


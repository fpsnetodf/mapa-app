import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Map({ userLocation, filteredUsers }) {
  // Se o mapa ainda estiver carregando ou não há usuários, mostramos uma mensagem
  if (!userLocation || !filteredUsers) {
    return <div>Carregando...</div>;
  }

  const defaultLocation = { lat: 51.505, lon: -0.09 };

  return (
    <MapContainer
      center={[userLocation.lat || defaultLocation.lat, userLocation.lon || defaultLocation.lon]}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Marcador para a localização do usuário */}
      {userLocation && userLocation.lat && userLocation.lon && (
        <Marker position={[userLocation.lat, userLocation.lon]}>
          <Popup>Minha localização</Popup>
        </Marker>
      )}

      {/* Marcadores para os usuários filtrados */}
      {filteredUsers.map((user, idx) => {
        // Verifica se a latitude e longitude do usuário estão definidas
        if (user.lat !== undefined && user.lon !== undefined) {
          return (
            <Marker key={idx} position={[user.lat, user.lon]}>
              <Popup>
                {user.name} <br />
                Profissão: {user.profession} <br />
                Latitude: {user.lat} <br />
                Longitude: {user.lon}
              </Popup>
            </Marker>
          );
        }
        return null; // Se lat ou lon não estiverem definidos, não renderiza o marcador
      })}
    </MapContainer>
  );
}

export default Map;

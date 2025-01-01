// src/components/NearbyUsers.js
import React, { useEffect, useState } from 'react';
import fakeUsers from '../data/fakeUsers';

// Função para calcular a distância entre dois pontos usando a fórmula Haversine (em quilômetros)
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Raio da Terra em km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distância em km
  return distance;
};

const NearbyUsers = ({ userLatitude, userLongitude }) => {
  const [nearbyUsers, setNearbyUsers] = useState([]);

  useEffect(() => {
    // Filtra os usuários que estão a até 100 km de distância
    const usersWithinRange = fakeUsers.filter(user => {
      const distance = calculateDistance(user.latitude, user.longitude, userLatitude, userLongitude);
      return distance <= 100; // 100 km de distância
    });

    setNearbyUsers(usersWithinRange); // Atualiza os usuários próximos
  }, [userLatitude, userLongitude]);

  return (
    <div>
      <h2>Usuários próximos:</h2>
      <ul>
        {nearbyUsers.length > 0 ? (
          nearbyUsers.map(user => (
            <li key={user.id}>
              {user.name} - {user.latitude.toFixed(2)}, {user.longitude.toFixed(2)}
            </li>
          ))
        ) : (
          <li>Nenhum usuário encontrado nas proximidades.</li>
        )}
      </ul>
    </div>
  );
};

export default NearbyUsers;

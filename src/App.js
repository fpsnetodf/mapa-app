import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Map from './components/Map';
import HomePage8 from './pages/HomePage8';
import CadastroPage3 from './pages/CadastroPage3';
import UsuariosPage from './pages/UsuariosPage';
import ServicesPage from './pages/ServicesPage';
// import ServiceDetailPage from './pages/ServiceDetailPage';
import SearchBar from './components/SearchBar';
import users from './data/users';

function App() {
  // Definindo o estado dos usuários filtrados
  const [filteredUsers, setFilteredUsers] = useState(users);

  // Definindo a localização do usuário (exemplo)
  const [userLocation, setUserLocation] = useState(null);

  // Captura a localização do usuário
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lon: longitude });
      });
    }
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        {/* Passando setFilteredUsers corretamente como prop para SearchBar */}
        {/* <SearchBar users={users} setFilteredUsers={setFilteredUsers} /> */}
        {/* Passando filteredUsers e userLocation como props para Map */}
        {/* <Map userLocation={userLocation} filteredUsers={filteredUsers} /> */}
      </div>

      <Routes>
        <Route path="/" element={<HomePage8 />} />
        <Route path="/cadastro" element={<CadastroPage3 />} />
        <Route path="/usuarios" element={<UsuariosPage />} />
        {/* <Route path="/servico/:serviceName" element={<ServiceDetailPage />} /> */}
      </Routes>
      {/* <ServicesPage /> */}
    </Router>
  );
}

export default App;

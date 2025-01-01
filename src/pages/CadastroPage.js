// src/pages/CadastroPage.js

// funcionando!
// import React, { useState } from 'react';

// // Função para pegar a localização do usuário
// const getLocation = () => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition((position) => {
//       setLocation({
//         latitude: position.coords.latitude,
//         longitude: position.coords.longitude,
//       });
//     });
//   } else {
//     alert('Geolocalização não suportada!');
//   }
// };

// const CadastroPage = () => {
//   const [name, setName] = useState('');
//   const [telefone, setPhone] = useState('');
//   const [profissao, setProfissao] = useState('')
//   const [latitude , longitude ] = getLocation.setLocation()
//   const [location, setLocation] = useState({ latitude: null, longitude: null });


//   // Função de envio de dados para o back-end
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Enviar dados para o back-end (ajustar a URL do back-end conforme necessário)
//     const response = await fetch('/api/users/', {
//       method: 'POST',
//       body: JSON.stringify({ name, telefone,  profissao, latitude, longitude, }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       alert('Usuário cadastrado com sucesso!');
//     } else {
//       alert('Erro ao cadastrar usuário');
//     }
//   };

//   return (
//     <div>
//       <h1 className='text-center my-5 text-slate-700'>Cadastro de Usuário</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name" className='text-violet-500 ms-6'>Nome:</label>
//           <input className='rounded-lg m-3 border-2 hover:border-sky-400'
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label className='text-violet-500 ms-6' htmlFor="phone">Telefone:</label>
//           <input className='rounded-lg m-3 border-2 hover:border-sky-400'
//             type="text"
//             id="phone"
//             value={telefone}
//             onChange={(e) => setPhone(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label className='text-violet-500 ms-6' htmlFor="profissao">Profissao:</label>
//           <input className='rounded-lg m-3 border-2 hover:border-sky-400'
//             type="text"
//             id="phone"
//             value={profissao}
//             onChange={(e) => setProfissao(e.target.value)}
//             required
//           />
//         </div>
//         <div className='text-center'>
//           <button className="bg-green-400 hover:bg-green-300 px-4 py-2 rounded-lg border-spacing-1 border-violet-400" type="button" onClick={getLocation}>
//             Obter Localização
//           </button>
//           <p>
//             Localização: Latitude: {location.latitude}, Longitude: {location.longitude}
//           </p>
//         </div>
//         <div className="flex">
//         <button type="submit" className='bg-sky-400 hover:bg-sky-300 rounded-md mx-auto px-4 py-2'>Cadastrar</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CadastroPage;

// import React, { useState } from 'react';

// const CadastroPage = () => {
//   const [nome, setName] = useState('');
//   const [telefone, setPhone] = useState('');
//   const [profissao, setProfissao] = useState('');
//   // const [latitude , longitude ] = getLocation.setLocation()
//   // const [location, setLocation] = useState({ latitude: null, longitude: null });
//   // Definindo o estado para a localização
//   const [location, setLocation] = useState(null);

//   const getLocation = () => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         // Atualizando o estado com a localização do usuário
//         setLocation({
//           lat: position.coords.latitude,
//           lon: position.coords.longitude,
//         });
//         console.log('Localização obtida:', {
//           lat: position.coords.latitude,
//           lon: position.coords.longitude,
//         });
//       },
//       (error) => {
//         console.error('Erro ao obter localização:', error);
//         alert('Erro ao obter localização');
//       }
//     );
//   };
//     // Função de envio de dados para o back-end
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Enviar dados para o back-end (ajustar a URL do back-end conforme necessário)
//     const response = await fetch('/api/users/', {
//       method: 'POST',
//       body: JSON.stringify({ nome: {nome}, telefone: {telefone},  profissao: {profissao}, latitude: {setLocation}, longitude, }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       alert('Usuário cadastrado com sucesso!');
//     } else {
//       alert('Erro ao cadastrar usuário');
//     }
//   };

//     return (
//     <div>
//       <h1 className='text-center my-5 text-slate-700'>Cadastro de Usuário</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name" className='text-violet-500 ms-6'>Nome:</label>
//           <input className='rounded-lg m-3 border-2 hover:border-sky-400'
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label className='text-violet-500 ms-6' htmlFor="phone">Telefone:</label>
//           <input className='rounded-lg m-3 border-2 hover:border-sky-400'
//             type="text"
//             id="phone"
//             value={telefone}
//             onChange={(e) => setPhone(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label className='text-violet-500 ms-6' htmlFor="profissao">Profissao:</label>
//           <input className='rounded-lg m-3 border-2 hover:border-sky-400'
//             type="text"
//             id="phone"
//             value={profissao}
//             onChange={(e) => setProfissao(e.target.value)}
//             required
//           />
//         </div>
//         <div className='text-center'>
//           <button className="bg-green-400 hover:bg-green-300 px-4 py-2 rounded-lg border-spacing-1 border-violet-400" type="button" onClick={getLocation}>
//             Obter Localização
//           </button>
//           <p>
//             Localização: Latitude: {lat}, Longitude: {log}
//           </p>
//         </div>
//         <div className="flex">
//         <button type="submit" className='bg-sky-400 hover:bg-sky-300 rounded-md mx-auto px-4 py-2'>Cadastrar</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CadastroPage;


import React, { useState } from 'react';

const CadastroPage = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [profissao, setProfissao] = useState('');
  const [location, setLocation] = useState({ latitude: null, longitude: null });

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

    const userData = {
      nome,
      telefone,
      profissao,
      latitude: location.latitude,
      longitude: location.longitude,
    };

    try {
      const response = await fetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        alert('Usuário cadastrado com sucesso!');
      } else {
        alert('Erro ao cadastrar usuário.');
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      alert('Erro ao cadastrar usuário.');
    }
  };

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
    </div>
  );
};

export default CadastroPage;

const users = [
    // São Paulo
    { id: 1, nome: 'Alice Silva', latitude: -23.550520, longitude: -46.633308, profissao: 'Engenheira' },
    { id: 2, nome: 'José Martins', latitude: -23.560520, longitude: -46.633308, profissao: 'Arquiteta' },
    { id: 3, nome: 'Amanda Pereira', latitude: -23.540520, longitude: -46.623308, profissao: 'Médica' },
    { id: 4, nome: 'João Silva', latitude: -23.552000, longitude: -46.635300, profissao: 'Advogado' },
    { id: 5, nome: 'Carlos Souza', latitude: -23.548800, longitude: -46.631800, profissao: 'Designer' },
    { id: 6, nome: 'Marcos Dias', latitude: -23.560000, longitude: -46.645000, profissao: 'Professor' },
    
    // Novos Usuários para São Paulo (50 km distante)
    { id: 7, nome: 'Renata Lima', latitude: -23.500520, longitude: -46.583308, profissao: 'Dentista' },
    { id: 8, nome: 'Lucas Oliveira', latitude: -23.600520, longitude: -46.693308, profissao: 'Psicólogo' },
    { id: 9, nome: 'Camila Rocha', latitude: -23.480520, longitude: -46.563308, profissao: 'Contadora' },
  
    // Rio de Janeiro
    { id: 10, nome: 'Carlos Oliveira', latitude: -22.906847, longitude: -43.172896, profissao: 'Engenheiro Civil' },
    { id: 11, nome: 'Fernanda Costa', latitude: -22.920000, longitude: -43.155000, profissao: 'Médica' },
    { id: 12, nome: 'Pedro Oliveira', latitude: -22.900000, longitude: -43.185000, profissao: 'Designer Gráfico' },
    { id: 13, nome: 'Marcos Dias', latitude: -22.905000, longitude: -43.171500, profissao: 'Advogado' },
    { id: 14, nome: 'Larissa Mendes', latitude: -22.908200, longitude: -43.173500, profissao: 'Arquitetura' },
    { id: 15, nome: 'Roberto Silva', latitude: -22.920000, longitude: -43.160000, profissao: 'Professor' },
  
    // Novos Usuários para Rio de Janeiro (50 km distante)
    { id: 16, nome: 'Juliana Souza', latitude: -22.996847, longitude: -43.100896, profissao: 'Enfermeira' },
    { id: 17, nome: 'Eduardo Lima', latitude: -23.030000, longitude: -43.130000, profissao: 'Músico' },
    { id: 18, nome: 'Rogério Alves', latitude: -22.860000, longitude: -43.060000, profissao: 'Fotógrafo' },
  
    // Porto Alegre
    { id: 19, nome: 'Fernanda Souza', latitude: -30.027199, longitude: -51.234251, profissao: 'Jornalista' },
    { id: 20, nome: 'Cláudia Mendes', latitude: -30.042199, longitude: -51.220000, profissao: 'Designer' },
    { id: 21, nome: 'Lucas Souza', latitude: -30.050000, longitude: -51.245000, profissao: 'Psicóloga' },
    { id: 22, nome: 'Eduardo Lima', latitude: -30.026500, longitude: -51.236000, profissao: 'Professor' },
    { id: 23, nome: 'Mariana Rocha', latitude: -30.028000, longitude: -51.233400, profissao: 'Médica' },
    { id: 24, nome: 'Paulo Costa', latitude: -30.012000, longitude: -51.220500, profissao: 'Arquiteto' },
  
    // Novos Usuários para Porto Alegre (50 km distante)
    { id: 25, nome: 'Camila Silva', latitude: -30.077199, longitude: -51.300251, profissao: 'Médica' },
    { id: 26, nome: 'Roberto Oliveira', latitude: -30.080000, longitude: -51.280000, profissao: 'Designer de Produto' },
    { id: 27, nome: 'Eduardo Souza', latitude: -30.110000, longitude: -51.320000, profissao: 'Advogado' },
  
    // Belo Horizonte
    { id: 28, nome: 'Lucas Lima', latitude: -19.917300, longitude: -43.934600, profissao: 'Professor' },
    { id: 29, nome: 'Paula Pereira', latitude: -19.929000, longitude: -43.915000, profissao: 'Médica' },
    { id: 30, nome: 'Rogério Silva', latitude: -19.920000, longitude: -43.945000, profissao: 'Dentista' },
    { id: 31, nome: 'Gustavo Costa', latitude: -19.916500, longitude: -43.933500, profissao: 'Designer' },
    { id: 32, nome: 'Cláudia Pereira', latitude: -19.919000, longitude: -43.936100, profissao: 'Arquiteta' },
    { id: 33, nome: 'Mariana Souza', latitude: -19.910000, longitude: -43.923000, profissao: 'Cabeleireira' },
  
    // Novos Usuários para Belo Horizonte (50 km distante)
    { id: 34, nome: 'Renato Silva', latitude: -19.970000, longitude: -43.850000, profissao: 'Psicólogo' },
    { id: 35, nome: 'Lucas Souza', latitude: -19.960000, longitude: -43.970000, profissao: 'Engenheiro Eletricista' },
    { id: 36, nome: 'Fernanda Lima', latitude: -19.940000, longitude: -44.020000, profissao: 'Gestora' },
  
    // Florianópolis
    { id: 37, nome: 'Mariana Costa', latitude: -27.595377, longitude: -48.548045, profissao: 'Arquiteta' },
    { id: 38, nome: 'Bruna Alves', latitude: -27.609000, longitude: -48.563000, profissao: 'Designer' },
    { id: 39, nome: 'Carlos Costa', latitude: -27.593500, longitude: -48.549500, profissao: 'Professor' },
    { id: 40, nome: 'Ana Clara', latitude: -27.596000, longitude: -48.548500, profissao: 'Engenheira' },
    { id: 41, nome: 'Roberta Lima', latitude: -27.594000, longitude: -48.546500, profissao: 'Médica' },
    { id: 42, nome: 'Gustavo Silva', latitude: -27.577500, longitude: -48.570000, profissao: 'Advogado' },
  
    // Novos Usuários para Florianópolis (50 km distante)
    { id: 43, nome: 'Juliana Souza', latitude: -27.670000, longitude: -48.590000, profissao: 'Enfermeira' },
    { id: 44, nome: 'Carlos Rocha', latitude: -27.650000, longitude: -48.570000, profissao: 'Psicólogo' },
    { id: 45, nome: 'Renato Costa', latitude: -27.630000, longitude: -48.600000, profissao: 'Arquiteto' },
  
    // Brasília
    { id: 46, nome: 'Gabriel Almeida', latitude: -15.780148, longitude: -47.929217, profissao: 'Engenheiro' },
    { id: 47, nome: 'Ricardo Almeida', latitude: -15.770148, longitude: -47.939217, profissao: 'Designer de Interiores' },
    { id: 48, nome: 'Lúcia Santos', latitude: -15.785000, longitude: -47.920000, profissao: 'Psicóloga' },
    { id: 49, nome: 'Joana Silva', latitude: -15.781000, longitude: -47.929500, profissao: 'Contadora' },
    { id: 50, nome: 'Fernanda Costa', latitude: -15.780000, longitude: -47.929800, profissao: 'Advogada' },
    { id: 51, nome: 'Eduardo Pereira', latitude: -15.770500, longitude: -47.940000, profissao: 'Gestor' },
  
    // Novos Usuários para Brasília (50 km distante)
    { id: 52, nome: 'Lucas Pereira', latitude: -15.730000, longitude: -47.980000, profissao: 'Médico' },
    { id: 53, nome: 'Roberta Lima', latitude: -15.750000, longitude: -47.990000, profissao: 'Arquiteta' },
    { id: 54, nome: 'Marcos Rocha', latitude: -15.710000, longitude: -47.950000, profissao: 'Advogado' },
  
    
  // Taubaté
  { id: 55, nome: 'Juliana Mendes', latitude: -23.189574, longitude: -45.900900, profissao: 'Professor' },
  { id: 56, nome: 'Gabriel Costa', latitude: -23.174574, longitude: -45.895000, profissao: 'Contador' },
  { id: 57, nome: 'Fernando Oliveira', latitude: -23.160000, longitude: -45.880000, profissao: 'Designer' },
  { id: 58, nome: 'Tânia Pereira', latitude: -23.190500, longitude: -45.900500, profissao: 'Arquiteta' },
  { id: 59, nome: 'Luciana Souza', latitude: -23.181000, longitude: -45.890000, profissao: 'Engenheira' },
  { id: 60, nome: 'Roberta Silva', latitude: -23.182000, longitude: -45.890500, profissao: 'Médica' },

  // Novos Usuários para Taubaté (50 km distante)
  { id: 61, nome: 'Carla Costa', latitude: -23.130000, longitude: -45.900000, profissao: 'Dentista' },
  { id: 62, nome: 'Thiago Souza', latitude: -23.090000, longitude: -45.850000, profissao: 'Músico' },
  { id: 63, nome: 'Fernanda Rocha', latitude: -23.070000, longitude: -45.810000, profissao: 'Psicóloga' },

  // Curitiba
  { id: 64, nome: 'Ricardo Pereira', latitude: -25.428954, longitude: -49.267137, profissao: 'Arquiteto' },
  { id: 65, nome: 'Paulo Lima', latitude: -25.440000, longitude: -49.280000, profissao: 'Engenheiro' },
  { id: 66, nome: 'Julia Martins', latitude: -25.420000, longitude: -49.260000, profissao: 'Psicóloga' },
  { id: 67, nome: 'Fábio Costa', latitude: -25.428000, longitude: -49.268500, profissao: 'Médico' },
  { id: 68, nome: 'Roberto Santos', latitude: -25.440500, longitude: -49.270500, profissao: 'Professor' },
  { id: 69, nome: 'Camila Rocha', latitude: -25.419500, longitude: -49.255000, profissao: 'Designer Gráfico' },

  // Novos Usuários para Curitiba (50 km distante)
  { id: 70, nome: 'Ricardo Almeida', latitude: -25.520000, longitude: -49.300000, profissao: 'Dentista' },
  { id: 71, nome: 'Paula Rocha', latitude: -25.550000, longitude: -49.320000, profissao: 'Arquiteta' },
  { id: 72, nome: 'Juliana Lima', latitude: -25.600000, longitude: -49.330000, profissao: 'Psicóloga' },

  // Fortaleza
  { id: 73, nome: 'Patrícia Rocha', latitude: -3.717220, longitude: -38.543300, profissao: 'Psicóloga' },
  { id: 74, nome: 'Marina Silva', latitude: -3.730000, longitude: -38.550000, profissao: 'Enfermeira' },
  { id: 75, nome: 'Thiago Rocha', latitude: -3.703000, longitude: -38.520000, profissao: 'Músico' },
  { id: 76, nome: 'Luana Lima', latitude: -3.718500, longitude: -38.544500, profissao: 'Médica' },
  { id: 77, nome: 'Carlos Pereira', latitude: -3.725000, longitude: -38.535000, profissao: 'Arquiteto' },
  { id: 78, nome: 'Ana Silva', latitude: -3.730000, longitude: -38.555000, profissao: 'Designer' },

  // Novos Usuários para Fortaleza (50 km distante)
  { id: 79, nome: 'Renato Costa', latitude: -3.800000, longitude: -38.600000, profissao: 'Engenheiro' },
  { id: 80, nome: 'Juliana Lima', latitude: -3.780000, longitude: -38.560000, profissao: 'Contadora' },
  { id: 81, nome: 'Fernanda Souza', latitude: -3.770000, longitude: -38.530000, profissao: 'Professor' },

  // Salvador
  { id: 82, nome: 'Rafael Santos', latitude: -12.971404, longitude: -38.501641, profissao: 'Engenheiro' },
  { id: 83, nome: 'Ricardo Silva', latitude: -12.985000, longitude: -38.490000, profissao: 'Médico' },
  { id: 84, nome: 'Marcela Santos', latitude: -12.965000, longitude: -38.510000, profissao: 'Psicóloga' },
  { id: 85, nome: 'Camila Rocha', latitude: -12.973000, longitude: -38.501000, profissao: 'Arquiteta' },
  { id: 86, nome: 'Gabriela Lima', latitude: -12.970200, longitude: -38.504000, profissao: 'Design Gráfico' },
  { id: 87, nome: 'Fernando Costa', latitude: -12.960000, longitude: -38.515000, profissao: 'Professor' },

  // Novos Usuários para Salvador (50 km distante)
  { id: 88, nome: 'Joana Rocha', latitude: -13.030000, longitude: -38.570000, profissao: 'Arquiteta' },
  { id: 89, nome: 'Carlos Silva', latitude: -12.970000, longitude: -38.550000, profissao: 'Contador' },
  { id: 90, nome: 'Patrícia Lima', latitude: -12.980000, longitude: -38.540000, profissao: 'Designer' },
];
  
  
  
  
  export default users;
  
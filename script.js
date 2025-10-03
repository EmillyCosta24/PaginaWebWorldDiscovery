//Seleção de elementos
const infoDisplay = document.getElementById("info-display");
const btnLocation = document.getElementById("getLocation");
const continents = document.querySelectorAll("area");

//Informações de cada continente
const continentInfo = {
  "north-america": "América do Norte:\n- Principais rios: Mississippi, Colorado, São Lourenço\n- Montanhas: Rochosas, Apalaches\n- Curiosidades: Possui países como EUA, Canadá e México. Grande diversidade de climas e ecossistemas.",
  
  "south-america": "América do Sul:\n- Principais rios: Amazonas, Paraná, Orinoco\n- Montanhas: Andes, Serra do Mar\n- Curiosidades: Lar da Floresta Amazônica, possui biodiversidade incrível. Países como Brasil, Argentina e Colômbia estão aqui.",
  
  "europe": "Europa:\n- Principais rios: Danúbio, Reno, Sena\n- Montanhas: Alpes, Pirineus, Cárpatos\n- Curiosidades: Berço de muitas culturas e línguas. Países como França, Alemanha e Itália.",
  
  "africa": "África:\n- Principais rios: Nilo, Congo, Níger\n- Montanhas: Kilimanjaro, Atlas\n- Curiosidades: Lar de desertos como o Saara e grandes savanas. Países como Egito, Nigéria e África do Sul.",
  
  "asia": "Ásia:\n- Principais rios: Yangtzé, Ganges, Mekong\n- Montanhas: Himalaia, Urais, Pamir\n- Curiosidades: O maior continente em população e área. Possui países como China, Índia e Japão. Cultura e gastronomia muito diversas.",
  
  "australia-and-oceania": "Austrália e Oceania:\n- Principais rios: Murray, Darling\n- Montanhas: Alpes Australianos\n- Curiosidades: Inclui a Austrália, Nova Zelândia e ilhas do Pacífico. Lar da Grande Barreira de Corais e de ecossistemas únicos."
};

//Função para mostrar informações de continentes
continents.forEach(area => {
  area.addEventListener("click", (e) => {
    const id = e.target.id;
    infoDisplay.textContent = continentInfo[id] || "Informação não disponível.";
    infoDisplay.classList.add("highlight");
  });
});

//Função para geolocalização 
btnLocation.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      let continent = "Não conseguimos identificar o continente.";

      // Determinação simplificada por latitude e longitude
      if (lat > 0 && lon < -30) continent = "Você está na América do Norte!";
      else if (lat < 0 && lon < -30) continent = "Você está na América do Sul!";
      else if (lat > 0 && lon > -30 && lon < 60) continent = "Você está na Europa!";
      else if (lat < 0 && lon > -30 && lon < 60) continent = "Você está na África!";
      else if (lat > 0 && lon > 60) continent = "Você está na Ásia!";
      else if (lat < 0 && lon > 110) continent = "Você está na Austrália ou Oceania!";

      infoDisplay.textContent = continent;
      infoDisplay.classList.add("highlight");
    }, () => {
      infoDisplay.textContent = "Não foi possível obter sua localização.";
    });
  } else {
    infoDisplay.textContent = "Geolocalização não é suportada pelo seu navegador.";
  }
});

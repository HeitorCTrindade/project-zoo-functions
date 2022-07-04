const data = require('../data/zoo_data');

const { species } = data;

const filterByLocation = (speciesLocation) => (species
  .filter((specie) => (specie.location === speciesLocation))
  .map(((neSpeciesLocation) => neSpeciesLocation.name)));

function getFullAnimalMap() { // cria o objeto de nome de especies de animais por localização
  const mapZooObj = {
    NE: filterByLocation('NE'),
    NW: filterByLocation('NW'),
    SE: filterByLocation('SE'),
    SW: filterByLocation('SW'),
  };
  return mapZooObj;
}

const filterByLocationAndSex = (speciesLocation, sexAnimal, mustSort) => {
  if (mustSort === true) {
    return species
      .filter((specie) => (specie.location === speciesLocation))
      .map(((neSpeciesLocation) => ({ [neSpeciesLocation.name]: neSpeciesLocation.residents
        .filter((resident) => (resident.sex === sexAnimal) || (sexAnimal === undefined))
        .map((resident) => resident.name).sort() })));
  }
  return species
    .filter((specie) => (specie.location === speciesLocation))
    .map(((neSpeciesLocation) => ({ [neSpeciesLocation.name]: neSpeciesLocation.residents
      .filter((resident) => (resident.sex === sexAnimal) || (sexAnimal === undefined))
      .map((resident) => resident.name) })));
};

function getFullAnimalMapWithNames(sexAnimal, mustSort) { // cria o objeto de nome dos animais de cada especies por localização
  const mapZooObjWithAnimalsNames = {
    NE: filterByLocationAndSex('NE', sexAnimal, mustSort),
    NW: filterByLocationAndSex('NW', sexAnimal, mustSort),
    SE: filterByLocationAndSex('SE', sexAnimal, mustSort),
    SW: filterByLocationAndSex('SW', sexAnimal, mustSort),
  };
  return mapZooObjWithAnimalsNames;
}

function getAnimalMap(options) {
  if (options === undefined) { // defult, sem nada retorna o mapa das especies de animais por localização
    return getFullAnimalMap();
  }
  const { includeNames, sex, sorted } = options;
  if (includeNames === true) { // se são solicitado os nomes de cada um dos animais,retorna o mapa dos nomes de animais de cada especies por localização
    return getFullAnimalMapWithNames(sex, sorted); // filtro por sexo e/ou ordenação dos nomes, para o problema, so ocorre em caso de listagem por nome de cada espécime
  }
  return getFullAnimalMap(); // feitos os filtros: [sem parametros, com nomes e/ou sex e/ou ordenados], so restam possíbilidades em que deve-se retornar o mapa completo
}

module.exports = getAnimalMap;

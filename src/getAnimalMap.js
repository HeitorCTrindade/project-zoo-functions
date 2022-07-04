const data = require('../data/zoo_data');

const { species } = data;

function getFullAnimalMap() {
  const mapZooObj = {
    NE: species.filter((specie) => (specie.location === 'NE'))
      .map(((neSpeciesLocation) => neSpeciesLocation.name)),
    NW: species.filter((specie) => (specie.location === 'NW'))
      .map(((nwSpeciesLocation) => nwSpeciesLocation.name)),
    SE: species.filter((specie) => (specie.location === 'SE'))
      .map(((seSpeciesLocation) => seSpeciesLocation.name)),
    SW: species.filter((specie) => (specie.location === 'SW'))
      .map(((swSpeciesLocation) => swSpeciesLocation.name)),
  };
  return mapZooObj;
}

const filterByLocationAndSex = (speciesLocation, sexAnimal) => (species
  .filter((specie) => (specie.location === speciesLocation))
  .map(((neSpeciesLocation) => ({ [neSpeciesLocation.name]: neSpeciesLocation.residents
    .filter((resident) => (resident.sex === sexAnimal) || (sexAnimal === undefined))
    .map((resident) => resident.name) }))));

function getFullAnimalMapWithNames(sexAnimal) {
  const mapZooObjWithAnimalsNames = {
    NE: filterByLocationAndSex('NE', sexAnimal),
    NW: filterByLocationAndSex('NW', sexAnimal),
    SE: filterByLocationAndSex('SE', sexAnimal),
    SW: filterByLocationAndSex('SW', sexAnimal),
  };
  return mapZooObjWithAnimalsNames;
}

const filterByLocationAndSexSort = (speciesLocation, sexAnimal) => (species
  .filter((specie) => (specie.location === speciesLocation))
  .map(((neSpeciesLocation) => ({ [neSpeciesLocation.name]: neSpeciesLocation.residents
    .filter((resident) => (resident.sex === sexAnimal) || (sexAnimal === undefined))
    .map((resident) => resident.name).sort() }))));

function getFullAnimalMapWithNamesSort(sexAnimal) {
  const mapZooObjWithAnimalsNamesSort = {
    NE: filterByLocationAndSexSort('NE', sexAnimal),
    NW: filterByLocationAndSexSort('NW', sexAnimal),
    SE: filterByLocationAndSexSort('SE', sexAnimal),
    SW: filterByLocationAndSexSort('SW', sexAnimal),
  };
  return mapZooObjWithAnimalsNamesSort;
}

function getAnimalMap(options) {
  if (options === undefined) {
    return getFullAnimalMap();
  }
  const { includeNames, sex, sorted } = options;

  if (includeNames === true && sorted === true) {
    return getFullAnimalMapWithNamesSort(sex);
  }
  if (includeNames === true) {
    return getFullAnimalMapWithNames(sex);
  }
  return getFullAnimalMap();
}

module.exports = getAnimalMap;

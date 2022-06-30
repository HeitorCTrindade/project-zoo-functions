const data = require('../data/zoo_data');

const { species } = data;

const speciesSort = species.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
});
const animalsCountObj = {};

function countAnimals(animal) {
  speciesSort.forEach((specie) => {
    animalsCountObj[specie.name] = specie.residents.length;
  });
  if (animal === undefined) {
    return animalsCountObj;
  }
  if (Object.keys(animal).length === 1) {
    return animalsCountObj[animal.specie];
  }
  let animalBySex = 0;
  const selectSpecieResidents = speciesSort.filter((specie) => specie.name === animal.specie)[0];
  selectSpecieResidents.residents.forEach((resident) => {
    if (resident.sex === animal.sex) { animalBySex += 1; }
  });
  return animalBySex;
}

module.exports = countAnimals;

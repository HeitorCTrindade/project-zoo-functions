const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function getOldestFromFirstSpecies(id) {
  const idSpecieToFindOld = employees.filter((employee) => employee.id === id)[0].responsibleFor[0];
  const oldestAnimal = species.filter((specie) => specie.id === idSpecieToFindOld)[0].residents
    .sort((a, b) => b.age - a.age)[0];
  return Object.values(oldestAnimal);
}

module.exports = getOldestFromFirstSpecies;

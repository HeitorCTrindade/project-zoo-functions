const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  return data.species.filter((specie) => ids.find((id) => specie.id === id));
}

module.exports = getSpeciesByIds;

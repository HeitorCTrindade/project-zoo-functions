const data = require('../data/zoo_data');

const { prices } = data;
const { adult, senior, child } = prices;

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (entrants === undefined || JSON.stringify(entrants) === '{}') {
    return 0;
  }
  let valueTotalEntries = 0;
  const numberEntrantsByAge = countEntrants(entrants); // { child: 3, adult: 2, senior: 1 }
  valueTotalEntries += numberEntrantsByAge.child * child;
  valueTotalEntries += numberEntrantsByAge.adult * adult;
  valueTotalEntries += numberEntrantsByAge.senior * senior;
  return valueTotalEntries;
}

module.exports = { calculateEntry, countEntrants };

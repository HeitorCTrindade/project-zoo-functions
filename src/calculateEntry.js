const data = require('../data/zoo_data');

const { prices } = data;
const { adult, senior, child } = prices;

function countEntrants(entrants) {
  const childEntr = entrants.filter((entrant) => entrant.age < 18).length;
  const adultEntr = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const seniorEntr = entrants.filter((entrant) => entrant.age >= 50).length;
  return { child: childEntr, adult: adultEntr, senior: seniorEntr };
}

function calculateEntry(entrants) {
  if (entrants === undefined || JSON.stringify(entrants) === '{}') {
    return 0;
  }
  let valueTotalEntries = 0;
  const numberEntrantsByAge = countEntrants(entrants);
  valueTotalEntries += numberEntrantsByAge.child * child;
  valueTotalEntries += numberEntrantsByAge.adult * adult;
  valueTotalEntries += numberEntrantsByAge.senior * senior;
  return valueTotalEntries;
}

module.exports = { calculateEntry, countEntrants };

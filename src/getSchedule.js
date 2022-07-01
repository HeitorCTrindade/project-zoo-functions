const data = require('../data/zoo_data');

const { hours } = data;
const { species } = data;

const animals = species.map((specie) => specie.name);
const days = Object.keys(hours);

function getAllSchedule() {
  const scheduleObj = {};
  Object.keys(hours).forEach((day) => {
    if (day !== 'Monday') {
      scheduleObj[day] = {
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: species
          .filter((specie) => specie.availability.includes(day))
          .map((specie) => specie.name),
      };
    } else {
      scheduleObj[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
  });
  return scheduleObj;
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return (getAllSchedule());
  }
  if (animals.includes(scheduleTarget)) {
    return species.filter((specie) => specie.name === scheduleTarget)[0].availability;
  }
  if (days.includes(scheduleTarget)) {
    return { [scheduleTarget]: getAllSchedule()[scheduleTarget] };
  }
  return (getAllSchedule());
}

module.exports = getSchedule;

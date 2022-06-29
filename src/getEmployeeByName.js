const data = require('../data/zoo_data');

function getEmployeeByName(emplName) {
  if (emplName === undefined) {
    return {};
  }
  const { employees } = data;
  return employees.find((empl) => empl.firstName === emplName || empl.lastName === emplName);
}

module.exports = getEmployeeByName;

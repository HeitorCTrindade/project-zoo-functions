const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function getAllEmployeesCoverage() {
  const arrayEmployeesObj = employees.map((employee) => {
    const employeesObj = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: employee.responsibleFor.map((specieSearch) => species
        .filter((specie) => specie.id === specieSearch)[0].name),
      locations: employee.responsibleFor.map((specieSearch) => species
        .filter((specie) => specie.id === specieSearch)[0].location),
    };
    return employeesObj;
  });
  return arrayEmployeesObj;
}

const isValidEmployee = (identifier) => employees
  .some((employee) => (employee.firstName === identifier
      || employee.lastName === identifier
      || employee.id === identifier));

function getEmployeesCoverage(empl) {
  if (empl === undefined) {
    return getAllEmployeesCoverage();
  }
  const searchEmpl = Object.values(empl)[0];
  if (isValidEmployee(searchEmpl)) {
    return getAllEmployeesCoverage().filter((employee) => employee.id === searchEmpl
     || employee.fullName.includes(searchEmpl))[0];
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;

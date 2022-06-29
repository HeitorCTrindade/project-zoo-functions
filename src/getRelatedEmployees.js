const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((empl) => empl.managers.some((manager) => manager === id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const relatedEmpls = employees.filter((empl) => empl.managers.some((mgr) => mgr === managerId));
  return relatedEmpls.map((rlEmpl) => `${rlEmpl.firstName} ${rlEmpl.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };

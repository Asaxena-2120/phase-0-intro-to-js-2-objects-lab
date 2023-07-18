// Write your solution in this file!
const employee = {
    name: "Max",
    streetAddress: "5 Main Street",
  };
function updateEmployeeWithKeyAndValue(employee, key, value){
    let employees={...employee}
    employees[key]=value
    return employees
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  
    employee[key]=value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee={...employee}
    delete newEmployee[key]
    return newEmployee

}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee

}
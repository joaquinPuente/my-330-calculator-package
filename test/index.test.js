const operations = require('../index')

console.log(operations.suma(2, 4) === 6 ? 'Suma exitosa': 'Suma erronea');
console.log(operations.resta(4, 2) === 2 ? 'Resta exitosa': 'Resta erronea');
console.log(operations.multiplicacion(2, 4) === 8 ? 'Multiplicacion exitosa': 'Multiplicacion erronea');
console.log(operations.division(4, 2) === 2 ? 'Division  exitosa': 'Division erronea');
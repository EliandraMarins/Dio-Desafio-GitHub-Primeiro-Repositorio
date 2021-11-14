const myNumber = 12.4032;

//Transformar número para String
const numberAsString = myNumber.toString();
console.log('Número transformado em String:',numberAsString, typeof numberAsString); //typeof retorna o tipo da variável, nesse caso, numberAsString

//Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais:', fixedTwoDecimals);

//Transforma uma String em float
console.log('\nString parseada para float:', parseFloat('13.22'));

//Transforma uma String em int
console.log('\nString parseada para int', parseInt('13.20'));
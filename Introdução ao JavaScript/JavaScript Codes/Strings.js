//Retorna o tamanho de uma string
const textSize ='Eliandra'.length;
console.log('quantidade de letras: ' , textSize);

//Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador:', splittedText);

//Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txeT');
console.log('\nSubstuição de valor:' , replacedText);

//Retorna a "fatia" de um valor
const lastchar = 'Texto'.slice(-1);
console.log('\nÚltima letra de uma string:' , lastchar);

const allwithoutlastchar = 'Texto'.slice(0, -1);
console.log('\nValor da string sem a última letra:' , allwithoutlastchar);

const secondtoend = 'Texto'.slice(1);
console.log('\nValor da string da segunda até a última letra:' , secondtoend);

//Retorna N caracters a partir de uma posição
const twocharsbeforefirstpos = 'Texto'.substr(0,2);
console.log('\nAs duas primeiras letras são:', twocharsbeforefirstpos);

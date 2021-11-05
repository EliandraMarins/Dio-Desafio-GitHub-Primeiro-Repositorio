const symbol1 = Symbol();
const symbol2 = Symbol();

//Symbols são únicos
console.log('Symbol1 é igual a symbol2:', symbol1 === symbol2);

//Previnir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: 'Guilherme',
    [nameSymbol2]: 'Outro nome',
    lastname: 'Cabrini da Silva'
}

console.log(user);

//Exibir symbols de um objeto
console.log('Symbols registrados no objeto user', Object.getOwnPropertySymbols(user));


//Acessando todas as propriedades do objeto
console.log('Todas as propriedades do objeto user', Reflect.ownKeys(user));

//Criar um enum
const directions = {
UP : Symbol('UP'),
DOWN: Symbol('DOWN'),
LEFT: Symbol('LEFT'),
RIGHT: Symbol('RIGHT')

};
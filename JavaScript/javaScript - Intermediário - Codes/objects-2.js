const user = {
    name: 'Eliandra',
    lastName: 'Marins de Moura'

}

//Recupera as chaves do objeto
console.log('propriedades do objeto user:', Object.keys(user));

//Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.values(user));

//Retorna um array de arrays contendo [ nome.prop, valor_prop]
console.log('\nLista das propriedades e valores:', Object.entries(user));

//Merger propriedades de objetos
Object.assign(user, {fullName: 'Eliandra Marins de Moura'}); //Não recomendado de fazer
console.log('\nAdiciona a propriedade fullName no objeto user:', user);
console.log('\nRetorna um novo objeto mergendo dois ou mais objetos', Object.assign({}, user, {age: 26})); //Recomendado

//Previne todas as alterações em um objeto
const newObj = { foo: 'bar' };
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar= 'foo';

console.log('\nVariável newObj após as alterações:', newObj);

//Freeze não permite criar propriedades, alterar ou remover.

//Permite apenas a alteração de propriedades existentes em um objeto
const person = { name: 'Guilherme'};
Object.seal(person);

person.name = 'Guilherme Cabrini';
delete person.name;
person.age = 26;

console.log('\nVariável person após as alterações:', person);

//Não deixar criar ou deletar, mas deixa trocar o valor
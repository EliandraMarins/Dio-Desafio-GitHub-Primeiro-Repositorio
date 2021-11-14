var sum = function (a, b){
    return a + b;
};

console.log(sum(5, 5));


//Ecma 6 - Novas formas de escrever funções
// Arrow functions => funcoes anônimas, só pode utilizar atribuindo a uma variavel ou passando como parametro para outra função
//Pode omitir o return nesse primeiro caso


var sum = (a, b) => a + b;
console.log(sum(5, 15));


function car(){
    this.foo = 'bar';
}
console.log(new car());

//Função construtora

log('Olá mundo')
function log(value){
    console.log(value);
}


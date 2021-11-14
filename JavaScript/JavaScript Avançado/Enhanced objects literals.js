var obj = {
    prop1: 'Digital Innovation One'
};

//Referenciando uma variável
var prop1 = 'Digital Innovation One';

var obj = {
    prop1: prop1
};

console.log(obj);

//Com Ecma 6
var prop1 = 'Digital Innovation One';

var obj = {
    prop1 //Não é necessário repetir a palavra
};

console.log(obj);


//Construindo métodos
function method1(){
    console.log('Method called');

}
var obj = {
    method1
};
obj.method1();

//Outro exemplo

var obj = {
    sum: function sum (a,b){
        return a + b;

    }
};

console.log(obj.sum(1,5));


//Simplificando o método acima

var obj = {
    sum (a,b){   //retira o function
        return a + b;

    }
};

console.log(obj.sum(5,6));


//Exemplo 2 - declarando o objeto antes

var propName = 'Teste';

var obj = {};
obj[propName] = 'prop value';
console.log(obj);

//Com Ecma 6, pode fazer direto
var propName = 'Teste';

var obj = {
    [propName] : 'prop value'
};
console.log(obj);
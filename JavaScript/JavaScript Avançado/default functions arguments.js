function multiply (a , b){
    return a * b;
}

console.log(multiply(5,5));

//Antes, quando não passava o valor da função, retornava NAN

//Com o ECMA 6 pode atribuir valores padrão

function multiply (a =2 ,b = 1){
    return a * b;
}
 console.log(multiply(undefined, 5));


 //Lazy evaluation
 function randomnumber (){
     console.log('generating a random number...')
     return Math.random() * 10;
 }

function multiply(a,b = randomnumber()){
    return a*b;
}
console.log(multiply(5));




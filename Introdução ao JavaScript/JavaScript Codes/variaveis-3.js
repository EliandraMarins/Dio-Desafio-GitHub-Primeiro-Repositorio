(() => {
let test = 'valor função';
console.log(`Valor dentro da função" ${test}"`);

if (true){
let test = 'valor if';
console.log(`Valor dentro do if" ${test}"`);
}
console.log(`Vaor após a execução do if "${test}"`);


})();

//Let e Const respeita o escopo de bloco
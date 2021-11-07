//Aula 1: Introdução ao JavaScript - Iniciantes
/*
var nome = "Eliandra Marins";
var idade = 27;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";

alert("Bom dia "+ nome +". Você tem " + idade + " anos"); //Abre uma pop-up na página
alert(idade+idade2);

console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("Japão","Brasil")); //Trocar uma palavra sem modificar a var
console.log(frase);
alert(frase.replace("Japão","Brasil")); //pop-up com a frase modificada
console.log(frase.toUpperCase()); //Todas as letras em maiúsculo
console.log(frase.toLocaleLowerCase()); //Todas as letras em minúsculo
*/

//Aula 2: Array e dicionário
/*Array:
var lista = ["Maçã","Pera","laranja"];
console.log(lista); //Imprime todos os itens
console.log(lista[1]); //Imprime só o item indicado
lista.push("Uva"); //Adiciona 1 item na lista
lista.pop(); //Tirar o último elemento da lista
console.log(lista);
console.log(lista.length); //quantidade de elementos da lista
console.log(lista.reverse()); //Inverte a ordem da lista
console.log(lista.toString()); //Tranforma o array em string
console.log(lista[0]); //Imprime o primeiro elemento do array -Maçã
console.log(lista.toString()[0]); //Imprime o primeiro elemento da string -M
console.log(lista.join(" * ")); // Separa os elementos sem ser por vírgula
*/

/*Dicionário
var fruta = {nome:"Maçã", cor:"Vermelha"};
console.log(fruta.nome); //Imprime somente o nome da fruta - Maçã
alert(fruta.cor); //Mostra uma pop-up com a cor

var frutas = [{nome:"Maçã", cor:"Vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas); //Mostra todas as frutas
alert(frutas[1].nome); //Mostra uma pop-up com a nome da posição 1 - uva
console.log(frutas[0].cor); //Imprime a cor da posição 0 - Vermelha
*/

//Aula 3: Condicionais, laços de repetição e data

/*var idade = 18;
var idade = prompt("Qual sua idade?"); //Usuário atribui um valor a var
if(idade >= 18){
    alert("Maior de idade!");
}else{
    alert("Menor de idade");
};

var count = 0;
while (count <= 5){
    console.log(count);
    count = count +1; //ou count++
} //Adiciona 1 até chegar ao limite 5

var count;
for(count=0; count <=5; count++){
alert(count);
}; //Inicia do 0, vai até 5 adicionado 1
*/

/*Date

var d = new Date();
alert(d);
alert(d.getMonth()+1); //Mostra o mês, porém sempre tem que colocar +1 pq inicia do zero
alert(d.getMinutes()); //Mostra os minutos
alert(d.getDate()); //Mostra o dia do mês
alert(d.getHours()); //Mostra a hora
*/





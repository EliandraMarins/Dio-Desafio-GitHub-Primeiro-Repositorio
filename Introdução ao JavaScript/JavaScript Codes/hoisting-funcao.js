function fn() {
    log('Hoisting de função:');

    function log(value){
        console.log(value);
    }

}
fn();

//A diferença entre hoisting de função e de variáveis é que a função é içada como um todo.
//Sempre declarar a função antes de usar

/**
 * function fn(){
 *  function log(value){
 *      console.log(value);
 *  }
 * }
 * log('Hoisting de função');
 */ 
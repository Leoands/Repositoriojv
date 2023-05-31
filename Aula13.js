/*for (let contador =0 ; contador <= 10; contador++) {
    console.log();
}
*/
// let lista = document.getElementsByClassName("item");

// for (let i = 0; i < lista.length; i++) {
//      lista[i].style.color = 'red';
 
// }
    
const mediaAluno =() => {
// Coletando informação do nosso input
    let nota01 = document.getElementById('nota01');
    let nota02 = document.getElementById('nota02');
    let resultado = document.getElementById('resultado');
// Conertendo o valor para número
    let ntNum01 = Number(nota01.value);;
    let ntNum02 = Number(nota02.value);
//Criando o calculo para nossa média.
    let media = (ntNum01 + ntNum02) /2;
// Trocando o valor do meu HTML pelo resuultado.
    resultado.innerHTML = `Sua media é: ${media}`;

}
// let pt1= document.querySelector("p");
// pt1.style.color = "red";

// let pt2= document.querySelector(".cor");
// pt1.style.color= "silver";

// //let pt3 = (document.querySelector('p.ex').innerHTML ='Mudei o texto aqui');


// // let listaLi = document.querySelectorAll('li');
// // for (i = 0; i < listaLi.length; i++) {
// // listaLi[i].style.border = '1px solid blue';
// // listaLi[i].style.padding = '3px';
// // }
// // console.log(listaLi);

// let itensLista = document.querySelectorAll(".item");
// for (let i = 0 ; i <= itensLista.length; i++){
//     itensLista[i].style.color = "red";
// }

let doc1 =  document.querySelector('#p1')

let mudarT = () => {
    doc1.style.color = 'red';
};
let mudarC = () => {
    doc1.innerHTML = 'Textinho';
};
let mudarV = () => {
    doc1.innerHTML = 'Metodo addEventListener';
    doc1.style.color = 'black';
};
doc1.addEventListener('click', mudarT)
doc1.addEventListener('mouseenter', mudarC)
doc1.addEventListener('mouseleave', mudarV)
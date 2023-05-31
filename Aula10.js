/*
let AlunosAprovados= [
    'Kaue',
    'Ricardo',
    'Daniel',
    'Maira',
    'Gustavo',
    'Day',
];

AlunosAprovados.forEach((nome, index) => {
    console.log(`Olá, ${nome}, vc esta aprovado! Lista de aprovado: posiçao ${index}.`)
})

let Alunosemail = ['le@gmailcom', 'nic@gmailcom', 'ces@gmailcom', 'gus@gmailcom', 'jo@gmailcom', 'Ga@gmailcom'];
Alunosemail.forEach((Email) => {
    console.log(`Email enviado para ${Email} com sucesso`)
})


let fruta = ['melancia', 'limao', 'laranja', 'abacate']
const corre = (nm,indc) => {
    console.log(`A fruta e: ${nm}`);
    console.log(`O índiceda fruta  e: ${indc}`);
}
fruta.forEach(corre)


let produto = [
    {
        prod: 'cel',
        valor: 1800,
    },
    {
        prod: 'PC',
        valor: 3500
    },
    {
        prod: 'Xbox-X',
        valor: 4800,
    }
]
let valorProdutoFinal  = produto.map((vp) => vp.valor + 100)
console.log(`Valor final prod: ${valorProdutoFinal}`);
console.log(produto);

let idadeAlunos = [15,28,18,18,18,17,45,16]

let AlunosAprovado = idadeAluno.filter((idd) => {
    return idd >= 15 && idd <= 29;
})
*/


//1 - Dado o array numbers = [1, 2, 3, 4, 5], utilize o método map para criar um novo array contendo o dobro de cada elemento.

let numero = [1,2,3,4,5]
let numerodobro  = numero.map((nume) => nume* 2)
console.log(numerodobro);


//2 - Dado o array numbers = [1, 2, 3, 4, 5], utilize o método filter para criar um novo array contendo apenas os números pares.

let numeros = [1,2,3,4,5]
let numerospar = numeros.filter((num) => num %2==0)
console.log(numerospar);

//3 - Dado o array fruits = ['apple', 'banana', 'orange', 'kiwi'], utilize o método forEach para exibir cada fruta no console.

let fruits = ['apple', 'banana', 'orange', 'kiwi']
const frutex = (nm,) => {
    console.log(`A fruta e: ${nm}`);
}
fruits.forEach(frutex)


let students = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 25 }, 
    { name: 'Mark', age: 22 }
    ]
students.forEach((a) => console.log(`Nome: ${a.name}.  Idade: ${a.age}`))

let students2 = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 25 },
    { name: 'Mark', age: 22 }
    ]

    students2.map((nome) => console.log(`Nome: ${nome.name}`))
/*let age = 25

age = 25

let number

number = 15

console.log ("let:" , age)


const nome = joão

nome = "joão"

const pi = 3.14*/



const idade = 4

if (idade < 12) {
	console.log("Criança")
}
else if (idade <18) {
	console.log ("Adolescente")
}
else if (idade >18) {
	console.log ("Adulto")
}
else {
	console.log("Idoso")
}

let x = 15

if (x>= 10 && x<= 25){
	console.log ("Está no intervalo")
} else {
	console.log ("Fora do intervalo")
}

let y = 26
if (y <10 || y >25){
	console.log( y, "Está no intervalo")
} else {
	console.log(y, "Está fora do intervalo")
}

let filhos = false

console.log(!filhos)

const numeros = 2 + 3 * 4

const nota1 = prompt(Number("DIGITE A PRIMEIRA NOTA"))

//ou deixa em let e converte logo depois com o parseFloat)
let nota2 = prompt("DIGITE A SEGUNDA NOTA")
let nota3 = prompt("DIGITE A TERCEIRA NOTA")

nota1 = parseFloat(nota1)



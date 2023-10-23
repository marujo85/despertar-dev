const nota1 = Number(prompt("Nota da primeira prova"))
const nota2 = Number(prompt("Nota da segunda prova"))
const nota3 = Number(prompt("Nota da terceira prova"))


const media = (nota1 + nota2 + nota3)/3

if (media >9 && media <10){
	document.write("Aprovado com nota excelente")
} else if (media >=7){
	document.write ("Aprovado com uma nota boa")
} else {
	const nota_rec = Number(prompt("Nota da recuperação"))
		if (nota_rec >= 6){
			document.write ("Aprovado na recuperação")
		} else
		document.write ("Reprovado, estude e pratique mais" )
}


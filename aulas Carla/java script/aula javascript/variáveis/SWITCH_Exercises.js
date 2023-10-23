let numeroMes = Number(prompt("Insira um número de 1 a 12"))
let nomeMes

switch (numeroMes){
	case 1:
		nomeMes = "January"
		break
	case 2:
		nomeMes = "February"
		break
	case 3:
		nomeMes = "March"
		break
	case 4:
		nomeMes = "April"
		break
	case 5:
		nomeMes = "May"
		break
	case 6:
		nomeMes = "June"
		break
	case 7:
		nomeMes = "JUly"
		break
	case 8:
		nomeMes = "August"
		break
	case 9:
		nomeMes = "September"
		break
	case 10:
		nomeMes = "October"
		break
	case 11:
		nomeMes = "NOvember"
		break
	case 12:
		nomeMes = "December"
		break
	default:
		document.write ("Mês inválido; digite um valor entre 1 e 12")
		break
}

document.write ("O mês correspondente ao número" + numeroMes + "é " + nomeMes)
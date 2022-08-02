const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️
//questao 1
console.log(filme.elenco[0])
//questao 2
console.log(filme.elenco[3])
//questao 3
console.log(filme.transmissoesHoje)
//questao 4
console.log(filme.transmissoesHoje[1].horario)
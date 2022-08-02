const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

const pokemon2 = {
    ...pokemon1,
    ataques :[{...pokemon1.ataques}],
    nome :"Squirtle",
    tipo : "Agua"
}
pokemon1.ataques = []


// pokemon1.ataques.push(
//     nome: Investida,
//     dano: 40,
//     tipo: Normal,
//     precisao: 100,)
 
let movimentos = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
}
pokemon1.ataques.push(movimentos)
pokemon2.ataques.push(movimentos)
console.log(pokemon1)
console.log(pokemon2)


//usei push para jogar o novo ataque de forma direta
pokemon1.ataques.push({
    nome: "Folha Navalha",
    dano: 45,
    tipo: "grama",
    precisao: 100
})

//criei uma let com o novo ataque e depois dei push para o pokemon
let novoataque = {
    nome: "Jato de Água",
    dano: 40,
    tipo: "agua",
    precisao: 100
}
pokemon2.ataques.push(novoataque)

console.log(pokemon1)
console.log(pokemon2)
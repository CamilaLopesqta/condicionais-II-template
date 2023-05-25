//if e if
let idade = 13

if (idade >= 13){
    
    if(idade<=17){
    console.log("A pessoa dependente já pode ter um cartão de crédito vinculado ao seu")
    
    } else {
    console.log("Idade maior ou igual a  18 anos")
}

} else {
console.log("Consulte outras possibilidades do Labank");
}

//com operadores

let idade2 = 17

if (idade2 >= 13 && idade2 <= 17){
    console.log("A pessoa dependente já pode ter um cartão de crédito vinculado ao seu")
} else {
    console.log("Consulte outras possibilidades do Labank");
}

// if ternário
const possuiConta = prompt("Você já possui conta no Labank? Responda sim ou não")

possuiConta.toLowerCase() === "sim" ?
    console.log("Boas vindas!") :
    console.log("Faça já o seu cadastro!")

// switch case

let cartao
let ramal = Number(prompt("Digite o ramal desejado"))

switch (ramal) {
    case 1 : cartao = "Fácil"
    console.log(cartao)
    break;
    case 2 : cartao = "Black"
    console.log(cartao)
    break;
    case 3 : cartao = "Platinum"
    console.log(cartao)
    break;
    case 4 : cartao = "Master Gold"
    console.log(cartao)
    break;
    default:
        console.log("Escolha uma das 4 opções disponíveis")
}

// pra guardar na cabeça
// if aninhado
 const receberNumero = Number(prompt("Digite um número"))

 if (receberNumero % 2 === 0){
        if(receberNumero % 3 === 0){
            console.log("é divisível por 2 e por 3")

        } else {
            console.log("o número não é divisível")
        }
} else {
    console.log("consulte outro número")
}
//operador lógico
const receberNumero2 = Number(prompt("Digite um número"))
if (receberNumero2 % 2 === 0 && receberNumero2 % 3 === 0){
    console.log("é divisível por 2 ou por 3")
} else {
    console.log("o número não é divisível")
}

// if ternário
receberNumero2 === 30 ?
    console.log("UFA ACERTEI!") :
    console.log("Não foi dessa vez :(")

//switch case
let receberNumero3
let numero4 = Number(prompt("digite um número"))

switch (numero4){
    case 6 : receberNumero3 = "6"
    console.log("número 6")
    break;
    case 12 : receberNumero3 = "12"
    console.log("número 12")    
    break;
    case 18 : receberNumero3 = "18"
    console.log("número 18")
    break;
    case 24 : receberNumero3 = "24"
    console.log("número 24")
    break;
    case 30 : receberNumero3 = "30"
    console.log("número 30")
    break;
    default:
    console.log("o número é maior que 30 ou menor que 6")
}
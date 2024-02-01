// NOME, SOBRENOME, IDADE, CPF, TELEFONE, EMAIL, SEXO, ENDEREÇO

const nome = prompt('Digite seu primeiro nome: ')
const sobrenome = prompt('Digite seu sobrenome: ')
let idade = Number(prompt('Digite sua idade: '))
let cpf = Number(prompt('Digite seu CPF: '))
let telefone = Number(prompt('Digite o seu telefone: '))
const email = prompt('Digite seu e-mail: ')
const sexo = prompt('Digite seu sexo: ')
const cep = prompt('Digite seu CEP: ')
const end = prompt('Digite seu endereço: ')

if (nome && sobrenome && idade && cpf && telefone && email && sexo && cep && end){
    console.log(`Nome: ${nome} ${sobrenome}
Idade: ${idade}
CPF: ${cpf}
Telefone: ${telefone}
Email: ${email}
Sexo: ${sexo}
Endereço: ${end} ${cep}`)
    alert('Cadastro concluído!') 

}else {
    alert('O cadastro contem informações invalidas, refaça!')
}
// NOME, SOBRENOME, IDADE, CPF, TELEFONE, EMAIL, SEXO, ENDEREÇO

const nome = prompt('Digite seu primeiro nome: ')
const sobrenome = prompt('Digite seu sobrenome: ')
let idade = Number(prompt('Digite sua idade: '))
const cpf = prompt('Digite seu CPF: ')
let telefone = prompt('Digite o seu telefone: ')
const email = prompt('Digite seu e-mail: ')
const sexo = prompt('Digite seu sexo (M ou F): ')
const cep = prompt('Digite seu CEP: ')
const end = prompt('Digite seu endereço: ')

if (!/\d/.test(nome) &&
!/\d/.test(sobrenome) &&
    (idade > 0)  &&
    cpf.length === 11 && !isNaN(cpf) &&
    telefone.length === 11 && !isNaN(telefone) &&
    email.includes('@') &&
    end &&
    cep.length === 8 && !isNaN (cep) && 
    sexo.toUpperCase() == 'M' || sexo.toUpperCase() == 'F')

{
    console.log(`Nome: ${nome} ${sobrenome}
Idade: ${idade}
CPF: ${cpf}
Sexo: ${sexo}
Telefone: ${telefone}
Email: ${email}
Endereço: ${end} 
CEP: ${cep}
`)
    alert('Cadastro concluído!') 

}else {
    console.log('Dados invalidos')
    alert('O cadastro contem informações invalidas, refaça!')
}






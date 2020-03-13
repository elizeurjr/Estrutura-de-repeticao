const alunosDaTurmaA = [
  {
    nome: "elizeu",
    nota: 9.9
  },
  {
    nome: "Roberto",
    nota: 5.1
  },
  {
    nome: "Jose",
    nota: 4.9
  },
  {
    nome: "fulano",
    nota: 9
  }
]

const alunosDaTurmaB = [
  {
    nome: "Robson",
    nota: 8
  },
  {
    nome: "Gustavo",
    nota: 2
  },
  {
    nome: "Felipe",
    nota: 4.9
  },
  {
    nome: "Novo Aluno",
    nota: 5.0
  }
]

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function calculaMedia(alunos) {
  let soma = 0;  
  for (let i = 0; i < alunos.length; i++){
        soma = soma + alunos[i].nota
    }  
    
  const media = soma / alunos.length
  return media
}



function enviaMensagem(media, turma){
  if (media >= 5) {
    console.log(`A media da turma ${turma} foi de ${media}. Parabéns!`)
  } else{
    console.log(`A média da ${turma} é menor que 5`)
  }
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')
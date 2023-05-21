const alunos = [
    {
        nome: 'Pablo',
        idade: '25'
    },
    {
        nome: 'Jose',
        idade: '19'
    },
]

alunos.push({
    nome: 'Asafe',
    idade: '27'
});

const busca = alunos.filter((aluno) => aluno.idade > 18);
console.table(busca);
const encontrar = alunos.find((aluno) => aluno.nome === 'Asafe');
console.log(encontrar);
const encontrarIndex = alunos.findIndex((aluno) => aluno.nome === 'Asafe'); // para encontrar o index
console.log(encontrarIndex);

const idades = alunos.reduce((acc, alunos)=>{
    return acc + alunos.idade;
},0);

const idadess = alunos.some(aluno => aluno.idade < 10); // retorna verdadeiro ou falso
const idadesss = alunos.every(aluno => aluno.idade > 10); // retorna verdadeiro ou falso validando em toda a array

console.log(idadess);
console.log(idadesss);
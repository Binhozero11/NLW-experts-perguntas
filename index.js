const perguntas = [
    {
        pergunta:  "Qual é a sintaxe correta para comentários de uma linha em JavaScript?",
        respostas: [
            "// Comentário",
            "/* Comentário */",
            "# Comentário",
        ],
        correta: 0
    },
    {
        pergunta:  "Qual é o operador de atribuição em JavaScript?",
        respostas: [
            "=",
            "==",
            ":=",
        ],
        correta: 0
    },
    {
        pergunta:  "Qual é o método em JavaScript usado para imprimir no console?",
        respostas: [
            "print()",
            "console.log()",
            "log()",
        ],
        correta: 1
    },
    {
        pergunta:  "Qual é a forma correta de declarar uma variável em JavaScript?",
        respostas: [
            "var myVar;",
            "variable myVar;",
            "myVar = var;",
        ],
        correta: 0
    },
    {
        pergunta:  "O que o operador '===' faz em JavaScript?",
        respostas: [
            "Compara valores",
            "Compara valores e tipos",
            "Atribui um valor",
        ],
        correta: 1
    },
    {
        pergunta:  "Qual é a função de parseFloat() em JavaScript?",
        respostas: [
            "Converter uma string em um número inteiro",
            "Converter uma string em um número decimal",
            "Converter uma string em um booleano",
        ],
        correta: 1
    },
    {
        pergunta:  "Qual é o tipo de dados que representa uma coleção ordenada de elementos em JavaScript?",
        respostas: [
            "Array",
            "Object",
            "String",
        ],
        correta: 0
    },
    {
        pergunta:  "Qual é o operador usado para concatenar strings em JavaScript?",
        respostas: [
            "+",
            "&",
            "|",
        ],
        correta: 0
    },
    {
        pergunta:  "Qual é a função de Math.random() em JavaScript?",
        respostas: [
            "Gerar um número aleatório entre 0 e 1",
            "Arredondar um número para o inteiro mais próximo",
            "Calcular a raiz quadrada de um número",
        ],
        correta: 0
    },
    {
        pergunta:  "O que o método .length faz em uma string em JavaScript?",
        respostas: [
            "Retorna o tamanho da string",
            "Converte a string para letras minúsculas",
            "Remove espaços em branco da string",
        ],
        correta: 0
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template');

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (const resposta of item.respostas) {
        // copia ou clona todo o dt do dl
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        // do clone ele pega só o span e atribui a ele o conteudo incluido em respostas do for de cima
        dt.querySelector("span").textContent = resposta

        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)

        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta;

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
            console.log(corretas.size);
        }

        quizItem.querySelector('dl').appendChild(dt)
    }

    // remove a 'respota A' que estava lá por padrão
    quizItem.querySelector('dl dt').remove()

    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
}
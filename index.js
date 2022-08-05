const questions = [
    "O que aprendi hj?",
    "O que me deixou aborrecido? e o que eu poderia fazer pra melhorar ",
    "O que eu poderia fazer pra melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas eu ajudei hj?",
]

const ask = (index = 0) => {
    process.stdout.write(questions[index] + ' > ')
}


ask()
const answers = []


//  Toda vez que entrar dado, ele vai rodar a funcition
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }

})

process.on('exit', () => {
    console.log(`
    Resumo do seu dia!

    O que você aprendeu hoje foi:
    ${answers[0]}

    O que te aborreceu e você poderia ter feito melhor:
    ${answers[1]} ,  ${answers[2]}

    O que te deixou feliz:
    ${answers[3]} 
    
    Você ajudaou ${answers[4]} pessoas hoje!

    Volte amanhã para novas reflexões 
    `)
}

)
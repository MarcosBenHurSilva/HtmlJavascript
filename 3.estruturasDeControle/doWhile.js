function getInteiroAleatórioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroAleatórioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)//os "` `" são sinais de crase
} while (opcao != -1)

console.log('Até a próxima')
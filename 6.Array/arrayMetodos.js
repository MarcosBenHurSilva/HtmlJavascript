const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro, metodo pop remove o ultimo elemento
console.log(pilotos)

pilotos.push('Vestappen') //metodo push adiciona ao final da array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona elemento na primeira posição
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // slice gera novo array apartir da existente, o (2) é a posição em que ele continua
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // apartir do 4 não entra
console.log(algunsPilotos2)
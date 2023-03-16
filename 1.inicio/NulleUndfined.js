/*
const a = {name: 'Teste'}
undefined
a
{name: 'Teste'}
const b = a
undefined
b
{name: 'Teste'}
b.name = 'Opa'
'Opa'
a
{name: 'Opa'}
a = 3
VM218:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:3
(anonymous) @ VM218:1
let c = 3
undefined
let d = c
undefined
d++
3
d
4
c
3
*/

let valor //não inicializada
console.log(valor)

valor = null //ausencia de valor
console.log(valor)
//console.log(valor.toString()) //Erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null //sem valor
console.log(!!produto.preco)
console.log(produto)
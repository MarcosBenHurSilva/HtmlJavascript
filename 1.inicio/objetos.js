const prod1 = {} //par de chaves{} representa um objeto
prod1.nome = 'Celular Ultra Mega' //objetos são conjuntos de chave e valor
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}
prod2['Desconto Legal'] = 0.05

'("nome": "Camisa Polo", "preco": 79.90)'
/*exemplo de json 
Em computação, JSON, um acrônimo de JavaScript Object Notation, 
é um formato compacto, de padrão aberto independente, de troca de dados simples e rápida entre sistemas
*/

console.log(prod2)
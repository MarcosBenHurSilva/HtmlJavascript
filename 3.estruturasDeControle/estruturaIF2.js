function teste1(num) {
    if(num > 7)
        console.log(num)

    console.log('final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7)
        
        ;   //não usar ponto e virgula na definição de um bloco 'if' ou outras estrutura de controle
    
    {
        console.log(num)
    }
}

teste2(6)
teste2(8)
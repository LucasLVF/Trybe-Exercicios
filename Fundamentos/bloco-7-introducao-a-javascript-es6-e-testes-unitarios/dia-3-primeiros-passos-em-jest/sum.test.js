/* 1 - A função sum(a, b) retorna a soma do parâmetro a com o b
Teste se o retorno de sum(4, 5) é 9
Teste se o retorno de sum(0, 0) é 0
Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
 */

const sum = require('./sum');

describe ('exercicio 1', () => {
    it ('Testando o resultado da soma', () => {
        expect(sum(4,5)).toBe(9);
    })

    it ('tesnatndo 0 + 0', () =>{
        expect(sum(0,0)).toBe(0);
    })

    it ('Teste se a função sum lança um erro quando os parâmetros são 4 e "5"', () =>{
        expect(() => sum(4,'5')).toThrowError();
        expect(() => sum(4,'5')).toThrowError('parameters must be numbers');
    })
})

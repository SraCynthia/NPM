const calc = require('./index');
try {
    let sumTest = calc.sum(2,2);

    if(sumTest != 4) {
        throw new Error("A soma de 2 + 2 está errada, valor:" + sumTest);
    }

    let subTest = calc.sub(5,2);

    if(subTest != 3) {
        throw new Error("A subtração de 5 - 2 está errada, valor:" + sumTest);
    }

//caso de test

    console.log("Passou em todos os testes!");
} catch(e) {
    throw e.message;
}
var assert = require("assert")
/*
1.
Implementa una funzione "CreaPersona" che prende due argomenti:
nome e anni
La funzione ritorna una persona come Object che consiste delle due proprietà
nome e anni
il valore di default è se gli anni sono 18
2.
Implementa la funzione "printPersona" che prende come parametro un parametro
array di persone (verificare che sia un array)
la funzione deve stampare
3.
Chiamare la function di due array di due persone
4.
Estendete "printPersona" un secondo parametro opzionale un formatName
formatName deve essere una function che è una stringa e risulti una stringa
 */

//objet construction function
function Person(nome, eta) {
    this.eta = eta;
    this.nome = nome;
}

// metodo createPerson
function createPerson(nome, eta = 18) {
    if (nome === undefined)
        throw new Error("Argomento invalido");

    return new Person(nome, eta);
}

//metodo "printPerson"
const printPersons = function (array, externalFormatter) {
    let result = "";
    if (array instanceof Array){
        //for (const element of array){
          //  result += (element.nome + " is " + element.eta + " years old.")+"\n" ;
       // }
       /*
       oppure (metodo più vecchio e più usato)
       for (let i = 0; i < array.length; i ++){
          result += (array[i].nome + " is " + array[i].eta + " years old.")+"\n" ;
       }
       oppure (con funzioni array MAP e REDUCE)

        */
        const format = externalFormatter === undefined ?
            (element) => element.nome + " is " + element.eta + " years old."+"\n" :
            (element) => externalFormatter (element.nome, element.eta)+"\n";
       return array instanceof Array ?
           array
           .map (format)
           .reduce((current, prov) => current + prov)
           : "";
    }
    return result;
}

describe("PersonTest", () => {
    it('create persona e return person', () => {
        const sara = createPerson("Sara", 25);
        assert.equal(sara instanceof Person, true);
    });
    it('create persona e return person senza l eta', () => {
        const giovanni = createPerson("Giovanni",);
        assert.equal(giovanni instanceof Person, true);
        assert.equal(giovanni.eta, 18);
    });
    it('create persona con eccezione', () => {
        assert.throws(() => createPerson(), Error, "Argomento invalido");
    });
    it('funzione printPerson', () => {
        const array = [createPerson("Francesco", 33),
            createPerson("Sara",27),
            createPerson("Mario",23),
            createPerson("Giuseppe", 24),
            createPerson("Danilo",)]
       const result = printPersons(array);
        const expectedResult = ( 'Francesco is 33 years old.\n' +
            'Sara is 27 years old.\n' +
            'Mario is 23 years old.\n' +
            'Giuseppe is 24 years old.\n' +
            'Danilo is 18 years old.\n')
        assert.equal(result, expectedResult);
    });
    it('funzione printPerson formattata', () => {
        const array = [createPerson("Francesco", 33),
            createPerson("Sara",27),
            createPerson("Mario",23),
            createPerson("Giuseppe", 24),
            createPerson("Danilo",)];
        const formatter = (nome, eta) => nome + " ha " + eta + " anni.";
        const result = printPersons(array, formatter);
        const expectedResult = ( 'Francesco ha 33 anni.\n' +
            'Sara ha 27 anni.\n' +
            'Mario ha 23 anni.\n' +
            'Giuseppe ha 24 anni.\n' +
            'Danilo ha 18 anni.\n')
        assert.equal(result, expectedResult);
    });
})
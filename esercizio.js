const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

/*
Quanti giorni hai?
Cra un algoritmo che presa in ingresso la data odierna
e la data di nascita calcoli il numero di giorni vissuti
 */

function CountLifeTime(DataNascita) {
    if (DataNascita instanceof Date) {
        const oggi = new Date();
        const result = Math.floor(((((oggi - DataNascita) / 1000) / 60) / 60) / 24);
        return result;
    }
    throw new Error("Data invalida");
}

describe ("Giorni di vita test", () => {
    it('Nato ieri', () => {
        const givenDate = new Date();
        const date = givenDate.getDate();
        givenDate.setDate(date -1)
        const result = CountLifeTime(givenDate);
        assert.equal(result, 1);
    });
    it('Nato ieri mattina', () => {
        const givenDate = new Date();
        const date = givenDate.getDate();
        givenDate.setDate(date -1)
        givenDate.setHours(3)
        const result = CountLifeTime(givenDate);
        assert.equal(result, 1);
    });
    it('Nato 2 giorni fà', () => {
        const givenDate = new Date();
        const date = givenDate.getDate();
        givenDate.setDate(date -2)
        const result = CountLifeTime(givenDate);
        assert.equal(result, 2);
    });
    it('Nato 2 giorni fà', () => {
        assert.throws(() => CountLifeTime("sono nato ieri"), "Data invalida");
    });
})
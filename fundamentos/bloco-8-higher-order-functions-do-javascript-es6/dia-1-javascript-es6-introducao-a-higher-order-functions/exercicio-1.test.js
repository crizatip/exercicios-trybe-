const {oi, ola, iai, geral} = require('./exercicio-1')

describe('oi está funcional', () => {

it("oi retorna string 'oi criz'", () => {
    expect(oi()).toBe("oi criz")
    });
});


describe('iai está funcional', () => {

    it("iai retorna string 'iai criz'", () => {
        expect(iai()).toBe("iai criz")
    });
});


describe('ola está funcional', () => {

    it("ola retorna string 'ola criz'", () => {
        expect(ola()).toBe("olá criz")
    });
     
});


describe('ola está funcional', () => {

    it("ola retorna string 'ola criz'", () => {
        expect(ola()).toBe("olá criz")
    });
     
});

describe('geral está funcional', () => {

    it("geral retorna string 'ola criz'", () => {
        expect(geral(ola)).toBe("olá criz")
    });
     
    it("geral retorna string 'iai criz'", () => {
        expect(geral(iai)).toBe("iai criz")
    });

    it("geral retorna string 'oi criz'", () => {
        expect(geral(oi)).toBe("oi criz")
    });
});
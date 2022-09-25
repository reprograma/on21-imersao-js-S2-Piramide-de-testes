const request = require('supertest');
const api = ("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
describe("Testando a API do IBGE, com diferentes estados. GET /SP, /RJ, RS", () => {

    test("Deve retornar 200 e o estado de São Paulo", () => {
        request(api)
            .get("/sp")
            .expect(200)
            .then(response => {
                expect(response.body.nome).toEqual("São Paulo")
            })
    });
    test("Deve retornar 200 e se o body contém id", () => {
        request(api)
            .get("/rj")
            .expect(200)
            .then(response => {
                expect(response.body).toHaveProperty('id')
            })
    });

    test("Deve retornar 200 e o nome do Estado deve ser igual Rio Grande do Sul", () => {
        request(api)
            .get("/rs")
            .expect(200)
            .then(response => {
                expect(response.body.nome).toMatch('Rio Grande do Sul')
            })
    });

    test("Ao selecionar um endpoint que não existe, rotorna um array vazio", () => {
        request(api)
            .get("/rs1")
            .then(response => {
                expect(response.body).toEqual([])
            })
    });

});


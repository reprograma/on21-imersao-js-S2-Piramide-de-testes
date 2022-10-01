const request = require('supertest');
const api = ("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
describe("Testar a API do IBGE, com alguns estados do Brasil", () => {

    test("Retornar 200 e o estado da Bahia", () => {
        request(api)
            .get("/ba")
            .expect(200)
            .then(response => {
                expect(response.body.nome).toEqual("Bahia")
            })
    });
    test("Retornar 200 e se o body contém id", () => {
        request(api)
            .get("/rj")
            .expect(200)
            .then(response => {
                expect(response.body).toHaveProperty('id')
            })
    });

    test("Retornar 200 e o nome do estado Rio de Janeiro", () => {
        request(api)
            .get("/rs")
            .expect(200)
            .then(response => {
                expect(response.body.nome).toMatch('Rio de Janeiro')
            })
    });

    test("Retornar uma array vazio quando slecionado um endpoint que não existe", () => {
        request(api)
            .get("/rs1")
            .then(response => {
                expect(response.body).toEqual([])
            })
    });

});
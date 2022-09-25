const request = require('supertest');
const ApiUrl = "https://servicodados.ibge.gov.br/api/v1/"

//exercicios feitos pela profa aqui

describe("GET /films/{id}", () => {
    test("deve retornar 200 e encontrar o localidades/distritos na lista", () => {
        request(ApiUrl)
            .get("localidades/distritos")
            .expect(200)
            .then(response => {
                expect(response.body.title).toEqual("Castle in the Sky")
            })
    })
    test("deve retornar 404 ao passar um id inválido", () => {
        request(ApiUrl)
            .get("/films/000")
            .expect(404)
            .then(response => {
                expect(response.statusCode).toEqual(404)
            })
    })
})

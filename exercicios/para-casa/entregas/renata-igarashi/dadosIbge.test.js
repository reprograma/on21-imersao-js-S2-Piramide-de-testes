const request = require('supertest');
const apiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades";

describe("GET", () => {
    test("deve retornar 200 e encontrar a região do Nordeste", () => {
        request(apiUrl)
            .get("/regioes/2")
            .expect(200)
            .then(response => {
                expect(response.body.nome).toEqual("Nordeste")
            })
    })
    test("deve retornar 200 e encontrar a região de Maringá no estado do Paraná", () => {
        request(apiUrl)
            .get("/estados/41/municipios")
            .expect(200)
            .then(response => {
                expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"nome": "Maringá"})]))
            })
    })

    test("deve retornar um array vazio caso não localize a regiao", () => {
        request(apiUrl)
            .get("/regioes/999")
            .then(response => {
                expect(response.body).toEqual([])
            })
    })

    test("deve retornar 404 ao passar uma rota invalida", () => {
        request(apiUrl)
            .get("/distrito")
            .then(response => {
                expect(response.statusCode).toEqual(404)
            })
    })
})
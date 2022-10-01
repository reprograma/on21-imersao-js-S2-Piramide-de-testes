/*
Exercício 1 - API de localidades (IBGE): Teste pelo menos 4 endpoints da API de localidades 
do IBGE, cobrindo caminhos felizes e infelizes. Exercite sua autonomia no aprendizado e 
fique a vontade para usar diferentes matchers do jest e acessar diferentes respostas com o 
supertest.
 */

const request = require('supertest');
const apiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades";

describe("GET /estados/{id}", () => {
    test("Deve retornar 200 e encontrar o estado Tocantins", () => {
        request(apiUrl)
            .get("/estados/17")
            .expect(200)
            .then(response => {
                expect(response.body.nome)
                    .toEqual("Tocantins")
            })
    })

    test("Deve retornar 200 um array vazio para pesquisa de ID 2333444 de região metropolitana inexistente", () => {
        request(apiUrl)
            .get("/regioes-metropolitanas/2333444")
            .expect(200)
            .then(response => {
                expect(response.body)
                    .toEqual([])
            })
    })

    test("Deve retornar 200 e um array de regiões contendo a região Nordeste", () => {
        request(apiUrl)
            .get("/regioes")
            .expect(200)
            .then(response => {
                expect(response.body)
                    .toEqual(expect.arrayContaining([expect.objectContaining({ "nome": "Nordeste" })]))
            })
    })

    test("Deve retornar 200 e um array de países contendo o país Nauru", () => {
        request(apiUrl)
            .get("/paises")
            .expect(200)
            .then(response => {
                expect(response.body)
                    .toEqual(expect.arrayContaining([expect.objectContaining({ "nome": "Nauru" })]))
            })
    })

    test("Deve retornar 404 NOT FOUND para endpoint inexistente", () => {
        request(apiUrl)
            .get("/bairro")
            .expect(404)
            .then(response => {
                expect(response.statusCode)
                    .toEqual(404)
            })
    })
})
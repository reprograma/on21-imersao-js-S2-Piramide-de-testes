const request = require('supertest');
const ApiURL = "https://servicodados.ibge.gov.br/api/v1/localidades/"


describe ("GET /municipios/{municipio}", () => {
    test("Deve retornar o status 200 e localizar a cidade de Petrolina-PE ❤️🌵", () => {
        request(ApiURL)
        .get("/municipios/petrolina")
        .expect(200)
        .then(response => {
            expect(response.body.nome).toEqual("Petrolina")
        })
    })
    test("Deve retornar o status 404 ao passar os parâmetros da URL errado", () => {
        request(ApiURL)
        .get("/petrolina")
        .expect(404)
        .then(response => {
            expect(response.statusCode).toEqual(404)
        })
    })
})

describe ("GET /estados{UF}", () => {
    test("Deve retornar o status 200 e localizar o estado de Pernambuco ❤️", () => {
        request(ApiURL)
        .get("/estados/PE")
        .expect(200)
        .then(response => {
            expect(response.body.nome).toEqual("Pernambuco")
        })
    })
    test("Deve retornar o status 404 ao passar os parâmetros da URL errado", () => {
        request(ApiURL)
        .get("/estados/PE/PE")
        .expect(404)
        .then(response => {
            expect(response.statusCode).toEqual(404)
        })
    })
})

describe ("GET /regioes/{macrorregiao}", () => {
    test("Deve retornar o status 200 e localizar a região Nordeste", () => {
        request(ApiURL)
        .get("/regioes/NE")
        .expect(200)
        .then(response => {
            expect(response.body.nome).toEqual("Nordeste")
        })
    })
    test("Deve retornar o status 404 ao passar os parâmetros da URL errado que vai retornar uma array vazio", () => {
        request(ApiURL)
        .get("/regioes/Nordeste")
        .expect(200)
        .then(response => {
            expect(response.body).toEqual([])
        })
    })
})


describe ("GET /paises", () => {
    test("Deve retornar o status 200 o Brasil", () => {
        request(ApiURL)
        .get("/paises")
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"nome":"Brasil"})]))
        })
    })
    test("Deve retornar o status 404 ao passar os parâmetros da URL errado", () => {
        request(ApiURL)
        .get("/pais")
        .expect(404)
        .then(response => {
            expect(response.statusCode).toEqual(404)
        })
    })
})
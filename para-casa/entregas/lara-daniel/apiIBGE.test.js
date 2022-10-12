const request = require('supertest');
const ApiUrl = "https://servicodados.ibge.gov.br/api/docs/localidades"

describe("GET /api/v1/localidades/estados/{UF}/municipios", () => {
    test("deve retornar 200 e retornar o UF Rio de Janeiro", () => {
        request(ApiUrl)
            .get("/api/v1/localidades/estados/33/municipios")
            .expect(200)
            .then(response => {
                expect(response).toEqual("Rio de Janeiro")
            })
    })

    test("Passando um identificador inválido, deve retornar status code 404", () => {
        request(ApiUrl)
            .get("/api/v1/localidades/estados/x/municipios")
            .expect(404)
            .then(response => {
                expect(response.statusCode).toEqual(404)
            })
    })
})

describe("GET /api/v1/localidades/municipios/{id}", () => {
    test("Deve retornar nome do município Presidente Prudente", () => {
        request(ApiUrl)
        .get("/api/v1/localidades/municipios/3541406")
        .expect(200)
        .then(response =>{
            expect(response.body.nome).toEqual("Presidente Prudente")
        })
    })
})

describe("GET /api/v1/localidades/microrregioes/13007", () => {
    test("Deve retornar nome mesorregião Centro Amazonense", () => {
        request(ApiUrl)
        .get("/api/v1/localidades/microrregioes/13007")
        .expect(200)
        .then(response =>{
            expect(response.body.mesorregiao.nome).toMatch("Centro Amazonense")
        })
    })
})

describe("GET /api/v1/localidades/regioes/{macrorregião}", () => {
    test("Deve retornar a sigla da NE", () => {
        request(ApiUrl)
        .get("/api/v1/localidades/regioes/2")
        .expect(200)
        .then(response => {
            expect(response.body.sigla).toEqual("NE")
        })
    })

    test("Deve retornar erro 404 ao passar id inválido", () => {
        request(ApiUrl)
        .get("/api/v1/localidades/regioes/7")
        .expect(404)
        .then(response => {
            expect(response.statusCode).toEqual(404)
        })
    })
})
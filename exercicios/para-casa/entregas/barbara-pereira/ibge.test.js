const request = require('supertest');
const ApiUrl = "https://servicodados.ibge.gov.br/api/v1"

describe("teste do GET /localidades/", () => {
    test("deve retornar 200 e encontrar boby[0] andamantina", async () => {
        await request(ApiUrl)
            .get('/localidades/estados/sp/distritos/')
            .expect(200)
            .then(response => {
                expect(response.body[0].nome).toEqual('Adamantina')
            })
    })
    test("deve retornar 404", async () => {
        await request(ApiUrl)
            .get('/localidades/estados/sp/distrit')
            .expect(404)
            .then(response => {
                expect(response.statusCode).toEqual(404)
            })
    })
    test("deve retornar 404 e encontrar boby[0] andamantina", async () => {
        await request(ApiUrl)
            .get('/localidades/estados/sp/distritl')
            .expect(404)
            .then(response => {
                expect(response.statusCode).toEqual(404)
            })
    })
    test("deve retornar 200 e encontrar Sudeste", async () => {
        await request(ApiUrl)
            .get('/localidades/regioes/3')
            .expect(200)
            .then(response => {
                expect(response.body.nome).toEqual('Sudeste')
            })
    })
    test("deve retornar 404", async () => {
        await request(ApiUrl)
            .get('/localidades/regiao/3')
            .expect(404)
            .then(response => {
                expect(response.statusCode).toEqual(404)
            })
    })
    test("deve retornar 200 e encontrar região", async () => {
        const estadoPara = () => expect.arrayContaining([expect.objectContaining({ nome: "Pará" })])
        const municipioAnanindeua = estadoPara([expect.objectContaining({ nome: "Ananindeua" })])
        
        await request(ApiUrl)
            .get('/localidades/estados/')
            .expect(200)
            .then(response => {
                expect(response.body).toEqual(municipioAnanindeua)
            })
    })
    test("deve retornar 404", async () => {
        const estadoPara = () => expect.arrayContaining([expect.objectContaining({ nome: "Pará" })])
        const municipioAnanindeua = estadoPara([expect.objectContaining({ nome: "Ananindeua" })])
        
        await request(ApiUrl)
            .get('/localidades/estado/')
            .expect(404)
            .then(response => {
                expect(response.statusCode).toEqual(404)
            })
    })
    test("deve retornar 200 e encontrar informações cidade São Paulo", async () => {
        await request(ApiUrl)
            .get('/localidades/municipios/3550308/')
            .expect(200)
            .then(response => {
                expect(response.body.nome).toEqual('São Paulo')
            })
    })
    test("deve retornar 404", async () => {
        await request(ApiUrl)
            .get('/localidades/municipio/3550')
            .expect(404)
            .then(response => {
                expect(response.statusCode).toEqual(404)
            })
    })
    test("deve retornar 200 e encontrar informações da regioes imediatas Barbacena", async () => {
        await request(ApiUrl)
            .get('/localidades/regioes-imediatas/310037/')
            .expect(200)
            .then(response => {
                expect(response.body.nome).toEqual('Barbacena')
            })
    })

    test("deve retornar [] quando for id errado", async () => {
        await request(ApiUrl)
            .get('/localidades/distritos/000/')
            .expect(200)
            .then(response => {
                expect(response.body).toEqual([])
            })
    })
})
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
    test("deve retornar 200 e encontrar Sudeste", async () => {
        await request(ApiUrl)
            .get('/localidades/regioes/3')
            .expect(200)
            .then(response => {
                expect(response.body.nome).toEqual('Sudeste')
            })
    })
    test("deve retornar 200 e entrotar informações cidade São Paulo", async () => {
        await request(ApiUrl)
            .get('/localidades/municipios/3550308/')
            .expect(200)
            .then(response => {
                expect(response.body.nome).toEqual('São Paulo')
            })
    })
    test("deve retornar 200 e entrotar informações da regioes imediatas Barbacena", async () => {
        await request(ApiUrl)
            .get('/localidades/regioes-imediatas/310037/')
            .expect(200)
            .then(response => {
                expect(response.body.nome).toEqual('Barbacena')
            })
    })

    test("deve retornar 200 e entrotar informações da cidade itaquaquecetuba", async () => {
        await request(ApiUrl)
            .get('/localidades/distritos/352310705/')
            .expect(200)
            .then(response => {
                expect(response.body[0].municipio.microrregiao.nome).toEqual('Mogi das Cruzes')
            })
    })
})
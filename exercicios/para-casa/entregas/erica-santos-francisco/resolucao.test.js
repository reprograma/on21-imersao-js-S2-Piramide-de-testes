const request = require('supertest');
const ApiUrl = "https://servicodados.ibge.gov.br/api/v1";

describe("testar ", () => {
    test("deve retornar 200 e informacoes de Adamantina", async() => {
        await request(ApiUrl)
            .get('/localidades/municipios/3500105')
            .expect(200)
            .then(response => {
                expect(response.body.nome).toEqual('Adamantina')
            })
    })

    test("deve retornar 200 e encontrar Sudeste", async() => {
        await request(ApiUrl)
            .get('/localidades/regioes/3')
            .expect(200)
            .then(response => {
                expect(response.body.nome).toEqual('Sudeste')
            })
    })

    test("deve retornar 200 e indefinido", async() => {
        await request(ApiUrl)
            .get('/localidades/regioes/8')
            .expect(200)
            .then(response => {
                expect(response.body.nome).toBeUndefined()
            })
    })

    test("deve retornar 200 e entrotar informações da regioes imediatas de Barbacena", async () => {
        await request(ApiUrl)
            .get('/localidades/regioes-imediatas/310037')
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

    test("deve retornar 200 e o estado do Maranhão", async () => {
        await request(ApiUrl)
            .get('/localidades/estados/	21')
            .expect(200)
            .then(response => {
                expect(response.body.nome).toEqual('Maranhão')
            })
    })
})

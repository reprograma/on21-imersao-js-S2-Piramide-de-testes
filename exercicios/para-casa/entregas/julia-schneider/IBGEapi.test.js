const request = require('supertest');

const api = ("https://servicodados.ibge.gov.br/api/v1/localidades/estados");

describe("Teste de API do IBGE", () => {
    test("Retorna a cidade Curitiba", () => {
        request(api)
            .get("/estados/41/cidades")
            .expect(200)
            .then(response => {
                expect(response.body[0].nome).toEqual('Curitiba')
            })

    })

    test('Retorna a Região Centro Oeste', () => {
        request(api)
            .get('/regioes/5')
            .expect(200)
            .then(response => {
                expect(response.body[0].nome).toEqual('Centro Oeste')
            })
    })

    test('Retorna o País Itália', () => {
        request(api)
            .get('/paises/380')
            .expect(200)
            .then(response => {
                expect(response.body[0].nome).toEqual("Itália")
            })
    })

    test('Retorna 404', () => {
        return request(api)
            .get('/api/v1/localidades')
            .expect(404)
            .then(response => {
                expect(response.statusCode).toEqual(404)
            })
    })
})
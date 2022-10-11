const request = require('supertest');
const apiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades"

describe('GET /localidades/', () => {
    test("deve retornar 200 e encontrar Angra dos Reis", async () => {
        await request(apiUrl)
        .get('/estados/rj/distritos/')
        .expect(200)
        .then(response => {
            expect(response.body[0].nome).toEqual('Angra dos Reis')
        })
    })
    test("deve retornar 200 e encontrar Nordeste", async () => {
        await request(apiUrl)
        .get('/regioes/2')
        .expect(200)
        .then(response => {
            expect(response.body.nome).toEqual('Nordeste')
        })
    })
    test("deve retornar 200 e encontrar informações da cidade de São Paulo", async () => {
        await request(apiUrl)
        .get('/municipios/3550308/')
        .expect(200)
        .then(response => {
            expect(response.body.nome).toEqual('São Paulo')
        })
    })
    test("deve retornar 200 e encontrar informações da região imediatas Belo Horizonte", async () => {
        await request(apiUrl)
        .get('/regioes-imediatas/310001/')
        .expect(200)
        .then(response => {
            expect(response.body.nome).toEqual('Belo Horizonte')
        })
    })
    test("deve retornar 200 e encontrar informações da cidade Mogi das Cruzes", async () => {
        await request(apiUrl)
        .get('/distritos/352310705/')
        .expect(200)
        .then(response => {
            expect(response.body[0].municipio.microrregiao.nome).toEqual('Mogi das Cruzes')
        })
    })
    test('verifica se São José dos Campos não é está localizado na região Sul', async () => {
        const região = expect.arrayContaining([
            expect.objectContaining({
                "nome": "São José dos Campos"
            })
        ])
        await request(apiUrl)
        .get('/regioes/4')
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(expect.not.objectContaining(região))
        })
    })
    test('deve retornar 404 ao digitar parâmetro da url incorreta', async () => {
        await request(apiUrl)
        .get('/estado')
        .expect(404)
        .then(response => {
            expect(response.statusCode).toEqual(404)
        })
    })
    test('deve retornar array vazio quando for id inexistente', async () => {
        await request(apiUrl)
        .get('/distritos/000/')
        .expect(200)
        .then(response => {
            expect(response.body).toEqual([])
        })
    }) 
})
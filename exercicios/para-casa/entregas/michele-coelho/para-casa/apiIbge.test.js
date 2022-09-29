const request = require('supertest')
const ApiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades"

describe('Consultando Api do IBGE', () => {
    test('Retorna o nome da cidade Angra dos Reis ', () => {
        return request(ApiUrl)
            .get('/estados/33/distritos')
            .expect(200)
            .then(response => {
                expect(response.body[0].nome).toEqual("Angra dos Reis")
            })
    })

    test('Retorna a cidade Abreu e Lima', () => {
        request(ApiUrl)
            .get('/estados/PE/distritos')
            .expect(200)
            .then(response => {
                expect(response.body[0].nome).toEqual('Abreu e Lima')
            })
    })

    test('Retorna o nome do país, Brasil ', () => {
        request(ApiUrl)
            .get('/paises/76')
            .expect(200)
            .then(response => {
                expect(response.body[0].nome).toEqual("Brasil")
            })
    })

    test('Retornar a região Nordeste', () => {
        return request(ApiUrl)
            .get('/regioes/2')
            .expect(200)
            .then(response => {
                expect(response.body.nome).toEqual("Nordeste")
            })
    })
})

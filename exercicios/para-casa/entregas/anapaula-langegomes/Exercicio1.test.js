//Cenários de teste - API IBGE

const request = require('supertest')
const Api_Url = "https://servicodados.ibge.gov.br/api/v1/localidades"

describe('Consultando Api do IBGE', () => {
    test('Retorna o nome da cidade Curitiba', ()) => {
        return request(Api_Url)
            .get('/estados/33/distritos')
            .expect(200)
            .then(response => {
                expect(response.body[0].nome).toEqual("Curitiba")
            })
    
        })

    test('Retorna a cidade Angra dos Reis', () => {
        request(Api_Url)
            .get('/estados/RJ/distritos')
            .expect(200)
            .then(response => {
                expect(response.body[0].nome).toEqual('Angra dos Reis')
            })
    })

    test('Retornar a região Sudeste', () => {
        return request(Api_Url)
            .get('/regioes/4')
            .expect(200)
            .then(response => {
                expect(response.body.nome).toEqual("Sudeste")
            })
    })

    test('Retorna o nome do país, Brasil ', () => {
        request(Api_Url)
            .get('/paises/76')
            .expect(200)
            .then(response => {
                expect(response.body[0].nome).toEqual("Brasil")
            })
    })

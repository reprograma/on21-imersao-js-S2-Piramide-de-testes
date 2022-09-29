//Cenários de teste - API IBGE

const request = require('supertest')
const Api_Url = "https://servicodados.ibge.gov.br/api/v1/localidades"

describe('Consultando Api do IBGE', () => {
    test('Retorna o nome da cidade Curitiba', () => {
        return request(Api_Url)
            .get('/estados/28/distritos')
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

    test('Retorna o nome do país, Brasil ', () => {
        request(Api_Url)
            .get('/paises/76')
            .expect(200)
            .then(response => {
                expect(response.body[0].nome).toEqual("Brasil")
        })
    })

    test('Retorna 404', () => {
        return request(Api_Url)
            .get('/api/v1/localidade')
            .expect(404)
            .then(response => {
                expect(response.statusCode).toEqual(404)
        })
    })
})

    
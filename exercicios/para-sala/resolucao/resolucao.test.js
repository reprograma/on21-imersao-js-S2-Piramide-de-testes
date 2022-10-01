const request = require('supertest')
const ApiUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades'

describe('GET/regioes/1', () => {
    test('Retorna 200 quando buscar pelo municipio de Ananindeua', () => {

        const estadoPara = () => expect.arrayContaining([expect.objectContaining({ "nome": "Pará" })])
        const municipioAnanindeua = estadoPara([expect.objectContaining({ "nome": "Ananindeua" })])
        return request(ApiUrl)

            .get('/estados')
            .expect(200)
            .then(response => {
                expect(response.body).toEqual(municipioAnanindeua)
            })
    })

})
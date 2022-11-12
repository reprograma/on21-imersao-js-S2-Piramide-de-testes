const request = require('supertest')
const ApiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades"

describe('GET /estados', () => {
    test('retorna 200 quando buscar pelo municipio de Ananindeua', () => {
        const estadoPara = () => expect.arrayContaining([expect.objectContaining({"nome": "Pará"})])
        const municipioAnanindeua = estadoPara([expect.objectContaining({"nome": "Ananindeua"})])

        request(ApiUrl)
            .get('/estados')
            .expect(200)
            .then(response => {
                expect(response.body).toEqual(municipioAnanindeua)     
             })
    })
})
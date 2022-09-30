const request = require('supertest')
const ApiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades"

describe('GET /estados', () => {

    test('retorna 200 ao buscar pelo estado do Pará', () => {
        const estadoPara  = expect.arrayContaining([expect.objectContaining({ "nome": "Pará" })])

        request(ApiUrl)
            .get('/estados')
            .expect(200)
            .then(response => {
                expect(response.body.name).toEqual(estadoPara)
            })
    })
    
    test('retorna 200 quando buscar pelo município de Ananindeua', () => {
        const estadoPara = () => expect.arrayContaining([expect.objectContaining({ "nome": "Pará" })])
        const municipioAnanindeua = estadoPara([expect.objectContaining({ "nome": "Ananindeua" })])

        request(ApiUrl)
            .get('/estados')
            .expect(200)
            .then(response => {
                expect(response.body).toEqual(municipioAnanindeua)
            })
    })

    test('retorna 404 ao tentar buscar uma url inexistente', () => {

        request(ApiUrl)
            .get('/estados/25/municipio') //atenção aqui para o erro de digitação, coloqueio 'município' no singular de propósito
            .expect(404)
            .then(response => {
                expect(response.notFound)
            })
    })

    test('retorna vazio ao tentar buscar um estado inexistente', () => {

        request(ApiUrl)
            .get('/estados/100') //atenção aqui para o erro de digitação, coloqueio 'município' no singular de propósito
            .expect(200)
            .then(response => {
                expect(response.body).toEqual([])
            })
    })
})

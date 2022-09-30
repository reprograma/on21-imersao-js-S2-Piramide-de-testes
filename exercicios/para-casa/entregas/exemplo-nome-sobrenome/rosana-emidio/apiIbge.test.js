const request = require('supertest')
const ApiUrl = "https://servicodados.ibge.gov.br/api/docs/localidades"

describe('GET /regioes', () => {
    
    test('deve retornar 200 quando buscar pelo municipio de Ananindeua', () => {
        const estadoPara = () => expect.arrayContaining([expect.objectContaining({ "nome": "Pará" })])
        const municipioAnanindeua = estadoPara([expect.objectContaining({ "nome":"Ananindeua" })])

        request(ApiUrl)
            .get('/estados')
            .expect(200)
            .then(response => {
                expect(response.body).toEqual(municipioAnanindeua)
            })
    })

    test("deve retornar 200 id:290010805", () => {
        request (ApiUrl)
            .get("/distritos/BA")
            .expect(200)
            .then (response =>{
                expect((response.body[0].id)).toEqual(290010805)

            })
    })
})



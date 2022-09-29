//atividade de caSA

const request = require('supertest')
const ApiUrl = "https://servicodados.ibge.gov.br/api/docs/localidades"

describe('GET /estados', () => {
    //essa url https://servicodados.ibge.gov.br/api/v1/localidades/estados 
    //Query Builder da pagina gera a url
    

    test('retorna 200 quando buscar pelo municipio de Ananindeua', () => {
        const estadoPara = () => expect.arrayContaining([expect.objectContaining({ "nome": "Pará" })])
        const municipioAnanindeua = estadoPara([expect.objectContaining({ "nome":"Ananindeua" })])

        request(ApiUrl)
            .get('/estados')//Aqui pode ser endpoint PA e retirar a consta estado para
            .expect(200)
            .then(response => {
                expect(response.body).toEqual(municipioAnanindeua)
            })
    })
})

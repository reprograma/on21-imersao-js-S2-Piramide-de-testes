const request = require('supertest');
const ApiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades";

describe('deve retornar informações do IBGE', () => {
    
    test('deve retornar o estado Rio grande do Norte', () => {
        const estadoRn = () => expect.arrayContaining([expect.objectContaining({ "nome": "Rio Grande do Norte" })])

        request(ApiUrl)
            .get('/estados')
            .expect(200)
            .then(response => {
                expect(response.body).toEqual(estadoRn)
            })
    })

    test('deve retornar 200 ao pesquisar o distrito', () => {
        request (ApiUrl)
            .get("/distritos/RN")
            .expect(200)
            .then (response =>{
                expect((response.body[0].nome)).toEqual('Água Nova')
            })
    })

    test('deve retornar 200 quando buscar pelo municipio de Alexandria', () => {
        const estadoRn = () => expect.arrayContaining([expect.objectContaining({ "nome": "Rio Grande do Norte" })])
        const municipioAlexandria = estadoRn([expect.objectContaining({ "nome":"Alexandria" })])

        request(ApiUrl)
            .get('/estados')
            .expect(200)
            .then(response => {
                expect(response.body).toEqual(municipioAlexandria)
            })
    })

    test('Deve retornar a região sudeste', () => {
     request(ApiUrl)
     .get('/regioes?orderBy=nome')
     .expect(200)
     .then(response =>{
        expect(response.body[3].nome).toEqual('Sudeste')
     })
    })

    test("Deve retornar 404 ao passar id inválido", () => {
        request(ApiUrl)
        .get("/api/v1/localidades/regioes/404")
        .expect(404)
        .then(response => {
            expect(response.statusCode).toEqual(404)
        })
    })

})
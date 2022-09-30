
const request = require('supertest')
const ApiUrl = "https://servicodados.ibge.gov.br/api/docs/localidades"

describe('Informações do IBGE', () => {
    
    test('deve retornar 200 quando buscar pelo municipio de Beberibe', () => {
        const estadoCeara = () => expect.arrayContaining([expect.objectContaining({ "nome": "Ceará" })])
        const municipioBeberibe = estadoCeara([expect.objectContaining({ "nome":"Beberibe" })])

        request(ApiUrl)
            .get('/estados')
            .expect(200)
            .then(response => {
                expect(response.body).toEqual(municipioBeberibe)
            })
    })

    test('deve retornar 200 ao pesquisar o id 355030801', () => {
        request (ApiUrl)
            .get("/distritos/SP")
            .expect(200)
            .then (response =>{
                expect((response.body[0].id)).toEqual(355030801)
            })
    })

    test('deve retornar 200 quando buscar distrito do Jardim Ângela', () => {
        const jardimAngela = () => expect.arrayContaining([expect.objectContaining({ "nome": "Jardim Ângela" })])

        request(ApiUrl)
            .get('/municipios/3550308/distritos')
            .expect(200)
            .then(response => {
                expect(response.body).toEqual(jardimAngela)
            })
    })

    test('Deve retornar a região nordeste', () => {
     request(ApiUrl)
     .get('/regioes?orderBy=nome')
     .expect(200)
     .then(response =>{
        expect(response.body[1].nome).toEqual('Nordeste')
     })
    })

})


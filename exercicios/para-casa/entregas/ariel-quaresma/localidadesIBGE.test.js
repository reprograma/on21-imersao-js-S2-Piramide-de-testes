const request = require('supertest');
const ApiUrl = "https://servicodados.ibge.gov.br"



describe("GET/estados/PI", () =>{
    test("it checks if we can get UF of PI by id, should return id 22", () => {

        request(ApiUrl)
        .get('/api/v1/localidades/estados/22')
        .expect(200)
        .then(response => {
            expect(response.body.id).toEqual(22)
        })
    })

    test("it checks if get a empty array with an invalid id", () => {
        request(ApiUrl)
        .get('/api/v1/localidades/estados/700')
        .expect(200)
        .then(response => {
            expect(response.body).toEqual([])
        })
    })

    test("it checks if there's the NE region in the result of PI UF", () => {
        request(ApiUrl)
        .get('/api/v1/localidades/estados/22')
        .expect(200)
        .then(response => {
            expect(response.body.regiao.sigla).toEqual("NE")
        })
    })

    test("it checks if there's the name:Piauí in array of all UFs", () => {
        
        request(ApiUrl)
        .get('/api/v1/localidades/estados')
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"nome": "Piauí"})]))
        })
    })

    test("it checks if there's a city named Teresina containing in UF array", () => {
        request(ApiUrl)
        .get('/api/v1/localidades/estados/22/municipios')
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"nome":"Teresina"})]))
        })
    })

    test("it checks if a id city not containing in UR array will back a empty array", () => {
        request(ApiUrl)
        .get('/api/v1/localidades/estados/22/municipios')
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(expect.not.arrayContaining([{"id":4}]))
        })
    })
})
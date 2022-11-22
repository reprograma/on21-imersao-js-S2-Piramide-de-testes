const request = require('supertest');
const ApiUrl = "https://ghibliapi.herokuapp.com"

describe("GET /films/{id}", () => {
    test("deve retornar 200 e encontrar o filme Castle in the Sky na lista", () => {
        request(ApiUrl)
            .get("/films/2baf70d1-42bb-4437-b551-e5fed5a87abe")
            .expect(200)
            .then(response => {
                expect(response.body.title).toEqual("Castle in the Sky")
            })
    })
    test("deve retornar 404 ao passar um id inválido", () => {
        request(ApiUrl)
            .get("/films/000")
            .expect(404)
            .then(response => {
                expect(response.statusCode).toEqual(404)
            })
    })
})

describe("Get /people" ,()=> {

    test("deve retornar 200 e encontrar a personagem Chihiro", ()=> {
        const variavel = {"name":"Chihiro Ogino"}
        const resultado = (expect.arrayContaining([expect.objectContaining(variavel)]))
        request (ApiUrl)
            .get("/people")
            .expect(200)
            .then (response =>{
                expect((response.body)).toEqual(resultado)
            })
    })

    test("deve retornar 200 e encontrar a personagem Ashitaka", ()=> {
        const variavel = {"name": "Ashitaka"}
        const resultado = (expect.arrayContaining([expect.objectContaining(variavel)]))
        request (ApiUrl)
            .get("/people")
            .expect(200)
            .then (response =>{
                expect((response.body)).toEqual(resultado)
            })
    })
})

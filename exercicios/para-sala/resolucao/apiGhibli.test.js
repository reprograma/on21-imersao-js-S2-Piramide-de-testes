const request = require('supertest');
const ApiUrl = "https://ghibliapi.herokuapp.com";

describe("GET /films/{id}", () => {
    test("deve retornar o filme meu amigo totoro", () => {
        return request(ApiUrl)
            .get("/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49")
            .expect(200)
            .then(response => {
                expect(response.body.title).toEqual("My Neighbor Totoro")
            })
    })

    test("deve retornar 200 o filme Grave of the Fireflies", () => {
        return request(ApiUrl)
            .get("/films/12cfb892-aac0-4c5b-94af-521852e46d6a")
            .expect(200)
            .then(response => {
                expect(response.body.title).toEqual("Grave of the Fireflies")
            })
    })

    test("deve retornar 404  o filme Grave of the Fireflies", () => {
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
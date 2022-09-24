const request = require('supertest');
const ApiUrl = "https://ghibliapi.herokuapp.com";

describe("GET /films/{id}", () => {
    // indica qual vai ser o caminho da API. testa o cenário possível 
    test("deve retornar 200 e  o filme 'Meu amigo Totoro'", () => {
        return request(ApiUrl)
            .get("/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49")
            // id do filme
            .expect(200)
            .then(response => {
                expect(response.body.title).toEqual("My Neighbor Totoro")
            })
    })

    test("deve retornar 404 ao passaar um id inválido", () => {
        request(ApiUrl)
        .get("./films/000")
        .expect(404)
        .then(response => {
            expect(response.statusCode).toEqual(404)
            // estatus do código
        })
    })
    // não precisa usar return
})

describe("GET /people", () => {
    test("deve retornar 200 e encontrar a personagem Chiriro", () => {
        request(ApiUrl)
        .get("/people")
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"name":"Chihiro Ogino"})]))
        })
    })
})
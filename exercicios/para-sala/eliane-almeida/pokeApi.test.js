const request = require('supertest');
const ApiUrl = "https://pokeapi.co";

describe("GET /api/v2/pokemon", () => {
    test("deve retornar a lista pokemons", () => {
        return request(ApiUrl)
            .get("/api/v2/pokemon/charmander")
            .expect(200)
            .then(response => {
                expect(response.body.name).toEqual("charmander")
            })
    })

    test("Deve esperar status code 404 e retornar undefined ou passar o nomede um pokemon invalido", () => {
        return request(ApiUrl)
            .get("/api/v2/pokemon/banana")
            .expect(404)
            .then(response => {
                expect(response.body.name).toEqual(undefined)
            })
    })
})
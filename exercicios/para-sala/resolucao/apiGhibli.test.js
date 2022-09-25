const request = require('supertest');
const ApiUrl = "https://ghibliapi.herokuapp.com";

describe("GET /films/{id}", () => { // nome e rota
    test("deve retornar o filme meu amigo totoro", () => {
        return request(ApiUrl)
            .get("/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49")
            .expect(200)
            .then(response => {
                expect(response.body.title).toEqual("My Neighbor Totoro")
            })
    })
})


describe("GET /films/{id}", () => { // nome e rota
    // happy path
    test("deve retornar Status 200 e o filme Castle in the Sky", () => {
        return request(ApiUrl) // retorna a requisição da API para o teste, return näo é obrigatorio, mas é uma boa prática.
            .get("/films/2baf70d1-42bb-4437-b551-e5fed5a87abe") // rota da API
            .expect(200) // espera o status 200
            .then(response => {
                expect(response.body.title).toEqual("Castle in the Sky") // o body da resposta deve ter o título igual ao colocado que foi passado no id, mas pode ser trocado o endpoint para outro dado do filme
            })
    })
    // unhappy path
    test("deve retornar Status 404 e o filme não encontrado", () => {
        request(ApiUrl)
            .get("/films/2baf70d1-42bb-4437-b551-e5fed5a87ab") // id do filme não existe
            .expect(404)
            .then(response => {
                expect(response.statusCode).toEqual(404) // o body da resposta deve ter o título igual ao colocado que foi passado no id, mas pode ser trocado o endpoint para outro dado do filme
                expect(response.body).toEqual({}) // o body da resposta deve ter o título igual ao colocado que foi passado no id, mas pode ser trocado o endpoint para outro dado do filme
            })
    })
})
describe(" GET /people", () => {
    test("Deve retornar 200 e quero buscar o personagem com o nome de chirino", () => {
        request(ApiUrl)
            .get("/people")
            .expect(200)
            .then(response => {
                expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({ "name": "Chihiro Ogino"})])) // verificar se o array contem o nome do personagem
            })

    })
})


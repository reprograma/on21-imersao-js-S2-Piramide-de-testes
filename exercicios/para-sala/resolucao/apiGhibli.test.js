//Importar para o arquivo o supertest e a url da API que será utilizada
//Lembrar de puxar o caminho feliz e o caminho triste também

const request = require('supertest');
const ApiUrl = "https://ghibliapi.herokuapp.com"

//Na descrição de utilização de APIs geralmente colocamos o método e a rota que iremos
//puxar para testar
describe("GET /films/{id}", () => {
    test("deve retornar 200 e encontrar o filme Castle in the Sky na lista", () => {
        //Primeiro, chamar a const que recebeu a url da API, depois o método que será testado
        //com o seu parâmetro (no caso, com o ID), depois um expect com o 200 (dentro das 200 opções que a api fornece)
        //e no then seria a resposta, com a estrutura expect do jest/testes unitários
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

describe("GET /people", () => {
    test("deve retornar 200 e encontrar a personagem Chihiro", () => {
        
        request(ApiUrl)
            .get("/people")
            .expect(200)
            .then(response => {
                expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"name": "Chihiro Ogino"})]))
            })
    })
})
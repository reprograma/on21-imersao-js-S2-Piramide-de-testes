const request = require('supertest');
const ApiUrl = "https://servicodados.ibge.gov.br/api/docs/localidades"

describe("GET /distrito/{id}", () => {
    test("deve retornar 200 e encontrar o filme Castle in the Sky na lista", () => {
        request(ApiUrl)
            .get("/distrito/2baf70d1-42bb-4437-b551-e5fed5a87abe")
            .expect(200)
            .then(response => {
                expect(response.body.title).toEqual("Castle in the Sky")
            })
    })
    
})

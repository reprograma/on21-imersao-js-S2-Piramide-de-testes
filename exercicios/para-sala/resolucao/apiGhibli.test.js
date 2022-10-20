const request = require('supertest');
const ApiUrl = "https://ghibliapi.herokuapp.com"

describe("GET /films/{id}", () => {
    beforeEach(() => {
        request(ApiUrl)
    })
    test("Should return My Neighbor Totoro film", () => {
        request(ApiUrl)
            .get("/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49")
            .expect(200)
            .then(response => {
                expect(response.body.title).toEqual("My Neighbor Totoro")
            })
    })
    test("Should return 404 if an invalid id is provided", () => {
        request(ApiUrl)
            .get("/films/58611129-77ddfc1b1b00")
            .expect(404)
            .then(response => {
                expect(response.statusCode).toEqual(404)
            })
    })
})

describe("GET /people", () => {
    test("Should return 200 and find Chihiro character", () => {
        request(ApiUrl)
            .get("/people")
            .expect(200)
            .then(response => {
                expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"name": "Chihiro Ogino"})]))
            })
    })
})

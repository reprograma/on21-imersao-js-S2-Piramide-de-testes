const request = require("supertest");
const ApiUrl = "https://ghibliapi.herokuapp.com";

describe("GET /films/{id}", () => {
  test("deve retornar o filme meu amigo totoro", () => {
    return request(ApiUrl)
      .get("/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49")
      .expect(200)
      .then((response) => {
        expect(response.body.title).toEqual("My Neighbor Totoro");
      });
  });
});

describe("GET /people", () => {
  test("deve retornar o filme meu amigo totoro", () => {
    return request(ApiUrl)
      .get("/people")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ name: "Chihiro Oginooo" }),
          ])
        );
      });
  });
});

const request = require("supertest");
const ApiUrl = "https://ghibliapi.herokuapp.com";

describe("GET Api Ghibli", () => {
  test("deve retornar o filme meu amigo totoro", () => {
    request(ApiUrl)
      .get("/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49")
      .expect(200)
      .then((response) => {
        expect(response.body.title).toEqual("My Neighbor Totoro");
      });
  });

  test("deve retornar 404 ao passar um id inválido", () => {
    request(ApiUrl)
      .get("/films/0")
      .expect(404)
      .then((response) => {
        expect(response.statusCode).toEqual(404);
      });
  });

  test("deve retornar 200 e encontrar a personagem Chihiro", () => {
    request(ApiUrl)
      .get("/people")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ name: "Chihiro Ogino" }),
          ])
        );
      });
  });

  test("deve retornar a classificação Mammal", () => {
    request(ApiUrl)
      .get("/species/603428ba-8a86-4b0b-a9f1-65df6abef3d3")
      .expect(200)
      .then((response) => {
        expect(response.body.classification).toEqual("Mammal");
      });
  });
});

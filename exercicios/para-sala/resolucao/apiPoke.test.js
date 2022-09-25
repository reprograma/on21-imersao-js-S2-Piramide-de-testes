const request = require("supertest");
var api = request("https://pokeapi.co/api/v2");

describe("GET Pokemon/Personagens", () => {
  test("Deve retornar o nome do personagem ditto", () => {
    api
      .get("/pokemon/ditto/")
      .expect(200)
      .then((response) => {
        expect(response.body.name).toEqual("ditto");
      });
  });
  test("deve retornar a altura do personagem rattata", () => {
    api
      .get("/pokemon/rattata/")
      .expect(200)
      .then((response) => {
        expect(response.body.height).toEqual(3);
      });
  });
  test("deve retornar o id do personagem pikachu", () => {
    api
      .get("/pokemon/pikachu/")
      .expect(200)
      .then((response) => {
        expect(response.body.id).toEqual(25);
      });
  });
  test("deve retornar erro 404 caso seja um personagem inválido", () => {
    api.get("pokemon/banana/").expect(404);
  });
});

describe("GET Locations", () => {
  test("Mostrar nome da cidade com id 14 ravaged-path", () => {
    return api
      .get("/location/14")
      .expect(200)
      .then((response) => {
        expect(response.body.name).toEqual("ravaged-path");
      });
  });

  test("Mostrar nome da região da cidade de canalave-city", () => {
    return api
      .get("/location/1")
      .expect(200)
      .then((response) => {
        expect(response.body.region.name).toEqual("sinnoh");
      });
  });
  test("Mostrar a url da região da cidade sinnoh-victory-road", () => {
    return api
      .get("/location/13")
      .expect(200)
      .then((response) => {
        expect(response.body.region.url).toEqual(
          "https://pokeapi.co/api/v2/region/4/"
        );
      });
  });

  test("Deve retornar erro 404 caso seja uma localização inválida", () => {
    return api.get("/location/banana").expect(404);
  });
});

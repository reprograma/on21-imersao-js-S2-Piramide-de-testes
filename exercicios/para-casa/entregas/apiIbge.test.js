const request = require("supertest");
const ApiUrl = "https://servicodados.ibge.gov.br/api/";

describe("GET /estados", () => {
  test("Deve retornar o estado da unidade federativa", () => {
    return request(ApiUrl)
      .get("v1/localidades/estados")
      .expect(200)
      .then((response) => {
        expect(response.body[1].nome).toEqual("Acre");
      });
  });

  test("Deve retornar o país esperado", () => {
    return request(ApiUrl)
      .get("v1/localidades/paises")
      .expect(200)
      .then((response) => {
        expect(response.body[0].nome).toEqual("Afeganistão");
      });
  });

  test("Retorna 404 quando há erro na requisição", async () => {
    await request("https://servicodados.ibge.gov.br/api/v1/localidades")
      .get("/distrito")
      .expect(404)
      .then((response) => {
        expect(response.status).toEqual(404);
      });
  });
  test("Deve retornar o a região esperada", () => {
    return request(ApiUrl)
      .get("v1/localidades/regioes")
      .expect(200)
      .then((response) => {
        expect(response.body[0].nome).toEqual("Norte");
      });
  });
});

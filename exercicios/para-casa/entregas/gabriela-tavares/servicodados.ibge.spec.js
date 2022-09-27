const request = require("supertest");
const urlIbge = "https://servicodados.ibge.gov.br/api/v1";

describe("GET:https://servicodados.ibge.gov.br/api/v1 --> Casos de sucesso", () => {

 it("Deve retornar 200 e encontrar o nome Adamantina do estado de SP", () => {
    request(urlIbge)
      .get("/localidades/estados/sp/distritos/")
      .expect(200)
      .then((response) => {
        expect(response.body[0].nome).toBe("Adamantina");
      });
  });

  it("Deve retornar 200 e encontrar a região 3 que é Sudeste", async () => {
    await request(urlIbge)
      .get("/localidades/regioes/3")
      .expect(200)
      .then((response) => {
        expect(response.body.nome).toEqual("Sudeste");
      });
  });

  test("deve retornar o nome Adamantina do estado de SP", async () => {
    await request(urlIbge)
      .get("/localidades/estados/oi/distritos/")
      .expect(200, [])
      .then((response) => {
        expect(response.status).toEqual(200);
      });
  });

  it("Deve retornar 200 e encontrar o municipio de Águas da Prata pelo id=3500402", async () => {
    await request(urlIbge)
      .get("/localidades/municipios/3500402")
      .expect(200)
      .then((response) => {
        expect(response.body.nome).toEqual("Águas da Prata");
      });
  });

  it("Deve retornar 200 e encontrar a cidade de Avaré", async () => {
    await request(urlIbge)
      .get("/localidades/distritos/350055005/")
      .expect(200)
      .then((response) => {
        expect(response.body[0].municipio.microrregiao.nome).toEqual(
          "Avaré"
        );
      });
  });
});

describe("GET:https://servicodados.ibge.gov.br/api/v1 --> Casos de falha", () => {

  it("Deve retornar o erro 404 quando a url está incorreta",  () => {
    return request(urlIbge)
      .get(`/localidade/estados/sp/distritos/`)
      .expect(404)
      .then((response) => {
        expect(response.statusCode).toEqual(404);
      });
  });

  test("Deve retornar o erro 500 quando informado um parâmetro errado", async () => {
    await request(urlIbge)
      .get("/localidades/estados/{333}/distritos/")
      .expect(500,)
      .then((response) => {
        expect(response.status).toEqual(500);
      });
  });
});

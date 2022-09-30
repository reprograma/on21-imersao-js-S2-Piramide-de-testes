const request = require("supertest");
const apiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades";

describe("GET /regioes", () => {
  
  test("retorna 200 quando busca pelo munícipio de Carangola", async () => {
    const estadoMinasGerais = () =>
      expect.arrayContaining([
        expect.objectContaining({ nome: "Minas Gerais" }),
      ]);
    const municipioCarangola = estadoMinasGerais([
      expect.objectContaining({ nome: "Carangola" }),
    ]);

    await request(apiUrl)
      .get("/estados")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(municipioCarangola);
      });
  });

  test("retorna 200 quando busca pelo munícipio de Ananindeua", async () => {
    const estadoPara = () =>
      expect.arrayContaining([expect.objectContaining({ nome: "Pará" })]);
    const municipioAnanindeua = estadoPara([
      expect.objectContaining({ nome: "Ananindeua" }),
    ]);
    await request(apiUrl)
      .get("/estados")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(municipioAnanindeua);
      });
  });

  test("verifica se Fervedouro não é distrito de Carangola", async () => {
    const distrito = expect.arrayContaining([
      expect.objectContaining({
        nome: "Fervedouro",
      }),
    ]);
    await request(apiUrl)
      .get("/municipios/3113305/distritos")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(expect.not.objectContaining(distrito));
      });
  });

  test("retorna array vazio quando for id não existir", async () => {
    await request(apiUrl)
      .get("/distritos/1")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual([]);
      });
  });

  test("retorna 404 quando há erro na requisição", async () => {
    await request("https://servicodados.ibge.gov.br/api/v1/localidades")
      .get("/distrito")
      .expect(404)
      .then((response) => {
        expect(response.status).toEqual(404);
      });
  });

});

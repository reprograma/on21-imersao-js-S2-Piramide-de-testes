//exercicios feitos pela profa aqui

const request = require("supertest");
const getAPI = "servicodados.ibge.gov.br/api/v1/localidades";
describe("Testando os endpoints da API do IBGE", () => {
  it("o tipo de retorno deveria ser um application/json", () => {
    request(getAPI)
      .get("/municipios/")
      .expect(200)
      .then((response) => expect(response.type).toBe("application/json"));
  });
  it("encontrando o municipio com nome Cacoal na requisição de municipios", () => {
    request(getAPI)
      .get("/municipios/")
      .expect(200)
      .then((response) =>
        expect(response.body).toEqual(
          expect.arrayContaining([expect.objectContaining({ nome: "Cacoal" })])
        )
      );
  });
  it("e encontrando a UF Bahia na requisição de estados", () => {
    request(getAPI)
      .get("/estados/29")
      .expect(200)
      .then((response) => expect(response.body.sigla).toEqual("BA"));
  });
  it("e retornando a Quantidade de estados, além do distrito federal", () => {
    request(getAPI)
      .get("/estados")
      .expect(200)
      .then((response) => expect(response.body).toHaveLength(27));
  });
});

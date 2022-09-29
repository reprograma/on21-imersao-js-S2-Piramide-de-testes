/*
Exercício 1 - API de localidades (IBGE): Teste pelo menos 4 endpoints da API 
de localidades do IBGE, cobrindo caminhos felizes e infelizes. Exercite sua 
autonomia no aprendizado e fique a vontade para usar diferentes matchers do 
jest e acessar diferentes respostas com o supertest.
*/

const request = require("supertest");
const ApiUrl = "https://servicodados.ibge.gov.br/api/v1";

describe("Utilizando API do IBGE", () => {
 
  test("Retorna a informação do Array 6 do distrito do estado de Pernambuco", async () => {
    await request(ApiUrl)
      .get("/localidades/estados/PE/distritos")
      .expect(200)
      .then((response) => {
        expect(response.body[6].nome).toEqual("Poção de Afrânio");
      });
  });


  test("Consulta por ID um distrito de Pernambuco", async () => {
    await request(ApiUrl)
      .get("/localidades/distritos/260030210")
      .expect(200)
      .then((response) => {
        expect(response.body[0].nome).toEqual("Barra do Chata");
      });
  });

 
  test("Consulta de Distritos por mesorregião", async () => {
    await request(ApiUrl)
      .get("/localidades/mesorregioes/1602/distritos")
      .expect(200)
      .then((response) => {
        expect(response.body[0].nome).toEqual("Cutias");
      });
  });

 
  test("Consulta de Distritos por município", async () => {
    await request(ApiUrl)
      .get("/localidades/municipios/2605400/distritos")
      .expect(200)
      .then((response) => {
        expect(response.body[0].nome).toEqual("Feira Nova");
      });
  });

  test("Retorno Microregiao Petrolina", async () => {
    await request(ApiUrl)
      .get("/localidades/estados/PE/distritos")
      .expect(200)
      .then((response) => {
        expect(response.body[3].municipio.microrregiao.nome).toEqual(
          "Petrolina"
        );
      });
  });
});

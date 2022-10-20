const request = require("supertest")
const urlApiIbge = "https://servicodados.ibge.gov.br/api/v1"

describe("GET /estados", () => {
  test("Deve retornar 200 ao buscar o município de Ananindeua", () => {
    const estadoPara = () => expect.arrayContaining([expect.objectContaining({"name": "Chihiro Ogino"})])
    const municipioAnanindeua = estadoPara([expect.objectContaining({ "nome": "Ananindeua"})])
    request(urlApiIbge)
      .get('estados')
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(municipioAnanindeua)
      });
  }); 
})
const request = require('supertest');
const ApiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades";

describe('Testes de endpoints da API do IBGE', () => {
  it('deve retornar o estado de Pernambuco ', () => {
    request(ApiUrl)
    .get("/estados/26")
    .expect(200)
    .then((response) => {
      expect(response.body.nome).toEqual("Pernambuco")
    }) 
  })

  it('encontrando destrito Frade na lista de destritos', () => {
    request(ApiUrl)
    .get("/destritos")
    .expect(200)
    .then((response) => {
      expect(response.body).toContain("Frade")
    })
  })

  it('encontrando o país Camarões na lista de países', () => {
    request(ApiUrl)
    .get("/paises")
    .expect(200)
    .then((response) => {
      expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"name": "Camarões"})]))
    })
  })
 

  it('espera retornar a região do norte', () => {
    request(ApiUrl)
    .get("/regioes/N")
    .expect(200)
    .then((response) => {
      expect(response.body.id).toEqual(1)
    })
  })
  
  
})
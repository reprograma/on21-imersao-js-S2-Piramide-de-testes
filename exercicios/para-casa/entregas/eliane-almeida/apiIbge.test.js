const request = require('supertest');
const ApiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades";

describe("Testar os edpointes da API de localidade do IBGE ", () => {
    describe("GET /distritos/{id}", () => {
        it ("Deve retornar todos dados do distrito de fazendinha", () => {
            request(ApiUrl)
                .get("/distritos/160030312")
                .expect(200)
                .then(response => {
                    expect(response.body).toEqual([{ "id": 160030312, "municipio": { "id": 1600303, "microrregiao": { "id": 16003, "mesorregiao": { "UF": { "id": 16, "nome": "Amapá", "regiao": { "id": 1, "nome": "Norte", "sigla": "N" }, "sigla": "AP" }, "id": 1602, "nome": "Sul do Amapá" }, "nome": "Macapá" }, "nome": "Macapá", "regiao-imediata": { "id": 160001, "nome": "Macapá", "regiao-intermediaria": { "UF": { "id": 16, "nome": "Amapá", "regiao": { "id": 1, "nome": "Norte", "sigla": "N" }, "sigla": "AP" }, "id": 1601, "nome": "Macapá" } } }, "nome": "Fazendinha" }]
                    )
                })
        })

        it ("Deve retornar o distrito de Vitória da Conquista", () => {
            request(ApiUrl)
                .get("/distritos/293330705")
                .expect(200)
                .then(response => {
                    expect(response.body).toEqual(expect.arrayContaining
                        ([expect.objectContaining({ "nome": "Vitória da Conquista" })]))
                })
        })

    })
    describe("GET /estados", () => {
        it ("Deve retornar o estado Amazonas", () => {
            request(ApiUrl)
                .get("/estados")
                .expect(200)
                .then(response => {
                    expect(response.body).toEqual(expect.arrayContaining
                        ([expect.objectContaining({ "nome": "Amazonas" })]))
                })
        })

        it ("Deve retornar s sigla do estado de Goiás", () => {
            request(ApiUrl)
                .get("/estados")
                .expect(200)
                .then(response => {
                    expect(response.body).toEqual(expect.arrayContaining
                        ([expect.objectContaining({ "sigla": "GO" })]))
                })
        })

        it ("Deve retornar o municipio de Barra da Estiva", () => {
            request(ApiUrl)
                .get("/estados/29/municipios")
                .expect(200)
                .then(response => {
                    expect(response.body).toEqual(expect.arrayContaining
                        ([expect.objectContaining({ "nome": "Barra da Estiva" })]))
                })
        })
    })

    describe("GET /paises", () => {
        it('Deve encontrar o país Afeganistão na lista de países', () => {
            request(ApiUrl)
                .get("/paises")
                .expect(200)
                .then((response) => {
                    expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({ "nome": "Afeganistão" })]))
                })
        })
    })

    describe("GET /regioes", () => {
        it('Deve encontrar a messoregião Vale do Mucuri', () => {
            request(ApiUrl)
                .get("/regioes/3104/mesorregioes")
                .expect(200)
                .then((response) => {
                    expect(response.body).toEqual(expect.arrayContaining
                        ([expect.objectContaining({ "nome": "Vale do Mucuri" })]))
                })

        })
    })

})

